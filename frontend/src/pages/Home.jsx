import React from 'react';
import { Link } from 'react-router-dom';
import { GiChefToque, GiForkKnifeSpoon, GiMountainRoad } from 'react-icons/gi';
import { FaLeaf, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { MdRestaurantMenu, MdRoomService, MdLocalParking } from 'react-icons/md';

const HomePage = () => {
 
  const featuredItems = [
    { name: 'Meteri Special Thali', price: '₹450', desc: 'Traditional Nepali set with 8 varieties', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c1?w=600' },
    { name: 'Chicken Chowmein', price: '₹280', desc: 'Wok‑tossed noodles with fresh vegetables', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600' },
    { name: 'Momo Platter', price: '₹220', desc: 'Steamed dumplings with spicy sesame dip', img: 'https://images.unsplash.com/photo-1601054615913-9c5c6f3b5c5b?w=600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      
      <section className="relative h-[90vh] md:h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <div className="inline-block bg-amber-500/30 backdrop-blur-sm rounded-full p-4 mb-6">
            <GiChefToque className="text-6xl text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Welcome to <span className="text-amber-400">Meteri Resort</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Authentic Nepali cuisine, warm hospitality, and a serene escape in the heart of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center justify-center gap-2">
              Explore Menu <GiForkKnifeSpoon />
            </Link>
            <Link to="/reservation" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-3 rounded-full font-semibold border border-white/30 transition">
              Book a Table
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Highlights – 3 cards */}
      <section className="py-12 -mt-10 relative z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MdRestaurantMenu className="text-4xl text-amber-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">Signature Dishes</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Authentic recipes passed down generations</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <GiMountainRoad className="text-4xl text-amber-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">Scenic Setting</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Surrounded by lush greenery and mountain views</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MdRoomService className="text-4xl text-amber-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">Warm Hospitality</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Personalized service that makes you feel at home</p>
          </div>
        </div>
      </section>

      {/* Featured Menu Items – clean grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
            Our Signature Bites
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Handpicked favourites you must try
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-green-600">{item.price}</span>
                    <Link to="/menu" className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                      Order <FaArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial – simple and elegant */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FaQuoteLeft className="text-4xl text-amber-400 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic">
            “The best dining experience we’ve had. Authentic flavours, beautiful ambiance, and impeccable service.”
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Guest" className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-semibold dark:text-white">Anita Sharma</p>
              <div className="flex text-amber-500 text-sm">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – Book a table */}
      <section className="py-16 bg-green-700 dark:bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Plan Your Visit</h2>
        <p className="mb-6 text-gray-200">Reserve a table and experience the taste of Nepal.</p>
        <Link to="/reservation" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
          Book Now
        </Link>
      </section>

      {/* Footer (inline – but you already have a separate Footer component?) – optional */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 Meteri Resort. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;