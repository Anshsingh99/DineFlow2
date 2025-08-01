import { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-green-600 mb-2">🙏 धन्यवाद!</h3>
        <p className="text-gray-700">Your reservation request has been received. We'll call you shortly to confirm!</p>
        <p className="text-sm text-gray-600 mt-2">आपका आरक्षण प्राप्त हो गया है।</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time *
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select time</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guests *
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Any special dietary requirements or occasions?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-md font-semibold text-white transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:scale-105'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Booking Table...
          </span>
        ) : (
          'Reserve Table 🍽️'
        )}
      </button>
    </form>
  );
};

export default ReservationForm;