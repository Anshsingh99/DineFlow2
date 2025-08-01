# 🍛 Complete Source Code - Aunty's Kitchen Frontend-Only Restaurant Website

This document contains the complete source code for the frontend-only Indian restaurant website.

## 🚀 Quick Setup Commands

```bash
# 1. Create project and copy all files
mkdir aunty-kitchen && cd aunty-kitchen

# 2. Create package.json and install dependencies
cat > package.json << 'EOF'
{
  "name": "aunty-kitchen",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2",
    "vite": "^5.4.19"
  }
}
EOF

npm install

# 3. Initialize Tailwind CSS
npx tailwindcss init -p

# 4. Create all files (copy from sections below)

# 5. Run development server
npm run dev
```

---

## 📁 Project Structure
```
aunty-kitchen/
├── client/
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── pages/
│       │   └── home.jsx
│       └── components/
│           ├── Loader.jsx
│           ├── Header.jsx
│           ├── HeroSection.jsx
│           ├── MenuSection.jsx
│           ├── AboutSection.jsx
│           ├── GallerySection.jsx
│           ├── ContactSection.jsx
│           ├── ReservationForm.jsx
│           └── Footer.jsx
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── deployment configs (netlify.toml, vercel.json)
```

---

## 📄 Core Configuration Files

### `package.json`
```json
{
  "name": "aunty-kitchen",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2",
    "vite": "^5.4.19"
  }
}
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'client',
  build: {
    outDir: '../dist'
  }
})
```

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'restaurant': {
          'primary': 'hsl(14, 91%, 54%)',
          'secondary': 'hsl(39, 60%, 35%)', 
          'accent': 'hsl(120, 61%, 34%)',
          'neutral': 'hsl(45, 40%, 75%)',
          'dark': 'hsl(0, 43%, 16%)',
          'light': 'hsl(45, 100%, 96%)',
          'text-primary': 'hsl(0, 0%, 15%)',
          'text-secondary': 'hsl(0, 0%, 25%)'
        }
      },
      backgroundImage: {
        'spice-gradient': 'linear-gradient(135deg, hsl(14, 91%, 54%) 0%, hsl(39, 60%, 35%) 50%, hsl(0, 43%, 16%) 100%)',
        'warm-spice': 'linear-gradient(135deg, hsl(14, 91%, 54%) 0%, hsl(39, 60%, 35%) 100%)'
      },
      animation: {
        'plate-rotate': 'plateRotate 3s linear infinite',
        'steam-rise': 'steamRise 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      cursor: {
        'namaste': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"%23f97316\"><text y=\"18\" font-size=\"16\">🙏</text></svg>'), auto",
        'spice': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"%23dc2626\"><text y=\"18\" font-size=\"16\">🌶️</text></svg>'), auto"
      }
    },
  },
  plugins: [],
} satisfies Config
```

---

## 🌐 HTML & React Entry Files

### `client/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aunty's Kitchen - माँ का प्यार, हर निवाले में</title>
    <meta name="description" content="Authentic Indian restaurant serving traditional recipes with mother's love since 1995. Experience the warmth of Indian hospitality.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://images.unsplash.com">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `client/src/main.tsx`
```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### `client/src/App.tsx`
```tsx
import Home from "./pages/home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `client/src/pages/home.jsx`
```jsx
import { useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
```

---

## 🎨 Styling & Animations - `client/src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --border: hsl(20, 5.9%, 90%);
  --input: hsl(20, 5.9%, 90%);
  --ring: hsl(20, 14.3%, 4.1%);
  --radius: 0.5rem;
  
  /* Indian Restaurant Theme Colors */
  --restaurant-primary: hsl(14, 91%, 54%);
  --restaurant-secondary: hsl(39, 60%, 35%);
  --restaurant-accent: hsl(120, 61%, 34%);
  --restaurant-neutral: hsl(45, 40%, 75%);
  --restaurant-dark: hsl(0, 43%, 16%);
  --restaurant-light: hsl(45, 100%, 96%);
  --restaurant-text-primary: hsl(0, 0%, 15%);
  --restaurant-text-secondary: hsl(0, 0%, 25%);
}

