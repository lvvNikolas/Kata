'use client';

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

// Здесь храним не JSX, а компоненты
const techStackData = [
  {
    title: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
    icons: [SiReact, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss],
  },
  {
    title: 'Backend',
    techs: ['Node.js', 'NestJS', 'GraphQL', 'PostgreSQL'],
    icons: [SiNodedotjs, SiNestjs, SiGraphql, SiPostgresql],
  },
  {
    title: 'Mobile',
    techs: ['Flutter', 'Swift', 'Kotlin'],
    icons: [SiFlutter, SiSwift, SiKotlin],
  },
];

export default function TechnologyStack() {
  return (
    <section id="tech-stack" className={styles.techStackSection}>
      <div className={styles.techStackHeader}>
        <h2>Our Tech Stack</h2>
        <p className={styles.techStackSubtitle}>
          We use cutting-edge technologies to build fast, secure, and scalable applications.
        </p>
      </div>

      <div className={styles.techStackList}>
        {techStackData.map((stack, index) => (
          <div
            key={`stack-${stack.title}`}
            className={styles.techStackItem}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{stack.title}</h3>

            <div className={styles.iconRow}>
              {stack.icons.map((Icon, i) => (
                <span key={`${stack.title}-icon-${i}`} className={styles.icon}>
                  <Icon />
                </span>
              ))}
            </div>

            <p>{stack.techs.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}