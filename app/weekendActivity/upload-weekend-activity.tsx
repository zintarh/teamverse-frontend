"use client"

import { useState, useEffect } from "react"
import { Bitcoin } from "lucide-react"
import ImageUploader from "./image-uploader"
import ChannelTabs from "./channel-tabs"
import ActivityFeed from "./activity-feed"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/useToast"
import type { Activity } from "../../src/types"

const hardcodedActivities: Activity[] = [
  {
    id: 1,
    user: { name: "Zee", avatar: "/avatars/zee.png" },
    image: "/hiking1.png",
    description: "Hiking in the mountains",
    timestamp: "10:30 AM",
    liked: false,
    tab: "weekend",
  },
  {
    id: 2,
    user: { name: "Jaytee", avatar: "/avatars/jaytee.png" },
    image: "/hike.jpg",
    description: "Work day",
    timestamp: "11:15 AM",
    liked: true,
    tab: "work",
  },
  {
    id: 3,
    user: { name: "Jayson", avatar: "/avatars/jayson.png" },
    image: "/beach.jpg",
    description: "Beach day with friends",
    timestamp: "1:45 PM",
    liked: false,
    tab: "weekend",
  },
  {
    id: 4,
    user: { name: "Zee", avatar: "/avatars/zee.png" },
    image: "/watch.png",
    description: "Favorite work playlist",
    timestamp: "3:00 PM",
    liked: true,
    tab: "playlist",
  },
  {
    id: 5,
    user: { name: "Ethan", avatar: "/avatars/jaytee.png" },
    image: "/hike.jpg",
    description: "Went hiking today, again",
    timestamp: "4:20 PM",
    liked: false,
    tab: "work",
  },
]

export default function UploadWeekendActivity() {
  // State management moved here
  const [activities, setActivities] = useState<Activity[]>(hardcodedActivities)
  const [isUploading, setIsUploading] = useState(false)
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("weekend")
  const { toast } = useToast()

  const MAX_CHARS = 100

  const handleImageChange = (file: File | null) => {
    setImage(file)

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }

    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    } else {
      setPreviewUrl(null)
    }
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  // Like handler function moved here
  const toggleLike = (id: number) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, liked: !activity.liked } : activity,
      ),
    )
  }

  const handleSubmit = async () => {
    if (!image || !previewUrl) { 
      toast({
        title: "Error",
        description: "Please upload an image",
        variant: "destructive",
      })
      return
    }

    if (!description.trim()) {
      toast({
        title: "Error",
        description: "Please add a description",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      // Create the new activity object
      const newActivity: Activity = {
        id: Date.now(), // Simple unique ID
        user: { name: "You", avatar: "/avatars/placeholder.png" }, // Placeholder for current user
        image: previewUrl, // Use the generated preview URL
        description: description,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        liked: false,
        tab: activeTab,
      }

      // Add the new activity to the state
      setActivities([newActivity, ...activities])

      toast({
        title: "Success!",
        description: `Your ${activeTab} activity has been shared.`,
      })

      // Reset form
      setDescription("")
      setImage(null)
      // Keep previewUrl in state until the next image change or unmount
      // setPreviewUrl(null)
      setIsModalOpen(false)
      setIsUploading(false)

    } catch (error) {
      console.error("Upload error:", error) // Log the actual error
      toast({
        title: "Error",
        description: "Failed to share your activity. Please try again.",
        variant: "destructive",
      })
      setIsUploading(false)
    }
  }

  // Cleanup object URLs on component unmount
  useEffect(() => {
    // This is the cleanup function that runs when the component unmounts
    // or just before the effect runs again if dependencies change.
    return () => {
      if (previewUrl) {
        console.log("Revoking Object URL on unmount/change:", previewUrl)
        URL.revokeObjectURL(previewUrl)
      }
    }
    // The effect runs when previewUrl changes. 
    // We only need the cleanup part here.
  }, [previewUrl]) 

  return (
    <div className="flex flex-col rounded-lg h-full bg-[#141414] text-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-zinc-400">Office space</h1>
          <div className="flex items-center bg-[#1F1F1F] rounded-full px-3 py-1.5">
            <Bitcoin className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="font-medium">4,300</span>
          </div>
        </div>
        {/* Channel tabs */}
        <ChannelTabs onTabChange={handleTabChange} />
        {/* Activity feed - Pass state and handler down */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <ActivityFeed 
            activities={activities} 
            activeTab={activeTab} 
            onToggleLike={toggleLike} 
          />
        </div>
        {/* Upload button */}
        <div className="p-4 mt-auto">
          <Button
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-6 rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Upload weekend update
          </Button>
        </div>
      </div>
      
      {/* Upload modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Share your {activeTab} activity</h2>

            <div className="space-y-4">
              <ImageUploader onImageChange={handleImageChange} previewUrl={previewUrl} />

              <div>
                <textarea
                  className="w-full bg-zinc-800 rounded-md p-3 text-white resize-none"
                  placeholder={`What did you do this ${activeTab}?`}
                  rows={3}
                  maxLength={MAX_CHARS}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-end text-xs text-zinc-400 mt-1">
                  {description.length}/{MAX_CHARS}
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-zinc-700 text-white hover:bg-zinc-800"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isUploading}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-zinc-100 text-black hover:bg-zinc-200"
                  onClick={handleSubmit}
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Share"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
