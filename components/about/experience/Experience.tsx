import { experience } from '../../../data/experience';
import { ExperienceCard } from './experienceCard/ExperienceCard';
import { Heading } from '../../shared/components/heading/Heading';
import styles from './experience.module.scss';

export const Experience = () => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Doświadczenie
    </Heading>
    {experience.map(({ title, description, duration, image }) => (
      <ExperienceCard
        key={title}
        title={title}
        description={description}
        duration={duration}
        image={image}
      />
    ))}
  </section>
);
