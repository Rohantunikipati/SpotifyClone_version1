"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart, Maximize2 } from "lucide-react"
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

interface MusicPlayerProps {
  track: Track
  isPlaying: boolean
  onPlayPause: () => void
}

export function MusicPlayer({ track, isPlaying, onPlayPause }: MusicPlayerProps) {
  return (
    <div className="h-20 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4">
      {/* Track Info */}
      <div className="flex items-center gap-3 w-1/4">
        <Image src={track.image || "/placeholder.svg"} alt={track.title} width={56} height={56} className="rounded" />
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{track.title}</p>
          <p className="text-xs text-gray-400 truncate">{track.artist}</p>
        </div>
        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:text-white">
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8"
            onClick={onPlayPause}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:text-white">
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-gray-400">1:23</span>
          <Slider
            defaultValue={[40]}
            max={100}
            step={1}
            className="flex-1 [&>span:first-child]:h-1 [&>span:first-child]:bg-gray-600 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0"
          />
          <span className="text-xs text-gray-400">{track.duration}</span>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
          <Volume2 className="w-4 h-4" />
        </Button>
        <Slider
          defaultValue={[70]}
          max={100}
          step={1}
          className="w-24 [&>span:first-child]:h-1 [&>span:first-child]:bg-gray-600 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0"
        />
        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
