'use client';

import Link from 'next/link';
import { useState } from 'react';
import AxiosInstance from '../../axios/axios';
import Logout from '../logout/logout.js'; // Ensure this is a valid React component

export default function RequestRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await AxiosInstance.post('/auth/register', {
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log('Registration successful:', response.data);
      setSuccess('Registration successful!');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Logo */}
      <div className="text-center mt-10 mb-6">
        <Link href="/" className="text-3xl font-bold text-blue-600">
          ConnectEDU
        </Link>
      </div>

      {/* Form Container */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Request Registration
        </h3>

        {success ? (
          <div className="text-center text-green-600">
            <p className="text-lg font-medium">{success}</p>
            <p className="mt-2">You are now registered and logged in!</p>
            <div className="mt-6">
              <Logout />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Feedback */}
            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
            {success && <p className="text-green-600 mb-4 text-center">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>

            {/* Navigation Links */}
            <div className="mt-4 text-center text-sm text-gray-700">
              <p>
                Already have an account?{' '}
                <Link href="/AccountPage/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
              <p className="mt-2">
                Don't have an account?{' '}
                <Link href="/AccountPage/register" className="text-blue-500 hover:underline">
                  Request Register
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
