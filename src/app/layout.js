import './globals.css'; // Подключение глобальных стилей

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
          <p>© 2024 Kata. All rights reserved.</p>
          <p>Address: 730 Quail Meadow , Irvine CA, USA</p>
        </div>
        <div className="footerRight">
          <a href="#" className="footerLink">Privacy Policy</a>
          <a href="#" className="footerLink">Terms of Use</a>
          {/* <div className="footerSocials">
            <a href="#" className="socialIcon">
              <img src="/images/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="#" className="socialIcon">
              <img src="/images/twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="#" className="socialIcon">
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>

      </body>
    </html>
  );
}
