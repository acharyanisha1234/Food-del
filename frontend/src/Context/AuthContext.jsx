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

  const login = (email, password) => {
    // Simulate login – check against registered users in localStorage
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid credentials');
    const loggedUser = { id: found.id, name: found.name, email: found.email, role: found.role || 'user' };
    localStorage.setItem('restaurant_user', JSON.stringify(loggedUser));
    setUser(loggedUser);
    return loggedUser;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    if (users.find(u => u.email === email)) throw new Error('Email already exists');
    const newUser = { id: Date.now(), name, email, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('restaurant_users', JSON.stringify(users));
    // Auto-login after registration
    const loggedUser = { id: newUser.id, name, email, role: 'user' };
    localStorage.setItem('restaurant_user', JSON.stringify(loggedUser));
    setUser(loggedUser);
    return loggedUser;
  };

  const logout = () => {
    localStorage.removeItem('restaurant_user');
    setUser(null);
  };

  const resetPassword = (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    const index = users.findIndex(u => u.email === email);
    if (index === -1) throw new Error('User not found');
    users[index].password = newPassword;
    localStorage.setItem('restaurant_users', JSON.stringify(users));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, resetPassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);