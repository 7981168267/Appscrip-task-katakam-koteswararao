import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">CONTACT US</h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </section>

      <section className="page-content">
        <div className="content-wrapper contact-wrapper">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 234 567890</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>customer.care@realtime.com</p>
              </div>
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Craftsmanship Street<br />Artisan City, AC 12345<br />United States</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

