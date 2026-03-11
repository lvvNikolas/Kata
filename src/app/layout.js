import './globals.css';
import { GiUsaFlag } from 'react-icons/gi';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

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

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kata — Mobile Application Development" />
        <meta
          name="twitter:description"
          content="We build next-generation iOS and Android apps. 1M+ active users, 7+ years of expertise."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://katatech.dev" />
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
              <p>© 2025 Kata. All rights reserved.</p>
              <p className="footerAddress">
                <GiUsaFlag /> 40 Pacifica, Irvine, CA 92618
              </p>
            </div>
            <div className="footerRight">
              <Link href="/privacy-policy" className="footerLink">
                Privacy Policy
              </Link>
              <a href="#" className="footerLink">
                Terms of Use
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
