import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/shared/Header"
import { CategoryClient } from "@/components/shared/CategoryClient" // Import the new client component

// Define interfaces for data structure consistency (optional but good practice)
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

// This remains an async Server Component
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params // Directly access id, no need for await params

  // Mock data fetching (replace with actual data fetching logic)
  const category: Category = {
    id,
    title: "React & Next.js",
    description: "Share your experiences with React, Next.js, and the React ecosystem",
    threads: 189, // This could be derived from threads.length if threads are fetched here
    color: "bg-[#EFF8FF]",
    borderColor: "border-[#D1E9FF]",
    icon: "⚛️",
    iconBg: "bg-[#F0F9FF]",
  }

  // Mock data for threads (replace with actual data fetching logic)
  const threads: Thread[] = [
    {
      id: "1",
      title: "What's new in Next.js 15 and how to upgrade from Next.js 14",
      author: { name: "Sarah Chen", avatar: "https://github.com/Akshmit11.png", role: "Senior Developer" },
      createdAt: "2h ago", lastActivity: "5m ago", upvotes: 42, replies: 18, isPinned: true, isHot: true,
    },
    {
      id: "2",
      title: "Best practices for implementing React Server Components in a large application",
      author: { name: "Alex Johnson", avatar: "https://github.com/Akshmit11.png", role: "Frontend Engineer" },
      createdAt: "5h ago", lastActivity: "1h ago", upvotes: 38, replies: 24, isPinned: false, isHot: true,
    },
    {
      id: "3",
      title: "How to optimize Tailwind CSS for production in Next.js applications",
      author: { name: "Mark Williams", avatar: "https://github.com/Akshmit11.png", role: "UI Developer" },
      createdAt: "1d ago", lastActivity: "3h ago", upvotes: 27, replies: 15, isPinned: false, isHot: false,
    },
    {
      id: "4",
      title: "Implementing authentication with NextAuth.js and Prisma",
      author: { name: "Emily Rodriguez", avatar: "https://github.com/Akshmit11.png", role: "Full Stack Developer" },
      createdAt: "2d ago", lastActivity: "12h ago", upvotes: 24, replies: 19, isPinned: false, isHot: false,
    },
    {
      id: "5",
      title: "Strategies for managing global state in React applications in 2025",
      author: { name: "David Kim", avatar: "https://github.com/Akshmit11.png", role: "React Specialist" },
      createdAt: "3d ago", lastActivity: "1d ago", upvotes: 31, replies: 27, isPinned: false, isHot: false,
    },
    {
      id: "6",
      title: "Exploring the new features in React 19 and their impact on development",
      author: { name: "Sophia Martinez", avatar: "https://github.com/Akshmit11.png", role: "Frontend Lead" },
      createdAt: "4d ago", lastActivity: "2d ago", upvotes: 35, replies: 22, isPinned: false, isHot: false,
    },
    {
      id: "7",
      title: "Building accessible components with React and shadcn/ui",
      author: { name: "James Wilson", avatar: "https://github.com/Akshmit11.png", role: "Accessibility Specialist" },
      createdAt: "5d ago", lastActivity: "3d ago", upvotes: 29, replies: 16, isPinned: false, isHot: false,
    },
  ]

  // Sorting logic is moved to CategoryClient

  // Animation variants are moved to CategoryClient

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-6 text-zinc-500">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-zinc-900">{category.title}</span>
        </nav>

        {/* Render the Client Component and pass data as props */}
        <CategoryClient category={category} threads={threads} />

        {/* Category Header, Thread List Header, Thread List, and Pagination are now inside CategoryClient */}

      </main>
    </div>
  )
}
