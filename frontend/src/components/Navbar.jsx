import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiChefToque, GiForkKnifeSpoon } from 'react-icons/gi';
import { FiShoppingCart, FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const totalItems = 0; 
  const user = null;    

  const navLinks = [
    { name: 'Home', to: '/', icon: <FiUser /> },
    { name: 'Menu', to: '/menu', icon: <GiForkKnifeSpoon /> },
    { name: 'Orders', to: '/my-orders', icon: <FiShoppingCart /> },
  ];

  const handleLogout = () => {
   
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <nav className="bg-[#2D1B0E] border-b-8 border-amber-900/30 shadow-amber-900/30 sticky top-0 z-50 shadow-[0_25px_50px_-12px] overflow-x-hidden">
     
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent shadow-[0_0_20px] shadow-amber-500/30" />
        <div className="flex justify-between px-6">
          <GiForkKnifeSpoon className="text-amber-500/40 -mt-2 rotate-45" size={32} />
          <GiForkKnifeSpoon className="text-amber-500/40 -mr-2 -rotate-45" size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 group relative">
            <GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover:rotate-12" />
            <NavLink to="/" className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-bold">
              SS Cottage and Resturant
            </NavLink>
          </div>

          
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.to} className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-full transition ${isActive ? 'bg-amber-900/40 text-amber-400' : 'text-amber-100 hover:bg-amber-900/20'}`
              }>
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <NavLink to="/cart" className="relative text-amber-100">
                <FiShoppingCart className="text-xl" />
                {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-amber-600 text-xs rounded-full px-1">{totalItems}</span>}
              </NavLink>
              {!user ? (
                <button onClick={() => navigate('/login')} className="flex items-center space-x-2 bg-amber-700 px-4 py-2 rounded-full hover:bg-amber-600">
                  <FiLogIn />
                  <span>Login</span>
                </button>
              ) : (
                <button onClick={handleLogout} className="flex items-center space-x-2 bg-red-800 px-4 py-2 rounded-full">
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>

         
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-amber-500 p-2">
              <div className="space-y-2">
                <span className={`block w-6 h-0.5 bg-current transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#2D1B0E] py-4 space-y-3 border-t border-amber-900/40">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.to} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-2 text-amber-100 hover:bg-amber-900/20">
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
            <div className="pt-2 px-4">
              {!user ? (
                <button onClick={() => { navigate('/login'); setIsOpen(false); }} className="w-full bg-amber-700 py-2 rounded-full">Login</button>
              ) : (
                <button onClick={handleLogout} className="w-full bg-red-800 py-2 rounded-full">Logout</button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;