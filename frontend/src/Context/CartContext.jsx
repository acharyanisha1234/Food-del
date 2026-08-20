import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('restaurant_cart');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('restaurant_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(id);
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Place order – saves to localStorage orders
  const placeOrder = (orderDetails) => {
    const orders = JSON.parse(localStorage.getItem('restaurant_orders') || '[]');
    const newOrder = {
      id: Date.now(),
      items: cartItems.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: getTotal(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      ...orderDetails, // user info, address, etc.
    };
    orders.push(newOrder);
    localStorage.setItem('restaurant_orders', JSON.stringify(orders));
    clearCart();
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);