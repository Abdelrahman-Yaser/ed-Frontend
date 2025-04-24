// app/create-article/page.tsx
import Link from "next/link";
import React from "react";

export default function CreateArticlePage() {
  return (
    <>

      {/* Main Content with Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Create New Article
          </h1>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto">
            <form>
              {/* Article Title */}
              <div className="mb-4">
                <label
                  htmlFor="articleTitle"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Article Title
                </label>
                <Link href="/editArticle">
  <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
    Edit Articles
  </button>
</Link>

                <input
                  type="text"
                  id="articleTitle"
                  placeholder="Enter article title"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Article Content */}
              <div className="mb-4">
                <label
                  htmlFor="articleContent"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Article Content
                </label>
                <textarea
                  id="articleContent"
                  rows={10}
                  placeholder="Enter article content"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Upload Image */}
              <div className="mb-4">
                <label
                  htmlFor="articleImage"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Upload Image (Optional)
                </label>
                <input type="file" id="articleImage" className="w-full" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Create Article
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
