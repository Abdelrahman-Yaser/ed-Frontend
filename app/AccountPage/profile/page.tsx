// app/personal-data/page.tsx
import React from "react";
import Image from "next/image";

export default function PersonalDataPage() {
  return (
    <>

      {/* Personal Data Content */}
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Personal Data
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <form>
            {/* Profile Image & File Input */}
            <div className="flex items-center mb-8 space-x-4">
              <Image
                src="/images/profile-picture.png"
                alt="Profile Photo"
                className="w-28 h-28 rounded-full object-cover"
                width={112}
                height={112}
              />
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Change Profile Photo
                </label>
                <input type="file" className="text-gray-700" title="Change Profile Photo" />
              </div>
            </div>

            {/* Full Name */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="fullName" className="sm:w-1/3 text-gray-700 font-medium mb-2 sm:mb-0">
                Full Name
              </label>
              <div className="sm:w-2/3">
                <input
                  type="text"
                  id="fullName"
                  defaultValue="old name from the database"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* New Password */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="newPassword" className="sm:w-1/3 text-gray-700 font-medium mb-2 sm:mb-0">
                New Password
              </label>
              <div className="sm:w-2/3">
                <input
                  type="password"
                  id="newPassword"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="confirmPassword" className="sm:w-1/3 text-gray-700 font-medium mb-2 sm:mb-0">
                Confirm New Password
              </label>
              <div className="sm:w-2/3">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Current Password */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="currentPassword" className="sm:w-1/3 text-gray-700 font-medium mb-2 sm:mb-0">
                Current Password
              </label>
              <div className="sm:w-2/3">
                <input
                  type="password"
                  id="currentPassword"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="flex items-center bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="flex items-center bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
