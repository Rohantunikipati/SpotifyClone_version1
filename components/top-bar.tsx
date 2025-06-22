import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Search, Bell, User } from "lucide-react"

export function TopBar() {
  return (
    <div className="h-16 bg-black/50 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" className="rounded-full bg-black/50">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full bg-black/50">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="What do you want to listen to?"
            className="pl-10 bg-white/10 border-none text-white placeholder-gray-400 rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="rounded-full">
          <Bell className="w-4 h-4" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
