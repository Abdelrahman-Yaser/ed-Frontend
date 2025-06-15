'use client';

import { useEffect, useState } from 'react';
import AxiosInstance from '../axios/axios.js';
import Link from 'next/link';

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<{ _id: string, title: string, content: string }[]>([]);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const role = localStorage.getItem('userRole');
      if (role) setUserRole(role);

      try {
        const response = await AxiosInstance.get('/posts');
        const data = Array.isArray(response.data.posts) ? response.data.posts : [];
        setPosts(data);
        console.log('Posts:', data);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await AxiosInstance.delete(`/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete post');
    }
  };

  const isAdmin = userRole === 'admin';

  return (
    <>
      {/* Header */}
      <div className="flex justify-center items-center h-16 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-extrabold">ConnectEDU</h1>
      </div>

      {/* Content */}
      <div className="bg-gray-100 min-h-screen pb-12">
        {/* Create Post Button */}
        {isAdmin && (
          <div className="flex justify-end pr-6 pt-6">
            <Link href="/posts/createPost">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                Create Post
              </button>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {loading ? (
            <p className="col-span-full text-center text-gray-600">Loading posts...</p>
          ) : error ? (
            <p className="col-span-full text-center text-red-500">{error}</p>
          ) : posts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No posts found.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col items-center w-full bg-white p-6 rounded-lg shadow-lg relative"
              >
                {isAdmin && (
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Link href={`/posts/editPost/${post._id}`}>
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition shadow-md">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition shadow-md"
                    >
                      Delete
                    </button>
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 text-center">{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
