// app/create-article/page.tsx
'use client';
import { useEffect, useState } from 'react';
import AxiosInstance from '../axios/axios.js';
import Link from 'next/link';

export default function Article() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<{ _id: string, title: string, content: string }[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await AxiosInstance.get('/articles'); // تأكد من اسم الـ endpoint
        const data = Array.isArray(response.data.articles) ? response.data.articles : [];
        setArticles(data);
        console.log('Articles:', response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-16 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-extrabold">ConnectEDU</h1>
      </div>

      <div className='bg-gray-100 min-h-screen'>
        <div className="flex justify-center">
          <Link href="/posts/createPost">
            <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg relative top-2 right-2 md:top-4 md:right-4">
              Create Post
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {articles.map((post) => (
            <div key={post._id} className="flex flex-col items-center w-full bg-white p-6 rounded-lg shadow-lg">
              <Link href={`/posts/editPost/${post._id}`}>
                <button className="mb-4 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md self-end">
                  Edit Post
                </button>
              </Link>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-700 text-center">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}