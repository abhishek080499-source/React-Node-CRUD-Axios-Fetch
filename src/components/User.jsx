import React from 'react'

const User = ({ elem }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-lg rounded-xl p-6 m-4 w-80 border border-indigo-200 hover:shadow-2xl transition-transform transform hover:scale-105  ">
      {/* Avatar Circle */}
      <div className="flex items-center justify-center mb-4">
        <div className="bg-indigo-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold">
          {elem.fullName.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* User Info */}
      <h3 className="text-xl font-semibold text-gray-800 text-center">{elem.fullName}</h3>
      <p className="text-sm text-gray-600 text-center mt-1">
        <span className="font-medium">Email:</span> {elem.email}
      </p>

      {elem.password && (
        <p className="text-sm text-gray-600 text-center mt-1">
          <span className="font-medium">Password:</span> {elem.password}
        </p>
      )}

    </div>
  )
}

export default User
