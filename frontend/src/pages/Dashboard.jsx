import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import { menuItems } from '../data/menuData';

const Dashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', category: '', image: '' });

  useEffect(() => {
    if (user && user.role === 'admin') {
      const allOrders = JSON.parse(localStorage.getItem('restaurant_orders') || '[]');
      setOrders(allOrders);
    }
  }, [user]);

  if (!user || user.role !== 'admin') {
    return <div className="min-h-screen bg-gray-50 py-12 px-4 text-center">Access denied</div>;
  }

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter(o => o.status === 'Pending').length;

  const handleAddItem = (e) => {
    e.preventDefault();
    // In real app, this would POST to API; here we just log
    alert(`New item "${newItem.name}" added! (simulated)`);
    setNewItem({ name: '', description: '', price: '', category: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total Orders</h3>
            <p className="text-3xl font-bold">{orders.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold">{pendingOrders}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold">₹{totalRevenue}</p>
          </div>
        </div>

        {/* Add Menu Item Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
          <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, name: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={e => setNewItem({ ...newItem, category: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={e => setNewItem({ ...newItem, price: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newItem.image}
              onChange={e => setNewItem({ ...newItem, image: e.target.value })}
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Description"
              value={newItem.description}
              onChange={e => setNewItem({ ...newItem, description: e.target.value })}
              className="border p-2 rounded md:col-span-2"
              rows="2"
            />
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition md:col-span-2">
              Add Item
            </button>
          </form>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-4 border-b">All Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Items</th>
                  <th className="p-3 text-left">Total</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.userName || 'Guest'}</td>
                    <td className="p-3">{order.items.length} items</td>
                    <td className="p-3">₹{order.total}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;