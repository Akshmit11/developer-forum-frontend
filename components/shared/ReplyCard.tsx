"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, MessageSquare, Share2, MoreHorizontal, ChevronDown, ChevronUp } from "lucide-react"
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
import { Textarea } from "@/components/ui/textarea"

interface ReplyCardProps {
  reply: {
    id: string
    author: {
      id: string
      name: string
      avatar: string
      role: string
    }
    content: string
    createdAt: string
    upvotes: number
    downvotes: number
    replies: any[]
  }
  level: number
}

export function ReplyCard({ reply, level }: ReplyCardProps) {
  const [votes, setVotes] = useState({
    upvotes: reply.upvotes,
    downvotes: reply.downvotes,
    userVote: null as "up" | "down" | null,
  })
  const [showReplies, setShowReplies] = useState(true)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState("")

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

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the reply to the server
    console.log("Submitting reply to", reply.id, ":", replyText)
    setReplyText("")
    setShowReplyForm(false)
  }

  // Calculate left margin based on nesting level
  const marginLeft = level > 0 ? `${level * 24}px` : "0"

  return (
    <div style={{ marginLeft }}>
      <Card className="border border-zinc-100 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 border border-zinc-100">
                <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">{reply.author.name}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span>{reply.author.role}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>{reply.createdAt}</span>
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
        <CardContent className="pb-3">
          <p className="text-zinc-700">{reply.content}</p>
        </CardContent>
        <CardFooter className="pt-2 pb-3 border-t border-zinc-100">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className={`h-7 w-7 rounded-full ${votes.userVote === "up" ? "text-green-500" : "text-zinc-500"}`}
                onClick={() => handleVote("up")}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </Button>
              <span className="text-sm font-medium">{votes.upvotes}</span>
              <Button
                variant="ghost"
                size="icon"
                className={`h-7 w-7 rounded-full ${votes.userVote === "down" ? "text-red-500" : "text-zinc-500"}`}
                onClick={() => handleVote("down")}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </Button>
              <span className="text-sm font-medium">{votes.downvotes}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-500 gap-1 h-7 px-2"
              onClick={() => setShowReplyForm(!showReplyForm)}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span className="text-xs">Reply</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-zinc-500 gap-1 h-7 px-2">
              <Share2 className="h-3.5 w-3.5" />
              <span className="text-xs">Share</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Reply form */}
      {showReplyForm && (
        <motion.div
          className="mt-3 mb-4 pl-4 border-l-2 border-zinc-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <form onSubmit={handleSubmitReply}>
            <div className="mb-3">
              <Textarea
                placeholder="Write your reply here..."
                className="min-h-24 resize-none border-zinc-200 focus-visible:ring-zinc-400"
                value={replyText}
                onChange={(e: any) => setReplyText(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowReplyForm(false)}>
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={!replyText.trim()}>
                Post Reply
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Nested replies */}
      {reply.replies && reply.replies.length > 0 && (
        <div className="mt-3">
          <div className="flex items-center mb-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-500 p-0 h-6"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
              <span className="text-xs">{reply.replies.length} replies</span>
            </Button>
          </div>

          {showReplies && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {reply.replies.map((nestedReply) => (
                <ReplyCard key={nestedReply.id} reply={nestedReply} level={level + 1} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}
