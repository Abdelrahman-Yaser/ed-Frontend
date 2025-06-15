'use client';

import React, { useEffect, useState } from 'react';
import AxiosInstance from '../axios/axios';
import Link from 'next/link';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [userRole, setUserRole] = useState<string | null>(null);

  const fetchCourses = async () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');

    if (role) {
      setUserRole(role);
    }

    try {
      const response = await AxiosInstance.get('/courses');
      const data = response.data;

      const courseList = Array.isArray(data)
        ? data
        : Array.isArray(data.courses)
        ? data.courses
        : [];

      setCourses(courseList);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await AxiosInstance.delete(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses((prev) => prev.filter((course) => course._id !== id));
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete course');
    }
  };

  if (loading) return <p className="text-center text-gray-500 py-6">Loading courses...</p>;
  if (error) return <p className="text-center text-red-600 py-6">{error}</p>;

  const isAdmin = userRole === 'admin';

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>

      {isAdmin && (
        <div className="mb-4">
          <Link
            href="/courses/createCourse"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-semibold"
          >
            Create New Course
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition relative"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
            <p className="mt-2 font-semibold">{course.price} $</p>

            {isAdmin && (
              <div className="absolute top-2 right-2 space-x-2">
                <button
                  onClick={() => handleDelete(course._id)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <Link
                  href={`/courses/editCourse/${course._id}`}
                  className="text-sm bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
