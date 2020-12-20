import { memo } from 'react';
import { CategoryCard } from '../categoryCard/CategoryCard';
import { Category } from '../../../types/types';
import styles from './categoriesList.module.scss';

type CategoriesListProps = {
  readonly categories: Category[];
  readonly tag: 'section' | 'div';
  readonly label?: string;
};

export const CategoriesList = memo<CategoriesListProps>(
  ({ categories, tag: Tag = 'section', label }) => (
    <Tag className={styles.wrapper}>
      {label ? <h2 className="visually-hidden">{label}</h2> : null}
      {categories.map(({ title, path, image, variant }) => (
        <CategoryCard
          key={title}
          title={title}
          path={`/kategorie/${path}`}
          image={image}
          variant={variant}
        />
      ))}
    </Tag>
  ),
);
