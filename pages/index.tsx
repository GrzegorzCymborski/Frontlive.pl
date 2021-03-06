import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header } from '../components/header/Header';
import { PostsListing } from '../components/blog/postsListing/PostsListing';
import { Layout } from '../components/layout/Layout';
import { CategoriesList } from '../components/categories/categoriesList/CategoriesList';
import { Workshop } from '../components/workshop/Workshop';
import { Navigation } from '../components/navigation/Navigation';
import { Heading } from 'components/shared/components/heading/Heading';
import { Footer } from 'components/footer/Footer';
import { getNewestPosts, getPopularPosts } from 'lib/posts';
import { categories } from '../data/categories';
import dayjs from 'dayjs';

export const getStaticProps: GetStaticProps = async () => {
  const newestPosts = getNewestPosts();
  const popularPosts = getPopularPosts();

  return {
    props: {
      newestPosts,
      popularPosts,
    },
    revalidate: 1,
  };
};

export default function Home({
  newestPosts,
  popularPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const newestCategories = categories.slice(0, 3);
  useEffect(() => {
    console.log(`
    #     #      #######                             ### 
    #     # #       #    #    # ###### #####  ###### ### 
    #     # #       #    #    # #      #    # #      ### 
    ####### #       #    ###### #####  #    # #####   #  
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #      ### 
    #     # #       #    #    # ###### #    # ###### ### 
    `);
    console.log('Ta strona została zaprojektowana i wykonana przez Olafa Sulicha 🎨 🖥️');
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <main id="main">
          <PostsListing posts={newestPosts}>
            <Heading tag="h2" variant="secondary">
              Najnowsze
            </Heading>
          </PostsListing>
          <CategoriesList label="Popularne kategorie" tag="section" categories={newestCategories} />
          <PostsListing posts={popularPosts}>
            <Heading tag="h2" variant="secondary">
              Najpopularniejsze
            </Heading>
          </PostsListing>
        </main>
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
}
