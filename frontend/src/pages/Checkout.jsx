import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';

const Checkout = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(user?.phone || '');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [loading, setLoading] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg inline-block">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Please login to place order</p>
          <Link to="/login" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-block">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    if (!address.trim() || !phone.trim()) {
      toast.error('Please fill in address and phone number');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const orders = JSON.parse(localStorage.getItem('restaurant_orders') || '[]');
      const newOrder = {
        id: Date.now(),
        userId: user.id,
        userName: user.name,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: getTotal(),
        status: 'Pending',
        address,
        phone,
        paymentMethod,
        createdAt: new Date().toISOString(),
      };
      orders.push(newOrder);
      localStorage.setItem('restaurant_orders', JSON.stringify(orders));
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/my-orders');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-6">
          <FaArrowLeft /> Back to Cart
        </Link>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Delivery Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full delivery address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="esewa">eSewa</option>
                  <option value="khalti">Khalti</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>
              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm py-1 border-b border-gray-100">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t border-gray-200">
              <span>Total</span>
              <span className="text-green-600">₹{getTotal()}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">You will receive order confirmation shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;