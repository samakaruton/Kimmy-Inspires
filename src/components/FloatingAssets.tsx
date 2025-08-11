import React from 'react';
import asset1 from '../assets/asset1.jpeg';
import asset2 from '../assets/asset2.jpeg';
import asset3 from '../assets/asset3.jpeg';
import asset4 from '../assets/asset4.jpeg';
import asset5 from '../assets/asset5.jpeg';
import asset6 from '../assets/asset6.jpeg';
import asset7 from '../assets/asset7.jpeg';

const FloatingAssets: React.FC = () => {
  const assets = [
    { src: asset1, alt: "Inspirational Image 1", delay: 0 },
    { src: asset2, alt: "Inspirational Image 2", delay: 0.5 },
    { src: asset3, alt: "Inspirational Image 3", delay: 1 },
    { src: asset4, alt: "Inspirational Image 4", delay: 1.5 },
    { src: asset5, alt: "Inspirational Image 5", delay: 2 },
    { src: asset6, alt: "Inspirational Image 6", delay: 2.5 },
    { src: asset7, alt: "Inspirational Image 7", delay: 3 }
  ];

  return (
    <div className="floating-assets">
      {assets.map((asset, index) => (
        <div 
          key={index} 
          className={`floating-bubble bubble-${index + 1}`}
          style={{ animationDelay: `${asset.delay}s` }}
        >
          <div className="bubble-content">
                                 <img 
                       src={asset.src} 
                       alt={asset.alt} 
                       className="bubble-image" 
                       loading="lazy"
                     />
            <div className="bubble-overlay"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingAssets; 