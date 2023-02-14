// create below sidebar component in components/Sidebar.tsx
import { FC } from "react"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SidebarProps {
  className?: string
}

export const SidebarHome: FC<SidebarProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const { pathname } = useRouter()

  return (
    <div
      className={`flex flex-col flex-shrink-0 w-64 p-8 bg-slate-50 dark:bg-slate-800 ${className}`}
    >
      <div className="flex flex-col flex-1 h-0">
        <a href="/" className="flex items-center">
          <Icons.sprout className="w-8 h-8 mr-2 text-slate-900 dark:text-slate-100" />
          <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
            FTG
          </span>
        </a>
        <nav className="flex flex-col flex-1 mt-6 space-y-1">
          <a
            href="/"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md group hover:bg-slate-100 dark:hover:bg-slate-700 ${
              pathname === "/" ? "bg-slate-100 dark:bg-slate-700" : ""
            }`}
          >
            <Icons.home className="w-5 h-5 mr-4 text-slate-400 group-hover:text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-300" />
            <span>Home</span>
          </a>
          <a
            href="/docs"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md group hover:bg-slate-100 dark:hover:bg-slate-700 ${
              pathname === "/docs" ? "bg-slate-100 dark:bg-slate-700" : ""
            }`}
          >
            <Icons.bookOpen className="w-5 h-5 mr-4 text-slate-400 group-hover:text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-300" />
            <span>Docs</span>
          </a>
          <a
            href="/blog"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md group hover:bg-slate-100 dark:hover:bg-slate-700 ${
              pathname === "/blog" ? "bg-slate-100 dark:bg-slate-700" : ""
            }`}
          >
            <Icons.newspaper className="w-5 h-5 mr-4 text-slate- 400 group-hover:text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-300" />
            <span>Blog</span>
          </a>
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-slate-200 dark:border-slate-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md text-slate-600 group hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <Icons.cog className="w-5 h-5 mr-2 text-slate-400 group-hover:text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-300" />
              <span>Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" forceMount>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Icons.sun className="w-4 h-4 mr-2" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Icons.moon className="w-4 h-4 mr-2" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Icons.laptop className="w-4 h-4 mr-2" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
