"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressDots } from "@/components/ui/progress-dots"
import { GameStatsBar } from "@/components/ui/game-stats-bar"
import { TeammateGrid } from "@/components/ui/teammate-grid"
import { MysteryClue } from "@/components/ui/mystery-clue"
import { IconButton } from "@/components/ui/icon-button"
import { GameNavigation } from "@/components/ui/game-navigation"
import { UserInfo } from "@/components/ui/user-info"
import { HeaderActions } from "@/components/ui/header-actions"

// Sample data
const teammates = [
  {
    id: "jason",
    name: "Jason.uzora",
    avatar: "/images/avatars/jason.png",
  },
  {
    id: "jay",
    name: "Jay.tee.man",
    avatar: "/images/avatars/jay.png",
  },
  {
    id: "zee",
    name: "Zee.the.whiz",
    avatar: "/images/avatars/zee.png",
  },
  {
    id: "kiki",
    name: "KIKI_ATYVM",
    avatar: "",
  },
  {
    id: "zeek",
    name: "Zeek.d.whiz",
    avatar: "",
  },
]

export default function UIShowcase() {
  const [selectedTeammate, setSelectedTeammate] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Mystery Teammate UI Components</h1>

      <div className="space-y-12">
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="success">Success</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="pill">Pill Button</Button>
          </div>
        </section>

        {/* Avatars Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Avatars</h2>
          <div className="flex flex-wrap gap-4">
            <Avatar>
              <AvatarImage src="/images/avatars/jason.png" alt="User" />
              <AvatarFallback>JU</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage src="/images/avatars/jay.png" alt="User" />
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage src="/images/avatars/zee.png" alt="User" />
              <AvatarFallback>ZT</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>

            <Avatar className="w-16 h-16">
              <AvatarImage src="/images/avatars/jason.png" alt="User" />
              <AvatarFallback>JU</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the content of the card.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mystery Player</CardTitle>
              </CardHeader>
              <CardContent>
                <MysteryClue clue="This teammate biked on the weekend and made cinnamon rolls" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress and Status Elements */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Progress & Status Elements</h2>
          <Card className="p-6">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Progress Dots</h3>
                <ProgressDots total={5} current={2} />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Game Stats Bar</h3>
                <GameStatsBar timer="01:00" round={1} totalRounds={5} position="#1" points={0} />
              </div>
            </div>
          </Card>
        </section>

        {/* Teammate Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Teammate Grid</h2>
          <Card className="p-6">
            <TeammateGrid teammates={teammates} selectedTeammate={selectedTeammate} onSelect={setSelectedTeammate} />
          </Card>
        </section>

        {/* Result Messages */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Result Messages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Win Message</h3>
              <MysteryClue
                clue="This teammate biked on the weekend and made cinnamon rolls"
                teammateAvatar="/images/avatars/jason.png"
                teammateName="Jason.uzora"
                showStatus="win"
              />
            </Card>

            <Card className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Lose Message</h3>
              <MysteryClue
                clue="This teammate biked on the weekend and made cinnamon rolls"
                teammateAvatar="/images/avatars/jay.png"
                teammateName="Jay.tee.man"
                showStatus="lose"
              />
            </Card>
          </div>
        </section>

        {/* Icon Buttons */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <IconButton variant="primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </IconButton>

            <IconButton variant="secondary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </IconButton>

            <IconButton variant="tertiary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </IconButton>
          </div>
        </section>

        {/* Navigation and Header Components */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Navigation & Header Components</h2>
          <Card className="p-6">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Game Navigation</h3>
                <GameNavigation />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">User Info</h3>
                <UserInfo username="Zee.the.whiz" avatar="/images/avatars/zee.png" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Header Actions</h3>
                <HeaderActions
                  onJoinGame={() => alert("Join game clicked")}
                  onConnectWallet={() => alert("Connect wallet clicked")}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Full Flow Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Complete Flow Examples</h2>
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mystery Player</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <ProgressDots total={5} current={1} className="mb-8" />

                  <MysteryClue clue="This teammate biked on the weekend and made cinnamon rolls" />

                  <GameStatsBar timer="01:00" round={1} totalRounds={5} position="#1" points={0} />

                  <TeammateGrid
                    teammates={teammates}
                    selectedTeammate={selectedTeammate}
                    onSelect={setSelectedTeammate}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mystery Player (You are the mystery player)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <ProgressDots total={5} current={1} className="mb-8" />

                  <MysteryClue
                    clue="This teammate biked on the weekend and made cinnamon rolls"
                    isMysteryPlayer={true}
                  />

                  <GameStatsBar timer="01:00" round={1} totalRounds={5} position="#1" points={0} />

                  <TeammateGrid teammates={teammates} selectedTeammate={null} onSelect={() => {}} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
