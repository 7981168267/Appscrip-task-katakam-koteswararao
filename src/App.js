import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Stories from './pages/Stories';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

// Add overlay for mobile filters
const FilterOverlay = ({ isVisible, onClose, isMobile }) => {
  if (!isVisible || !isMobile) return null;
  
  return (
    <div 
      className="filter-overlay" 
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    customizable: false,
    idealFor: 'all',
    occasion: 'all',
    work: 'all',
    fabric: 'all',
    segment: 'all',
    suitableFor: 'all',
    rawMaterials: 'all',
    pattern: 'all'
  });
  const [sortBy, setSortBy] = useState('recommended');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistedItems, setWishlistedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://fakestoreapi.com/products');
        
        // Create a pool of images to reuse
        const imagePool = response.data.map(p => p.image).filter(Boolean);
        
        // Add some metadata for demo purposes and reuse images
        const productsWithMeta = response.data.map((product, index) => {
          // Cycle through images - reuse images for multiple products
          // This allows same images to be used for different products
          const imageIndex = index % imagePool.length;
          const reusedImage = imagePool[imageIndex];
          
          return {
            ...product,
            image: reusedImage, // Reuse images from the pool
            isNew: index < 3, // First 3 products are "new"
            outOfStock: index === 4, // 5th product is out of stock
          };
        });
        
        setProducts(productsWithMeta);
        setFilteredProducts(productsWithMeta);
      } catch (err) {
        setError(err.message || 'Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and search products
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title?.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      );
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => {
        const price = product.price || 0;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(product =>
        product.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Segment filter (mapping to category)
    if (filters.segment && filters.segment !== 'all') {
      const segmentMap = {
        'bags': ['clothing'],
        'accessories': ['jewelery', 'electronics'],
        'clothing': ['men\'s clothing', 'women\'s clothing'],
        'home decor': ['electronics']
      };
      
      if (segmentMap[filters.segment]) {
        filtered = filtered.filter(product =>
          segmentMap[filters.segment].some(cat =>
            product.category?.toLowerCase().includes(cat)
          )
        );
      }
    }

    // Customizable filter (mock - marking some products as customizable)
    if (filters.customizable) {
      filtered = filtered.filter((_, index) => index % 3 === 0);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        // Mock popularity based on rating
        filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case 'recommended':
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, sortBy, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleWishlistToggle = (productId) => {
    setWishlistedItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Generate JSON-LD schema for SEO
  const jsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Product Listing Page",
      "description": "Browse our collection of products with filters and search functionality",
      "itemListElement": filteredProducts.slice(0, 20).map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.title,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD",
          "availability": product.outOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
        }
      }))
    };
  }, [filteredProducts]);

  // Shop page component with all props
  const ShopContent = () => (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="hero-section" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">DISCOVER OUR PRODUCTS</h1>
        <h2 className="hero-subtitle">Browse Our Exclusive Collection</h2>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur. Amet est posuere rhoncus scelerisque. 
          Odio integer scelerisque nibh amet mi an elementum dolor.
        </p>
      </section>

      <section className="products-section">
        <FilterOverlay 
          isVisible={showFilters} 
          isMobile={isMobile}
          onClose={handleToggleFilters}
        />
        <div className="products-container">
          <Filters
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            isVisible={showFilters}
            onToggleVisibility={handleToggleFilters}
            itemCount={filteredProducts.length}
            filters={filters}
            sortBy={sortBy}
          />

          <ProductGrid
            products={filteredProducts}
            loading={loading}
            error={error}
            onWishlistToggle={handleWishlistToggle}
            wishlistedItems={wishlistedItems}
          />
        </div>
      </section>
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header 
          onSearch={handleSearch}
          onCartClick={() => console.log('Cart clicked')}
          onFilterToggle={handleToggleFilters}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ShopContent />} />
            <Route path="/shop" element={<ShopContent />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>

        <Routes>
          <Route path="/*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
