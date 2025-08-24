import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ThankYou from './components/ThankYou';

// Landing Page Component
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
