"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { MusicPlayer } from "@/components/music-player"
import { HomePage } from "@/components/home-page"
import { SearchPage } from "@/components/search-page"
import { PlaylistPage } from "@/components/playlist-page"
import { AlbumPage } from "@/components/album-page"
import { GenrePage } from "@/components/genre-page"

export default function SpotifyClone() {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentTrack, setCurrentTrack] = useState({
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "/placeholder.svg?height=60&width=60",
    isPlaying: false,
  })
  const [isPlaying, setIsPlaying] = useState(false)

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
      case "search":
        return <SearchPage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
      case "playlist":
        return <PlaylistPage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
      case "album":
        return <AlbumPage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
      case "genre":
        return <GenrePage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
      default:
        return <HomePage onTrackSelect={setCurrentTrack} onPlay={() => setIsPlaying(true)} />
    }
  }

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black p-6">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
      <MusicPlayer track={currentTrack} isPlaying={isPlaying} onPlayPause={() => setIsPlaying(!isPlaying)} />
    </div>
  )
}
