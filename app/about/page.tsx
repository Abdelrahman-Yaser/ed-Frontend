// app/about/page.tsx
import React from "react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">
      <div className="max-w-4xl px-6 py-16 text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center">
          <i className="fas fa-info-circle text-blue-400 mr-3"></i> About Us
        </h1>
        <p className="text-lg mb-8">
          Welcome to <strong className="text-blue-400">ConnectEDU</strong>, a platform designed to connect learners, alumni, and educators for easier learning and collaboration.
        </p>

        {/* Mission & Vision Section */}
        <div className="grid gap-12 md:grid-cols-2 text-left">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Mission</h2>
            <p className="text-lg">
              Our mission is to provide a seamless learning experience by bridging the gap between students, professors, and alumni. We aim to create a community where knowledge is shared freely and efficiently.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Vision</h2>
            <p className="text-lg">
              We envision a world where education is accessible to everyone, and learning is a continuous journey that extends beyond the classroom.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our team is composed of passionate educators, developers, and designers who are dedicated to making learning more interactive and engaging.
          </p>
        </div>

        {/* Contact Button */}
        <div className="mt-10">
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
