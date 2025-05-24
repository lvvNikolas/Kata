import styles from '../styles/Services.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <h2>Our Services</h2>
        <p className={styles.servicesSubtitle}>Empowering businesses with 2 years of expertise</p>
      </div>

      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>📱</div>
          <h3>Mobile App Development</h3>
          <p>Custom solutions for iOS and Android, ensuring performance and modern design.</p>
        </div>

        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>🎨</div>
          <h3>UX/UI Design</h3>
          <p>Intuitive, user-centered designs to engage and retain your audience.</p>
        </div>

        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>🛠</div>
          <h3>Support & Maintenance</h3>
          <p>Continuous updates and support to keep your apps secure and up-to-date.</p>
        </div>
      </div>
    </section>
  );
}