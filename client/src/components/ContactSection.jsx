import ReservationForm from './ReservationForm';

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-restaurant-dark text-restaurant-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            संपर्क और बुकिंग (Contact & Reservations)
          </h2>
          <p className="text-restaurant-neutral text-lg max-w-2xl mx-auto">
            We'd love to welcome you to Aunty's Kitchen. Come experience the warmth of Indian hospitality
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-restaurant-accent mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-restaurant-text-secondary">123 Spice Bazaar Lane<br/>Little India, Mumbai 400001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-restaurant-accent mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-restaurant-text-secondary">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-restaurant-accent mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-restaurant-text-secondary">namaste@auntyskitchen.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-restaurant-accent mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p className="text-restaurant-text-secondary">
                    Mon-Thu: 5:00 PM - 10:00 PM<br/>
                    Fri-Sat: 5:00 PM - 11:00 PM<br/>
                    Sun: 4:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-restaurant-accent hover:text-restaurant-light text-2xl transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-restaurant-accent hover:text-restaurant-light text-2xl transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.89 2.745.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-restaurant-accent hover:text-restaurant-light text-2xl transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-restaurant-accent hover:text-restaurant-light text-2xl transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.417 15.181c-.397 0-.74-.299-.74-.808 0-.909 0-8.045 0-8.045 0-.508.343-.808.74-.808s.741.3.741.808c0 0 0 7.136 0 8.045 0 .509-.344.808-.741.808"/>
                    <path d="M22.76 9.8c-.663-.995-1.764-1.577-2.927-1.577-1.362 0-2.558.8-2.558.8s-3.087-1.85-4.275-2.55c-.908-.537-1.624-.718-2.41-.718-.786 0-1.503.181-2.41.718C6.79 7.15 3.704 8.8 3.704 8.8s-1.196-.8-2.558-.8c-1.163 0-2.264.582-2.927 1.577C-2.444 11.36-2.444 14.64 1.219 16.2c.663.995 1.764 1.577 2.927 1.577 1.362 0 2.558-.8 2.558-.8s3.087 1.85 4.275 2.55c.908.537 1.624.718 2.41.718.786 0 1.503-.181 2.41-.718 1.188-.7 4.275-2.55 4.275-2.55s1.196.8 2.558.8c1.163 0 2.264-.582 2.927-1.577 3.663-1.56 3.663-4.84 0-6.4"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Reservation Form */}
          <div className="bg-restaurant-secondary p-8 rounded-xl">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-restaurant-light">Make a Reservation</h3>
            <div className="text-restaurant-light">
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
