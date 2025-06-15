'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import AxiosInstance from "../../axios/axios";
import Logout from "../logout/logout.js"; // Ensure this exists and is valid

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setSuccess(true);
    }
  }, []);

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const response = await AxiosInstance.post("/auth/login", {
      email,
      password,
    });

    if (response.data.success) {
      const user = {
        id: response.data.user._id,
        role: response.data.user.role?.toLowerCase(),
        email: response.data.user.email,
      };

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userEmail", user.email);

      setSuccess(true);
    } else {
      setError("Login failed. Please try again.");
    }
  } catch (err: any) {
    setError(err.response?.data?.message || "An error occurred");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container mx-auto mt-5 flex flex-col justify-center items-center">
      <div className="mb-4 text-center">
        <Link href="/AccountPage" className="text-3xl font-bold text-gray-800 flex items-center">
          ConnectEDU
        </Link>
      </div>

      <div className="text-center mb-4 text-lg text-gray-700">
        A platform to connect learners, alumni, and educators for easier learning.
      </div>

      {success ? (
        <div className="text-center text-green-600">
          <p className="mb-4">You are logged in!</p>
          <Logout />
        </div>
      ) : (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h3 className="mb-4 text-xl font-semibold text-center text-gray-800">Login</h3>

          {error && <div className="text-center text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="mt-3 text-center">
              <Link href="/AccountPage/forgetPassword" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link href="/AccountPage/register" className="text-blue-500 hover:underline">
                Request Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
