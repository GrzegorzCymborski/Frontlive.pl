import { memo, ReactNode } from 'react';
import cn from 'classnames';
import type { Heading as HeadingVariant } from '../../../types/types';
import styles from './heading.module.scss';

type HeadingProps = {
  readonly linkChildren: ReactNode;
  readonly linkId: string;
  readonly headingProps: string;
  readonly headingId: string;
  readonly headingTag: HeadingVariant;
  readonly href: string;
};

export const Heading = memo(
  ({ headingTag: Tag, linkChildren, linkId, headingProps, headingId, href }: HeadingProps) => (
    <Tag id={headingId} className={cn(styles.heading, styles[Tag])}>
      <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
        {linkChildren}
      </a>
      {headingProps}
    </Tag>
  ),
);

Heading.displayName = 'Heading';
