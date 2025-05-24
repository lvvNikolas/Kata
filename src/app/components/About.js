// import styles from '../page.module.css';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            <h2>About</h2>
            <p>
              We strive to push the boundaries of innovation, crafting solutions that inspire and empower.
              Our mission is to create a world where possibilities are limitless, and challenges are just
              opportunities in disguise. Together, we redefine excellence.
            </p>
          </div>
          <div className={styles.aboutAside}>
            <p>Mediocrity does not stand a chance with us</p>
          </div>
        </div>
      </section>

      {/* Новая секция "Our Values" */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2>Our Values</h2>
          <p className={styles.valuesSubtitle}>What drives us forward</p>
        </div>
        <div className={styles.valuesList}>
          <div className={styles.valueItem}>
            <h3>Quality</h3>
            <p>We deliver only the best solutions that exceed expectations.</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Innovation</h3>
            <p>We embrace new technologies and methodologies to stay ahead.</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Transparency</h3>
            <p>Honesty and openness are the foundation of our relationships.</p>
          </div>
        </div>
      </section>
    </>
  );
}
