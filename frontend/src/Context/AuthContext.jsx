import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const storedUser = localStorage.getItem('restaurant_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  // Register function
  const register = async (name, email, phone, password) => {
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    if (users.some(u => u.email === email)) {
      return false;
    }
    const newUser = { name, email, phone, password };
    users.push(newUser);
    localStorage.setItem('restaurant_users', JSON.stringify(users));
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('restaurant_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};