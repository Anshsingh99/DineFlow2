# 🏠 Complete Local Setup Guide - Aunty's Kitchen

This guide will help you set up the complete Aunty's Kitchen project locally with all dependencies and configurations.

## 📋 Prerequisites

### 1. Install Node.js (Required)
```bash
# Download from: https://nodejs.org/
# Install version 18.x or higher
# Verify installation:
node --version  # Should show v18.x.x or higher
npm --version   # Should show npm version
```

### 2. Install Git (Required)
```bash
# Download from: https://git-scm.com/
# Verify installation:
git --version
```

### 3. Code Editor (Recommended)
- **VS Code**: https://code.visualstudio.com/ (most popular)
- **WebStorm**: https://www.jetbrains.com/webstorm/ (advanced)
- **Sublime Text**: https://www.sublimetext.com/ (lightweight)

## 🚀 Quick Start (3 Steps)

### Step 1: Get the Project
```bash
# Create project directory
mkdir aunty-kitchen
cd aunty-kitchen

# Download project files from Replit:
# 1. In Replit: Click ⋯ (three dots) → "Download as zip"
# 2. Extract zip contents to this folder
```

### Step 2: Install All Dependencies
```bash
# Install everything at once
npm install

# This will install 76+ packages automatically
# Wait for installation to complete (2-3 minutes)
```

### Step 3: Start Development Server
```bash
# Start the server
npm run dev

# Open browser to: http://localhost:5000
# You should see the animated loader!
```

## 📦 Complete Dependency List

The project uses these exact versions (from package.json):

