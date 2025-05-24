// src/app/components/Portfolio.js
import Link from 'next/link';
import { FaAndroid, FaApple } from 'react-icons/fa'; // Импортируем иконки
// import styles from '../page.module.css';
import styles from '../styles/Portfolio.module.css'; // Импортируем стили для портфолио

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.portfolioHeader}>
        <h2>Our Projects</h2>
        <p className={styles.portfolioSubtitle}>7 years of expertise</p>
      </div>
      <ul className={styles.projectList}>
        {[
          { name: 'Lungs test exercise' },
          { name: 'Engineering IQ Test' },
          { name: 'Math Game' },
          {name: 'Six Pack in 30 Days'},
          {name:"Push Ups - Fitness Trainer"},
          {name:"Legs workout - 4 Week Program"},
          { name: '10+ Android Utility Apps' },
        ].map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <a href="#" className={styles.projectLink}>
              <span>{project.name}</span>
              <span className={styles.platformIcons}>
                <FaAndroid className={styles.icon} />
                <FaApple className={styles.icon} />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.privacyPolicy}>
        <Link href="/privacy-policy" className={styles.privacyLink}>
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}
