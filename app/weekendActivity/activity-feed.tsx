"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Activity } from "../../src/types"

// Component prop types including activities and like handler
interface ActivityFeedProps {
  activities: Activity[]
  activeTab?: string
  onToggleLike: (id: number) => void // Function to handle liking
}

export default function ActivityFeed({ 
  activities, 
  activeTab = "weekend", 
  onToggleLike 
}: ActivityFeedProps) {
  
  // Filter activities based on the received list and active tab
  const filteredActivities = activities.filter((activity) => {
    return activity.tab === activeTab
  })

  if (filteredActivities.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-zinc-500">
          No activities found for the '{activeTab}' channel.
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 space-y-6 no-scrollbar">
      {filteredActivities.map((activity) => (
        // Use the passed-in onToggleLike handler
        <div key={activity.id} className="space-y-2 mt-4 w-1/2 h-full">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage
                  src={activity.user.avatar || "/avatars/placeholder.png"}
                  alt={activity.user.name}
                />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">{activity.user.name}</span>
            </div>
            <span className="text-zinc-400 text-sm">{activity.timestamp}</span>
          </div>

          <div className="flex items-center">
            <div className="relative  overflow-hidden w-full max-h-[200px]">
              <Image
                src={activity.image || "/background/placeholder.jpg"}
                alt={activity.description}
                width={200}
                height={100}
                className="object-cover rounded-lg w-full h-[200px]"
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="ml-2 p-1 rounded-full border border-white hover:bg-zinc-800" onClick={() => onToggleLike(activity.id)}>
              <Heart className={`w-3 h-3 ${activity.liked ? "text-red-500 fill-red-500" : "text-white"}`} />
            </button>
          </div>

          <p className="text-zinc-200 pt-1 text-sm">{activity.description}</p>
        </div>
      ))}
    </div>
  )
}
