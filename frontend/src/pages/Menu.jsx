import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { GiKnifeFork, GiMeal, GiCoffeeCup, GiCakeSlice } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('starters');

  // Helper to generate consistent images using picsum (seed based on id)
  const getImageUrl = (id) => `https://picsum.photos/seed/${id}/400/300`;

  const menuData = {
    starters: [
      { id: 1, name: 'Chicken Momo', price: 250, desc: 'Steamed dumplings filled with minced chicken & spices', rating: 4.8 },
      { id: 2, name: 'Paneer Tikka', price: 320, desc: 'Grilled cottage cheese marinated in yogurt & spices', rating: 4.7 },
      { id: 3, name: 'Spring Rolls', price: 180, desc: 'Crispy rolls stuffed with vegetables', rating: 4.5 },
      { id: 4, name: 'Sekuwa', price: 350, desc: 'Nepali style grilled spiced meat', rating: 4.9 },
      { id: 5, name: 'Aloo Chop', price: 120, desc: 'Crispy fried potato fritters with chutney', rating: 4.3 },
      { id: 6, name: 'Fish Finger', price: 210, desc: 'Breaded fish strips served with tartar sauce', rating: 4.5 },
      { id: 7, name: 'Chicken Lollipop', price: 280, desc: 'Spicy chicken drumettes, deep fried', rating: 4.6 },
      { id: 8, name: 'Veg Platter', price: 390, desc: 'Assorted veg appetizers – paneer, mushroom, corn', rating: 4.4 },
    ],
    maincourse: [
      { id: 9, name: 'Butter Chicken', price: 450, desc: 'Creamy tomato gravy with tender chicken', rating: 4.9 },
      { id: 10, name: 'Hyderabadi Biryani', price: 380, desc: 'Aromatic rice with choice of meat/veg', rating: 4.8 },
      { id: 11, name: 'Dal Makhani', price: 280, desc: 'Creamy black lentils cooked overnight', rating: 4.6 },
      { id: 12, name: 'Naan Basket', price: 120, desc: 'Assorted Indian breads (butter, garlic, plain)', rating: 4.7 },
      { id: 13, name: 'Kadai Paneer', price: 350, desc: 'Paneer cooked in a spicy bell pepper gravy', rating: 4.5 },
      { id: 14, name: 'Fish Curry', price: 420, desc: 'Coastal style fish curry with coconut milk', rating: 4.7 },
      { id: 15, name: 'Mutton Rogan Josh', price: 520, desc: 'Kashmiri style slow-cooked mutton', rating: 4.9 },
      { id: 16, name: 'Veg Kolhapuri', price: 300, desc: 'Spicy mixed vegetable curry from Maharashtra', rating: 4.4 },
      { id: 17, name: 'Malai Kofta', price: 340, desc: 'Cottage cheese and potato dumplings in cream sauce', rating: 4.6 },
    ],
    desserts: [
      { id: 18, name: 'Gulab Jamun', price: 120, desc: 'Soft milk dumplings in sugar syrup', rating: 4.8 },
      { id: 19, name: 'Ice Cream Sundae', price: 180, desc: 'Vanilla ice cream with chocolate sauce', rating: 4.5 },
      { id: 20, name: 'Rasmalai', price: 140, desc: 'Soft paneer balls in sweetened thickened milk', rating: 4.7 },
      { id: 21, name: 'Brownie with Ice Cream', price: 220, desc: 'Warm chocolate brownie topped with vanilla ice cream', rating: 4.6 },
      { id: 22, name: 'Kulfi Falooda', price: 160, desc: 'Traditional Indian ice cream with vermicelli', rating: 4.8 },
    ],
    beverages: [
      { id: 23, name: 'Masala Chai', price: 60, desc: 'Traditional spiced tea', rating: 4.6 },
      { id: 24, name: 'Mango Lassi', price: 120, desc: 'Sweet yogurt drink with mango', rating: 4.7 },
      { id: 25, name: 'Fresh Lime Soda', price: 80, desc: 'Refreshing lime soda', rating: 4.4 },
      { id: 26, name: 'Coconut Water', price: 90, desc: 'Fresh tender coconut water', rating: 4.3 },
      { id: 27, name: 'Chocolate Shake', price: 150, desc: 'Thick chocolate milkshake with whipped cream', rating: 4.8 },
      { id: 28, name: 'Strawberry Shake', price: 150, desc: 'Creamy strawberry milkshake', rating: 4.6 },
      { id: 29, name: 'Cold Coffee', price: 110, desc: 'Classic cold coffee with ice cream', rating: 4.5 },
      { id: 30, name: 'Fresh Fruit Juice', price: 100, desc: 'Seasonal fruit juice (orange, apple, mix)', rating: 4.2 },
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

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300/FFB6C1/333333?text=Delicious+Food';
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
                  src={getImageUrl(item.id)} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={handleImageError}
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