"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void
  previewUrl: string | null
}

export default function ImageUploader({ onImageChange, previewUrl }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        onImageChange(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0])
    }
  }

  const handleRemoveImage = () => {
    onImageChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="w-full">
      {previewUrl ? (
        <div className="relative rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <Image src={previewUrl || "/placeholder.svg"} alt="Preview" fill className="w-1/2 h-1/2" />
          </div>
          <button
            type="button"
            className="absolute top-2 right-2 bg-black/60 rounded-full p-1"
            onClick={handleRemoveImage}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging ? "border-zinc-400 bg-zinc-800/50" : "border-zinc-700 hover:border-zinc-500"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-10 h-10 mx-auto mb-2 text-zinc-500" />
          <p className="text-zinc-400">Drag and drop an image or click to browse</p>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
        </div>
      )}
    </div>
  )
}
