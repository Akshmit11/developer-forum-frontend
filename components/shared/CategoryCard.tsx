"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"

interface CategoryProps {
  category: {
    id: number
    title: string
    description: string
    posts: number
    color: string
    borderColor: string
    icon: string
    iconBg: string
  }
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/category/${category.id}`} className="block h-full">
      <motion.div
        className={`h-full rounded-xl border ${category.borderColor} ${category.color} overflow-hidden`}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-lg ${category.iconBg} flex items-center justify-center text-xl`}>
              {category.icon}
            </div>
            <div className="flex items-center text-sm text-zinc-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{category.posts}</span>
            </div>
          </div>

          <h3 className="font-medium text-lg mb-2 text-zinc-900">{category.title}</h3>
          <p className="text-sm text-zinc-500 mb-4">{category.description}</p>

          <div className="flex items-center text-sm font-medium text-zinc-900">
            <span>Browse topics</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4 ml-1" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
