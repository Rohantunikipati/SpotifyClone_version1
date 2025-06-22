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

interface AlbumPageProps {
  onTrackSelect: (track: Track) => void
  onPlay: () => void
}

export function AlbumPage({ onTrackSelect, onPlay }: AlbumPageProps) {
  const album = {
    id: "1",
    name: "After Hours",
    artist: "The Weeknd",
    year: "2020",
    image: "/placeholder.svg?height=300&width=300",
    totalTracks: 14,
    duration: "56 min 16 sec",
    genre: "Pop",
  }

  const tracks = [
    { id: "1", title: "Alone Again", duration: "4:10", trackNumber: 1 },
    { id: "2", title: "Too Late", duration: "3:59", trackNumber: 2 },
    { id: "3", title: "Hardest To Love", duration: "3:31", trackNumber: 3 },
    { id: "4", title: "Scared To Live", duration: "3:10", trackNumber: 4 },
    { id: "5", title: "Snowchild", duration: "4:07", trackNumber: 5 },
    { id: "6", title: "Escape From LA", duration: "5:55", trackNumber: 6 },
    { id: "7", title: "Heartless", duration: "3:18", trackNumber: 7 },
    { id: "8", title: "Faith", duration: "4:43", trackNumber: 8 },
    { id: "9", title: "Blinding Lights", duration: "3:20", trackNumber: 9 },
    { id: "10", title: "In Your Eyes", duration: "3:57", trackNumber: 10 },
  ]

  const handleTrackPlay = (track: any) => {
    const selectedTrack: Track = {
      id: track.id,
      title: track.title,
      artist: album.artist,
      album: album.name,
      duration: track.duration,
      image: album.image,
      isPlaying: false,
    }
    onTrackSelect(selectedTrack)
    onPlay()
  }

  return (
    <div className="space-y-6">
      {/* Album Header */}
      <div className="flex items-end gap-6">
        <Image
          src={album.image || "/placeholder.svg"}
          alt={album.name}
          width={232}
          height={232}
          className="rounded-lg shadow-2xl"
        />
        <div className="flex-1">
          <p className="text-sm font-medium mb-2">ALBUM</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{album.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <span className="font-medium text-white">{album.artist}</span>
            <span>•</span>
            <span>{album.year}</span>
            <span>•</span>
            <span>
              {album.totalTracks} songs, {album.duration}
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
          <div className="col-span-10">TITLE</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {tracks.map((track) => (
          <div
            key={track.id}
            className="grid grid-cols-12 gap-4 px-4 py-2 rounded-lg hover:bg-white/10 group cursor-pointer"
            onClick={() => handleTrackPlay(track)}
          >
            <div className="col-span-1 flex items-center">
              <span className="text-gray-400 group-hover:hidden">{track.trackNumber}</span>
              <Play className="w-4 h-4 hidden group-hover:block" />
            </div>
            <div className="col-span-10 flex items-center">
              <div className="min-w-0">
                <p className="font-medium truncate">{track.title}</p>
                <p className="text-sm text-gray-400 truncate">{album.artist}</p>
              </div>
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
