'use client';

import { useEffect, useState } from 'react';
import LoginPage from './login/page';
import PersonalDataPage from './profile/page';

export default function AccountPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('accessToken'); // Optional: Clear token too
    setEmail(null);
  };

  return (
    <div className="container mx-auto mt-10">
      {email ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome 👋</h2>
          <p className="text-lg mb-4">{email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}
