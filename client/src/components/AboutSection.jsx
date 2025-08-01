const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-restaurant-neutral">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-restaurant-dark mb-6">
              हमारी कहानी (Our Story)
            </h2>
            <p className="text-restaurant-text-secondary text-lg mb-6 font-medium">
              Started in 1995 by Aunty Kamala, our kitchen has been serving authentic Indian flavors with the love and care of a mother. What began as a small family recipe collection has grown into a beloved destination for those seeking genuine home-style Indian cooking.
            </p>
            <p className="text-restaurant-text-secondary text-lg mb-8 font-medium">
              Every dish is prepared with traditional techniques passed down through generations, using hand-ground spices and the secret ingredient - माँ का प्यार (mother's love).
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center cursor-namaste">
                <div className="font-serif text-3xl font-bold text-restaurant-accent">29+</div>
                <div className="text-restaurant-text-secondary font-semibold">Years of Love</div>
              </div>
              <div className="text-center cursor-spice">
                <div className="font-serif text-3xl font-bold text-restaurant-accent">100+</div>
                <div className="text-restaurant-text-secondary font-semibold">Traditional Recipes</div>
              </div>
              <div className="text-center cursor-namaste">
                <div className="font-serif text-3xl font-bold text-restaurant-accent">15k+</div>
                <div className="text-restaurant-text-secondary font-semibold">Happy Families</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Executive Chef Marco Rodriguez" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Bella Vista dining room" 
              className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Fresh ingredients" 
              className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Wine collection" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
