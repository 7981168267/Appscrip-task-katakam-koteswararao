import React from 'react';
import Footer from '../components/Footer';
import './Pages.css';

const Skills = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">SKILLS</h1>
        <p className="page-subtitle">Master the art of craftsmanship</p>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <h2>Learn From the Masters</h2>
          <p>
            Discover our comprehensive skill-building programs designed to help you master 
            traditional and modern crafts. Our expert instructors bring years of experience 
            to each workshop, ensuring you learn techniques that have been refined over generations.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Traditional Weaving</h3>
              <p>Learn the intricate art of traditional weaving techniques passed down through generations.</p>
            </div>
            <div className="skill-card">
              <h3>Leather Crafting</h3>
              <p>Master the skills needed to create beautiful, durable leather goods.</p>
            </div>
            <div className="skill-card">
              <h3>Textile Design</h3>
              <p>Explore creative textile design and pattern-making techniques.</p>
            </div>
            <div className="skill-card">
              <h3>Artisan Techniques</h3>
              <p>Discover specialized artisan techniques from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;

