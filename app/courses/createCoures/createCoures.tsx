"use client";
import Link from "next/link";


export default function CreateCourese() {
  return (
    <>


      {/* Main Content */}
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Create New Post
          </h1>
          <Link href="post/editPost"> <button className="">Edit Post</button></Link>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto">
            <form>
              {/* Post Title */}
              <div className="mb-4">
                <label htmlFor="postTitle" className="block text-gray-700 font-medium mb-2">
                  Post Title
                </label>
                <input
                  type="text"
                  id="postTitle"
                  placeholder="Enter post title"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <label htmlFor="postContent" className="block text-gray-700 font-medium mb-2">
                  Post Content
                </label>
                <textarea
                  id="postContent"
                  rows={5}
                  placeholder="Enter post content"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Upload Image */}
              <div className="mb-4">
                <label htmlFor="postImage" className="block text-gray-700 font-medium mb-2">
                  Upload Image (Optional)
                </label>
                <input type="file" id="postImage" className="w-full" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}