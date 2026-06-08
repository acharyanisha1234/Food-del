// src/pages/AboutPage.jsx
import React from 'react';
import { GiChefToque, GiFarmTractor } from 'react-icons/gi';
import { FaHeart, FaClock, FaAward, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { MdRestaurant, MdEmojiEmotions } from 'react-icons/md';

const AboutPage = () => {
  const features = [
    { icon: <GiFarmTractor />, title: 'Farm Fresh', desc: 'Locally sourced ingredients from trusted farms' },
    { icon: <FaClock />, title: 'Quick Service', desc: 'Prompt and courteous service always' },
    { icon: <FaHeart />, title: 'Loved by Many', desc: '4.9 rating from 5000+ happy guests' },
    { icon: <FaAward />, title: 'Award Winning', desc: 'Best Restaurant in Kathmandu 2023' },
  ];

  const team = [
    { name: 'Chef Rajesh Sharma', role: 'Head Chef', exp: '15 years', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Priya Singh', role: 'Restaurant Manager', exp: '10 years', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Amit Verma', role: 'Sous Chef', exp: '8 years', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Sunita Rai', role: 'Pastry Chef', exp: '12 years', image: 'https://randomuser.me/api/portraits/women/55.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <div className="inline-block bg-amber-500/20 backdrop-blur-md rounded-full p-3 mb-4">
            <GiChefToque className="text-5xl text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About SS Cottage</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">Serving authentic flavors with warmth and hospitality since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-green-600 mb-6" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Founded in 2010, SS Cottage began as a small family-run restaurant with a passion for bringing authentic, 
              homemade flavors to our community. What started as a dream to share our grandmother's secret recipes 
              has now grown into a beloved dining destination.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our name "SS Cottage" reflects our commitment to creating a warm, cozy atmosphere where every guest 
              feels like family. We believe that great food brings people together, and every meal should be an experience 
              to remember.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant interior" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">
            <MdRestaurant className="text-green-600 dark:text-green-400 text-4xl mb-3" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">To provide an unforgettable dining experience by combining exceptional food, warm hospitality, and a cozy atmosphere that makes every guest feel at home.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">
            <MdEmojiEmotions className="text-green-600 dark:text-green-400 text-4xl mb-3" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">To become the most loved restaurant in the region, known for culinary excellence, sustainable practices, and genuine care for our community.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-green-600 dark:text-green-400 text-4xl mb-3 flex justify-center">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Meet Our Culinary Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mt-6 object-cover border-4 border-green-200 dark:border-green-700" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{member.exp} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-green-700 dark:bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FaQuoteLeft className="text-4xl mx-auto mb-4 opacity-70" />
          <p className="text-xl italic">"The best food you'll ever taste, served with a smile. Every dish tells a story of tradition and passion."</p>
          <p className="mt-4 font-semibold">- A Loyal Customer</p>
          <div className="flex justify-center mt-4 text-amber-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">Ready to Experience SS Cottage?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Come visit us or book a table online.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition">Book a Table</button>
          <button className="border border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900 px-8 py-3 rounded-full font-semibold transition">View Menu</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;