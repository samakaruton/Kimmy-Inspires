import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';
import Footer from './components/Footer';
import FloatingAssets from './components/FloatingAssets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 0,
      easing: 'ease-out-cubic',
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
        <Videos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;

