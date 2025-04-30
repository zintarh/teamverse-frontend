"use client"

import { useState } from "react"
import { Bitcoin } from "lucide-react"
import ImageUploader from "./image-uploader"
import ChannelTabs from "./channel-tabs"
import ActivityFeed from "./activity-feed"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function UploadWeekendActivity() {
  const [isUploading, setIsUploading] = useState(false)
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("weekend") // Added state for active tab
  const { toast } = useToast()

  const MAX_CHARS = 100

  const handleImageChange = (file: File | null) => {
    setImage(file)

    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    } else {
      setPreviewUrl(null)
    }
  }

  const handleTabChange = (tab: string) => {
    // Added handler for tab change
    setActiveTab(tab)
  }

  const handleSubmit = async () => {
    if (!image) {
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

    try {
      // Convert image to base64 for localStorage
      const reader = new FileReader()

      reader.onloadend = () => {
        // Create new activity
        const newActivity = {
          id: Date.now(),
          user: {
            name: "You",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          image: reader.result as string,
          description: description,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          liked: false,
          tab: activeTab, // Add this property
        }

        // Get existing activities from localStorage
        const existingActivities = JSON.parse(localStorage.getItem("weekendActivities") || "[]")

        // Add new activity and save back to localStorage
        const updatedActivities = [newActivity, ...existingActivities]
        localStorage.setItem("weekendActivities", JSON.stringify(updatedActivities))

        toast({
          title: "Success!",
          description: "Your weekend activity has been shared",
        })

        // Reset form
        setDescription("")
        setImage(null)
        setPreviewUrl(null)
        setIsModalOpen(false)

        // Force refresh of activity feed
        window.dispatchEvent(new Event("storage"))
      }

      if (image) {
        reader.readAsDataURL(image)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload your activity",
        variant: "destructive",
      })
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col rounded-lg h-full bg-[#141414] text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-[#333333]">Office space</h1>
        <div className="flex items-center bg-[#1F1F1F] rounded-full px-3 py-1.5">
          <Bitcoin className="w-5 h-5 text-yellow-500 mr-2" />
          <span className="font-medium">4,300</span>
        </div>
      </div>
      {/* Channel tabs */}
      <ChannelTabs onTabChange={handleTabChange} /> {/* Updated ChannelTabs call */}
      {/* Activity feed */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {" "}
        {/* Added no-scrollbar class */}
        <ActivityFeed activeTab={activeTab} />
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
      {/* Upload modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Share your weekend activity</h2>

            <div className="space-y-4">
              <ImageUploader onImageChange={handleImageChange} previewUrl={previewUrl} />

              <div>
                <textarea
                  className="w-full bg-zinc-800 rounded-md p-3 text-white resize-none"
                  placeholder="What did you do this weekend?"
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
