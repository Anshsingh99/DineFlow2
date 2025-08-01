import { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    'पानी गर्म कर रहे हैं... (Heating the water...)',
    'मसाले तैयार कर रहे हैं... (Preparing spices...)',
    'आपकी थाली सजा रहे हैं... (Setting your plate...)',
    'खुशबू फैलाने जा रहे हैं... (Spreading the aroma...)',
    'नमस्ते! Aunty\'s Kitchen में आपका स्वागत है!'
  ];

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15 + 5;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * (loadingMessages.length - 1));
        setLoadingMessageIndex(messageIndex);
        
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 1000);
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(loadingInterval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-spice-gradient z-50 flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-4 max-w-md mx-auto">
        {/* Main Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-restaurant-light mb-2">
            Aunty's Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-restaurant-neutral" style={{ fontFamily: 'cursive' }}>
            माँ के हाथ का स्वाद (Mom's Hand-cooked Taste)
          </p>
        </div>
        
        {/* Animated Plate Loader */}
        <div className="relative mb-8 flex justify-center">
          <div className="plate-loader w-24 h-24 md:w-32 md:h-32">
            <div className="w-full h-full bg-restaurant-light rounded-full border-4 border-restaurant-accent shadow-2xl flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-restaurant-primary animate-float" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.41-6.41z"/>
              </svg>
            </div>
          </div>
          
          {/* Steam Animation */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="steam-animation w-2 h-4 bg-restaurant-light opacity-60 rounded-full"></div>
          </div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 ml-2">
            <div className="steam-animation w-1.5 h-3 bg-restaurant-light opacity-50 rounded-full"></div>
          </div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -ml-2">
            <div className="steam-animation w-1 h-2 bg-restaurant-light opacity-40 rounded-full"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="mb-6">
          <p className="text-restaurant-light text-lg md:text-xl mb-4 animate-pulse-gentle">
            आपकी स्वादिष्ट यात्रा तैयार कर रहे हैं...
          </p>
          
          {/* Loading Progress Bar */}
          <div className="w-64 md:w-80 mx-auto bg-restaurant-secondary rounded-full h-2 mb-4">
            <div 
              className="bg-restaurant-accent h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="loading-dot w-3 h-3 bg-restaurant-light rounded-full"></div>
            <div className="loading-dot w-3 h-3 bg-restaurant-light rounded-full"></div>
            <div className="loading-dot w-3 h-3 bg-restaurant-light rounded-full"></div>
          </div>
        </div>
        
        {/* Loading Status Text */}
        <p className="text-restaurant-neutral text-sm md:text-base">
          {loadingMessages[loadingMessageIndex]}
        </p>
      </div>
    </div>
  );
};

export default Loader;
