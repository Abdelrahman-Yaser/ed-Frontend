
import Link from "next/link";


export default function ForgotPasswordPage() {
  return (
    <>


      <div className="container mx-auto mt-10 px-4">
        {/* Logo */}
        <div className="text-center mt-10 mb-6">
          <Link href="/" className="text-3xl font-bold text-gray-800 flex items-center justify-center">
 ConnectEDU
          </Link>
        </div>

        {/* Form Container */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Reset your password
          </h3>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Send Email
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-700">
             
              <Link href="/AccountPage/login" className="text-blue-500 hover:underline">
                Back to login
              </Link>
            </p>
            <p className="text-gray-700 mt-2">
           
              <Link href="/AccountPage/register" className="text-blue-500 hover:underline">
                Request Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
