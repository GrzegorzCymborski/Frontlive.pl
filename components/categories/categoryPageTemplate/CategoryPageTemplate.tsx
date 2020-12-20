import { memo } from 'react';
import { PostsListing } from '../../blog/postsListing/PostsListing';
import { Heading } from 'components/shared/components/heading/Heading';
import type { Post } from '../../../types/types';
import styles from './categoryPageTemplate.module.scss';

type CategoryPageTemplateProps = {
  readonly posts: Post[];
  readonly category: string;
};

export const CategoryPageTemplate = memo<CategoryPageTemplateProps>(({ posts, category }) => (
  <main className={styles.wrapper} id="main">
    <PostsListing posts={posts} primary={true}>
      <Heading tag="h1" variant="primary" className={styles.heading}>
        {category}
      </Heading>
    </PostsListing>
  </main>
));
