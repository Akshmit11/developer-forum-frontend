"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ThreadItem } from "@/components/shared/ThreadItem"
import { Separator } from "@/components/ui/separator"

// Define interfaces for props
interface Author {
  name: string
  avatar: string
  role: string
}

interface Thread {
  id: string
  title: string
  author: Author
  createdAt: string
  lastActivity: string
  upvotes: number
  replies: number
  isPinned: boolean
  isHot: boolean
}

interface Category {
  id: string
  title: string
  description: string
  threads: number
  color: string
  borderColor: string
  icon: string
  iconBg: string
}

interface CategoryClientProps {
  category: Category
  threads: Thread[]
}

export function CategoryClient({ category, threads }: CategoryClientProps) {
  const [sortBy, setSortBy] = useState<"recent" | "upvotes">("recent")

  // Sort threads based on the selected option
  const sortedThreads = [...threads].sort((a, b) => {
    if (sortBy === "upvotes") {
      return b.upvotes - a.upvotes
    }
    // Assuming initial threads array is sorted by recency
    // If not, add logic here: return new Date(b.createdAt) - new Date(a.createdAt);
    // Need to ensure createdAt is in a format Date can parse or adjust parsing.
    // For mock data, it's just strings like "2h ago", so direct date comparison isn't possible without parsing/conversion.
    // Sticking to the original logic for now.
    return 0
  })

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <>
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-lg ${category.iconBg} flex items-center justify-center text-xl`}>
            {category.icon}
          </div>
          <h1 className="text-2xl font-bold text-zinc-900">{category.title}</h1>
        </div>
        <p className="text-zinc-500 mb-4">{category.description}</p>

        <div className="flex items-center text-sm text-zinc-500">
          <span>{category.threads} threads</span>
          <span className="mx-2">•</span>
          {/* Assuming last activity is derived or static for now */}
          <span>Last activity 5m ago</span>
        </div>
      </div>

      {/* Thread List Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-zinc-900">Threads</h2>
          <Badge variant="outline" className="bg-zinc-50">
            {threads.length}
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                <span>{sortBy === "recent" ? "Most Recent" : "Most Upvoted"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("recent")}>Most Recent</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("upvotes")}>Most Upvoted</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Thread</span>
          </Button>
        </div>
      </div>

      {/* Thread List */}
      <motion.div className="space-y-1" variants={container} initial="hidden" animate="show">
        {sortedThreads.map((thread) => (
          <div key={thread.id}>
            <ThreadItem thread={thread} />
            <Separator className="my-1" />
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span className="mx-1">...</span>
          <Button variant="outline" size="sm">
            12
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </>
  )
}