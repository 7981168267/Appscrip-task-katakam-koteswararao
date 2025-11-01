import React from 'react';
import Footer from '../components/Footer';
import './Pages.css';

const Stories = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">STORIES</h1>
        <p className="page-subtitle">Tales from the artisans</p>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <h2>Our Stories</h2>
          <p>
            Every product tells a story. Behind each handcrafted item is an artisan who has 
            dedicated their life to perfecting their craft. Explore the journeys, traditions, 
            and inspirations that shape our unique collection.
          </p>

          <div className="stories-grid">
            <article className="story-card">
              <h3>The Weaver's Journey</h3>
              <p>Discover how traditional weaving techniques have been preserved and passed down through generations.</p>
            </article>
            <article className="story-card">
              <h3>Leather Artisans</h3>
              <p>Meet the skilled craftspeople who create our premium leather goods using time-honored methods.</p>
            </article>
            <article className="story-card">
              <h3>Cultural Heritage</h3>
              <p>Learn about the rich cultural heritage embedded in every handcrafted piece.</p>
            </article>
            <article className="story-card">
              <h3>Sustainable Practices</h3>
              <p>Explore how our artisans combine traditional techniques with sustainable practices.</p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;

