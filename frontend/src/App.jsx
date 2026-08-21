import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Menu from './pages/Menu';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';     
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;