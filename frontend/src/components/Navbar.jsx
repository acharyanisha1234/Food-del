// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';
import { FiUser, FiLogIn, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('restaurant_user');
      if (storedUser) setUser(JSON.parse(storedUser));
      else setUser(null);
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('restaurant_user');
    setUser(null);
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-green-100 p-1.5 rounded-full transition-all group-hover:bg-green-200">
              <GiChefToque className="text-2xl md:text-3xl text-green-700" />
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-800">SS Cottage</span>
            <span className="hidden sm:inline text-gray-400 text-sm">| Restaurant</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center space-x-3 ml-6">
              {!user ? (
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition shadow-sm"
                >
                  <FiLogIn />
                  <span>Login</span>
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 text-sm">
                    Hi, {user.name.split(' ')[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-3 px-4 space-y-2 shadow-lg animate-slideDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-green-50 text-green-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 space-y-3">
            {!user ? (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
              >
                Login / Register
              </button>
            ) : (
              <>
                <div className="text-gray-700 px-4 py-2 border-l-4 border-green-500 bg-green-50 rounded">
                  Welcome, {user.name}!
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-700 py-3 rounded-lg transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;