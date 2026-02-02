import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <About />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
