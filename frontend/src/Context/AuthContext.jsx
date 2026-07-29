import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the authentication context to be used across the app
const AuthContext = createContext();

// Provider component that wraps the app and provides auth state and functions
export const AuthProvider = ({ children }) => {
  // user: stores the currently logged-in user object (null if not logged in)
  const [user, setUser] = useState(null);
  // loading: indicates whether we are still checking localStorage for a saved session
  const [loading, setLoading] = useState(true);

  // On mount, check localStorage for an existing user session
  useEffect(() => {
    const storedUser = localStorage.getItem('restaurant_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // restore user from localStorage
    }
    setLoading(false); // finished loading, even if no user found
  }, []); // empty dependency array means this runs once on mount

  /**
   * Login function – validates credentials against stored users.
   * @param {string} email - user's email
   * @param {string} password - user's password
   * @returns {boolean} true if login successful, false otherwise
   */
  const login = async (email, password) => {
    // Retrieve all registered users from localStorage (or empty array)
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    // Find a user with matching email and password
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      // Remove password before storing in state (for security)
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false; // no matching user found
  };

  /**
   * Register function – creates a new user account.
   * @param {string} name - user's full name
   * @param {string} email - user's email (must be unique)
   * @param {string} phone - user's phone number
   * @param {string} password - user's chosen password
   * @returns {boolean} true if registration succeeded, false if email already exists
   */
  const register = async (name, email, phone, password) => {
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    // Check if email is already taken
    if (users.some(u => u.email === email)) {
      return false; // duplicate email
    }
    // Create new user object (password stored in localStorage for simplicity – in production, hash it!)
    const newUser = { name, email, phone, password };
    users.push(newUser);
    localStorage.setItem('restaurant_users', JSON.stringify(users));
    // Log the user in immediately after registration (store without password)
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
    return true;
  };

  /**
   * Logout function – clears user session from state and localStorage.
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('restaurant_user');
  };

  // Provide the auth context value to all children
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use the AuthContext.
 * Throws an error if used outside of an AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};