# 🍛 Complete Source Code - Aunty's Kitchen (Frontend-Only)

This document contains the complete source code for the frontend-only Indian restaurant website.

## 📁 Project Structure

```
aunty-kitchen/
├── client/
│   ├── index.html                 # Main HTML file
│   └── src/
│       ├── main.tsx              # App entry point
│       ├── App.tsx               # Main app component
│       ├── index.css             # All styles and animations
│       ├── pages/
│       │   └── home.jsx          # Main page component
│       └── components/
│           ├── Loader.jsx        # Animated loader
│           ├── Header.jsx        # Navigation header
│           ├── HeroSection.jsx   # Hero section
│           ├── MenuSection.jsx   # Menu display
│           ├── AboutSection.jsx  # About section
│           ├── GallerySection.jsx # Image gallery
│           ├── ContactSection.jsx # Contact info
│           ├── ReservationForm.jsx # Booking form
│           └── Footer.jsx        # Footer
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── netlify.toml                 # Netlify deployment
├── vercel.json                  # Vercel deployment
└── README.md                    # Documentation
```

---

## 🚀 Quick Setup

```bash
# 1. Create project directory
mkdir aunty-kitchen && cd aunty-kitchen

# 2. Copy all files below into the directory

# 3. Install dependencies
npm install

# 4. Start development server
vite dev

# 5. Build for production
vite build
```

---

## 📄 Source Code Files

### 1. `client/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Aunty's Kitchen - माँ का प्यार, हर निवाले में</title>
    <meta name="description" content="Authentic Indian restaurant serving traditional recipes with mother's love since 1995. Experience the warmth of Indian hospitality at Aunty's Kitchen.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://images.unsplash.com">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2. `client/src/main.tsx`
```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### 3. `client/src/App.tsx`
```tsx
import Home from "./pages/home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### 4. `client/src/pages/home.jsx`
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