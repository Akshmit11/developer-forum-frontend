"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Search, Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b border-zinc-100 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={'/forum-logo.svg'}
                alt="Forum Logo"
                width={40}
                height={40}
              />
            </motion.div>
            <span className="font-medium text-lg text-zinc-900">forum</span>
          </Link>

          <div className="hidden md:block">
            {/* <NavigationMenu>
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
                        { title: "Design Systems", description: "Explore component libraries and design tokens" },
                        { title: "JavaScript", description: "Discuss modern JavaScript and TypeScript" },
                        { title: "React & Next.js", description: "Share experiences with React ecosystem" },
                        { title: "UI/UX Design", description: "Talk about interfaces and experiences" },
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
            </NavigationMenu> */}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "240px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative hidden md:block"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search..."
                className="pl-10 w-full bg-zinc-50 border-zinc-200 rounded-full h-10"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            </motion.div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Button variant="ghost" size="icon" className="hidden md:flex rounded-full">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full h-9 w-9 p-0">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Bookmarks</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button className="hidden md:inline-flex gap-2 rounded-full">
            <Plus className="h-4 w-4" />
            <span>New Topic</span>
          </Button>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-medium">
                      F
                    </div>
                    <span className="font-medium text-lg">forum</span>
                  </Link>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <Input placeholder="Search..." className="pl-10 w-full rounded-full" />
                  </div>

                  <nav className="flex flex-col gap-1">
                    <Link href="/" className="py-2 px-3 rounded-md hover:bg-zinc-50 transition-colors text-zinc-900">
                      Home
                    </Link>
                    <Link
                      href="/categories"
                      className="py-2 px-3 rounded-md hover:bg-zinc-50 transition-colors text-zinc-900"
                    >
                      Categories
                    </Link>
                    <Link
                      href="/topics"
                      className="py-2 px-3 rounded-md hover:bg-zinc-50 transition-colors text-zinc-900"
                    >
                      Topics
                    </Link>
                    <Link
                      href="/members"
                      className="py-2 px-3 rounded-md hover:bg-zinc-50 transition-colors text-zinc-900"
                    >
                      Members
                    </Link>
                  </nav>

                  <Button className="gap-2 rounded-full">
                    <Plus className="h-4 w-4" />
                    <span>New Topic</span>
                  </Button>

                  <div className="mt-auto pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-sm text-zinc-500">alex@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
