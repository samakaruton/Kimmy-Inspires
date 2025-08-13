import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const openModal = (index: number) => {
    setSelectedTestimonial(index);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section id="testimonials" className="section testimonials" data-aos="fade-up">
        <h3>Testimonials</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="testimonial-card" 
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="quote-svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <blockquote className="testimonial-text">
                  "{truncateText(testimonial)}"
                </blockquote>
                <button 
                  className="read-more-btn"
                  onClick={() => openModal(idx)}
                >
                  Read More
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="read-more-icon"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="avatar-icon">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="author-info">
                    <span className="author-name">Inspired Client</span>
                    <span className="author-title">Life Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedTestimonial !== null && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content" data-aos="zoom-in">
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="close-icon">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="modal-testimonial">
              <div className="modal-quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" className="quote-svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="modal-testimonial-text">
                "{testimonials[selectedTestimonial]}"
              </blockquote>
              <div className="modal-author">
                <div className="modal-author-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="avatar-icon">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="modal-author-info">
                  <span className="modal-author-name">Inspired Client</span>
                  <span className="modal-author-title">Life Transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
