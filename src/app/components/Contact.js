import { FaEnvelope, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h2>Contact Us</h2>
        <p>We’re always open to communication!</p>
        <div className={styles.contactInfo}>
          <a href="mailto:lvvkatatech@gmail.com" className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>lvvkatatech@gmail.com</span>
          </a>
          <a href="tel:+15623309823" className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+1 562 330 9823</span>
          </a>
          <a href="#" className={styles.contactItem}>
            <FaTelegramPlane className={styles.contactIcon} />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
