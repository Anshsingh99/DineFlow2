import React from "react";
import "./MagneticButton.css";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080)'
        }}
      >
        <div className="absolute inset-0 bg-warm-spice bg-opacity-75"></div>
      </div>

      {/* Content */}
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* 🌟 Mystery Button */}
          <div className="mystery-wrapper group relative inline-block">
  <button
    className="magnetic-btn relative z-10 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-transform overflow-hidden"
    onMouseMove={(e) => handleMagnet(e)}
    onMouseLeave={() => resetMagnet()}
    onClick={() =>
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    <span className="relative z-20">🍛 View Our Menu</span>
    <div className="glow absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400 opacity-0 group-hover:opacity-30 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 pointer-events-none"></div>
  </button>
</div>

         <div className="mystery-wrapper group relative inline-block">
  <button
    className="magnetic-btn relative z-10 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-transform overflow-hidden"
    onMouseMove={(e) => handleMagnet(e)}
    onMouseLeave={() => resetMagnet()}
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    <span className="relative z-20">🙏 Book Your Table</span>
    <div className="glow absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400 opacity-0 group-hover:opacity-30 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 pointer-events-none"></div>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

function handleMagnet(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) rotateX(${y * -0.02}deg) rotateY(${x * 0.02}deg)`;
}

function resetMagnet() {
  const btn = document.querySelector(".magnetic-btn");
  if (btn) {
    btn.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
  }
}

export default HeroSection;
