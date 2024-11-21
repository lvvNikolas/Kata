// src/app/components/Portfolio.js
import styles from '../page.module.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.portfolioHeader}>
        <h2>Our Projects</h2>
        <p className={styles.portfolioSubtitle}>2 years of expertise</p>
      </div>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}>
          <a href="#" className={styles.projectLink}>
            <span>Engineering iq test</span>
            <span>Mobile | Tools</span>
          </a>
        </li>
        <li className={styles.projectItem}>
          <a href="#" className={styles.projectLink}>
            <span>Math Game</span>
            <span>Mobile | Utilities</span>
          </a>
        </li>
        <li className={styles.projectItem}>
          <a href="#" className={styles.projectLink}>
            <span>10+ Android Utility Apps</span>
            <span>Mobile | Utilities</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
