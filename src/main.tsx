// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Make sure Tailwind directives are in here
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 1000, once: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

