import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header w-full flex items-center justify-between gap-7 px-5 md:px-[97px] h-[86px] border-b-[1px] border-[#BDBDBD00]  " >
            <Link href={"/"} >
                <div className="flex flex-row items-center justify-center gap-2 md:gap-[14px] " >
                    <Image src="/logos/logo.svg" alt="logo" height={15} width={32.9} className=" w-[22.9px] h-[15px] md:w-[32px]  " />
                    <h3 className=" text-base md:text-2xl font-normal " >TEAMVERSE</h3>
                </div>
            </Link>


            <button className="bg-[#1C1924]  rounded-[12px] p-3  md:w-[171px] md:h-[48px] cursor-pointer text-sm md:text-base font-bold hover:scale-105 transition duration-200 ease-in-out " >
                <span className="bg-gradient-to-r from-[#5552FF] via-[#AA2C82] to-[#DA100B] bg-clip-text text-transparent " >
                    Connect to Wallet
                </span>
            </button>
        </header>
    )
}