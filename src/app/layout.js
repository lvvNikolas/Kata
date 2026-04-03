import './globals.css';
import { GiUsaFlag } from 'react-icons/gi';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

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
        <title>Kata — Mobile Application Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kata — Expert Mobile Application Developers. We build next-generation iOS and Android apps that reach millions of users."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Kata — Mobile Application Development" />
        <meta
          property="og:description"
          content="We build next-generation iOS and Android apps. 1M+ active users, 7+ years of expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kata" />
        <meta property="og:url" content="https://kata-es4q.vercel.app" />
        <meta property="og:image" content="https://kata-es4q.vercel.app/images/Nikolas.PNG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kata — Mobile Application Development" />
        <meta
          name="twitter:description"
          content="We build next-generation iOS and Android apps. 1M+ active users, 7+ years of expertise."
        />

        {/* Google Site Verification — получи код в Google Search Console или Google Play Console */}
        {/* Раскомментируй и вставь свой код после регистрации: */}
        {/* <meta name="google-site-verification" content="ВСТАВЬ_КОД_СЮДА" /> */}

        {/* Canonical */}
        <link rel="canonical" href="https://kata-es4q.vercel.app" />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Loader />
        <CursorGlow />
        <ScrollProgress />
        <BackToTop />
        <Navbar />
        <main>{children}</main>
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
