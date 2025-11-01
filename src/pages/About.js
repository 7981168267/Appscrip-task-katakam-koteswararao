import React from 'react';
import Footer from '../components/Footer';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">ABOUT US</h1>
        <p className="page-subtitle">Crafting excellence, one product at a time</p>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <h2>Our Mission</h2>
          <p>
            At realtime muse, we are passionate about connecting you with exceptional handcrafted 
            products from skilled artisans around the world. Our mission is to preserve traditional 
            craftsmanship while making these unique pieces accessible to modern consumers.
          </p>

          <h2>Our Values</h2>
          <ul className="values-list">
            <li>
              <strong>Quality:</strong> We believe in products that stand the test of time, 
              crafted with attention to detail and premium materials.
            </li>
            <li>
              <strong>Tradition:</strong> We honor traditional techniques while encouraging 
              innovation and contemporary design.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to sustainable practices that 
              respect both the environment and the communities we work with.
            </li>
            <li>
              <strong>Artisan Support:</strong> We directly support artisans, ensuring fair 
              compensation and helping preserve their craft for future generations.
            </li>
          </ul>

          <h2>Our Story</h2>
          <p>
            Founded in 2023, realtime muse began as a journey to discover and share the world's 
            most beautiful handcrafted products. What started as a small collection has grown into 
            a curated marketplace where quality, tradition, and craftsmanship take center stage.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

