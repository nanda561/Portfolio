import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F252E] px-4">
      <div className="max-w-md w-full bg-[#27293d] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1F252E] text-white border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1F252E] text-white border border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-[#f9532d] text-white font-semibold hover:bg-opacity-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;