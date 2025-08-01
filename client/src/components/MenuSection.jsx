const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces, served with basmati rice",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      name: "Paneer Makhani",
      description: "Rich cottage cheese curry in creamy tomato sauce with aromatic spices",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      name: "Gulab Jamun",
      description: "Traditional Indian sweet dumplings soaked in rose-flavored sugar syrup",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1571167936524-c26ae4b8d4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-restaurant-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-restaurant-dark mb-4">
            हमारा खास मेन्यू (Our Special Menu)
          </h2>
          <p className="text-restaurant-text-secondary text-lg max-w-2xl mx-auto font-medium">
            Each dish is lovingly prepared by Aunty using traditional family recipes and the finest spices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform-smooth cursor-spice">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-restaurant-dark mb-2">
                  {item.name}
                </h3>
                <p className="text-restaurant-text-secondary mb-4 font-medium">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-2xl font-bold text-restaurant-accent">
                    {item.price}
                  </span>
                  <button className="bg-restaurant-primary hover:bg-restaurant-accent text-white px-4 py-2 rounded-lg transition-all-smooth transform hover:scale-105">
                    🛒 Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-restaurant-accent hover:bg-restaurant-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform-smooth transform hover:scale-105 cursor-spice shadow-lg hover:shadow-xl">
            📜 View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
