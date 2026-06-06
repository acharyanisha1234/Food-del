// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiChefToque, GiForkKnifeSpoon, GiMeal, GiCoffeeCup } from 'react-icons/gi';
import { FaLeaf, FaClock, FaHeart, FaQuoteLeft, FaStar, FaMoon, FaSun } from 'react-icons/fa';
import { MdAccessTime, MdPeople } from 'react-icons/md';

const HomePage = () => {
  const [counters, setCounters] = useState({ years: 0, customers: 0, dishes: 0 });
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Counter animation
  useEffect(() => {
    setTimeout(() => {
      setCounters({ years: 15, customers: 5000, dishes: 120 });
    }, 300);
  }, []);

  const testimonials = [
    { name: "Ramesh Adhikari", rating: 5, text: "Best authentic Nepali cuisine! The ambiance is amazing.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sita Gurung", rating: 5, text: "Butter chicken is to die for. Will visit again!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "John Doe", rating: 5, text: "Great service and delicious food. Highly recommend.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-24 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:scale-110 transition"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-700 text-xl" />}
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-amber-500/20 backdrop-blur-md rounded-full p-3 mb-4">
            <GiChefToque className="text-5xl text-amber-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInDown">SS Cottage & Restaurant</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Authentic Flavors | Cozy Ambiance | Warm Hospitality</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center justify-center gap-2">
              Explore Menu <GiForkKnifeSpoon />
            </Link>
            <Link to="/reservation" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-3 rounded-full font-semibold border border-white/30">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-green-800 dark:bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div><MdAccessTime className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.years}+</div><div>Years of Excellence</div></div>
          <div><MdPeople className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.customers}+</div><div>Happy Customers</div></div>
          <div><GiMeal className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.dishes}+</div><div>Signature Dishes</div></div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">Our Specialties</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">Explore our most loved categories</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <GiForkKnifeSpoon />, title: "Starters", desc: "Momo, spring rolls, and more", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500" },
              { icon: <GiMeal />, title: "Main Course", desc: "Butter chicken, biryani, dal makhani", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500" },
              { icon: <GiCoffeeCup />, title: "Desserts", desc: "Gulab jamun, ice cream", img: "https://images.unsplash.com/photo-1601054615913-9c5c6f3b5c5b?w=500" },
            ].map((cat, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg h-64">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="text-amber-400 text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
                  <p className="text-gray-200">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <FaQuoteLeft className="text-amber-500 text-2xl mb-3" />
                <p className="text-gray-600 dark:text-gray-300 mb-4">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div><p className="font-semibold dark:text-white">{t.name}</p><div className="flex text-amber-500">{[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 dark:bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready for a Memorable Dining Experience?</h2>
        <p className="mb-6">Reserve your table now and enjoy authentic flavors.</p>
        <Link to="/reservation" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
          Book a Table
        </Link>
      </section>

      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default HomePage;