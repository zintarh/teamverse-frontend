import Image from "next/image"





export default function IceBreaker() {


    const labels = [
        {
            text: " Fun Questions",
            image: "/icons/fun-questions.svg"
        },
        {
            text: " Great for Remote Teams",
            image: "/icons/remote-teams.svg"
        },
        {
            text: " Great for Remote Teams",
            image: "/icons/hourglass.svg"
        },

    ]
    return (
        <div className="absolute left-0 top-0 w-[130px] h-[137px] md:w-[180px] md:h-[206px]   lg:w-[390px] lg:h-[412px] bg-[linear-gradient(126.3deg,_#FFFFFF_62%,_rgba(85,_82,_255,_0.76)_127.91%)]  flex items-center  justify-between flex-col rounded-[18px] transform rotate-[-3deg] text-[#000000] overflow-hidden animate-rotate-in-left  " >
            <div className=" flex flex-col items-start justify-start gap-3 md:gap-1 lg:gap-4 m-3 lg:ml-5 lg:mt-5 " >

                <h2 className="font-bold text-xs md:text-sm lg:text-[30px] lg:leading-[30px] " >Icebreaker Games</h2>
                <p className="font-medium text-[11px] md:text-xs lg:text-base " >Start meetings with fun! Quick prompts spark connections</p>
            </div>
            <ul className="hidden md:flex w-full  flex-col items-center justify-center ">
                {
                    labels.map((label, index) =>
                        <li key={index} className="bg-[#5552FF] px-3 py-2 lg:py-6 lg:px-4 opacity-[0.7]  w-full flex items-center justify-start gap-4 lg:text-base text-[10px] lg:font-bold  "
                            style={{
                                backgroundColor: index === 1 ? "transparent" : "#5552FF",
                                color: index === 1 ? "#5552FF" : "#FFFFFF"
                            }}>
                            <Image src={label.image} alt="icon" height={10} width={10} />
                            {label.text}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}