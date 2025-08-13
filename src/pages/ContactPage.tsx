import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  eventType?: string;
  eventDate?: string;
  audienceSize?: string;
  budget?: string;
}

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'speaking'>('contact');
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    eventType: '',
    eventDate: '',
    audienceSize: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = e.currentTarget.querySelector('.submit-btn') as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Prepare email template parameters
    const templateParams = {
      to_email: 'carlbucknor2021@gmail.com',
      name: formData.name,           // matches {{name}} in template
      email: formData.email,         // matches {{email}} in template
      title: formData.subject || 'Contact Form Submission', // matches {{title}} in subject
      message: formData.message,     // matches {{message}} in template
      time: new Date().toLocaleString(), // matches {{time}} in template
      event_type: formData.eventType || 'N/A',
      event_date: formData.eventDate || 'N/A',
      audience_size: formData.audienceSize || 'N/A',
      budget: formData.budget || 'N/A',
      form_type: activeTab === 'speaking' ? 'Speaking Invitation' : 'General Contact'
    };

    // Send email using EmailJS
    emailjs.send(
      'service_l8l96bs', // Replace with your EmailJS service ID
      'template_rw54i5w', // Replace with your EmailJS template ID
      templateParams,
      'F-tOMdPwla5f-nzDy' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        eventType: '',
        eventDate: '',
        audienceSize: '',
        budget: ''
      });
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at carlbucknor2021@gmail.com');
    })
    .finally(() => {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section className="section contact-page" data-aos="fade-up">
          <h3>Get In Touch</h3>
          <p className="contact-subtitle">Ready to transform lives together? Let's connect!</p>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h4>Email</h4>
                <p>kimmy@kimmyinspires.com</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h4>Location</h4>
                <p>Jamaica & Worldwide</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>Availability</h4>
                <p>Available for speaking engagements worldwide</p>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                >
                  General Contact
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'speaking' ? 'active' : ''}`}
                  onClick={() => setActiveTab('speaking')}
                >
                  Speaking Invitation
                </button>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {activeTab === 'contact' ? (
                  <>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="form-textarea"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select Event Type</option>
                        <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        <option value="seminar">Seminar</option>
                        <option value="retreat">Retreat</option>
                        <option value="church-event">Church Event</option>
                        <option value="youth-program">Youth Program</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          placeholder="Event Date"
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <select
                          name="audienceSize"
                          value={formData.audienceSize}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="">Audience Size</option>
                          <option value="1-50">1-50 people</option>
                          <option value="51-100">51-100 people</option>
                          <option value="101-250">101-250 people</option>
                          <option value="251-500">251-500 people</option>
                          <option value="500+">500+ people</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Budget Range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000+">$10,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your event and what you're looking for..."
                        required
                        rows={5}
                        className="form-textarea"
                      />
                    </div>
                  </>
                )}
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="currentColor" className="send-icon">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="social-links">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 