"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Activity type definition
interface Activity {
  id: number
  user: {
    name: string
    avatar: string
  }
  image: string
  description: string
  timestamp: string
  liked: boolean
  tab?: string // Add this property
}

interface ActivityFeedProps {
  activeTab?: string
}

export default function ActivityFeed({ activeTab = "weekend" }: ActivityFeedProps) {
  const [activities, setActivities] = useState<Activity[]>([])

  // Load activities from localStorage
  const loadActivities = () => {
    if (typeof window !== "undefined") {
      const storedActivities = localStorage.getItem("weekendActivities")
      if (storedActivities) {
        setActivities(JSON.parse(storedActivities))
      }
    }
  }

  useEffect(() => {
    // Initial load
    loadActivities()

    // Listen for changes to localStorage
    window.addEventListener("storage", loadActivities)

    // Custom event listener for when we update localStorage directly
    window.addEventListener("localStorageUpdated", loadActivities)

    return () => {
      window.removeEventListener("storage", loadActivities)
      window.removeEventListener("localStorageUpdated", loadActivities)
    }
  }, [])

  const toggleLike = (id: number) => {
    const updatedActivities = activities.map((activity) =>
      activity.id === id ? { ...activity, liked: !activity.liked } : activity,
    )

    setActivities(updatedActivities)
    localStorage.setItem("weekendActivities", JSON.stringify(updatedActivities))
  }

  const filteredActivities = activities.filter((activity) => {
    if (!activity.tab) return activeTab === "weekend" // Default to weekend for old data
    return activity.tab === activeTab
  })

  if (filteredActivities.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-zinc-500">No activities yet in this channel. Share your {activeTab}!</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 space-y-6 no-scrollbar">
      {filteredActivities.map((activity) => (
        <div key={activity.id} className="space-y-2 mt-4 w-1/2 h-full">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">{activity.user.name}</span>
            </div>
            <span className="text-zinc-400 text-sm">{activity.timestamp}</span>
          </div>

          <div className="flex items-center">
            <div className="relative  overflow-hidden w-full max-h-[200px]">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.description}
                width={200}
                height={100}
                className="object-cover rounded-lg w-full h-[200px]"
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="ml-2 p-1 rounded-full border border-white hover:bg-zinc-800" onClick={() => toggleLike(activity.id)}>
              <Heart className={`w-3 h-3 ${activity.liked ? "text-red-500 fill-red-500" : "text-white"}`} />
            </button>
          </div>

          <p className="text-white">{activity.description}</p>
        </div>
      ))}
    </div>
  )
}
