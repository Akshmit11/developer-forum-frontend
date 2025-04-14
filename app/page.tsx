"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/shared/Header"
import { CategoryCard } from "@/components/shared/CategoryCard"
import { TrendingTopics } from "@/components/shared/TrendingTopics"
import Image from "next/image"

export default function Home() {
  const categories = [
    {
      id: 1,
      title: "Design Systems",
      description: "Explore component libraries, design tokens, and system architecture",
      posts: 324,
      color: "bg-[#F9F5FF]",
      borderColor: "border-[#E4D7FF]",
      icon: "🎨",
      iconBg: "bg-[#F4EBFF]",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Discuss modern JavaScript, TypeScript, and frontend frameworks",
      posts: 256,
      color: "bg-[#FEF7E6]",
      borderColor: "border-[#FEEBC1]",
      icon: "🟨",
      iconBg: "bg-[#FFFAEB]",
    },
    {
      id: 3,
      title: "React & Next.js",
      description: "Share experiences with React, Next.js, and the React ecosystem",
      posts: 189,
      color: "bg-[#EFF8FF]",
      borderColor: "border-[#D1E9FF]",
      icon: "⚛️",
      iconBg: "bg-[#F0F9FF]",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Discuss user interfaces, experiences, and design principles",
      posts: 142,
      color: "bg-[#F8F0FC]",
      borderColor: "border-[#F5D0FE]",
      icon: "🖌️",
      iconBg: "bg-[#FAF5FF]",
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Talk about APIs, databases, and server-side technologies",
      posts: 118,
      color: "bg-[#ECFDF3]",
      borderColor: "border-[#ABEFC6]",
      icon: "🖥️",
      iconBg: "bg-[#F0FDF4]",
    },
    {
      id: 6,
      title: "Career Growth",
      description: "Share advice on job hunting, interviews, and professional development",
      posts: 97,
      color: "bg-[#FFF1F2]",
      borderColor: "border-[#FECDD3]",
      icon: "💼",
      iconBg: "bg-[#FFF1F2]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-zinc-900">Discussions for developers</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Join our community to ask questions, share ideas, and connect with fellow developers.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-zinc-900">Browse Categories</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input placeholder="Search categories" className="pl-10 bg-zinc-50 border-zinc-200 rounded-full h-10" />
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {categories.map((category) => (
                <motion.div key={category.id} variants={item}>
                  <CategoryCard category={category} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:w-1/4">
            <TrendingTopics />

            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-zinc-900">Top Contributors</h2>
              </div>

              <div className="space-y-5">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Avatar className="h-10 w-10 border border-zinc-100">
                      <AvatarImage src={`https://github.com/shadcn.png`} alt={`User ${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-zinc-900">Alex Johnson</p>
                        <Badge variant="outline" className="bg-zinc-50 text-xs">
                          {120 - i * 20} posts
                        </Badge>
                      </div>
                      <p className="text-sm text-zinc-500">Full-stack Developer</p>
                    </div>
                  </motion.div>
                ))}

                <Button variant="ghost" className="w-full text-zinc-500 hover:text-zinc-900 mt-2">
                  View all members
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-100 mt-16">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image 
                src={'/forum-logo.svg'}
                alt="Forum Logo"
                width={40}
                height={40}
              />
              <span className="text-zinc-500 text-sm">© 2025 Forum</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                About
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Terms
              </Link>
              <Link href="mailto:saxena.akshmit@gmail.com" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Email
              </Link>
              <Link href="https://x.com/aksh_mit00" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                X
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
