import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingAssets from './components/FloatingAssets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <div className="section-container">
          <FloatingAssets />
          <About />
        </div>
        <div className="section-container">
          <FloatingAssets />
          <Books />
        </div>
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;

