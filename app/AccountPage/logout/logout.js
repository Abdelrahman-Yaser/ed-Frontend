'use client';
import AxiosInstance from "../../axios/axios";

export default function Logout() {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await AxiosInstance.post(
        '/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Logged out successfully!');
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Failed to log out.');
    }
  };

  return (
    <button
    className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg relative top-2 right-2 md:top-4 md:right-4"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
