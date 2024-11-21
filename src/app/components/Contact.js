// src/app/components/ContactSection.js
import styles from '../page.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h2>Contact Us</h2>
        <p>We’re always open to communication!</p>
        <div className={styles.contactInfo}>
          <a href="mailto:contact@kata.com" className={styles.contactItem}>
            <span>Email:</span> lvvkatatech@gmail.com
          </a>
          <a href="tel:+15623309823" className={styles.contactItem}>
            <span>Phone:</span> +1 562 330 9823
          </a>
        </div>
      </div>
    </section>
  );
}
