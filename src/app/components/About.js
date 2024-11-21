import styles from '../page.module.css';

export default function About() {
  return (
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
  );
}
