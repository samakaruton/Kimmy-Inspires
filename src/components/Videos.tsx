import React, { useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const Videos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videos: Video[] = [
    {
      id: 'q5HUuqxKLRs',
      title: 'Inspirational Video 1',
      description: 'Discover powerful insights and motivation to transform your mindset and achieve your goals.',
      thumbnail: `https://img.youtube.com/vi/q5HUuqxKLRs/maxresdefault.jpg`,
      url: 'https://youtu.be/q5HUuqxKLRs?si=csfJJ8aRBjPLo7xH'
    },
    {
      id: 'I-FJx2ka4QQ',
      title: 'Inspirational Video 2',
      description: 'Learn strategies for personal growth and overcoming challenges with faith and determination.',
      thumbnail: `https://img.youtube.com/vi/I-FJx2ka4QQ/maxresdefault.jpg`,
      url: 'https://youtu.be/I-FJx2ka4QQ?si=b0tjvIQ-v3Im1o0R'
    },
    {
      id: 'r49LooRQV8w',
      title: 'Inspirational Video 3',
      description: 'Explore the journey of transformation and how to break generational patterns for success.',
      thumbnail: `https://img.youtube.com/vi/r49LooRQV8w/maxresdefault.jpg`,
      url: 'https://youtu.be/r49LooRQV8w?si=TyuaWrAgyVvjBEvo'
    },
    {
      id: 'glKJuYip_-Q',
      title: 'Inspirational Video 4',
      description: 'Unlock your potential and embrace your God-given purpose with practical guidance and wisdom.',
      thumbnail: `https://img.youtube.com/vi/glKJuYip_-Q/maxresdefault.jpg`,
      url: 'https://youtu.be/glKJuYip_-Q?si=bdrIyPA9K2AQUsEA'
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const nextVideos = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= videos.length ? 0 : prevIndex + 3
    );
  };

  const prevVideos = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, videos.length - 3) : prevIndex - 3
    );
  };

  const visibleVideos = videos.slice(currentIndex, currentIndex + 3);

  return (
    <section id="videos" className="section videos" data-aos="fade-up">
      <h3>Inspirational Videos</h3>
      <div className="videos-container">
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={prevVideos}
          aria-label="Previous videos"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="videos-grid">
          {visibleVideos.map((video, idx) => (
            <div 
              key={video.id} 
              className="video-card" 
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="video-thumbnail">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="thumbnail-image" 
                  loading="lazy"
                />
                <div className="play-overlay">
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="video-content">
                <h4 className="video-title">{video.title}</h4>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span className="watch-now">Watch Now</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="external-link-icon">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={nextVideos}
          aria-label="Next videos"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
      
      <div className="videos-indicators">
        {Array.from({ length: Math.ceil(videos.length / 3) }, (_, i) => (
          <button
            key={i}
            className={`indicator ${Math.floor(currentIndex / 3) === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i * 3)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Videos; 