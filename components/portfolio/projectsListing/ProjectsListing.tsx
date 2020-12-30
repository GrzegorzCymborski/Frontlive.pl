import { memo } from 'react';
import { ProjectThumbnail } from './projectThumbnail/ProjectThumbnail';
import type { Project } from '../../../types/types';
import styles from './projectsListing.module.scss';

type ProjectsListingProps = {
  projects: Project[];
};

export const ProjectsListing = memo(({ projects }: ProjectsListingProps) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.projectsWrapper}>
        {projects.map(({ title, excerpt, slug, image, variant, technologies }, i) => (
          <ProjectThumbnail
            key={title}
            index={i + 1}
            title={title}
            excerpt={excerpt}
            path={slug}
            image={image}
            variant={variant}
            technologies={technologies}
          />
        ))}
      </ul>
    </div>
  );
});

ProjectsListing.displayName = 'ProjectsListing';
