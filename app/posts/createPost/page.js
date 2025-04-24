'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import AxiosInstance from '../../axios/axios.js';


export default function CreatePost() {


  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    try {
      setLoading(true);
      await AxiosInstance.post('/posts/create', formData, {
        headers: {
         Authorization: `Bearer ${token}`,
       }} );
      
      alert('Post created successfully!');
    } catch (err) {
    
      alert('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Create New Post
          </h1>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto">
            {error && <p className="text-red-500 mb-4">{error}</p>}


            <form onSubmit={handleSubmit}>
              {/* Post Title */}
              <div className="mb-4">
                <label htmlFor="postTitle" className="block text-gray-700 font-medium mb-2">
                  Post Title
                </label>
                <input
                  type="text"
                  id="postTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <label htmlFor="postContent" className="block text-gray-700 font-medium mb-2">
                  Post Content
                </label>
                <textarea
                  id="postContent"
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter post content"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

