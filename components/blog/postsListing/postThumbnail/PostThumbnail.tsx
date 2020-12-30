import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import ArrowRightIcon from '../../../../public/icons/arrow-right.svg';
import type { Heading } from '../../../../types/types';
import styles from './postThumbnail.module.scss';

type PostThumbnailProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
  tag?: Heading;
  primary?: boolean;
};

export const PostThumbnail = memo<PostThumbnailProps>(
  ({ path, heading, excerpt, tag: Tag = 'h3', primary = false }) => {
    return (
      <article className={cn(styles.wrapper, { [styles.primary]: primary })}>
        <Link href={path}>
          <a className={styles.link}>
            <Tag className={styles.heading}>{heading}</Tag>
            <p className={styles.text}>{excerpt}</p>
            <p className={styles.readMore}>
              Czytaj więcej <ArrowRightIcon className={styles.icon} />
            </p>
          </a>
        </Link>
      </article>
    );
  },
);

PostThumbnail.displayName = 'PostThumbnail';
