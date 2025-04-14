import { ThreadClient } from "@/components/shared/ThreadClient" // Import the new client component

// This is now a Server Component
export default async function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  // Mock thread data (in a real app, fetch this data server-side)
  const { id } = await params
  const thread = {
    id,
    title: "What's new in Next.js 15 and how to upgrade from Next.js 14",
    category: {
      id: "3",
      name: "React & Next.js",
    },
    author: {
      id: "1",
      name: "Sarah Chen",
      avatar: "https://github.com/Akshmit11.png",
      role: "Senior Developer",
      joinedDate: "Jan 2022",
      posts: 128,
    },
    content: `
      <p>Next.js 15 was just released with several exciting new features and improvements. I've been testing it out and wanted to share my experience and a guide on how to upgrade from Next.js 14.</p>
      
      <h3>Key New Features:</h3>
      
      <ul>
        <li><strong>Async Request APIs:</strong> A step towards a simplified rendering and caching model.</li>
        <li><strong>Caching Semantics:</strong> fetch requests, GET Route Handlers, and client navigations are no longer cached by default.</li>
        <li><strong>React 19 Support:</strong> Full support for React 19, React Compiler (Experimental), and hydration error improvements.</li>
        <li><strong>Turbopack Dev (Stable):</strong> Performance and stability improvements.</li>
        <li><strong>unstable_after API (Experimental):</strong> Execute code after a response finishes streaming.</li>
        <li><strong>instrumentation.js API:</strong> New API for server lifecycle observability.</li>
        <li><strong>Enhanced Forms (next/form):</strong> Enhance HTML forms with client-side navigation.</li>
        <li><strong>Self-hosting Improvements:</strong> More control over Cache-Control headers.</li>
      </ul>
      
      <h3>Upgrade Guide:</h3>
      
      <p>Here's a step-by-step guide to upgrade your Next.js 14 project to Next.js 15:</p>
      
      <ol>
        <li>Update your dependencies in package.json</li>
        <li>Run npm install or yarn install</li>
        <li>Check for breaking changes in the documentation</li>
        <li>Test your application thoroughly</li>
      </ol>
      
      <p>Has anyone else tried Next.js 15 yet? What's your experience been like?</p>
    `,
    createdAt: "2h ago",
    upvotes: 42,
    downvotes: 3,
    replies: [
      {
        id: "1",
        author: {
          id: "2",
          name: "Alex Johnson",
          avatar: "https://github.com/Akshmit11.png",
          role: "Frontend Engineer",
        },
        content:
          "I've been using Next.js 15 for a week now and the performance improvements are noticeable. The Turbopack improvements alone make it worth upgrading. Have you noticed any issues with the new caching semantics?",
        createdAt: "1h ago",
        upvotes: 12,
        downvotes: 0,
        replies: [
          {
            id: "3",
            author: {
              id: "1",
              name: "Sarah Chen",
              avatar: "https://github.com/Akshmit11.png",
              role: "Senior Developer",
            },
            content:
              "Good question! I had to adjust a few things because of the new caching behavior. The main thing to watch out for is that fetch requests aren't cached by default anymore. You need to explicitly set the cache option if you want caching.",
            createdAt: "45m ago",
            upvotes: 8,
            downvotes: 0,
            replies: [],
          },
          {
            id: "4",
            author: {
              id: "3",
              name: "Emily Rodriguez",
              avatar: "https://github.com/Akshmit11.png",
              role: "Full Stack Developer",
            },
            content:
              "I found this change to be more intuitive actually. It's easier to reason about caching when it's explicit rather than implicit. The documentation is really clear about the changes too.",
            createdAt: "30m ago",
            upvotes: 6,
            downvotes: 1,
            replies: [],
          },
        ],
      },
      {
        id: "2",
        author: {
          id: "4",
          name: "Mark Williams",
          avatar: "https://github.com/Akshmit11.png",
          role: "UI Developer",
        },
        content:
          "The React 19 support is what I'm most excited about. The new React compiler looks promising for performance optimization. Has anyone experimented with it yet?",
        createdAt: "55m ago",
        upvotes: 9,
        downvotes: 0,
        replies: [],
      },
    ],
  }

  // Render the client component, passing the thread data as props
  return <ThreadClient thread={thread} />
}
