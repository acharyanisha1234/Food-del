import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-amber-400 mb-8">Your Cart</h1>
          <div className="bg-[#3d2a1c] rounded-xl p-12">
            <p className="text-amber-200 text-xl mb-6">Your cart is empty</p>
            <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg inline-block">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center">Your Cart</h1>
        <div className="bg-[#3d2a1c] rounded-xl p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center justify-between border-b border-amber-700/30 pb-3">
                <div className="flex-1 min-w-[120px]">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-amber-400 text-sm">₹{item.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-amber-700/50 hover:bg-amber-600 text-white p-1 rounded-full"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-amber-700/50 hover:bg-amber-600 text-white p-1 rounded-full"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-400 font-bold">₹{item.price * item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xl font-bold text-amber-400 mt-6 pt-4 border-t border-amber-700/50">
            <span>Total:</span>
            <span>₹{getTotal()}</span>
          </div>
          <Link
            to="/checkout"
            className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold text-center block transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;