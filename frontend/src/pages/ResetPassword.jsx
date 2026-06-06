import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = location.state?.email || '';

  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) return toast.error('Email is required');
    setLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
      const userExists = users.some(u => u.email === email);
      if (!userExists) {
        toast.error('No account found with this email');
        setLoading(false);
        return;
      }
      toast.success(`Demo OTP: 123456 sent to ${email}`);
      setStep(2);
      setLoading(false);
    }, 1000);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (otp !== '123456') return toast.error('Invalid OTP. Demo OTP is 123456');
    if (newPassword !== confirmPassword) return toast.error('Passwords do not match');
    if (newPassword.length < 6) return toast.error('Password must be at least 6 characters');

    setLoading(true);
    // Update password in localStorage
    const users = JSON.parse(localStorage.getItem('restaurant_users') || '[]');
    const updatedUsers = users.map(u =>
      u.email === email ? { ...u, password: newPassword } : u
    );
    localStorage.setItem('restaurant_users', JSON.stringify(updatedUsers));
    toast.success('Password reset successfully. Please login.');
    setTimeout(() => navigate('/login'), 2000);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          {step === 1 ? 'Forgot Password?' : 'Reset Password'}
        </h2>

        {step === 1 ? (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
            <p className="text-center text-sm">
              Remember password?{' '}
              <button onClick={() => navigate('/login')} className="text-green-600 hover:underline">
                Login
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input type="email" value={email} disabled className="w-full px-4 py-2 bg-gray-100 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">OTP Code</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="6-digit code (demo: 123456)"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-1">New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;