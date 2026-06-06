import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword'; 
import HomePage from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import MyOrders from './components/MyOrders';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './Context/CartContext';   

const MenuPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
    <h1 className="text-4xl font-bold text-green-800 text-center">Our Menu</h1>
    <p className="text-green-600 text-center mt-4">Coming soon...</p>
  </div>
);

const MyOrdersPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
    <h1 className="text-4xl font-bold text-green-800 text-center">My Orders</h1>
    <p className="text-green-600 text-center mt-4">You haven't placed any orders yet.</p>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword/>} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
            <Route path="/findus" element={<Contact/>} />
           
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;