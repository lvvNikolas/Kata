// src/app/components/TechnologyStack.js
import styles from '../page.module.css';

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
      <div className={styles.techStackItem}>
        <h3>Frontend</h3>
        <p>React, Next.js, TypeScript, Redux, Tailwind CSS</p>
      </div>
      <div className={styles.techStackItem}>
        <h3>Backend</h3>
        <p>Node.js, Express.js, NestJS, GraphQL, PostgreSQL</p>
      </div>
      <div className={styles.techStackItem}>
        <h3>Mobile</h3>
        <p>React Native, Flutter, Swift, Kotlin</p>
      </div>
      {/* <div className={styles.techStackItem}>
        <h3>Cloud & DevOps</h3>
        <p>AWS, Docker, Kubernetes, Firebase, CI/CD</p>
      </div> */}
    </div>
  </section>
  );
}
