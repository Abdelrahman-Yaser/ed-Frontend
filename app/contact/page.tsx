'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Contact Information</h4>
              <p className="text-gray-600"><i className="fas fa-envelope text-blue-500"></i> <strong>Email:</strong> support@connectedu.com</p>
              <p className="text-gray-600"><i className="fas fa-phone text-blue-500"></i> <strong>Phone:</strong> +1 (123) 456-7890</p>
              <p className="text-gray-600"><i className="fas fa-map-marker-alt text-blue-500"></i> <strong>Address:</strong> 123 Education St, Knowledge City, World</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white relative  h-80 flex items-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row   ">
          <h5 className="text-xl font-semibold">ConnectEDU</h5>
          <p className="text-gray-400 text-center md:text-left">A platform to connect learners, alumni, and educators.</p>
          <nav className="flex gap-4">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/courses" className="text-gray-300 hover:text-white transition">Courses</Link>
            <Link href="/posts" className="text-gray-300 hover:text-white transition">Posts</Link>
            <Link href="/articles" className="text-gray-300 hover:text-white transition">Articles</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
