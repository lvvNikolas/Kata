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

const techStackData = [
  {
    title: 'Frontend',
    description: 'Modern, reactive interfaces',
    techs: [
      { name: 'React', Icon: SiReact, color: '#61dafb' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#e2e8f0' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'Redux', Icon: SiRedux, color: '#764abc' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    title: 'Backend',
    description: 'Scalable, secure APIs',
    techs: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063' },
      { name: 'NestJS', Icon: SiNestjs, color: '#e0234e' },
      { name: 'GraphQL', Icon: SiGraphql, color: '#e10098' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform excellence',
    techs: [
      { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8' },
      { name: 'Swift', Icon: SiSwift, color: '#f05138' },
      { name: 'Kotlin', Icon: SiKotlin, color: '#7f52ff' },
    ],
  },
];

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

        <div className={styles.grid}>
          {techStackData.map((stack, i) => (
            <Reveal key={stack.title} delay={i * 0.15} style={{ display: 'flex' }}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{stack.title}</h3>
                  <p className={styles.cardDesc}>{stack.description}</p>
                </div>

                <div className={styles.icons}>
                  {stack.techs.map(({ name, Icon, color }) => (
                    <div key={name} className={styles.iconItem}>
                      <div
                        className={styles.iconCircle}
                        style={{ '--tech-color': color }}
                      >
                        <Icon />
                      </div>
                      <span className={styles.iconName}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
