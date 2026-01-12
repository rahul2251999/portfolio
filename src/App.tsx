import { NavBarDemo } from './components/NavBarDemo';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LetsWorkTogether } from './components/ui/lets-work-section';

function App() {
  return (
    <div className="min-h-screen bg-pure-black text-accent-white">
      <NavBarDemo />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <LetsWorkTogether />
    </div>
  );
}

export default App;
