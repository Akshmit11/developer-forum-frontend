"use client"

import { useState } from "react"
import { ArrowUp, ArrowDown, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  post: {
    id: string
    author: {
      id: string
      name: string
      avatar: string
      role: string
      joinedDate?: string
      posts?: number
    }
    content: string
    createdAt: string
    upvotes: number
    downvotes: number
  }
  isOriginalPost?: boolean
}

export function PostCard({ post, isOriginalPost = false }: PostCardProps) {
  const [votes, setVotes] = useState({
    upvotes: post.upvotes,
    downvotes: post.downvotes,
    userVote: null as "up" | "down" | null,
  })

  const handleVote = (type: "up" | "down") => {
    setVotes((prev) => {
      // If user already voted this way, remove the vote
      if (prev.userVote === type) {
        return {
          upvotes: type === "up" ? prev.upvotes - 1 : prev.upvotes,
          downvotes: type === "down" ? prev.downvotes - 1 : prev.downvotes,
          userVote: null,
        }
      }

      // If user is changing their vote
      if (prev.userVote !== null) {
        return {
          upvotes: type === "up" ? prev.upvotes + 1 : prev.upvotes - 1,
          downvotes: type === "down" ? prev.downvotes + 1 : prev.downvotes - 1,
          userVote: type,
        }
      }

      // If user is voting for the first time
      return {
        upvotes: type === "up" ? prev.upvotes + 1 : prev.upvotes,
        downvotes: type === "down" ? prev.downvotes + 1 : prev.downvotes,
        userVote: type,
      }
    })
  }

  return (
    <Card className="border border-zinc-100 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-zinc-100">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-zinc-900">{post.author.name}</span>
                {isOriginalPost && <Badge variant="outline">Author</Badge>}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{post.author.role}</span>
                {post.author.joinedDate && (
                  <>
                    <span className="text-zinc-300">•</span>
                    <span>Joined {post.author.joinedDate}</span>
                  </>
                )}
                {post.author.posts && (
                  <>
                    <span className="text-zinc-300">•</span>
                    <span>{post.author.posts} posts</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>{post.createdAt}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Copy Link</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Block User</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div
          className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-strong:text-zinc-900 prose-li:text-zinc-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </CardContent>
      <CardFooter className="pt-2 pb-4 border-t border-zinc-100">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full ${votes.userVote === "up" ? "text-green-500" : "text-zinc-500"}`}
              onClick={() => handleVote("up")}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{votes.upvotes}</span>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full ${votes.userVote === "down" ? "text-red-500" : "text-zinc-500"}`}
              onClick={() => handleVote("down")}
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{votes.downvotes}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-zinc-500 gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Reply</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-zinc-500 gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
