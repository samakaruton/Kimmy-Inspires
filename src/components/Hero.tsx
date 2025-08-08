import React from 'react';
import bookImage from '../assets/Book.jpeg';

const Hero: React.FC = () => (
  <section className="hero" data-aos="fade-up">
    <div className="hero-content">
      <div className="hero-text">
        <p className="hero-welcome">Welcome To My Website</p>
        <h1>EXPECT THE BEST</h1>
        <h2>BOOKS FROM ME!</h2>
        <p className="hero-description">
          Kimone's first book, "Escape the Rut" became an international success, 
          selling over 6,000 copies worldwide and inspiring countless young people to 
          pursue their dreams and break generational curses.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">LEARN MORE</button>
          <button className="btn btn-secondary">SHOP NOW</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="book-container">
          <div className="book-cover">
            <img src={bookImage} alt="From Grit to Glory Book Cover" className="book-image" />
          </div>
          <div className="book-shadow"></div>
        </div>
        <div className="bio-document">
          <div className="bio-content">
            <h4>Kimone 'Kimmy' Mcloud</h4>
            <p>Certified Christian Life Coach & Youth Empowerment Specialist</p>
            <p>Born in Shaolin, a rural community in Jamaica, Kimone has dedicated her life to inspiring the next generation through authentic leadership and spiritual guidance.</p>
            <p>As a generational curse breaker and agent of change, she uses her love for writing, reading, and public speaking to share heartfelt stories that engage and uplift audiences.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
