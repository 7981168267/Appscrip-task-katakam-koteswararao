import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ 
  products, 
  loading, 
  error,
  onWishlistToggle,
  wishlistedItems = []
}) => {
  if (loading) {
    return (
      <div className="product-grid-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-grid-container">
        <div className="error-state">
          <p>Error loading products: {error}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="product-grid-container">
        <div className="empty-state">
          <p>No products found. Try adjusting your filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onWishlistToggle={onWishlistToggle}
            isWishlisted={wishlistedItems.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

