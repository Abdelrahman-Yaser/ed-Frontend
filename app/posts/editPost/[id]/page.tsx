'use client';

import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../../axios/axios.js';
import { useParams, useRouter } from 'next/navigation';

export default function EditPost() {
  const { id } = useParams();
  const router = useRouter();

  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('الرجاء تسجيل الدخول أولاً');
        router.push('/login');
        return;
      }

      try {
        const res = await AxiosInstance.get(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Fetched post data:', res.data);
        setPostData({
          title: res.data.post.title,
          content: res.data.post.content,
        });
      } catch (err) {
        console.error('Failed to fetch post data:', err);
        alert('فشل في تحميل بيانات البوست.');
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPost();
  }, [id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!postData.title || !postData.content) {
      alert('يرجى تعبئة جميع الحقول');
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('يرجى تسجيل الدخول أولاً');
      return;
    }

    try {
      await AxiosInstance.put(`/posts/${id}`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/posts');
    } catch (err) {
      console.error('Failed to update post:', err);
      alert('حدث خطأ أثناء تحديث البوست');
    }
  };

  if (loading) {
    return <p className="text-center py-6">جاري تحميل بيانات البوست...</p>;
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">تعديل البوست</h1>

        <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">عنوان البوست</label>
            <input
              type="text"
              id="title"
              name="title"
              value={postData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">محتوى البوست</label>
            <textarea
              id="content"
              name="content"
              value={postData.content}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              حفظ التعديلات
            </button>
            <button
              type="button"
              onClick={() => router.push('/posts')}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
