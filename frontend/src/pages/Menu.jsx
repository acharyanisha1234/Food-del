import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { GiKnifeFork, GiMeal, GiCoffeeCup, GiCakeSlice } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuData = {
    starters: [
      { id: 1, name: 'Chicken Momo', price: 250, desc: 'Steamed dumplings filled with minced chicken & spices', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500', rating: 4.8 },
      { id: 2, name: 'Paneer Tikka', price: 320, desc: 'Grilled cottage cheese marinated in yogurt & spices', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500', rating: 4.7 },
      { id: 3, name: 'Spring Rolls', price: 180, desc: 'Crispy rolls stuffed with vegetables', image: 'https://images.unsplash.com/photo-1627662103464-17f6cd3d372c?w=500', rating: 4.5 },
      { id: 4, name: 'Sekuwa', price: 350, desc: 'Nepali style grilled spiced meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500', rating: 4.9 },
      { id: 5, name: 'Aloo Chop', price: 120, desc: 'Crispy fried potato fritters with chutney', image: 'https://images.unsplash.com/photo-1625938144740-5b3f0b7c7b6e?w=500', rating: 4.3 },
      { id: 6, name: 'Fish Finger', price: 210, desc: 'Breaded fish strips served with tartar sauce', image: 'https://images.unsplash.com/photo-1574482620811-3aa8fbc7b5b5?w=500', rating: 4.5 },
      { id: 7, name: 'Chicken Lollipop', price: 280, desc: 'Spicy chicken drumettes, deep fried', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500', rating: 4.6 },
      { id: 8, name: 'Veg Platter', price: 390, desc: 'Assorted veg appetizers – paneer, mushroom, corn', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c1?w=500', rating: 4.4 },
    ],
    maincourse: [
      { id: 9, name: 'Butter Chicken', price: 450, desc: 'Creamy tomato gravy with tender chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500', rating: 4.9 },
      { id: 10, name: 'Hyderabadi Biryani', price: 380, desc: 'Aromatic rice with choice of meat/veg', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500', rating: 4.8 },
      { id: 11, name: 'Dal Makhani', price: 280, desc: 'Creamy black lentils cooked overnight', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c1?w=500', rating: 4.6 },
      { id: 12, name: 'Naan Basket', price: 120, desc: 'Assorted Indian breads (butter, garlic, plain)', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500', rating: 4.7 },
      { id: 13, name: 'Kadai Paneer', price: 350, desc: 'Paneer cooked in a spicy bell pepper gravy', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500', rating: 4.5 },
      { id: 14, name: 'Fish Curry', price: 420, desc: 'Coastal style fish curry with coconut milk', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500', rating: 4.7 },
      { id: 15, name: 'Mutton Rogan Josh', price: 520, desc: 'Kashmiri style slow-cooked mutton', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500', rating: 4.9 },
      { id: 16, name: 'Veg Kolhapuri', price: 300, desc: 'Spicy mixed vegetable curry from Maharashtra', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c1?w=500', rating: 4.4 },
      { id: 17, name: 'Malai Kofta', price: 340, desc: 'Cottage cheese and potato dumplings in cream sauce', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500', rating: 4.6 },
    ],
    desserts: [
      { id: 18, name: 'Gulab Jamun', price: 120, desc: 'Soft milk dumplings in sugar syrup', image: 'https://images.unsplash.com/photo-1601054615913-9c5c6f3b5c5b?w=500', rating: 4.8 },
      { id: 19, name: 'Ice Cream Sundae', price: 180, desc: 'Vanilla ice cream with chocolate sauce', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500', rating: 4.5 },
      { id: 20, name: 'Rasmalai', price: 140, desc: 'Soft paneer balls in sweetened thickened milk', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500', rating: 4.7 },
      { id: 21, name: 'Brownie with Ice Cream', price: 220, desc: 'Warm chocolate brownie topped with vanilla ice cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500', rating: 4.6 },
      { id: 22, name: 'Kulfi Falooda', price: 160, desc: 'Traditional Indian ice cream with vermicelli', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500', rating: 4.8 },
    ],
    beverages: [
      { id: 23, name: 'Masala Chai', price: 60, desc: 'Traditional spiced tea', image: 'https://images.unsplash.com/photo-1594631252845-29ff4cc3b0fa?w=500', rating: 4.6 },
      { id: 24, name: 'Mango Lassi', price: 120, desc: 'Sweet yogurt drink with mango', image: 'https://images.unsplash.com/photo-1626106973532-b3108ea7c53e?w=500', rating: 4.7 },
      { id: 25, name: 'Fresh Lime Soda', price: 80, desc: 'Refreshing lime soda', image: 'https://images.unsplash.com/photo-1525382455947-f2d9bf1d2a1b?w=500', rating: 4.4 },
      { id: 26, name: 'Coconut Water', price: 90, desc: 'Fresh tender coconut water', image: 'https://images.unsplash.com/photo-1562685384-4d5a5c3e3b6b?w=500', rating: 4.3 },
      { id: 27, name: 'Shake – Chocolate', price: 150, desc: 'Thick chocolate milkshake with whipped cream', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', rating: 4.8 },
      { id: 28, name: 'Shake – Strawberry', price: 150, desc: 'Creamy strawberry milkshake', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500', rating: 4.6 },
      { id: 29, name: 'Cold Coffee', price: 110, desc: 'Classic cold coffee with ice cream', image: 'https://images.unsplash.com/photo-1517701604599-bb29b880090f?w=500', rating: 4.5 },
      { id: 30, name: 'Fresh Fruit Juice', price: 100, desc: 'Seasonal fruit juice (orange, apple, mix)', image: 'https://images.unsplash.com/photo-1525382455947-f2d9bf1d2a1b?w=500', rating: 4.2 },
    ],
  };

  const categories = [
    { id: 'starters', label: 'Starters', icon: <GiKnifeFork /> },
    { id: 'maincourse', label: 'Main Course', icon: <GiMeal /> },
    { id: 'desserts', label: 'Desserts', icon: <GiCakeSlice /> },
    { id: 'beverages', label: 'Beverages', icon: <GiCoffeeCup /> },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-3">Our Menu</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Discover authentic flavors crafted with love</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuData[activeCategory]?.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x300?text=No+Image';
                  }}
                />
                <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full text-sm font-semibold text-green-700 dark:text-green-400">
                  ★ {item.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">₹{item.price}</span>
                  <button onClick={() => handleAddToCart(item)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition">
                    <FaShoppingCart size={14} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;