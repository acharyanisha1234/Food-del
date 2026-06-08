// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiChefToque, GiForkKnifeSpoon, GiMeal, GiCoffeeCup, GiCakeSlice, GiFoodTruck } from 'react-icons/gi';
import { FaLeaf, FaClock, FaHeart, FaQuoteLeft, FaStar, FaMoon, FaSun, FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlay, FaPause } from 'react-icons/fa';
import { MdAccessTime, MdPeople, MdRestaurantMenu, MdEmojiEmotions } from 'react-icons/md';

const HomePage = () => {
  const [counters, setCounters] = useState({ years: 0, customers: 0, dishes: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const observerRef = useRef(null);

  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

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

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => setIsVideoPlaying(!isVideoPlaying);

  // Featured dishes carousel
  const featuredDishes = [
    { name: 'Butter Chicken', price: '₹450', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600', desc: 'Creamy tomato gravy with tender chicken' },
    { name: 'Paneer Tikka', price: '₹320', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600', desc: 'Grilled cottage cheese with spices' },
    { name: 'Hyderabadi Biryani', price: '₹380', img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600', desc: 'Aromatic layered rice with meat' },
    { name: 'Gulab Jamun', price: '₹120', img: 'https://images.unsplash.com/photo-1601054615913-9c5c6f3b5c5b?w=600', desc: 'Soft milk dumplings in sugar syrup' },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % featuredDishes.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);

  const galleryImages = [
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500',
    'https://images.unsplash.com/photo-1546833998-877b37c2e5c1?w=500',
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500',
  ];

  const testimonials = [
    { name: "Ramesh Adhikari", rating: 5, text: "Best authentic Nepali cuisine! The ambiance is amazing.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sita Gurung", rating: 5, text: "Butter chicken is to die for. Will visit again!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "John Doe", rating: 5, text: "Great service and delicious food. Highly recommend.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-24 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:scale-110 transition"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-700 text-xl" />}
      </button>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay={isVideoPlaying}
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-eating-at-a-restaurant-1250-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-amber-500/20 backdrop-blur-md rounded-full p-3 mb-4 animate-bounce">
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
          <button onClick={toggleVideo} className="absolute bottom-8 left-1/2 -translate-x-1/2 mt-12 bg-white/20 p-2 rounded-full">
            {isVideoPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center"><div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse" /></div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-green-800 dark:bg-green-900 text-white fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div><MdAccessTime className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.years}+</div><div>Years of Excellence</div></div>
          <div><MdPeople className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.customers}+</div><div>Happy Customers</div></div>
          <div><GiMeal className="text-4xl mx-auto mb-2 text-amber-400" /><div className="text-3xl font-bold">{counters.dishes}+</div><div>Signature Dishes</div></div>
        </div>
      </section>

      {/* Featured Dishes Carousel */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">Featured Dishes</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">Chef's special recommendations</p>
          <div className="relative flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 z-10 bg-white/80 dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-white">‹</button>
            <div className="overflow-hidden w-full max-w-4xl mx-auto">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {featuredDishes.map((dish, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 p-4">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                      <img src={dish.img} alt={dish.name} className="w-full md:w-1/2 h-64 object-cover" />
                      <div className="p-6 md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{dish.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{dish.desc}</p>
                        <div className="mt-4 text-2xl font-bold text-green-600">₹{dish.price}</div>
                        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Order Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={nextSlide} className="absolute right-0 z-10 bg-white/80 dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-white">›</button>
          </div>
        </div>
      </section>

      {/* Daily Specials Banner */}
      <section className="py-16 bg-amber-500 dark:bg-amber-600 text-white text-center fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-4">
          <GiFoodTruck className="text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Daily Special: 20% Off on Biryani!</h2>
          <p className="text-lg mb-6">Today only – order our signature Hyderabadi Biryani and get 20% off.</p>
          <Link to="/menu" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Order Now</Link>
        </div>
      </section>

      {/* Food Gallery Grid */}
      <section className="py-16 bg-white dark:bg-gray-900 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">Food Gallery</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">A glimpse of our culinary artistry</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-48 object-cover group-hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Special Message */}
      <section className="py-16 bg-green-50 dark:bg-gray-800 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Chef" className="w-48 h-48 rounded-full object-cover border-4 border-green-600" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Chef's Special Note</h3>
            <p className="text-gray-600 dark:text-gray-300 italic">"Every dish tells a story of tradition, passion, and the finest ingredients. We pour our heart into each plate to bring you an unforgettable experience."</p>
            <p className="mt-4 font-semibold text-green-700 dark:text-green-400">– Chef Rajesh Sharma</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Get exclusive offers and updates straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700" />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 dark:bg-green-800 text-white text-center fade-up opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-3xl font-bold mb-3">Ready for a Memorable Dining Experience?</h2>
        <p className="mb-6">Reserve your table now and enjoy authentic flavors.</p>
        <Link to="/reservation" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
          Book a Table
        </Link>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
        .animate-bounce { animation: bounce 2s infinite; }
        @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
      `}</style>
    </div>
  );
};

export default HomePage;