### Core Framework
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "wouter": "^3.3.5"
}
```

### Styling & UI Components
```json
{
  "tailwindcss": "^3.4.17",
  "@tailwindcss/vite": "^4.1.3",
  "@tailwindcss/typography": "^0.5.15",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

### Radix UI Components (Complete Set)
```json
{
  "@radix-ui/react-accordion": "^1.2.4",
  "@radix-ui/react-alert-dialog": "^1.1.7",
  "@radix-ui/react-aspect-ratio": "^1.1.3",
  "@radix-ui/react-avatar": "^1.1.4",
  "@radix-ui/react-checkbox": "^1.1.5",
  "@radix-ui/react-collapsible": "^1.1.4",
  "@radix-ui/react-context-menu": "^2.2.7",
  "@radix-ui/react-dialog": "^1.1.7",
  "@radix-ui/react-dropdown-menu": "^2.1.7",
  "@radix-ui/react-hover-card": "^1.1.7",
  "@radix-ui/react-label": "^2.1.3",
  "@radix-ui/react-menubar": "^1.1.7",
  "@radix-ui/react-navigation-menu": "^1.2.6",
  "@radix-ui/react-popover": "^1.1.7",
  "@radix-ui/react-progress": "^1.1.3",
  "@radix-ui/react-radio-group": "^1.2.4",
  "@radix-ui/react-scroll-area": "^1.2.4",
  "@radix-ui/react-select": "^2.1.7",
  "@radix-ui/react-separator": "^1.1.3",
  "@radix-ui/react-slider": "^1.2.4",
  "@radix-ui/react-slot": "^1.2.0",
  "@radix-ui/react-switch": "^1.1.4",
  "@radix-ui/react-tabs": "^1.1.4",
  "@radix-ui/react-toast": "^1.2.7",
  "@radix-ui/react-toggle": "^1.1.3",
  "@radix-ui/react-toggle-group": "^1.1.3",
  "@radix-ui/react-tooltip": "^1.2.0"
}
```

### State Management & Forms
```json
{
  "@tanstack/react-query": "^5.60.5",
  "react-hook-form": "^7.55.0",
  "@hookform/resolvers": "^3.10.0",
  "zod": "^3.24.2",
  "zod-validation-error": "^3.4.0"
}
```

### Backend & Database
```json
{
  "express": "^4.21.2",
  "express-session": "^1.18.1",
  "drizzle-orm": "^0.39.1",
  "drizzle-zod": "^0.7.0",
  "@neondatabase/serverless": "^0.10.4",
  "connect-pg-simple": "^10.0.0",
  "memorystore": "^1.6.7"
}
```

### Development Tools
```json
{
  "vite": "^5.4.19",
  "@vitejs/plugin-react": "^4.3.2",
  "tsx": "^4.19.1",
  "typescript": "5.6.3",
  "esbuild": "^0.25.0",
  "drizzle-kit": "^0.30.4"
}
```

### Additional Libraries
```json
{
  "lucide-react": "^0.453.0",
  "react-icons": "^5.4.0",
  "date-fns": "^3.6.0",
  "framer-motion": "^11.13.1",
  "next-themes": "^0.4.6",
  "input-otp": "^1.4.2",
  "embla-carousel-react": "^8.6.0",
  "react-day-picker": "^8.10.1",
  "react-resizable-panels": "^2.1.7",
  "recharts": "^2.15.2",
  "vaul": "^1.1.2",
  "cmdk": "^1.1.1",
  "tw-animate-css": "^1.2.5",
  "ws": "^8.18.0",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0"
}
```

## 🗂️ Project Structure

After setup, you'll have this structure:
```
aunty-kitchen/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Loader.jsx     # Animated loader
│   │   │   ├── Header.jsx     # Navigation
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MenuSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── GallerySection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── home.jsx       # Main page
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities
│   │   ├── types/             # TypeScript types
│   │   ├── App.tsx            # Main app component
│   │   └── index.css          # Global styles & animations
│   └── index.html             # HTML template
├── server/                    # Backend Express.js
│   ├── index.ts              # Main server file
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Database interface
│   └── vite.ts               # Vite integration
├── shared/                    # Shared code
│   └── schema.ts             # Database schemas
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
├── drizzle.config.ts         # Database configuration
└── components.json           # UI components config
```

## ⚙️ Configuration Files

### 1. Vite Configuration (`vite.config.ts`)
- Hot module replacement
- React plugin
- Path aliases (@/, @shared/, @assets/)
- Development server settings

### 2. Tailwind Configuration (`tailwind.config.ts`)
- Custom Indian restaurant colors
- Typography plugin
- Animation utilities
- Responsive breakpoints

### 3. TypeScript Configuration (`tsconfig.json`)
- Modern ES modules
- Strict type checking
- Path mapping
- React JSX support

## 🎨 Custom Features

### Indian Restaurant Theme
- **Colors**: Saffron, turmeric, mint green, maroon
- **Typography**: Serif headers, clean body text
- **Animations**: Rotating plate, steam effects, smooth transitions
- **Cursors**: Namaste hands (🙏), chili pepper (🌶️)

### Responsive Design
- Mobile-first approach
- Hamburger navigation
- Flexible grids
- Touch-friendly interactions

### Interactive Elements
- Smooth scrolling navigation
- Hover effects and transforms
- Form validation
- Loading states

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server (port 5000)
npm run check        # TypeScript type checking

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npm run db:push     # Push database schema changes
```

## 🌐 Development Server Details

- **Frontend**: Vite dev server with HMR
- **Backend**: Express.js with tsx watch mode
- **Port**: 5000 (both frontend and backend)
- **Hot Reload**: Changes appear instantly
- **Error Overlay**: Development error modal

## 🎯 Testing Your Setup

After running `npm run dev`, verify these features work:

1. **Loader Animation**: Rotating plate with steam
2. **Navigation**: Smooth scrolling to sections
3. **Responsive**: Resize browser window
4. **Animations**: Hover over menu items
5. **Forms**: Try the reservation form
6. **Cursors**: Move mouse over different elements

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
# Or use different port in server/index.ts
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check types
npm run check
# Fix any import/export issues
```

### Build Errors
```bash
# Clean build
rm -rf dist
npm run build
```

## 🚀 Ready for Development!

Your Aunty's Kitchen project is now set up locally with:
- All 76+ dependencies installed
- Development server running
- Hot reload enabled
- TypeScript support
- Full Indian restaurant theme
- Responsive design
- Custom animations

Start editing components in `client/src/components/` and see changes instantly!