import './globals.css'; // Подключение глобальных стилей
import { GiUsaFlag } from 'react-icons/gi'; // Импорт иконки флага США

export default function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Kata - Mobile Application Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Kata - Expert Mobile Application Developers." />
      </head>
      <body>
        <main>{children}</main>
        <footer className="footer">
          <div className="footerContainer">
            <div className="footerLeft">
              <p>© 2025 Kata. All rights reserved.</p>
              <p>
                <GiUsaFlag className="footerIcon" /> Address: 40 Pacifica, Irvine, CA 92618
              </p>
            </div>
            <div className="footerRight">
              <a href="#" className="footerLink">Privacy Policy</a>
              <a href="#" className="footerLink">Terms of Use</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
