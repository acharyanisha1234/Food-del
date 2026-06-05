import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ForgotPassword from './components/ForgetPassword';
import Cart from './pages/Cart';   
import Menu from './components/Menu';   
import MyOrders from './components/MyOrders'; 

const MenuPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] py-12 px-4">
    <h1 className="text-4xl font-bold text-amber-400 text-center">Menu Page</h1>
    <p className="text-amber-200 text-center mt-4">Coming soon...</p>
  </div>
);

const MyOrdersPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] py-12 px-4">
    <h1 className="text-4xl font-bold text-amber-400 text-center">My Orders</h1>
    <p className="text-amber-200 text-center mt-4">You haven't placed any orders yet.</p>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-amber-400 text-center mt-10">Welcome to SS Cottage and Resturant</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ForgetPassword" element={<ForgotPassword/>} />
       <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
       
        <Route path="*" element={<h1 className="text-white text-center mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;