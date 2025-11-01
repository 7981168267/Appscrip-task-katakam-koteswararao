import React from 'react';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import './Pages.css';

const Shop = () => {
  // This component is kept for compatibility
  // The actual shop content is rendered via ShopContent in App.js
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">SHOP</h1>
        <p className="page-subtitle">Browse our collection</p>
      </section>
      
      <section className="page-content">
        <div className="content-wrapper">
          <p>Please navigate to the home page to view products.</p>
        </div>
      </section>
    </div>
  );
};

export default Shop;

