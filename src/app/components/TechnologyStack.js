'use client';

import Reveal from './Reveal';
import styles from '../styles/TechStack.module.css';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiFlutter,
  SiKotlin,
  SiSwift,
} from 'react-icons/si';

const allTechs = [
  { name: 'React', Icon: SiReact, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#e2e8f0', category: 'Frontend' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6', category: 'Frontend' },
  { name: 'Redux', Icon: SiRedux, color: '#764abc', category: 'Frontend' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8', category: 'Frontend' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063', category: 'Backend' },
  { name: 'NestJS', Icon: SiNestjs, color: '#e0234e', category: 'Backend' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#e10098', category: 'Backend' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', category: 'Backend' },
  { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8', category: 'Mobile' },
  { name: 'Swift', Icon: SiSwift, color: '#f05138', category: 'Mobile' },
  { name: 'Kotlin', Icon: SiKotlin, color: '#7f52ff', category: 'Mobile' },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...allTechs, ...allTechs];

export default function TechnologyStack() {
  return (
    <section id="tech-stack" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>Technology</span>
            <h2 className={styles.title}>
              Our <span className={styles.accent}>Tech Stack</span>
            </h2>
            <p className={styles.subtitle}>
              We use cutting-edge technologies to build fast, secure, and scalable applications.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Full-width marquee */}
      <div className={styles.marqueeOuter}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={styles.marqueeTrack}>
          {marqueeItems.map(({ name, Icon, color, category }, i) => (
            <div
              key={`${name}-${i}`}
              className={styles.techItem}
              data-category={category}
            >
              <div
                className={styles.techCircle}
                style={{ '--tech-color': color }}
              >
                <Icon />
              </div>
              <span className={styles.techName}>{name}</span>
              <span className={styles.techCategory}>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
