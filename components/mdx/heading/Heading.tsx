import { memo, ReactNode } from 'react';
import cn from 'classnames';
import type { Heading as HeadingVariant } from '../../../types/types';
import styles from './heading.module.scss';

type HeadingProps = {
  children: ReactNode;
  tag: HeadingVariant;
  id: string;
};

export const Heading = memo(({ children, tag: Tag = 'h2', id }: HeadingProps) => (
  <Tag id={id} className={cn(styles.heading, styles[Tag])}>
    {children}
  </Tag>
));
