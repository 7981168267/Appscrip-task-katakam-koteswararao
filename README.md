# Product Listing Page (PLP) - Appscrip Assignment

A fully responsive, SEO-optimized Product Listing Page built with React.js, matching the Figma design specifications.

## 📋 Project Overview

This project demonstrates a complete e-commerce Product Listing Page with:
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Advanced Filtering**: Category, price range, and custom filters
- **Search Functionality**: Real-time product search
- **API Integration**: Fetches products from Fake Store API
- **SEO Optimization**: Meta tags, JSON-LD schema markup, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### ⚠️ Server-Side Rendering (SSR) Note

This project uses **Create React App (CRA)** which implements **Client-Side Rendering (CSR)**. 

**For Production SSR**, consider migrating to:
- **Next.js** (Recommended) - Built-in SSR, SSG, and routing
- **Remix** - Full-stack React framework with SSR

**Current SEO Approach**: 
- Comprehensive meta tags in `public/index.html`
- Dynamic JSON-LD structured data
- Semantic HTML5 markup
- Pre-rendering options available via Netlify/static site generators

**Note**: While not true SSR, the application is fully SEO-optimized and performs well for search engine indexing.

## 🎨 Design Source

**Figma Design**: [View Design](https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1&mode=design&t=mEpvVYQ7GInQPxXk-0)

## 🔗 Links

- **GitHub Repository**: [Update with your GitHub repo URL]
  - Format: `https://github.com/yourusername/Appscrip-task-[your-name]`
- **Live Demo (Netlify)**: [Update after deployment]
  - Format: `https://your-site-name.netlify.app`
- **Figma Design**: [View Original Design](https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1&mode=design&t=mEpvVYQ7GInQPxXk-0)

**⚠️ Important**: 
- Rename your GitHub repository to: `Appscrip-task-[your-name]`
- Deploy to Netlify following the [Deployment Guide](./DEPLOYMENT_GUIDE.md)

## 🚀 Features

### Core Features
- ✅ Product listing with grid layout
- ✅ Advanced filtering (category, price, customizable, etc.)
- ✅ Multiple sorting options (Recommended, Newest, Price: Low to High, etc.)
- ✅ Search functionality
- ✅ Wishlist feature
- ✅ Responsive navigation (mobile hamburger menu)
- ✅ Footer with newsletter subscription
- ✅ Loading states and error handling

### Technical Features
- ✅ SEO optimized (meta tags, JSON-LD schema)
- ✅ Semantic HTML5
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Pure CSS (no Bootstrap/Tailwind)
- ✅ Minimal dependencies
- ✅ Optimized DOM structure
- ✅ Lazy loading images

## 📁 Project Structure

```
appscrip-task-demo/
├── public/
│   ├── index.html          # SEO meta tags and JSON-LD
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js      # Header with navigation and search
│   │   ├── Header.css
│   │   ├── Filters.js      # Filter sidebar component
│   │   ├── Filters.css
│   │   ├── ProductCard.js  # Individual product card
│   │   ├── ProductCard.css
│   │   ├── ProductGrid.js  # Product grid container
│   │   ├── ProductGrid.css
│   │   ├── Footer.js       # Footer component
│   │   └── Footer.css
│   ├── App.js              # Main app component with state management
│   ├── App.css             # Global styles
│   ├── index.js            # React entry point
│   └── index.css           # Base styles
├── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/appscrip-task-demo.git
   cd appscrip-task-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates optimized production build in `build/` folder

## 📦 Dependencies

### Production Dependencies
- **react** (^19.2.0) - UI library
- **react-dom** (^19.2.0) - React DOM renderer
- **axios** (^1.13.1) - HTTP client for API calls

### Development Dependencies
- **react-scripts** (5.0.1) - Create React App scripts
- Testing libraries (Jest, React Testing Library)

**Note**: Minimal dependencies used - no heavy UI frameworks. All styling is done with pure CSS.

## 🎯 Usage

### Running the Application

1. **Development Mode**
   ```bash
   npm start
   ```
   - Runs on `http://localhost:3000`
   - Hot reload enabled
   - Development tools available

2. **Production Build**
   ```bash
   npm run build
   ```
   - Creates optimized build in `build/` folder
   - Ready for deployment

