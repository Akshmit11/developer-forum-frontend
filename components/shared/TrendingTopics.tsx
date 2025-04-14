"use client"

import Link from "next/link"
import { TrendingUp, MessageSquare, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrendingTopics() {
  const trendingTopics = [
    {
      id: 1,
      title: "What's new in Next.js 15?",
      replies: 42,
      views: 1204,
      author: "Sarah Chen",
      time: "2h ago",
    },
    {
      id: 2,
      title: "Best practices for React Server Components",
      replies: 38,
      views: 876,
      author: "Mark Johnson",
      time: "5h ago",
    },
    {
      id: 3,
      title: "How to optimize Tailwind CSS for production",
      replies: 27,
      views: 654,
      author: "Alex Williams",
      time: "1d ago",
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-zinc-900" />
        <h2 className="text-xl font-semibold text-zinc-900">Trending Now</h2>
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <div
            key={topic.id}
            className="p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors duration-150"
          >
            <Link href="#" className="block">
              <h3 className="font-medium text-zinc-900 mb-2 line-clamp-2">{topic.title}</h3>

              <div className="flex items-center text-sm text-zinc-500 mb-2">
                <span>{topic.author}</span>
                <span className="mx-2">•</span>
                <span>{topic.time}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center text-xs text-zinc-500">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{topic.replies}</span>
                </div>
                <div className="flex items-center text-xs text-zinc-500">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{topic.views}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <Button variant="outline" className="w-full border-zinc-200 text-zinc-600 hover:text-zinc-900">
          View all topics
        </Button>
      </div>
    </div>
  )
}
