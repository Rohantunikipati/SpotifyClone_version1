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

interface HomePageProps {
  onTrackSelect: (track: Track) => void
  onPlay: () => void
}

export function HomePage({ onTrackSelect, onPlay }: HomePageProps) {
  const recentlyPlayed = [
    { id: "1", title: "Liked Songs", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
    { id: "2", title: "Discover Weekly", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
    { id: "3", title: "Release Radar", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
    { id: "4", title: "Daily Mix 1", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
    { id: "5", title: "Chill Hits", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
    { id: "6", title: "Pop Mix", image: "/placeholder.svg?height=200&width=200", type: "playlist" },
  ]

  const madeForYou = [
    {
      id: "1",
      title: "Daily Mix 1",
      subtitle: "The Weeknd, Dua Lipa, and more",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      title: "Daily Mix 2",
      subtitle: "Ed Sheeran, Taylor Swift, and more",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      title: "Daily Mix 3",
      subtitle: "Drake, Post Malone, and more",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      title: "Discover Weekly",
      subtitle: "Your weekly mixtape of fresh music",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "5",
      title: "Release Radar",
      subtitle: "Catch all the latest music from artists you follow",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const handleTrackPlay = (item: any) => {
    const track: Track = {
      id: item.id,
      title: item.title,
      artist: "Various Artists",
      album: "Playlist",
      duration: "3:45",
      image: item.image,
      isPlaying: false,
    }
    onTrackSelect(track)
    onPlay()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Good evening</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyPlayed.map((item) => (
            <Card key={item.id} className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer group">
              <CardContent className="flex items-center p-4 gap-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded"
                />
                <span className="font-medium">{item.title}</span>
                <Button
                  size="icon"
                  className="ml-auto bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleTrackPlay(item)}
                >
                  <Play className="w-4 h-4 text-black ml-0.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {madeForYou.map((item) => (
            <Card key={item.id} className="bg-transparent hover:bg-white/10 transition-colors cursor-pointer group p-4">
              <CardContent className="p-0">
                <div className="relative mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    onClick={() => handleTrackPlay(item)}
                  >
                    <Play className="w-4 h-4 text-black ml-0.5" />
                  </Button>
                </div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{item.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
