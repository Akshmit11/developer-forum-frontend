"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/shared/Header"
import { PostCard } from "@/components/shared/PostCard"
import { ReplyCard } from "@/components/shared/ReplyCard"

// Define the structure for thread data, mirroring the mock data structure
interface Author {
  id: string
  name: string
  avatar: string
  role: string
  joinedDate?: string
  posts?: number
}

interface Reply {
  id: string
  author: Author
  content: string
  createdAt: string
  upvotes: number
  downvotes: number
  replies: Reply[]
}

interface Thread {
  id: string
  title: string
  category: {
    id: string
    name: string
  }
  author: Author
  content: string
  createdAt: string
  upvotes: number
  downvotes: number
  replies: Reply[]
}

interface ThreadClientProps {
  thread: Thread
}

export function ThreadClient({ thread }: ThreadClientProps) {
  const [replyText, setReplyText] = useState("")

  // Animation variants
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

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the reply to the server
    console.log("Submitting reply:", replyText)
    setReplyText("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to category link */}
        <Link
          href={`/category/${thread.category.id}`}
          className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to {thread.category.name}
        </Link>

        {/* Thread title */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {thread.title}
        </motion.h1>

        {/* Original post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PostCard post={thread} isOriginalPost />
        </motion.div>

        {/* Reply count */}
        <div className="flex items-center gap-2 my-8">
          <h2 className="text-lg font-semibold text-zinc-900">Replies</h2>
          <span className="text-sm text-zinc-500">({thread.replies.length})</span>
        </div>

        {/* Replies */}
        <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
          {thread.replies.map((reply) => (
            <motion.div key={reply.id} variants={item}>
              <ReplyCard reply={reply} level={0} />
            </motion.div>
          ))}
        </motion.div>

        {/* Reply input */}
        <div className="mt-12 mb-8">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Leave a reply</h3>
          <form onSubmit={handleSubmitReply}>
            <div className="mb-4">
              <Textarea
                placeholder="Write your reply here..."
                className="min-h-32 resize-none border-zinc-200 focus-visible:ring-zinc-400"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={!replyText.trim()}>
                Post Reply
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}