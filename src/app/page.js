// src/app/page.js
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio/>
      <Contact />
    </div>
  );
}
