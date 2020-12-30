import { memo } from 'react';
import { PostsListing } from './postsListing/PostsListing';
import { Heading } from 'components/shared/components/heading/Heading';
import type { Post } from '../../types/types';
import styles from './blog.module.scss';

type BlogProps = {
  readonly posts: Post[];
};

export const Blog = memo<BlogProps>(({ posts }) => (
  <main className={styles.wrapper} id="main">
    <PostsListing headingTag="h2" posts={posts} primary={true}>
      <Heading tag="h1" variant="primary" className={styles.heading}>
        Artykuły
      </Heading>
    </PostsListing>
  </main>
));

Blog.displayName = 'Blog';