3. **Test the Build**
   ```bash
   npm install -g serve
   serve -s build
   ```
   - Test production build locally

### Features Usage

#### Filtering Products
- Click on filter categories in the sidebar to expand options
- Select filters (category, price range, etc.)
- Products update automatically

#### Sorting Products
- Use the "Sort by" dropdown in the filter sidebar
- Options: Recommended, Newest, Most Popular, Price: Low to High, Price: High to Low

#### Search
- Type in the search bar in the header
- Products filter by title, description, or category

#### Wishlist
- Click the heart icon on any product card
- Wishlisted items show with a red filled heart

#### Mobile Navigation
- Click hamburger menu icon to open mobile menu
- Filters can be toggled on/off with the "SHOW FILTERS" button

## 🚢 Deployment

### Deploy to Netlify

#### Method 1: Drag and Drop
1. Build the project: `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `build` folder to Netlify dashboard
4. Your site will be live immediately

#### Method 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"
7. Your site will auto-deploy on every push

### Environment Variables
If needed, add environment variables in Netlify:
- Go to Site settings → Build & deploy → Environment
- Add variables like `REACT_APP_API_URL` if needed

## 🎨 Design Implementation

### Responsive Breakpoints
- **Desktop**: > 1024px (3-4 columns)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Mobile**: < 768px (1-2 columns)
- **Small Mobile**: < 480px (1 column)

### Color Scheme
- **Primary**: #000000 (Black)
- **Secondary**: #FFFFFF (White)
- **Text**: #333333 (Dark Gray)
- **Text Light**: #666666 (Gray)
- **Border**: #E0E0E0 (Light Gray)
- **Accent**: #FF0000 (Red for wishlist)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- **Headings**: Bold, uppercase, letter-spaced
- **Body**: Regular weight, readable line-height

## 🔍 SEO Features

### Implemented
- ✅ Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ Meta tags (title, description, keywords, Open Graph, Twitter Cards)
- ✅ JSON-LD structured data (Schema.org ItemList)
- ✅ Descriptive alt text for images
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Accessible form labels and ARIA attributes

### Testing SEO
1. **Google Rich Results Test**: [Test Tool](https://search.google.com/test/rich-results)
2. **Schema.org Validator**: [Validator](https://validator.schema.org/)
3. **Lighthouse**: Built into Chrome DevTools

## ♿ Accessibility

### Implemented Features
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- Alt text for images
- Proper form labels
- Screen reader friendly

### Testing Accessibility
- Use screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard-only navigation (Tab, Enter, Space)
- Run Lighthouse accessibility audit
- Test with browser extensions (axe DevTools)

## 🧪 Testing

### Manual Testing Checklist
- [ ] Products load correctly from API
- [ ] Filters work as expected
- [ ] Search functionality works
- [ ] Sorting works for all options
- [ ] Wishlist toggle works
- [ ] Responsive design works on all breakpoints
- [ ] Mobile menu opens/closes
- [ ] Footer newsletter subscription
- [ ] Loading states display
- [ ] Error states display

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🐛 Troubleshooting

### Common Issues

**Issue**: API not loading products
- **Solution**: Check internet connection and verify Fake Store API is accessible

**Issue**: Build fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Styles not applying
- **Solution**: Clear browser cache and restart development server

**Issue**: Filters not working
- **Solution**: Check browser console for JavaScript errors

## 📝 Code Quality

### Standards Followed
- ES6+ syntax
- Functional components with hooks
- Component-based architecture
- Minimal DOM nesting
- Clean, readable code
- Commented key sections
- Consistent naming conventions

### Best Practices
- Separation of concerns
- Reusable components
- Proper state management
- Error handling
- Loading states
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for Appscrip assignment purposes.

## 👤 Author

**Your Name**
- GitHub: [Your GitHub Username]
- Email: [Your Email]

## 🙏 Acknowledgments

- **Fake Store API**: [https://fakestoreapi.com/](https://fakestoreapi.com/) for providing free product data
- **Figma Design**: Appscrip team for the design specifications
- **React Team**: For the amazing React library

---

## 📞 Support

For support, email [your-email@example.com] or open an issue in the GitHub repository.

---

**Built with ❤️ using React.js**
