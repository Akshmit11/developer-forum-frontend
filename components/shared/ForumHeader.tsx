"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export function ForumHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b border-zinc-100 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white font-semibold">
                F
              </div>
            </motion.div>
            <span className="font-semibold text-lg">forum</span>
          </Link>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/"  passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { title: "General Discussion", description: "Chat about anything related to development" },
                        { title: "JavaScript", description: "Discuss JavaScript frameworks and libraries" },
                        { title: "React & Next.js", description: "Share your React and Next.js experiences" },
                        { title: "UI/UX Design", description: "Talk about design principles and tools" },
                      ].map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-50 focus:bg-zinc-50"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-zinc-500">{item.description}</p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/topics"  passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Topics</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/members"  passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Members</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "240px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative hidden md:block"
            >
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search..."
                className="pl-8 w-full bg-zinc-50 border-zinc-200"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            </motion.div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white font-semibold">
                      F
                    </div>
                    <span className="font-semibold text-lg">forum</span>
                  </Link>

                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
                    <Input placeholder="Search..." className="pl-8 w-full" />
                  </div>

                  <nav className="flex flex-col gap-2">
                    <Link href="/" className="py-2 px-3 rounded-md hover:bg-zinc-100 transition-colors">
                      Home
                    </Link>
                    <Link href="/categories" className="py-2 px-3 rounded-md hover:bg-zinc-100 transition-colors">
                      Categories
                    </Link>
                    <Link href="/topics" className="py-2 px-3 rounded-md hover:bg-zinc-100 transition-colors">
                      Topics
                    </Link>
                    <Link href="/members" className="py-2 px-3 rounded-md hover:bg-zinc-100 transition-colors">
                      Members
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">User Name</p>
                        <p className="text-sm text-zinc-500">user@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button className="hidden md:inline-flex">New Topic</Button>
        </div>
      </div>
    </header>
  )
}
