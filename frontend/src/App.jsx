import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Menu from './pages/Menu';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import Checkout from './pages/Checkout';
import Reservation from './pages/Reservation';
import Dashboard from './pages/Dashboard';
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;