'use client';
import Link from "next/link";
import AxiosInstance from "../../axios/axios"; // Adjust the import path as necessary
import { useState } from "react";
import Logout from "../logout/logout.js"; // Ensure this is a valid React component

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await AxiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(true);
        localStorage.setItem("token",response.data.accessToken);
        console.log("Login successful:", response.data);
        // Handle successful login (e.g., redirect, save token, etc.)
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
    <>
      <div className="container mx-auto mt-5 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-4 text-center">
          <Link href="/AccountPage" className="text-3xl font-bold text-gray-800 flex items-center">
            ConnectEDU
          </Link>
        </div>

        {/* Site Brief */}
        <div className="text-center mb-4 text-lg text-gray-700">
          A platform to connect learners, alumni, and educators for easier learning.
        </div>

        {/* Conditional Rendering */}
        {loading ? (
          <div className="text-center text-blue-500">Logging in...</div>
        ) : success ? (
          <div className="text-center text-green-500">
            <p>You are logged in! </p>

            <div className="mt-4">
   
         {<Logout />}

      
    </div>
          </div> 
        ) : (
          <>
            {error && <div className="text-center text-red-500 mb-4">{error}</div>}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
              <h3 className="mb-4 text-xl font-semibold text-center text-gray-800">Login</h3>

              <form onSubmit={handleLogin}>
                {/* Email */}
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

                {/* Password */}
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

                {/* Remember Me */}
                <div className="mb-4 flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-gray-700">
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                {/* Forgot Password */}
                <div className="mt-3 text-center">
                  <Link href="/AccountPage/forgetPassword" className="text-blue-500 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </form>

              {/* Register Link */}
              <div className="mt-4 text-center">
                <p className="text-gray-700">
                  Don't have an account?{" "}
                  <Link href="/AccountPage/register" className="text-blue-500 hover:underline">
                    Request Register
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
