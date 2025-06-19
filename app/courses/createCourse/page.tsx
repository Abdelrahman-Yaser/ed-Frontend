'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AxiosInstance from '../../axios/axios'; // Adjust path as needed

export default function CreateCourse() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price) {
      setError('Please fill out all fields.');
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('You must be logged in to create a course.');
      return;
    }

    try {
      setLoading(true);
      await AxiosInstance.post(
        '/courses/create',
        { ...formData, price: Number(formData.price) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      router.push('/courses');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8">Create New Course</h1>

        <div className="flex justify-center mb-6">
          <Link href="/post/editPost">
            <span className="text-blue-300 hover:text-blue-500 hover:underline">Edit Post</span>
          </Link>
        </div>

        <div className="bg-white text-black rounded-lg p-8 shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-1">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-1">
                Course Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="price" className="block font-medium mb-1">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Course'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
