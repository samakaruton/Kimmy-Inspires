import React from 'react';

const Header: React.FC = () => (
  <header>
    <nav>
      <div className="nav-container">
        <div className="brand">Kimmy Inspires</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#books">Books</a>
          <a href="#events">Events</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header; 