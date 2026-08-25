import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GiChefToque, 
  GiForkKnifeSpoon, 
  GiMountainRoad, 
  GiBeerBottle,
  GiMeal,
  GiChickenOven,
  GiNoodles,
  GiDumpling,
  GiDrinkMe
} from 'react-icons/gi';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaArrowRight, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram,
  FaUtensils,
  FaLeaf
} from 'react-icons/fa';
import { MdRestaurantMenu, MdRoomService, MdLocationOn, MdEmojiFoodBeverage } from 'react-icons/md';

const HomePage = () => {
  const owner = {
    name: 'Binoj Acharya',
    role: 'Founder & Owner',
    phone: '+977 9810104259',
    location: 'Jhumka, Sunsari (Near Chatari Bus Stand)',
    since: '2015'
  };

  const services = [
    { icon: <GiMeal className="text-4xl" />, title: 'Authentic Nepali Cuisine', desc: 'Traditional recipes with modern twist' },
    { icon: <FaLeaf className="text-4xl" />, title: 'Garden Dining', desc: 'Surrounded by lush greenery' },
    { icon: <GiBeerBottle className="text-4xl" />, title: 'Bar & Beverages', desc: 'Hard drinks & refreshing beverages' },
    { icon: <MdRoomService className="text-4xl" />, title: 'Warm Hospitality', desc: 'Personalized service by owner' },
  ];

  const menuHighlights = [
    { name: 'Sekuwa', icon: <GiChickenOven />, price: '₹350' },
    { name: 'Chicken Chilly', icon: <GiChickenOven />, price: '₹320' },
    { name: 'Chicken Roast', icon: <GiChickenOven />, price: '₹450' },
    { name: 'Polowa', icon: <GiMeal />, price: '₹380' },
    { name: 'Chowmin', icon: <GiNoodles />, price: '₹280' },
    { name: 'Momo', icon: <GiDumpling />, price: '₹220' },
    { name: 'Lassi', icon: <GiDrinkMe />, price: '₹120' },
    { name: 'Dal Bhat', icon: <MdEmojiFoodBeverage />, price: '₹350' },
  ];

  const images = {
    hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    garden: 'https://images.unsplash.com/photo-1585325701956-6b2e0f29d7d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    dining: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    exterior: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery1: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery2: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery3: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery4: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-6 py-2 rounded-full border border-amber-500/30 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-300 font-medium text-sm tracking-wider">
              👨‍🍳 OWNED BY {owner.name.toUpperCase()}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-amber-400 relative inline-block">
              Meteri Resort
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/50 rounded-full"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-2 font-light">
            Authentic Nepali Cuisine • Serene Garden • Warm Hospitality
          </p>
          <p className="text-amber-300/90 mb-8 flex items-center justify-center gap-2 text-lg">
            <MdLocationOn className="text-amber-400" />
            <span>{owner.location}</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-xl hover:shadow-amber-600/30 flex items-center gap-2">
              Explore Menu <GiForkKnifeSpoon className="group-hover:rotate-12 transition" />
            </Link>
            <a href="tel:+9779810104259" className="group bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-xl hover:shadow-green-600/30 flex items-center gap-2">
              <FaPhone className="group-hover:scale-110 transition" /> Call Now
            </a>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-3.5 rounded-full font-semibold border border-white/30 transition-all">
              Contact Us
            </Link>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-sm animate-bounce">
            <span>Scroll</span>
            <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1.5 h-2 bg-amber-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-amber-50 dark:bg-gray-800 border-b border-amber-200/30">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="text-3xl font-bold text-amber-600">2015</p><p className="text-gray-600 dark:text-gray-400 text-sm">Established</p></div>
          <div><p className="text-3xl font-bold text-amber-600">50+</p><p className="text-gray-600 dark:text-gray-400 text-sm">Dishes</p></div>
          <div><p className="text-3xl font-bold text-amber-600">4.9⭐</p><p className="text-gray-600 dark:text-gray-400 text-sm">Guest Rating</p></div>
          <div><p className="text-3xl font-bold text-amber-600">1000+</p><p className="text-gray-600 dark:text-gray-400 text-sm">Happy Guests</p></div>
        </div>
      </section>

      {/* ABOUT + OWNER */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-amber-600 font-semibold mb-2">
              <span className="w-8 h-0.5 bg-amber-600"></span>
              About Us
            </div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to <span className="text-amber-600">Meteri Resort</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Nestled in the heart of <strong>Jhumka, Sunsari</strong>, near the Chatari Bus Stand, 
              <strong> Meteri Resort </strong> is your perfect escape for authentic Nepali cuisine, 
              surrounded by lush greenery and a peaceful garden ambiance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Founded by <strong className="text-amber-600">{owner.name}</strong> in {owner.since}, 
              our family-run resort is dedicated to serving traditional flavors with modern presentation, 
              ensuring every guest feels at home.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="text-green-600" /> {owner.location}
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaPhone className="text-green-600" /> <a href="tel:+9779810104259" className="hover:text-amber-600">{owner.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaClock className="text-green-600" /> 10:00 AM – 10:00 PM
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.garden} alt="Garden View" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-48 row-span-2 bg-gray-200 dark:bg-gray-700">
              <img src={images.dining} alt="Dining Area" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.exterior} alt="Resort Exterior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Choose Us</h2>
            <p className="text-gray-500 dark:text-gray-400">Experience the best of Nepali hospitality</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition group">
                <div className="text-amber-500 group-hover:scale-110 transition mb-3 flex justify-center">{s.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Popular Dishes</h2>
            <p className="text-gray-500 dark:text-gray-400">Must-try items from our kitchen</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {menuHighlights.map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-lg transition border border-transparent hover:border-amber-200">
                <div className="text-3xl text-amber-500 mb-2 flex justify-center">{item.icon}</div>
                <p className="font-semibold text-gray-800 dark:text-white text-sm">{item.name}</p>
                <p className="text-green-600 font-bold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-2.5 rounded-full font-semibold transition">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">Our Resort Gallery</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Take a virtual tour</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.gallery1} alt="Gallery 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.gallery2} alt="Gallery 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.gallery3} alt="Gallery 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48 bg-gray-200 dark:bg-gray-700">
              <img src={images.gallery4} alt="Gallery 4" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4 italic">
            * These are stock images for demo. Replace with actual Meteri Resort photos.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FaQuoteLeft className="text-5xl text-amber-400 mx-auto mb-4 opacity-60" />
          <blockquote className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 italic font-light">
            “The perfect blend of authentic flavors, serene garden ambiance, and heartfelt hospitality.”
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              RS
            </div>
            <div className="text-left">
              <p className="font-semibold dark:text-white">Rita Sharma</p>
              <div className="flex text-amber-500 text-sm">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA – with BOOK A TABLE button ===== */}
      <section className="py-20 bg-green-700 dark:bg-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
          <p className="text-xl text-gray-200 mb-2">📍 {owner.location}</p>
          <p className="text-lg text-gray-200 mb-6">📞 <a href="tel:+9779810104259" className="text-amber-300 hover:text-amber-200">{owner.phone}</a></p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Book a Table button - navigates to /reservation */}
            <Link 
              to="/reservation" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              Book a Table
            </Link>
            <Link to="/contact" className="bg-white text-green-700 px-10 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </Link>
            <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-3.5 rounded-full font-semibold transition shadow-lg">
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p className="text-sm">© 2026 <span className="text-amber-400 font-semibold">Meteri Resort</span></p>
        <p className="text-sm">Owned by <span className="text-amber-400 font-semibold">{owner.name}</span></p>
        <p className="text-xs text-gray-500 mt-1">📍 {owner.location} | 📞 {owner.phone}</p>
        <div className="flex justify-center gap-4 mt-3 text-xl">
          <a href="#" className="hover:text-amber-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-amber-400 transition"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;