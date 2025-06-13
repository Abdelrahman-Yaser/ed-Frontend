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

      {/* Hero Section */}
      <section className="hero-section text-center text-white py-20 bg-blue-600 relative z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to ConnectEDU</h1>
          <p className="text-xl mb-6">
            A platform to connect learners, alumni, and educators for easier learning and collaboration.
          </p>
          <Link href="/AccountPage/register" className="btn bg-white text-blue-600 px-6 py-3 rounded-lg text-lg mr-4 hover:bg-gray-100">
            Sign Up
          </Link>
          <Link href="/AccountPage/" className="btn border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-800">
            Login
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              ConnectEDU is a platform designed to bridge the gap between students, professors, and alumni. Our mission is to provide a seamless learning experience where knowledge is shared freely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-book', title: 'Courses', text: 'Access a wide range of courses tailored to your needs.' },
              { icon: 'fa-comments', title: 'Posts', text: 'Engage with the community through posts and discussions.' },
              { icon: 'fa-newspaper', title: 'Articles', text: 'Read and share insightful articles on various topics.' },
            ].map((f) => (
              <div key={f.title} className="text-center text-gray-800 p-6 bg-white rounded shadow">
                <i className={`fas ${f.icon} fa-3x mb-4 text-blue-600`}></i>
                <h4 className="text-2xl font-medium mb-2">{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: '"ConnectEDU has transformed the way I learn and collaborate with others."', name: 'John Doe' },
              { text: '"The platform is user-friendly and has everything I need for my studies."', name: 'Jane Smith' },
              { text: '"I love how easy it is to connect with alumni and professors."', name: 'Ahmed Ali' },
            ].map((t) => (
              <div key={t.name} className="bg-white p-6 rounded shadow">
                <p className="mb-4">{t.text}</p>
                <p className="text-right font-semibold">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center text-white py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Join ConnectEDU today and take your learning experience to the next level.</p>
          <a href="/register" className="btn bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-semibold mb-4">ConnectEDU</h5>
            <p className="text-gray-400">A platform to connect learners, alumni, and educators.</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/posts">Posts</Link></li>
              <li><Link href="/articles">Articles</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
              <input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
              <textarea id="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Send</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
