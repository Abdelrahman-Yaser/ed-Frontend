// app/materials/page.tsx
import Link from "next/link";
import React from "react";

export default function MaterialsPage() {
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
            <Link href="/courses" className="text-white transition">
              Courses
            </Link>
            <Link href="/posts" className="text-gray-300 hover:text-white transition">
              Posts
            </Link>
            <Link href="/articles" className="text-gray-300 hover:text-white transition">
              Articles
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

      {/* Materials Content */}
      <div className="container mx-auto mt-5 px-4">
        <div className="text-center text-2xl font-bold mb-5 text-gray-800">
          <i className="fas fa-book mr-2"></i> Course Materials
        </div>

        {/* Add Material Button */}
        <div className="text-center mb-4">
          <Link href="/add_material">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition inline-flex items-center">
              <i className="fas fa-plus mr-2"></i> Add Material
            </button>
          </Link>
        </div>

        {/* Materials List */}
        <div className="space-y-4">
          {/* Material Card 1 */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold text-gray-800">Lecture 1: Introduction</h4>
            <p className="text-gray-700 mt-2">
              Overview of the course and objectives.
            </p>
            <div className="mt-4 text-right space-x-2">
              <Link href="/edit_material">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm inline-flex items-center hover:bg-blue-600 transition">
                  <i className="fas fa-edit mr-1"></i> Edit
                </button>
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded text-sm inline-flex items-center hover:bg-red-600 transition">
                <i className="fas fa-trash mr-1"></i> Delete
              </button>
            </div>
          </div>

          {/* Material Card 2 */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold text-gray-800">Lecture 2: Fundamentals</h4>
            <p className="text-gray-700 mt-2">
              Basic concepts and key principles.
            </p>
            <div className="mt-4 text-right space-x-2">
              <Link href="/edit_material">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm inline-flex items-center hover:bg-blue-600 transition">
                  <i className="fas fa-edit mr-1"></i> Edit
                </button>
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded text-sm inline-flex items-center hover:bg-red-600 transition">
                <i className="fas fa-trash mr-1"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
