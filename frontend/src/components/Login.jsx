import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0f07] to-[#2D1B0E] px-4">
      <div className="bg-[#3d2a1c] p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-[#2D1B0E] border border-amber-700 rounded-lg text-amber-100" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-[#2D1B0E] border border-amber-700 rounded-lg text-amber-100" required />
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 p-3 rounded-lg font-bold">Sign In</button>
        </form>
        <p className="text-center text-amber-300 mt-4">Demo: test@example.com / password</p>
      </div>
    </div>
  );
};

export default Login;