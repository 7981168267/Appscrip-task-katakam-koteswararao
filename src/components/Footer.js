import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-section newsletter-section">
          <h3 className="footer-title">BE THE FIRST TO KNOW</h3>
          <p className="footer-subtitle">Sign up for updates from realtime muse</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
              SUBSCRIBE
            </button>
          </form>
          {subscribed && (
            <p className="subscribe-success">Thank you for subscribing!</p>
          )}
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-title">CONTACT US</h3>
          <p className="footer-text">+1 234 567890</p>
          <p className="footer-text">customer.care@realtime.com</p>
        </div>

        {/* Currency Section */}
        <div className="footer-section">
          <h3 className="footer-title">CURRENCY</h3>
          <select className="currency-select" aria-label="Select currency">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="inr">INR</option>
          </select>
          <p className="footer-note">Taxes and shipping calculated at checkout</p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">realtime muse</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/about">About Us</Link>
            <a href="#stores">Stores</a>
            <a href="#careers">Careers</a>
            <a href="#boutiques">Boutiques</a>
            <Link to="/contact-us">Contact Us</Link>
            <a href="#compliance">EU Compliance Docs</a>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">QUICK LINKS</h3>
          <nav className="footer-links" aria-label="Quick links">
            <a href="#shipping">Order & Shipping</a>
            <a href="#seller">Join/Login as a Seller</a>
            <a href="#returns">Returns & Refunds</a>
            <a href="#faq">FAQs</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </nav>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-icons">
            <a 
              href="#instagram" 
              className="social-icon"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#linkedin" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="footer-section">
          <h3 className="footer-title">realtime muse ACCEPTS</h3>
          <div className="payment-methods">
            <span className="payment-logo">Visa</span>
            <span className="payment-logo">Mastercard</span>
            <span className="payment-logo">Amex</span>
            <span className="payment-logo">PayPal</span>
            <span className="payment-logo">Apple Pay</span>
            <span className="payment-logo">Google Pay</span>
            <span className="payment-logo">Shop Pay</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2023 realtime muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

