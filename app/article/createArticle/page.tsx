'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from '../../axios/axios.js';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userRole, setUserRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    const storedToken = localStorage.getItem('accessToken');

    if (storedRole && storedToken) {
      setUserRole(storedRole);
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token || userRole !== 'admin') {
      setError('غير مصرح لك بإنشاء المقالات');
      return;
    }

    try {
      console.log('Submitting:', { title, content }); // تأكيد القيم
      const res = await AxiosInstance.post(
        '/articles/create',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Article created:', res.data);
      router.push('/article'); // تأكد أن هذا هو المسار الصحيح للصفحة بعد الإنشاء
    } catch (err) {
      setError('فشل في إنشاء المقال. تأكد من صحة البيانات.');
      console.error('Submission error:', err);
    }
  };

  if (userRole !== 'admin') {
    return (
      <div className="p-8 text-center text-red-600 font-bold">
        غير مصرح لك بالدخول إلى هذه الصفحة.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">إنشاء مقال جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">العنوان</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            maxLength={100}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="أدخل عنوان المقال (بحد أقصى 100 حرف)"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">المحتوى</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            rows={8}
            maxLength={2000}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="أدخل محتوى المقال (بحد أقصى 2000 حرف)"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          إنشاء المقال
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}
