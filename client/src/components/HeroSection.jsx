const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080)'
        }}
      >
        <div className="absolute inset-0 bg-warm-spice bg-opacity-75"></div>
      </div>
      
      <div className="relative text-center text-restaurant-light px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cursor-namaste">
          माँ का प्यार, हर निवाले में
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-restaurant-secondary">
          Mother's Love in Every Bite
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
          Experience authentic Indian flavors prepared with traditional recipes passed down through generations. Every dish tells a story of love, spice, and tradition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-restaurant-accent hover:bg-restaurant-primary px-8 py-4 rounded-full text-lg font-semibold transition-transform-smooth transform hover:scale-105 cursor-spice shadow-lg hover:shadow-xl"
          >
            🍛 View Our Menu
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-restaurant-light hover:bg-restaurant-light hover:text-restaurant-dark px-8 py-4 rounded-full text-lg font-semibold transition-transform-smooth transform hover:scale-105 cursor-namaste shadow-lg hover:shadow-xl"
          >
            🙏 Book Your Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
