'use client'

import React from 'react'
import Link from 'next/link'
import { Home, BarChart2, Settings } from 'lucide-react'



const navItems = [
  { name: 'Dashboard', icon: <Home size={18} />, href: '/' },
  { name: 'Analytics', icon: <BarChart2 size={18} />, href: '/analytics' },
  { name: 'Settings', icon: <Settings size={18} />, href: '/settings' },
]

export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white border-r shadow-sm hidden md:block">
      <div className="p-6 text-xl font-bold text-gray-800">My Dashboard</div>
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black">
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