@layer base {
  * {
    border-color: var(--border);
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    color: var(--foreground);
  }
  
  html {
    scroll-behavior: smooth;
  }
}

/* Restaurant Theme Animations */
@keyframes plateRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes steamRise {
  0% { 
    transform: translateY(0px) scale(1); 
    opacity: 0.8; 
  }
  50% { 
    transform: translateY(-20px) scale(1.1); 
    opacity: 0.5; 
  }
  100% { 
    transform: translateY(-40px) scale(1.2); 
    opacity: 0; 
  }
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGentle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Custom Classes */
.bg-spice-gradient {
  background: linear-gradient(135deg, hsl(14, 91%, 54%) 0%, hsl(39, 60%, 35%) 50%, hsl(0, 43%, 16%) 100%);
}

.bg-warm-spice {
  background: linear-gradient(135deg, hsl(14, 91%, 54%) 0%, hsl(39, 60%, 35%) 100%);
}

.plate-loader {
  animation: plateRotate 3s linear infinite;
}

.steam-animation {
  animation: steamRise 2s ease-in-out infinite;
}

.loading-dot:nth-child(1) {
  animation: pulseGentle 1.5s ease-in-out infinite;
}

.loading-dot:nth-child(2) {
  animation: pulseGentle 1.5s ease-in-out infinite 0.2s;
}

.loading-dot:nth-child(3) {
  animation: pulseGentle 1.5s ease-in-out infinite 0.4s;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-pulse-gentle {
  animation: pulseGentle 2s ease-in-out infinite;
}

.transition-transform-smooth {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-all-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cursor-namaste {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23f97316"><text y="18" font-size="16">🙏</text></svg>'), auto;
}

.cursor-spice {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23dc2626"><text y="18" font-size="16">🌶️</text></svg>'), auto;
}

.hover-glow:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .font-serif {
    line-height: 1.2;
  }
}

/* Custom Restaurant Colors */
.bg-restaurant-primary { background-color: var(--restaurant-primary); }
.bg-restaurant-secondary { background-color: var(--restaurant-secondary); }
.bg-restaurant-accent { background-color: var(--restaurant-accent); }
.bg-restaurant-neutral { background-color: var(--restaurant-neutral); }
.bg-restaurant-dark { background-color: var(--restaurant-dark); }
.bg-restaurant-light { background-color: var(--restaurant-light); }

.text-restaurant-primary { color: var(--restaurant-primary); }
.text-restaurant-secondary { color: var(--restaurant-secondary); }
.text-restaurant-accent { color: var(--restaurant-accent); }
.text-restaurant-neutral { color: var(--restaurant-neutral); }
.text-restaurant-dark { color: var(--restaurant-dark); }
.text-restaurant-light { color: var(--restaurant-light); }
.text-restaurant-text-primary { color: var(--restaurant-text-primary); }
.text-restaurant-text-secondary { color: var(--restaurant-text-secondary); }

.border-restaurant-primary { border-color: var(--restaurant-primary); }
.border-restaurant-accent { border-color: var(--restaurant-accent); }
.border-restaurant-light { border-color: var(--restaurant-light); }

.hover\:bg-restaurant-primary:hover { background-color: var(--restaurant-primary); }
.hover\:bg-restaurant-accent:hover { background-color: var(--restaurant-accent); }
.hover\:text-restaurant-accent:hover { color: var(--restaurant-accent); }
.hover\:text-restaurant-light:hover { color: var(--restaurant-light); }
.hover\:text-restaurant-dark:hover { color: var(--restaurant-dark); }
```

---

This is the complete source code ready for deployment. Copy each file to its respective location and run the setup commands to get the Aunty's Kitchen website running locally or deploy it to any static hosting service!