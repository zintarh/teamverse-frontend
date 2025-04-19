import Image from "next/image";

interface VersePlayerIntroProps {
  onJoin: () => void;
}

export default function VersePlayerIntro({ onJoin }: VersePlayerIntroProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center bg-[#131118] px-4 py-10 rounded-xl z-10 w-[90%] md:w-[50%] lg:w-[30%] mb-10 md:mb-20">
        <p className="font-bold text-3xl text-center">Join team-Labs</p>
        <button
          className="bg-[linear-gradient(255.22deg,#5552FF_-0.14%,#AA2C82_62.58%,#DA100B_81.98%)] text-white px-4 py-2 rounded-lg mt-4 w-[80%] cursor-pointer"
          onClick={onJoin}
        >
          Join
        </button>
      </div>

      <Image
        src="/entry_screen_bg.svg"
        height={100}
        width={200}
        alt="entry bg"
        className="absolute bottom-0 lg:-bottom-20 w-full object-cover"
      />
    </div>
  );
}
