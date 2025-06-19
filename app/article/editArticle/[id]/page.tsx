'use client';

import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../../axios/axios.js';
import { useParams, useRouter } from 'next/navigation';

export default function EditArticle() {
  const { id } = useParams();
  const router = useRouter();

  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await AxiosInstance.get(`/articles/${id}`);
        const article = res.data.artical;

        if (!article) {
          alert('لم يتم العثور على المقال');
          router.push('/article');
          return;
        }

        setArticleData({
          title: article.title,
          content: article.content,
        });
      } catch (err) {
        console.error('فشل في جلب بيانات المقال:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchArticle();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!articleData.title || !articleData.content) {
      alert('يرجى تعبئة جميع الحقول');
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('يرجى تسجيل الدخول أولاً');
      return;
    }

    try {
      await AxiosInstance.put(`/articles/${id}`, articleData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/article');
    } catch (err) {
      console.error('فشل في تحديث المقال:', err);
      alert('حدث خطأ أثناء تحديث المقال');
    }
  };

  if (loading) return <p className="text-center py-6">جاري التحميل...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">تعديل المقال</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              عنوان المقال
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={articleData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل عنوان المقال"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              محتوى المقال
            </label>
            <textarea
              id="content"
              name="content"
              value={articleData.content}
              onChange={handleChange}
              rows={6}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل محتوى المقال"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              حفظ التغييرات
            </button>
            <button
              type="button"
              onClick={() => router.push('/article')}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
