// app/edit-post/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EditPostPage() {
  const [title, setTitle] = useState("Current Post Title");
  const [content, setContent] = useState("Current post content goes here...");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    // You can now send this formData using fetch or Axios
    // Example: axios.put(`/api/posts/${postId}`, formData)
    console.log("Submitting post edit...");
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 -z-10"></div>

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold flex items-center">
            <i className="fas fa-graduation-cap mr-2"></i> ConnectEDU
          </Link>
          <button className="md:hidden text-white" title="Open Menu">
            <i className="fas fa-bars"></i>
            <span className="sr-only">Menu</span>
          </button>
          <div className="hidden md:flex space-x-6">
            <Link href="/courses" className="text-gray-300 hover:text-white transition">Courses</Link>
            <Link href="/posts" className="text-white transition">Posts</Link>
            <Link href="/articles" className="text-gray-300 hover:text-white transition">Articles</Link>
            <Link href="/about_us" className="text-gray-300 hover:text-white transition">About Us</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/profile" className="text-white hover:text-gray-300 transition">
              <i className="fa-solid fa-user mr-1"></i> My Profile
            </Link>
            <Link
              href="/"
              className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-gray-800 transition"
            >
              <i className="fas fa-sign-out-alt mr-1"></i> Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Edit Post</h1>
          <form onSubmit={handleSubmit}>
            {/* Post Title */}
            <div className="mb-6">
              <label htmlFor="postTitle" className="block text-gray-700 font-medium mb-2">Post Title</label>
              <input
                type="text"
                id="postTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Post Content */}
            <div className="mb-6">
              <label htmlFor="postContent" className="block text-gray-700 font-medium mb-2">Post Content</label>
              <textarea
                id="postContent"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Upload Image */}
            <div className="mb-6">
              <label htmlFor="postImage" className="block text-gray-700 font-medium mb-2">Upload New Image (Optional)</label>
              <input
                type="file"
                id="postImage"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="w-full"
              />
            </div>

            {/* Save Changes */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
