import { Background } from './components/layout/Background';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Benefits } from './components/sections/Benefits';
import { HowItWorks } from './components/sections/HowItWorks';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#001215] text-white overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative">
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
