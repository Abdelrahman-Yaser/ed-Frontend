'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from '../../axios/axios';
import type { FormEvent } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError('Title and content are required.');
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('You must be logged in to create a post.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await AxiosInstance.post(
        '/posts/create',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push('/posts');
    } catch (err: any) {
      console.error('Create Post Error:', err);
      setError(err.response?.data?.message || '❌ Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8">Create New Post</h1>

        <div className="bg-white text-black rounded-lg p-8 shadow-lg max-w-lg mx-auto">
          {error && (
            <div className="text-red-600 font-medium mb-4 border border-red-300 bg-red-100 px-4 py-2 rounded" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="postTitle" className="block font-semibold mb-1">
                Post Title
              </label>
              <input
                id="postTitle"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title"
                required
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label htmlFor="postContent" className="block font-semibold mb-1">
                Post Content
              </label>
              <textarea
                id="postContent"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your post content here..."
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
