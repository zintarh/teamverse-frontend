import Image from "next/image";
import IceBreaker from "./Hero-cards/IceBreaker";
import RankAndReward from "./Hero-cards/RankAndReward";
import TriviaBattles from "./Hero-cards/TriviaBattles";






export default function Hero() {
    return (
        <section className=" font-grotesk w-full min-h-screen  flex flex-col items-center justify-center gap-10 p-[5%] relative " >
            <div className=" flex flex-col items-center justify-center gap-4 text-center  z-10 " >
                <h1 className="max-w-[676px] text-[#FFFFFF] font-bold text-4xl md:text-[57px] md:leading-[64px] " >Next-level gaming, powered by web3</h1>
                <p className="font-medium text-sm md:text-2xl " >Promoting team bonding for teams, one game at a time</p>
                <button className="p-4 h-[56px] w-[200px] cursor-pointer bg-[linear-gradient(255.22deg,#5552FF_-0.14%,#AA2C82_62.58%,#DA100B_81.98%)] rounded-[12px] text-[#ffffff] text-xl font-bold hover:scale-105 transition duration-200 ease-in-out  " >Create team</button>
            </div>
            <div className="lg:w-[100%]   md:w-[60%] w-[98%] max-h-[425.36px] z-10 relative flex items-center justify-center  " >
                <IceBreaker />
                <RankAndReward />
                <TriviaBattles />
            </div>
            <div className="w-full h-[47.125vh] absolute left-0 bottom-0 z-0 " >
                <Image src={"/background/abrstract-dots.svg"} alt="image" height={100} width={100} className="w-full h-full object-cover " />
            </div>
        </section>
    )
}