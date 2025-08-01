const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Artisan appetizer"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Fine dining table setting"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Wine sommelier"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Outdoor terrace dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Chef's special dessert"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Private dining room"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-restaurant-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-restaurant-dark mb-4">
            फोटो गैलरी (Photo Gallery)
          </h2>
          <p className="text-restaurant-text-secondary text-lg max-w-2xl mx-auto font-medium">
            Take a visual journey through our authentic Indian kitchen and warm hospitality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <img 
              key={image.id}
              src={image.src} 
              alt={image.alt} 
              className="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform-smooth cursor-spice hover-glow"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
