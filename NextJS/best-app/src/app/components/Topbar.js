'use client'

import React from 'react'

export function Topbar() {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between bg-white border-b shadow-sm">
      <h1 className="text-xl font-semibold">Welcome Back!</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  )
}
