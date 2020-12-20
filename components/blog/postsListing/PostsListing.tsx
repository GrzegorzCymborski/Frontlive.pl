import { memo, ReactNode } from 'react';
import cn from 'classnames';
import { PostThumbnail } from './postThumbnail/PostThumbnail';
import type { Heading, Post } from '../../../types/types';
import styles from './postsListing.module.scss';

type PostsListingProps = {
  readonly children: ReactNode;
  readonly posts: Post[];
  readonly headingTag?: Heading;
  readonly primary?: boolean;
};

export const PostsListing = memo(
  ({ children, posts, headingTag = 'h3', primary = false }: PostsListingProps) => {
    return (
      <section className={styles.wrapper}>
        {children}
        <div className={cn(styles.postsWrapper, { [styles.primary]: primary })}>
          {posts.map(({ slug, title, excerpt }) => (
            <PostThumbnail
              tag={headingTag}
              key={title}
              path={`/blog/${slug}`}
              heading={title}
              excerpt={excerpt}
              primary={primary}
            />
          ))}
        </div>
      </section>
    );
  },
);
