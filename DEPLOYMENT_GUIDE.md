# Deployment Guide - Appscrip Task

## 🚀 Deployment to Netlify

### Prerequisites
- GitHub account
- Netlify account (free tier works)
- Code pushed to GitHub repository

### Step-by-Step Deployment

#### 1. Prepare Your Repository

**Important**: Rename your repository to match the requirement:
```
Appscrip-task-[your-name]
```

**Example**: `Appscrip-task-JohnDoe`

```bash
# If you haven't already, initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit - Appscrip task submission"
git branch -M main
git remote add origin https://github.com/yourusername/Appscrip-task-[your-name].git
git push -u origin main
```

#### 2. Build the Project Locally (Test)

```bash
npm install
npm run build
```

This creates a `build` folder. Test it locally:
```bash
# Install serve globally (optional)
npm install -g serve

# Serve the build folder
serve -s build
```

Visit `http://localhost:3000` to verify everything works.

#### 3. Deploy to Netlify

##### Method 1: Git Integration (Recommended - Auto Deploy)

1. **Go to Netlify**: [https://app.netlify.com](https://app.netlify.com)
2. **Sign up/Login**: Use GitHub to sign in (easiest)
3. **New Site from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your GitHub
   - Select your repository: `Appscrip-task-[your-name]`

4. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Base directory**: (leave empty)
   - **Branch**: `main` (or `master`)

5. **Advanced Settings** (Optional):
   - Go to Site settings → Build & deploy → Environment variables
   - Add if needed: `NODE_VERSION=18.x`

6. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at: `https://random-name-123.netlify.app`

7. **Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add custom domain if you have one

##### Method 2: Drag and Drop (Quick Test)

1. Build your project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the entire `build` folder to Netlify
4. Site is live instantly!

**Note**: This method doesn't auto-update. Use Method 1 for production.

#### 4. Update README with Live URL

After deployment, update your README.md:

```markdown
## 🔗 Links

- **GitHub Repository**: https://github.com/yourusername/Appscrip-task-[your-name]
- **Live Demo (Netlify)**: https://your-site-name.netlify.app
```

#### 5. Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Netlify Dashboard
2. Site settings → Build & deploy → Environment
3. Add variables:
   - `REACT_APP_API_URL` = `https://fakestoreapi.com` (if needed)

#### 6. Verify Deployment

✅ Check these:
- [ ] Site loads correctly
- [ ] Products display from API
- [ ] Filters work
- [ ] Search works
- [ ] Mobile responsive
- [ ] SEO meta tags visible (view page source)

---

## 📝 GitHub Repository Setup

### Repository Naming

**Required Format**: `Appscrip-task-[your-name]`

**Examples**:
- ✅ `Appscrip-task-JohnDoe`
- ✅ `Appscrip-task-SarahSmith`
- ❌ `appscrip-task` (missing name)
- ❌ `my-project` (wrong format)

### Repository Structure

Your repo should contain:
```
Appscrip-task-[your-name]/
├── public/
├── src/
├── package.json
├── netlify.toml
├── README.md
├── REQUIREMENTS_CHECKLIST.md
└── .gitignore
```

### Make Repository Public

1. Go to GitHub repository settings
2. Scroll to "Danger Zone"
3. Click "Change visibility" → "Make public"

---

## 🔍 Post-Deployment Checklist

### Functionality
- [ ] Products load from API
- [ ] Filters work correctly
- [ ] Search functionality works
- [ ] Sorting works
- [ ] Wishlist toggles
- [ ] Navigation works (all routes)

### Responsive Design
- [ ] Desktop view (>1024px)
- [ ] Tablet view (768-1024px)
- [ ] Mobile view (<768px)
- [ ] Mobile menu works

### SEO Verification
- [ ] View page source - meta tags visible
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check JSON-LD schema with [Schema Validator](https://validator.schema.org/)
- [ ] Run Lighthouse audit (Chrome DevTools)

### Performance
- [ ] Images lazy load
- [ ] Fast load time
- [ ] No console errors

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Error**: "Build command failed"
- **Solution**: Check build logs in Netlify dashboard
- Verify `package.json` has correct scripts
- Ensure Node version is compatible (18.x recommended)

**Error**: "Module not found"
- **Solution**: Run `npm install` locally to verify dependencies
- Check `package.json` has all required packages

### Site Works Locally but Not on Netlify

**Issue**: Routing doesn't work (404 on refresh)
- **Solution**: `netlify.toml` already includes redirect rules ✅

**Issue**: API calls failing
- **Solution**: Check CORS settings
- Verify API URL is correct
- Check browser console for errors

### Deployment Takes Too Long

- Netlify builds can take 2-5 minutes
- First deployment is slower
- Subsequent deployments are faster (caching)

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images** (if using custom images):
   ```bash
   # Use tools like ImageOptim or TinyPNG
   ```

2. **Check Bundle Size**:
   ```bash
   npm run build
   # Check build folder size
   ```

3. **Test Production Build**:
   ```bash
   serve -s build
   ```

### Netlify Settings

1. **Enable Asset Optimization**:
   - Site settings → Build & deploy → Post processing
   - Enable "Asset optimization"

2. **Enable Form Handling** (if using forms):
   - Already configured in Footer newsletter form

---

## 📞 Support

If you encounter issues:

1. Check Netlify build logs
2. Verify all files are committed to GitHub
3. Test build locally: `npm run build`
4. Check browser console for errors
5. Review this guide

---

**Your deployment is ready! 🎉**

Once deployed, share these links with evaluators:
- **GitHub Repo**: [Your repo URL]
- **Live Demo**: [Your Netlify URL]
- **Figma Design**: [Design link]

