import { memo } from 'react';
import styles from './technicalSkillsList.module.scss';
import { CheckMark } from '../../../../shared/components/checkMark/CheckMark';
import type { Variant } from '../../../../../types/types';

type TechnicalSkillsListProps = {
  readonly title: string;
  readonly variant: Variant;
  readonly skills: string[];
};

export const TechnicalSkillsList = memo<TechnicalSkillsListProps>(({ title, variant, skills }) => (
  <article className={styles.wrapper}>
    <h3 id={title} className={styles.heading}>
      {title}
    </h3>
    <ul aria-labelledby={title} className={styles.list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.item}>
          <CheckMark variant={variant} />
          {skill}
        </li>
      ))}
    </ul>
  </article>
));
