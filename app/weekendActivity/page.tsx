"use client"

import { useEffect } from "react"
import UploadWeekendActivity from "./upload-weekend-activity"

export default function Home() {
  // Initialize localStorage with empty array if it doesn't exist
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("weekendActivities")) {
      localStorage.setItem("weekendActivities", JSON.stringify([]))
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-end justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background/island-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content */}
      <div className="w-full max-w-md h-[94vh] mx-2 relative z-10">
        <UploadWeekendActivity />
      </div>
    </main>
  )
}
