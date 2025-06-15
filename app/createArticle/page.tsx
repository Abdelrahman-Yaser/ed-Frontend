// app/create-article/page.tsx
'use client';
import { useEffect, useState } from 'react';
import AxiosInstance from '../axios/axios.js';
import Link from 'next/link';

export default function Article() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<{ _id: string, title: string, content: string }[]>([]);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // جلب بيانات المستخدم من localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.role);
      setToken(user.token);
    }

    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get('/articles');
      const data = Array.isArray(response.data.articles) ? response.data.articles : [];
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return alert('Unauthorized');

    try {
      await AxiosInstance.delete(`/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setArticles(prev => prev.filter(article => article._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete the article');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-16 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-extrabold">ConnectEDU</h1>
      </div>

      <div className="bg-gray-100 min-h-screen">
        {/* زر الإنشاء فقط لو المستخدم أدمن */}
        {userRole === 'admin' && (
          <div className="flex justify-center">
            <Link href="/posts/createPost">
              <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg relative top-2 right-2 md:top-4 md:right-4">
                Create Post
              </button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {articles.map((post) => (
            <div key={post._id} className="flex flex-col items-center w-full bg-white p-6 rounded-lg shadow-lg">
              {/* تعديل وحذف فقط لو المستخدم أدمن */}
              {userRole === 'admin' && (
                <div className="flex justify-between w-full mb-2">
                  <Link href={`/posts/editPost/${post._id}`}>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md">
                      Edit Post
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
                  >
                    Delete Post
                  </button>
                </div>
              )}

              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-700 text-center">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}