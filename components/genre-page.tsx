"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
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

interface GenrePageProps {
  onTrackSelect: (track: Track) => void
  onPlay: () => void
}

export function GenrePage({ onTrackSelect, onPlay }: GenrePageProps) {
  const genre = {
    name: "Pop",
    description: "The biggest songs in pop music right now",
    color: "from-pink-500 to-purple-600",
  }

  const popularArtists = [
    { id: "1", name: "Taylor Swift", image: "/placeholder.svg?height=200&width=200", followers: "90M" },
    { id: "2", name: "Ariana Grande", image: "/placeholder.svg?height=200&width=200", followers: "85M" },
    { id: "3", name: "Dua Lipa", image: "/placeholder.svg?height=200&width=200", followers: "75M" },
    { id: "4", name: "Ed Sheeran", image: "/placeholder.svg?height=200&width=200", followers: "70M" },
    { id: "5", name: "Billie Eilish", image: "/placeholder.svg?height=200&width=200", followers: "65M" },
  ]

  const popularAlbums = [
    { id: "1", title: "Midnights", artist: "Taylor Swift", image: "/placeholder.svg?height=200&width=200" },
    { id: "2", title: "Future Nostalgia", artist: "Dua Lipa", image: "/placeholder.svg?height=200&width=200" },
    { id: "3", title: "Positions", artist: "Ariana Grande", image: "/placeholder.svg?height=200&width=200" },
    { id: "4", title: "Happier Than Ever", artist: "Billie Eilish", image: "/placeholder.svg?height=200&width=200" },
    { id: "5", title: "÷ (Divide)", artist: "Ed Sheeran", image: "/placeholder.svg?height=200&width=200" },
  ]

  const topTracks = [
    {
      id: "1",
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      duration: "3:20",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "2",
      title: "Flowers",
      artist: "Miley Cyrus",
      album: "Endless Summer Vacation",
      duration: "3:20",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "3",
      title: "Unholy",
      artist: "Sam Smith ft. Kim Petras",
      album: "Gloria",
      duration: "2:36",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "4",
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      duration: "2:47",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "5",
      title: "Bad Habit",
      artist: "Steve Lacy",
      album: "Gemini Rights",
      duration: "3:51",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const handleTrackPlay = (track: any) => {
    const selectedTrack: Track = {
      id: track.id,
      title: track.title,
      artist: track.artist,
      album: track.album,
      duration: track.duration,
      image: track.image,
      isPlaying: false,
    }
    onTrackSelect(selectedTrack)
    onPlay()
  }

  return (
    <div className="space-y-8">
      {/* Genre Header */}
      <div className={`bg-gradient-to-b ${genre.color} p-8 rounded-lg`}>
        <h1 className="text-6xl font-bold mb-4">{genre.name}</h1>
        <p className="text-xl text-white/80">{genre.description}</p>
      </div>

      {/* Popular Artists */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularArtists.map((artist) => (
            <Card
              key={artist.id}
              className="bg-transparent hover:bg-white/10 transition-colors cursor-pointer group p-4"
            >
              <CardContent className="p-0 text-center">
                <div className="relative mb-4">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={200}
                    height={200}
                    className="rounded-full w-full aspect-square object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Play className="w-4 h-4 text-black ml-0.5" />
                  </Button>
                </div>
                <h3 className="font-medium mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-400">Artist • {artist.followers} followers</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Albums */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularAlbums.map((album) => (
            <Card
              key={album.id}
              className="bg-transparent hover:bg-white/10 transition-colors cursor-pointer group p-4"
            >
              <CardContent className="p-0">
                <div className="relative mb-4">
                  <Image
                    src={album.image || "/placeholder.svg"}
                    alt={album.title}
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Play className="w-4 h-4 text-black ml-0.5" />
                  </Button>
                </div>
                <h3 className="font-medium mb-1">{album.title}</h3>
                <p className="text-sm text-gray-400">{album.artist}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Tracks */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular tracks</h2>
        <div className="space-y-2">
          {topTracks.map((track, index) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 group cursor-pointer"
              onClick={() => handleTrackPlay(track)}
            >
              <span className="text-gray-400 w-4">{index + 1}</span>
              <Image
                src={track.image || "/placeholder.svg"}
                alt={track.title}
                width={40}
                height={40}
                className="rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{track.title}</p>
                <p className="text-sm text-gray-400 truncate">{track.artist}</p>
              </div>
              <p className="text-sm text-gray-400 hidden md:block">{track.album}</p>
              <p className="text-sm text-gray-400">{track.duration}</p>
              <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
