import Reveal from './Reveal';
import styles from '../styles/Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    description:
      'We dive deep into your idea, market, and goals. Research, competitive analysis, and requirements gathering to define the perfect foundation.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Design',
    description:
      'Wireframes, prototypes, and pixel-perfect UI/UX. We craft interfaces your users will love from their very first interaction.',
    icon: '✏️',
  },
  {
    num: '03',
    title: 'Development',
    description:
      'Clean, scalable, and thoroughly tested code built with the right technology stack for your platform and future growth.',
    icon: '⚙️',
  },
  {
    num: '04',
    title: 'Launch & Growth',
    description:
      'We handle deployment, monitoring, and iteration. Your product is shipped and continuously improved based on real user data.',
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>How We Work</span>
            <h2 className={styles.title}>
              Our <span className={styles.accent}>Process</span>
            </h2>
            <p className={styles.subtitle}>
              Four clear steps from idea to a shipped, loved product.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.13} style={{ display: 'flex' }}>
              <div className={styles.step}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span className={styles.stepIcon}>{step.icon}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
