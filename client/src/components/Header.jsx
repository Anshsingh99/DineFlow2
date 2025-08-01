import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-restaurant-dark text-restaurant-light shadow-lg fixed w-full top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-restaurant-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.41-6.41z"/>
            </svg>
            <h1 className="font-serif text-2xl font-bold">Aunty's Kitchen</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="hover:text-restaurant-accent transition-colors duration-300">Home</button>
            <button onClick={() => handleNavClick('menu')} className="hover:text-restaurant-accent transition-colors duration-300">Menu</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-restaurant-accent transition-colors duration-300">About</button>
            <button onClick={() => handleNavClick('gallery')} className="hover:text-restaurant-accent transition-colors duration-300">Gallery</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-restaurant-accent transition-colors duration-300">Contact</button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-restaurant-accent hover:bg-restaurant-primary px-6 py-2 rounded-full transition-all-smooth transform hover:scale-105 cursor-namaste"
            >
              Reserve Table
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('home')} className="hover:text-restaurant-accent transition-colors duration-300 text-left">Home</button>
              <button onClick={() => handleNavClick('menu')} className="hover:text-restaurant-accent transition-colors duration-300 text-left">Menu</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-restaurant-accent transition-colors duration-300 text-left">About</button>
              <button onClick={() => handleNavClick('gallery')} className="hover:text-restaurant-accent transition-colors duration-300 text-left">Gallery</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-restaurant-accent transition-colors duration-300 text-left">Contact</button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-restaurant-accent hover:bg-restaurant-primary px-6 py-2 rounded-full transition-all-smooth transform hover:scale-105 cursor-namaste self-start"
              >
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
