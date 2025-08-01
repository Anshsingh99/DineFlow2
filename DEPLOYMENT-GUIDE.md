# 🚀 Deployment Guide - Aunty's Kitchen

Complete guide to deploy your Aunty's Kitchen restaurant website on Netlify and Vercel.

## 📋 Pre-Deployment Checklist

### 1. Prepare Your Code
```bash
# Make sure everything works locally
npm install
vite dev  # Test at http://localhost:5000
vite build  # Test production build
```

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Ready for deployment"
git branch -M main
git remote add origin https://github.com/yourusername/aunty-kitchen.git
git push -u origin main
```

### 3. Environment Variables (if needed)
Create production environment variables for:
- Database connections
- API keys
- Session secrets

---

## 🟢 NETLIFY DEPLOYMENT

Netlify is perfect for the frontend, but requires special setup for the full-stack app.

### Option A: Frontend Only (Recommended for Netlify)

**Step 1: Create Static Build**
```bash
# Build frontend-only version
vite build
```

**Step 2: Netlify Configuration**
Create `netlify.toml` in project root:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 5000
```

**Step 3: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `vite build`
   - **Publish directory**: `dist`
   - **Node version**: 18
5. Click "Deploy site"

**Step 4: Custom Domain (Optional)**
- In Netlify dashboard → Domain settings
- Add your custom domain
- Netlify provides free SSL certificates

### Option B: Full-Stack with Netlify Functions

**Step 1: Create Netlify Functions**
Create `netlify/functions/` directory:
```bash
mkdir -p netlify/functions
```

**Step 2: Convert Express Routes**
Create `netlify/functions/api.js`:
```javascript
const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Import your existing routes
app.use('/.netlify/functions/api', require('../../server/routes'));

module.exports.handler = serverless(app);
```

**Step 3: Update netlify.toml**
```toml
[build]
  publish = "dist"
  command = "npm run build"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔵 VERCEL DEPLOYMENT

Vercel is excellent for full-stack applications with automatic API routes.

### Step 1: Install Vercel CLI (Optional)
```bash
npm i -g vercel
vercel login
```

### Step 2: Create Vercel Configuration
Create `vercel.json` in project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ],
  "outputDirectory": "dist",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Step 3: Update Build Scripts
Add to `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "vercel-build": "npm run build"
  }
}
```

### Step 4: Deploy to Vercel

**Method A: GitHub Integration (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"

**Method B: Vercel CLI**
```bash
# In your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name: aunty-kitchen
# - In which directory is your code located? ./
```

### Step 5: Environment Variables
In Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add any required environment variables
3. Redeploy if needed

---

## 🎯 DEPLOYMENT COMPARISON

| Feature | Netlify | Vercel |
|---------|---------|---------|
| **Best for** | Static sites, JAMstack | Full-stack apps |
| **Backend Support** | Functions only | Native Node.js |
| **Database** | External required | Built-in support |
| **Custom Domains** | Free SSL | Free SSL |
| **Build Time** | Fast | Very fast |
| **Pricing** | Free tier generous | Free tier good |

---

## 🛠️ PRODUCTION OPTIMIZATIONS

### 1. Build Optimizations
Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select']
        }
      }
    }
  }
});
```

### 2. Performance Optimizations
```javascript
// Add to index.html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://images.unsplash.com">

// Add lazy loading to images
<img loading="lazy" src="..." alt="..." />
```

### 3. SEO Optimizations
```html
<!-- Add to index.html -->
<meta name="description" content="Aunty's Kitchen - Authentic Indian Restaurant serving traditional recipes with mother's love since 1995">
<meta property="og:title" content="Aunty's Kitchen - माँ का प्यार, हर निवाले में">
<meta property="og:description" content="Experience authentic Indian flavors prepared with love and traditional recipes">
<meta property="og:image" content="/og-image.jpg">
```

---

## 🔍 POST-DEPLOYMENT CHECKLIST

### Test Your Deployed Site
- [ ] Loader animation works
- [ ] Navigation scrolling functions
- [ ] Menu items display correctly
- [ ] Reservation form submits
- [ ] Mobile responsiveness
- [ ] All images load
- [ ] Custom cursors work
- [ ] Hindi text displays properly

### Performance Checks
- [ ] Lighthouse score > 90
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] CSS/JS minified

### SEO Checks
- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## 🚨 TROUBLESHOOTING

### Common Issues

**Build Fails**
```bash
# Check for TypeScript errors
npm run check

# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

**Images Not Loading**
- Ensure all image URLs are absolute
- Check CORS settings for external images
- Use CDN for better performance

**API Routes Not Working**
- Verify serverless function configuration
- Check environment variables
- Test API endpoints individually

**Slow Loading**
- Enable gzip compression
- Optimize images (WebP format)
- Use lazy loading
- Minimize bundle size

---

## 🎉 DEPLOYMENT SUCCESS

Your Aunty's Kitchen website is now live! 

**Netlify URL**: `https://your-site-name.netlify.app`
**Vercel URL**: `https://your-project.vercel.app`

### Next Steps:
1. Set up custom domain
2. Configure SSL certificate
3. Set up monitoring and analytics
4. Plan content updates
5. Monitor performance metrics

The authentic Indian restaurant experience is now available to the world!