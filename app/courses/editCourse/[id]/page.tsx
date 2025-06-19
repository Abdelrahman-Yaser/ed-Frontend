'use client';

import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../../axios/axios.js';
import { useParams, useRouter } from 'next/navigation';

export default function EditCourse() {
  const { id } = useParams();
  const router = useRouter();

  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await AxiosInstance.get(`/courses/${id}`);
        setCourseData(res.data.course); // ✅ تأكد أن هذه تحتوي فقط على بيانات الكورس
      } catch (err) {
        console.error('Failed to fetch course data:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchCourse();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!courseData.title || !courseData.description || !courseData.price) {
      alert('Please fill in all fields');
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('Please log in first');
      return;
    }

    try {
      await AxiosInstance.put(`/courses/${id}`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/courses');
    } catch (err) {
      console.error('Failed to update course:', err);
      alert('Error updating course');
    }
  };

  if (loading) return <p className="text-center py-6">Loading...</p>;

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Edit Course</h1>

        <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
            <input
              type="text"
              id="price"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => router.push('/courses')}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
