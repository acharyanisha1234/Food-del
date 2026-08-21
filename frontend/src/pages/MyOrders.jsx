import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const allOrders = JSON.parse(localStorage.getItem('restaurant_orders') || '[]');
      const userOrders = allOrders.filter(order => order.userId === user.id);
      setOrders(userOrders);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-600">Please login to view your orders</h2>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-600">No orders yet</h2>
        <p className="text-gray-500 mt-2">Start ordering from our delicious menu!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                  <p className="font-semibold">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p className="text-gray-700">Status: <span className="font-medium">{order.status}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">₹{order.total}</p>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {order.items.map(item => (
                  <span key={item.id} className="inline-block bg-gray-100 px-2 py-1 rounded mr-1 mb-1">
                    {item.name} × {item.quantity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;