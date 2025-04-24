// app/add-material/page.tsx
import Link from "next/link";
import React from "react";

export default function AddMaterialPage() {
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

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" title="Open Menu">
            <i className="fas fa-bars"></i>
            <span className="sr-only">Menu</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/courses" className="text-gray-300 hover:text-white transition">
              Courses
            </Link>
            <Link href="/posts" className="text-gray-300 hover:text-white transition">
              Posts
            </Link>
            <Link href="/articles" className="text-gray-300 hover:text-white transition">
              Articles
            </Link>
            <Link href="/materials" className="text-white transition">
              Materials
            </Link>
            <Link href="/about_us" className="text-gray-300 hover:text-white transition">
              About Us
            </Link>
          </div>

          {/* Profile & Logout */}
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
      <div className="container mx-auto mt-5 px-4">
        <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Add New Material</h1>
          <form>
            {/* Material Name */}
            <div className="mb-6">
              <label htmlFor="materialName" className="block text-gray-700 font-medium mb-2">
                Material Name
              </label>
              <input
                type="text"
                id="materialName"
                placeholder="Enter material name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Material Description */}
            <div className="mb-6">
              <label htmlFor="materialDescription" className="block text-gray-700 font-medium mb-2">
                Material Description
              </label>
              <textarea
                id="materialDescription"
                rows={5}
                placeholder="Enter material description"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Upload File */}
            <div className="mb-6">
              <label htmlFor="materialFile" className="block text-gray-700 font-medium mb-2">
                Upload File (Optional)
              </label>
              <input type="file" id="materialFile" className="w-full" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Add Material
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
