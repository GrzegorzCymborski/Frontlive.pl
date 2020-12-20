import { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import type { Category } from '../../../types/types';
import styles from './categoryCard.module.scss';

export const CategoryCard = memo<Category>(({ title, path, variant, image }) => {
  return (
    <article className={cn(styles.wrapper, styles[variant])}>
      <Link href={path}>
        <a className={styles.link}>
          <h2 className={styles.heading}>{title}</h2>
          <picture className={styles.icon}>
            <source
              className={styles.image}
              srcSet={require(`../../../public${image}?webp`)}
              type="image/webp"
            />
            <img src={image} alt="" width="206" height="206" className={styles.image} />
          </picture>
        </a>
      </Link>
    </article>
  );
});
