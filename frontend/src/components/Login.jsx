import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md';
import ForgetPassword from './ForgetPassword'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isForgetOpen, setIsForgetOpen] = useState(false);

  // If already logged in, go home
  useEffect(() => {
    const user = localStorage.getItem('restaurant_user');
    if (user) navigate('/');
  }, [navigate]);

  // Forgot Password handler
  const handleForgotPassword = () => {
    if (!email) {
      setError('Please enter your email address to reset password.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    const userExists = users.some(u => u.email === email);
    if (!userExists) {
      setError('No account found with this email.');
      return;
    }
    // Simulate sending reset link
    alert(`Password reset link sent to ${email} (demo).\nIn a real app, you would receive an email.`);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isLogin) {
    // Register
      if (!name.trim()) {
        setError('Full name is required');
        setLoading(false);
        return;
      }
      if (!phone.trim()) {
        setError('Phone number is required');
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
      if (users.some(u => u.email === email)) {
        setError('Email already registered');
        setLoading(false);
        return;
      }

      const newUser = { name, email, phone, password };
      users.push(newUser);
      localStorage.setItem('restaurant_users', JSON.stringify(users));
      // Auto login after register
      const { password: _, ...userWithoutPassword } = newUser;
      localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
      navigate('/');
    } else {
      // LOGIN 
      const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
      const foundUser = users.find(u => u.email === email && u.password === password);
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        localStorage.setItem('restaurant_user', JSON.stringify(userWithoutPassword));
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-full shadow-lg">
              <GiChefToque className="text-4xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-green-800">SS Cottage and Restaurant</h1>
          <p className="text-green-600 mt-2">Meteri Resort</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-gray-100 rounded-full p-1">
            <button
              type="button"
              onClick={() => { setIsLogin(true); setError(''); }}
              className={`flex-1 py-2 rounded-full font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(false); setError(''); }}
              className={`flex-1 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Register extra fields */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                  <div className="relative">
                    <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                      placeholder="+977 ........."
                    />
                  </div>
                </div>
              </>
            )}

            {/* Common fields */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                {isLogin ? 'Password' : 'New Password'}
              </label>
              <div className="relative">
                <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
                <div className="relative">
                  <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-lg" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {/* Forgot Password Link (only in login mode) */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition duration-200 transform hover:scale-[1.01] disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                isLogin ? 'Login' : 'Create Account'
              )}
            </button>

            {/* Toggle between login/register */}
            {isLogin && (
              <p className="text-center text-gray-600 text-sm mt-4">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Register now
                </button>
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6 gap-2 items-center">
          <span className="text-green-700/60 text-xs">Authentic flavors • Warm hospitality</span>
        </div>
      </div>
    </div>
  );
};

export default Login;