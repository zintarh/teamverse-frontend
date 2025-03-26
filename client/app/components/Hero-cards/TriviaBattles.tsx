import Icons from "@/public/icons/Icons"

export default function TriviaBattles() {


    const icons = [Icons.LightneningCircle, Icons.Brain];
    return (
        <div className="absolute right-0  top-0 w-[130px] h-[137px] md:w-[180px] md:h-[206px]   lg:w-[390px] lg:h-[412px] bg-[linear-gradient(126.3deg,_#FFFFFF_62%,_rgba(170,44,130,0.76)_127.91%)]
  flex items-center  justify-between flex-col rounded-[18px] transform rotate-[2deg] text-[#000000] overflow-hidden animate-rotate-in-right  " >
            <div className=" flex flex-col items-start justify-start gap-3 md:gap-1 lg:gap-4 m-3 lg:ml-5 lg:mt-6 " >
                <h2 className="font-bold text-xs md:text-sm lg:text-[30px] lg:leading-[30px] " >Trivia Battles</h2>
                <p className="font-medium text-[9px] md:text-[10px] lg:text-base " > Start meetings with laughter & connection! Fun prompts spark conversations and build bonds fast </p>
            </div>
            <div className=" hidden md:flex items-center justify-center md:gap-2 lg:gap-6 ml-[50px] mb-6" >
                {
                    icons.map((Icon, index) => (
                        <div key={index} className=" bg-[#AA2C82] rounded-full flex flex-col items-center justify-center gap-3 h-[70px] w-[70px] lg:h-[200px] lg:w-[200px] p-4 " >

<Icon className=" lg:w-[100px] lg:h-[100px] w-5 h-5 "/>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}