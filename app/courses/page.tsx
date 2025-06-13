'use client';

import React, { useEffect, useState } from 'react';
import AxiosInstance from '../axios/axios'; // Adjust path as needed

interface Course {
  _id: string;
  title: string;
  description: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await AxiosInstance.get('/courses');
  //       console.log("djklfjdslkfkldjsf",response) // AxiosInstance already has baseURL
  //       setCourses(response.data);
  //     } catch (err: any) {
  //       setError(err.response?.data?.message || 'Failed to fetch courses');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await AxiosInstance.get('/courses');
      const data = response.data;

      // Handle different shapes
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

  fetchCourses();
}, []);


  if (loading) return <p className="text-center text-gray-500 py-6">Loading courses...</p>;
  if (error) return <p className="text-center text-red-600 py-6">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
