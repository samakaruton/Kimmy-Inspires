import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section testimonials" data-aos="fade-up">
      <h3>Testimonials</h3>
      <blockquote className="testimonial">"{testimonials[index]}"</blockquote>
      <div className="testimonial-nav">
        <button onClick={next} className="testimonial-btn">Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
