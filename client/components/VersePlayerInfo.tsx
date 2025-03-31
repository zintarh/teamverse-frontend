export default function VersePlayerInfo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-10 space-y-3">
        <p className="font-bold text-3xl text-center">Join team-Labs</p>
        <p className="text-[#A6A0BB] font-medium">
          A team for the decentralized world
        </p>
      </div>
      <form className="flex flex-col items-center justify-center bg-[#131118] px-3 py-5 rounded-xl w-[90%] md:w-[50%] lg:w-[30%] space-y-2">
        <div className="flex flex-col w-full">
          <label htmlFor="verseName" className="text-[#A6A0BB]">
            Verse-Name
          </label>
          <input
            type="text"
            id="verseName"
            name="verseName"
            placeholder="e.g karishika001"
            className="bg-[#1C1924] w-full px-4 py-3 rounded-lg mt-1 outline-none"
          />
        </div>
        <div className="flex flex-col w-full mt-2">
          <label htmlFor="email" className="text-[#A6A0BB]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="winie@gmail.com"
            className="bg-[#1C1924] w-full px-4 py-3 rounded-lg mt-1 outline-none"
          />
        </div>
        <button className="bg-[linear-gradient(255.22deg,#5552FF_-0.14%,#AA2C82_62.58%,#DA100B_81.98%)] text-white px-4 py-2 rounded-lg mt-4 w-full cursor-pointer">
          Continue
        </button>
      </form>
    </div>
  );
}
