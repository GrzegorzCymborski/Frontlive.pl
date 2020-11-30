import { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './projectThumbnail.module.scss';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type ProjectThumbnailProps = {
  index: number;
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

const ProjectThumbnail = memo<ProjectThumbnailProps>(
  ({ index, title, excerpt, path, image, variant, technologies }) => {
    return (
      <article className={styles.wrapper}>
        <span className={cn(styles.index, styles[variant])}>{index}</span>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/portfolio/${path}`}>
          <a className={styles.link}>Czytaj więcej</a>
        </Link>
        <div className={cn(styles.info, styles[variant])}>
          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li className={styles.technology}>{technology}</li>
            ))}
          </ul>
          <img src={image} className={styles.image} />
        </div>
      </article>
    );
  },
);

export default ProjectThumbnail;
