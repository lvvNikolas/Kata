// ============================================================
// layout.js — Главный макет всего сайта (Root Layout)
// ============================================================
// Этот файл оборачивает ВСЕ страницы сайта.
// Здесь находятся:
//   - SEO мета-теги (title, description, og, twitter)
//   - Иконки и Web Manifest (для установки сайта на телефон)
//   - Structured Data (JSON-LD) — помогает Google понять сайт
//   - Глобальные компоненты (Navbar, Footer, Loader и т.д.)
// ============================================================

import './globals.css';
import { GiUsaFlag } from 'react-icons/gi';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

// ------------------------------------------------------------
// JSON-LD Structured Data (Schema.org)
// ------------------------------------------------------------
// Это специальный формат данных для поисковиков (Google и др.)
// Говорит Google: "Это организация, вот её адрес, контакты и соцсети"
// Помогает появляться в расширенных результатах поиска (rich snippets)
// ------------------------------------------------------------
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kata',
  url: 'https://kata-es4q.vercel.app',
  logo: 'https://kata-es4q.vercel.app/images/Nikolas.PNG',
  description: 'Expert Mobile Application Development Studio. We build next-generation iOS and Android apps.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '40 Pacifica',
    addressLocality: 'Irvine',
    addressRegion: 'CA',
    postalCode: '92618',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-562-330-9823',
    contactType: 'customer service',
    email: 'lvvkatatech@gmail.com',
  },
  // Ссылки на соцсети — Google использует их для верификации компании
  sameAs: [
    'https://github.com/katatech',
    'https://linkedin.com/company/katatech',
    'https://instagram.com/katatech',
  ],
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Основные SEO теги — название и описание страницы */}
        <title>Kata — Mobile Application Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kata — Expert Mobile Application Developers. We build next-generation iOS and Android apps that reach millions of users."
        />

        {/* ----------------------------------------------------
            Open Graph теги
            Используются когда ссылку на сайт отправляют в:
            Facebook, LinkedIn, Telegram, WhatsApp и т.д.
            Определяют как выглядит превью ссылки (картинка, заголовок)
        ---------------------------------------------------- */}
        <meta property="og:title" content="Kata — Mobile Application Development" />
        <meta
          property="og:description"
          content="We build next-generation iOS and Android apps. 1M+ active users, 7+ years of expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kata" />
        <meta property="og:url" content="https://kata-es4q.vercel.app" />
        {/* og:image — картинка которая показывается при шеринге в соцсетях */}
        <meta property="og:image" content="https://kata-es4q.vercel.app/images/Nikolas.PNG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ----------------------------------------------------
            Twitter / X теги
            Аналог Open Graph но специально для Twitter/X
            summary_large_image = большая картинка в превью
        ---------------------------------------------------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kata — Mobile Application Development" />
        <meta
          name="twitter:description"
          content="We build next-generation iOS and Android apps. 1M+ active users, 7+ years of expertise."
        />

        {/* ----------------------------------------------------
            Google Site Verification
            Нужен для подтверждения владения сайтом в:
            - Google Search Console (SEO)
            - Google Play Console (для публикации Android приложений)

            Как получить:
            1. Зайди на search.google.com/search-console
            2. Добавь сайт → выбери "HTML tag"
            3. Скопируй content="..." и вставь ниже
            4. Раскомментируй строку
        ---------------------------------------------------- */}
        {/* <meta name="google-site-verification" content="ВСТАВЬ_КОД_СЮДА" /> */}

        {/* ----------------------------------------------------
            Canonical URL
            Говорит Google: "Это основной адрес сайта"
            Предотвращает проблемы с дублированием контента
            ВАЖНО: когда купишь домен — обнови на реальный домен
        ---------------------------------------------------- */}
        <link rel="canonical" href="https://kata-es4q.vercel.app" />

        {/* ----------------------------------------------------
            Favicon и Web Manifest
            - favicon.svg — иконка во вкладке браузера
            - apple-touch-icon — иконка при добавлении на экран iPhone
            - manifest — позволяет установить сайт как приложение (PWA)
            - theme-color — цвет строки браузера на мобильных устройствах
        ---------------------------------------------------- */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />

        {/* ----------------------------------------------------
            JSON-LD Structured Data
            Вставляем данные об организации прямо в HTML
            Google читает это и использует для rich snippets
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Глобальные UI компоненты которые видны на всех страницах */}
        <Loader />          {/* Анимация загрузки при первом открытии сайта */}
        <CursorGlow />      {/* Эффект свечения вокруг курсора мыши */}
        <ScrollProgress />  {/* Полоска прогресса скролла вверху страницы */}
        <BackToTop />       {/* Кнопка "вернуться наверх" */}
        <Navbar />          {/* Навигационное меню */}

        {/* children — это контент каждой конкретной страницы */}
        <main>{children}</main>

        {/* ----------------------------------------------------
            Footer — подвал сайта
            Содержит: логотип, копирайт, адрес, соцсети, ссылки на
            Privacy Policy и Terms of Use (обязательны для App Store)
        ---------------------------------------------------- */}
        <footer className="footer">
          <div className="footerContainer">
            <div className="footerLeft">
              <span className="footerLogo">
                Kata<span className="footerDot">.</span>
              </span>
              <p>© 2026 Kata. All rights reserved.</p>
              <p className="footerAddress">
                <GiUsaFlag /> 40 Pacifica, Irvine, CA 92618
              </p>
            </div>
            <div className="footerRight">
              {/* Ссылки на соцсети */}
              <div className="footerSocials">
                <a
                  href="https://github.com/katatech"
                  className="footerSocialBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/company/katatech"
                  className="footerSocialBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://instagram.com/katatech"
                  className="footerSocialBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              {/* Юридические страницы — обязательны для Google Play и Apple App Store */}
              <Link href="/privacy-policy" className="footerLink">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="footerLink">
                Terms of Use
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
