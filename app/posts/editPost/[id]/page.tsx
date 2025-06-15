'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import AxiosInstance from "@/app/axios/axios";

export default function EditPostPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id"); // Only works in App Router
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    const fetchPost = async () => {
      try {
        const res = await AxiosInstance.get(`/posts/${postId}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        setError("Failed to load post data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }

    try {
      await AxiosInstance.put(`/posts/update/${postId}`, { title, content });
      router.push("/posts");
    } catch (err) {
      setError("Failed to update post.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 -z-10"></div>

      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">ConnectEDU</Link>
        </div>
      </nav>

      <div className="container mx-auto mt-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Edit Post</h1>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleUpdate}>
            <div className="mb-6">
              <label htmlFor="postTitle" className="block text-gray-700 font-medium mb-2">
                Post Title
              </label>
              <input
                type="text"
                id="postTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="postContent" className="block text-gray-700 font-medium mb-2">
                Post Content
              </label>
              <textarea
                id="postContent"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? 'Loading...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
