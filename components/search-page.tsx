"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Search } from "lucide-react"
import Image from "next/image"

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  image: string
  isPlaying: boolean
}

interface SearchPageProps {
  onTrackSelect: (track: Track) => void
  onPlay: () => void
}

export function SearchPage({ onTrackSelect, onPlay }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const genres = [
    { id: "1", name: "Pop", color: "bg-pink-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "2", name: "Hip-Hop", color: "bg-orange-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "3", name: "Rock", color: "bg-red-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "4", name: "Electronic", color: "bg-purple-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "5", name: "Jazz", color: "bg-blue-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "6", name: "Classical", color: "bg-green-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "7", name: "Country", color: "bg-yellow-500", image: "/placeholder.svg?height=200&width=200" },
    { id: "8", name: "R&B", color: "bg-indigo-500", image: "/placeholder.svg?height=200&width=200" },
  ]

  const searchResults = [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "2",
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "3",
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "4",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const handleTrackPlay = (result: any) => {
    const track: Track = {
      id: result.id,
      title: result.title,
      artist: result.artist,
      album: result.album,
      duration: result.duration,
      image: result.image,
      isPlaying: false,
    }
    onTrackSelect(track)
    onPlay()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white text-black placeholder-gray-500 rounded-full h-12"
          />
        </div>
      </div>

      {searchQuery ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          <div className="space-y-2">
            {searchResults.map((result, index) => (
              <div key={result.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 group">
                <span className="text-gray-400 w-4">{index + 1}</span>
                <Image
                  src={result.image || "/placeholder.svg"}
                  alt={result.title}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{result.title}</p>
                  <p className="text-sm text-gray-400 truncate">{result.artist}</p>
                </div>
                <p className="text-sm text-gray-400 hidden md:block">{result.album}</p>
                <p className="text-sm text-gray-400">{result.duration}</p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleTrackPlay(result)}
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {genres.map((genre) => (
              <Card
                key={genre.id}
                className={`${genre.color} hover:scale-105 transition-transform cursor-pointer relative overflow-hidden h-32`}
              >
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                  <Image
                    src={genre.image || "/placeholder.svg"}
                    alt={genre.name}
                    width={80}
                    height={80}
                    className="absolute -bottom-2 -right-2 rotate-12 rounded"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
