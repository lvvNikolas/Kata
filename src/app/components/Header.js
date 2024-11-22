import Link from 'next/link';
import Image from 'next/image'; // Используем Image из next/image
import styles from '../page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Kata<span className={styles.logoHighlight}>.</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className={styles.headerContent}>
          <h1>
            <span className={styles.highlight}>Change</span> is<br />
            happening<br />
            <span className={styles.highlight}>now</span>
          </h1>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <p>Active users in the applications that we&apos;ve created</p>
              <h2>1M</h2>
            </div>
            <div className={styles.statItem}>
              <p>Apple Store and Google Play downloads every day</p>
              <h2>20K</h2>
            </div>
          </div>
          <button className={styles.ctaButton}>Work with us</button>
        </div>

        {/* Graphic */}
        <div className={styles.headerGraphic}>
          <Image
            src="/images/header.svg"
            alt="Header graphic"
            className={styles.image}
            width={600} // Укажите ширину изображения
            height={400} // Укажите высоту изображения
            priority // Ускоряет загрузку изображения
          />
        </div>
      </div>
    </header>
  );
}
