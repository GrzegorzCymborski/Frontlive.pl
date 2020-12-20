import { memo } from 'react';
import { Heading } from 'components/shared/components/heading/Heading';
import { ProjectsListing } from './projectsListing/ProjectsListing';
import type { Project } from '../../types/types';
import styles from './portfolio.module.scss';

type PortfolioProps = {
  projects: Project[];
};

export const Portfolio = memo<PortfolioProps>(({ projects }) => (
  <main className={styles.wrapper} id="main">
    <Heading tag="h1" variant="primary" className={styles.heading}>
      Portfolio
    </Heading>
    <ProjectsListing projects={projects} />
  </main>
));
