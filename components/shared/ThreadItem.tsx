"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp, MessageSquare, Pin, Flame } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ThreadItemProps {
  thread: {
    id: string
    title: string
    author: {
      name: string
      avatar: string
      role: string
    }
    createdAt: string
    lastActivity: string
    upvotes: number
    replies: number
    isPinned: boolean
    isHot: boolean
  }
}

export function ThreadItem({ thread }: ThreadItemProps) {

  return (
    <div
      className="py-4 px-1 hover:bg-gray-200/50 rounded-md"
    >
      <Link href={`/thread/${thread.id}`} className="block">
        <div className="flex items-start gap-4">
          {/* Upvote Button */}
          <div className="hidden sm:flex flex-col items-center gap-1 pt-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100">
              <ArrowUp className="h-4 w-4 text-zinc-500" />
            </Button>
            <span className="text-sm font-medium">{thread.upvotes}</span>
          </div>

          {/* Thread Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              {thread.isPinned && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="px-1.5 py-0 h-5 border-zinc-200 bg-zinc-50">
                        <Pin className="h-3 w-3 text-zinc-500" />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Pinned Thread</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              {thread.isHot && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="px-1.5 py-0 h-5 border-orange-200 bg-orange-50">
                        <Flame className="h-3 w-3 text-orange-500" />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hot Thread</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>

            <h3 className="text-lg font-medium text-zinc-900 mb-2 line-clamp-2">{thread.title}</h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={thread.author.avatar || "/placeholder.svg"} alt={thread.author.name} />
                  <AvatarFallback>{thread.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{thread.author.name}</span>
              </div>

              <div className="flex items-center gap-4">
                <span>Posted {thread.createdAt}</span>
                <span>Active {thread.lastActivity}</span>
              </div>

              <div className="flex items-center gap-3 sm:ml-auto">
                <div className="flex items-center gap-1 sm:hidden">
                  <ArrowUp className="h-4 w-4" />
                  <span>{thread.upvotes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{thread.replies}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
