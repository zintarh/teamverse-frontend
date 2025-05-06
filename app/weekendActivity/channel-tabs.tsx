"use client"

import { useState } from "react"

interface ChannelTabsProps {
  onTabChange?: (tab: string) => void
}

export default function ChannelTabs({ onTabChange }: ChannelTabsProps) {
  const [activeTab, setActiveTab] = useState("weekend")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className="flex space-x-2 px-4 pb-4 overflow-x-auto no-scrollbar">
      <button
        className={`px-2 py-1 bg-transparent border rounded-xl whitespace-nowrap transition-colors ${
          activeTab === "weekend"
            ? "border-white text-white"
            : "text-[#333333] bg-[#1F1F1F] border border-[#1F1F1F]"
        }`}
        onClick={() => handleTabChange("weekend")}
      >
        Weekend channel
      </button>
      <button
        className={`px-2 py-1 bg-transparent rounded-xl whitespace-nowrap transition-colors ${
          activeTab === "work"
            ? "border-white border text-white"
            : " text-[#333333] bg-[#1F1F1F] border border-[#1F1F1F]"
        }`}
        onClick={() => handleTabChange("work")}
      >
        Work station channel
      </button>
      <button
        className={`px-2 py-1 bg-transparent border rounded-xl whitespace-nowrap transition-colors ${
          activeTab === "playlist"
            ? "border-white text-white"
            : "text-[#333333] bg-[#1F1F1F] border border-[#1F1F1F]"
        }`}
        onClick={() => handleTabChange("playlist")}
      >
        Playlist channel
      </button>
    </div>
  )
}
