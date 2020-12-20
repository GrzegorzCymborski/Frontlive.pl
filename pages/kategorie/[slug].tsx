import { NextSeo } from 'next-seo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import slugify from 'slugify';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { getPostsByCategory, getAllPosts } from 'lib/posts';
import { CategoryPageTemplate } from '../../components/categories/categoryPageTemplate/CategoryPageTemplate';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsByCategory(params!.slug as string);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ category }) => ({
    params: { slug: slugify(category, { lower: true }) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Kategoria({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    query: { slug },
  } = useRouter();
  const category = posts[0].category;
  const title = `Frontlive - ${category}`;
  const description = `Artykuły znalezione w kategorii ${title}`;
  const url = `https://frontlive.pl/kategorie/${slug}`;
  const categoryImage = `https://frontlive.pl/images/categories/category-${slug}.png`;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: categoryImage,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <Layout>
        <Navigation />
        <CategoryPageTemplate posts={posts} category={category} />
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
}
