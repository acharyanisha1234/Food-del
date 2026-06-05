import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const cartItems = [];
  const totalPrice = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="bg-[#3d2a1c] rounded-xl p-12 text-center">
            <p className="text-amber-200 text-xl mb-6">Your cart is empty</p>
            <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg inline-block">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div>
         
            <div className="bg-[#3d2a1c] rounded-xl p-6">
              <div className="border-b border-amber-700/50 pb-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>{item.name} x{item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xl font-bold text-amber-400">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 py-3 rounded-lg font-bold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;