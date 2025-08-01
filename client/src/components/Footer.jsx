const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-restaurant-light py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <svg className="w-6 h-6 text-restaurant-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.41-6.41z"/>
          </svg>
          <h3 className="font-serif text-2xl font-bold">Aunty's Kitchen</h3>
        </div>
        <p className="text-restaurant-neutral mb-4">© 2024 Aunty's Kitchen. Made with माँ का प्यार (Mother's Love). All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-restaurant-neutral hover:text-restaurant-accent transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-restaurant-neutral hover:text-restaurant-accent transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-restaurant-neutral hover:text-restaurant-accent transition-colors duration-300">Career Opportunities</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
