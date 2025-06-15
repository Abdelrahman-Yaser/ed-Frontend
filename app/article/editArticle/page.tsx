// app/edit-article/page.tsx
import React from "react";

export default function EditArticlePage() {
  return (
    <>
      {/* Navbar */}

      {/* Main Content */}
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Edit Article
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
                <input
                  type="text"
                  id="articleTitle"
                  defaultValue="Current Article Title"
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
                  defaultValue="Current article content goes here..."
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Upload New Image */}
              <div className="mb-4">
                <label
                  htmlFor="articleImage"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Upload New Image (Optional)
                </label>
                <input type="file" id="articleImage" className="w-full" />
              </div>

              {/* Save Changes Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
