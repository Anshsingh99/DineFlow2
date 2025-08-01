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
