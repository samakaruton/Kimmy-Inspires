import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header>
      <nav>
        <div className="nav-container">
          <Link to="/" className="brand">Kimmy Inspires</Link>
          <div className="nav-links">
            {isHomePage ? (
              <>
                <a href="#about">About</a>
                <a href="#books">Books</a>
                <a href="#events">Events</a>
                <a href="#videos">Videos</a>
                <a href="#testimonials">Testimonials</a>
                <Link to="/contact">Contact</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 