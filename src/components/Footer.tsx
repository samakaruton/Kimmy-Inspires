import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-brand">Kimmy Inspires</div>
      <p className="footer-tagline">Empowering lives through inspiration and transformation</p>
      <div className="footer-links">
        <Link to="/contact">Contact</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <p className="footer-copyright">&copy; 2024 Kimmy Inspires. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 