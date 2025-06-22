"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Search, Library, Plus, Heart, Music, Mic2 } from "lucide-react"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const mainMenuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "search", label: "Search", icon: Search },
    { id: "library", label: "Your Library", icon: Library },
  ]

  const libraryItems = [
    { id: "playlist", label: "Create Playlist", icon: Plus },
    { id: "liked", label: "Liked Songs", icon: Heart },
    { id: "podcast", label: "Your Episodes", icon: Mic2 },
  ]

  const playlists = [
    "My Playlist #1",
    "Discover Weekly",
    "Release Radar",
    "Chill Hits",
    "Rock Classics",
    "Pop Mix",
    "Indie Folk",
    "Electronic Vibes",
  ]

  return (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Music className="w-8 h-8 text-green-500" />
          <span className="text-xl font-bold">Spotify 2.0</span>
        </div>

        <nav className="space-y-2">
          {mainMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start gap-3 text-gray-300 hover:text-white ${
                currentPage === item.id ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => onPageChange(item.id)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      <div className="px-6 pb-4">
        <div className="space-y-2">
          {libraryItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-300 hover:text-white"
              onClick={() => onPageChange(item.id)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6">
        <div className="border-t border-gray-800 pt-4">
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {playlists.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-sm text-gray-400 hover:text-white"
                  onClick={() => onPageChange("playlist")}
                >
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
