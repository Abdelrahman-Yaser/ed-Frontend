import Link from "next/link";

export default function RequestRegistrationPage() {
    return (
        <>
  
            <div className="container mx-auto my-10 px-4">
                {/* Logo */}
                <div className="text-center mt-10 mb-6">
                    <Link href="/">

                             ConnectEDU
                      
                    </Link>
                </div>

                {/* Form Container */}
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                         Request Registration
                    </h3>

                    <form>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Full Name"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email Address"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Confirm Password"
                            />
                        </div>

                        {/* College/Alumni/Professor Year */}
                        <div className="mb-4">
                            <label htmlFor="collegeYear" className="block text-gray-700 font-medium mb-2">
                                Year of College or Alumni or Professor
                            </label>
                            <select
                                id="collegeYear"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Year of College or Alumni or Professor"
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                                <option value="alumni">Alumni</option>
                                <option value="professor">Professor</option>
                            </select>
                        </div>

                        {/* Profile Picture Upload */}
                        <div className="mb-6">
                            <label htmlFor="profilePicture" className="block text-gray-700 font-medium mb-2">
                                Upload Personal Picture
                            </label>
                            <input
                                type="file"
                                id="profilePicture"
                                accept="image/*"
                                required
                                className="w-full"
                                aria-label="Upload Personal Picture"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            Submit Request
                        </button>

                        {/* Links */}
                        <div className="mt-4 text-center">
                            <p className="text-gray-700">
                                Already have an account?{" "}
                                <Link href="/AccountPage/login">
                                    <button className="text-blue-500 hover:underline">Back to Login</button>
                                </Link>
                            </p>
                            <p className="text-gray-700 mt-2">
                                Don't have an account?{" "}
                                <Link href="/AccountPage/register">
                                    <button className="text-blue-500 hover:underline">Request Register</button>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
