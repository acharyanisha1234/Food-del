// src/pages/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }
    setLoading(true);
    // Simulate sending message (replace with actual API call)
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We'd love to hear from you. Visit us or reach out through any channel below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Info & Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-xl" />
                <span className="text-gray-700 dark:text-gray-300">Meteri Resort, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600 dark:text-green-400 text-xl" />
                <span className="text-gray-700 dark:text-gray-300">+977 9812345678</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-600 dark:text-green-400 text-xl" />
                <span className="text-gray-700 dark:text-gray-300">info@sscottage.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-green-600 dark:text-green-400 text-xl" />
                <div className="text-gray-700 dark:text-gray-300">
                  <p>Mon - Sun: 10:00 AM – 10:00 PM</p>
                  <p className="text-sm">(Kitchen closes at 9:30 PM)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-400 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                <FaTwitter />
              </a>
            </div>

            {/* Contact Form */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column: Google Map */}
          <div className="rounded-2xl shadow-xl overflow-hidden h-96 lg:h-auto">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.317164667088!2d85.3240155!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190c5e0e7c0f%3A0x5e0e7c0f5e0e7c0f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1690000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;