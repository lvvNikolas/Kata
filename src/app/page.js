import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import TechnologyStack from './components/TechnologyStack';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <TechnologyStack />
      <OurTeam />
      <Contact />
    </div>
  );
}
