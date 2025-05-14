'use client'

import { motion } from 'framer-motion'
import React from 'react'


export default function AnimatedCard() {
  return (
    <motion.div
      className="bg-white shadow-lg p-6 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold">Revenue</h2>
      <p>$24,000</p>
    </motion.div>
  )
}
