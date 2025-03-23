"use client";

import { useState } from "react";
import VersePlayerInfo from "@/components/VersePlayerInfo";
import VersePlayerIntro from "@/components/VersePlayerIntro";

export default function JoinTeam() {
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  return (
    <div>
      {showPlayerInfo ? (
        <VersePlayerInfo />
      ) : (
        <VersePlayerIntro onJoin={() => setShowPlayerInfo(true)} />
      )}
    </div>
  );
}
