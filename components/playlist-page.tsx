"use client"

import { Button } from "@/components/ui/button"
import { Play, Heart, MoreHorizontal, Clock } from "lucide-react"
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

interface PlaylistPageProps {
  onTrackSelect: (track: Track) => void
  onPlay: () => void
}

export function PlaylistPage({ onTrackSelect, onPlay }: PlaylistPageProps) {
  const playlist = {
    id: "1",
    name: "My Playlist #1",
    description: "Your favorite songs in one place",
    image: "/placeholder.svg?height=300&width=300",
    owner: "You",
    followers: "1,234",
    totalTracks: 50,
    duration: "3 hr 2 min",
  }

  const tracks = [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "/placeholder.svg?height=40&width=40",
      addedAt: "5 days ago",
    },
    {
      id: "2",
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      image: "/placeholder.svg?height=40&width=40",
      addedAt: "1 week ago",
    },
    {
      id: "3",
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "/placeholder.svg?height=40&width=40",
      addedAt: "2 weeks ago",
    },
    {
      id: "4",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: "/placeholder.svg?height=40&width=40",
      addedAt: "3 weeks ago",
    },
    {
      id: "5",
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:21",
      image: "/placeholder.svg?height=40&width=40",
      addedAt: "1 month ago",
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
    <div className="space-y-6">
      {/* Playlist Header */}
      <div className="flex items-end gap-6">
        <Image
          src={playlist.image || "/placeholder.svg"}
          alt={playlist.name}
          width={232}
          height={232}
          className="rounded-lg shadow-2xl"
        />
        <div className="flex-1">
          <p className="text-sm font-medium mb-2">PLAYLIST</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{playlist.name}</h1>
          <p className="text-gray-300 mb-4">{playlist.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="font-medium">{playlist.owner}</span>
            <span>•</span>
            <span>{playlist.followers} likes</span>
            <span>•</span>
            <span>
              {playlist.totalTracks} songs, {playlist.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <Button
          size="icon"
          className="bg-green-500 hover:bg-green-400 rounded-full w-14 h-14"
          onClick={() => handleTrackPlay(tracks[0])}
        >
          <Play className="w-6 h-6 text-black ml-1" />
        </Button>
        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
          <Heart className="w-6 h-6" />
        </Button>
        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </div>

      {/* Track List */}
      <div className="space-y-1">
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
          <div className="col-span-1">#</div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-3 hidden md:block">ALBUM</div>
          <div className="col-span-2 hidden md:block">DATE ADDED</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="grid grid-cols-12 gap-4 px-4 py-2 rounded-lg hover:bg-white/10 group cursor-pointer"
            onClick={() => handleTrackPlay(track)}
          >
            <div className="col-span-1 flex items-center">
              <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
              <Play className="w-4 h-4 hidden group-hover:block" />
            </div>
            <div className="col-span-5 flex items-center gap-3">
              <Image
                src={track.image || "/placeholder.svg"}
                alt={track.title}
                width={40}
                height={40}
                className="rounded"
              />
              <div className="min-w-0">
                <p className="font-medium truncate">{track.title}</p>
                <p className="text-sm text-gray-400 truncate">{track.artist}</p>
              </div>
            </div>
            <div className="col-span-3 hidden md:flex items-center">
              <p className="text-sm text-gray-400 truncate">{track.album}</p>
            </div>
            <div className="col-span-2 hidden md:flex items-center">
              <p className="text-sm text-gray-400">{track.addedAt}</p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <p className="text-sm text-gray-400">{track.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
