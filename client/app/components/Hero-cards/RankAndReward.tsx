import Icons from "@/public/icons/Icons";

export default function RankAndReward() {
    const icons = [Icons.RewardIcon, Icons.RankIcon];

    return (
        <div className="w-[130px] h-[137px] md:w-[180px] md:h-[206px] lg:w-[390px] lg:h-[412px] bg-[linear-gradient(126.3deg,_#FFFFFF_62%,_rgba(255,_5,_5,_0.76)_127.91%)] flex items-center justify-between flex-col rounded-[18px] transform text-[#000000] overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-3 md:gap-1 lg:gap-4 m-3 lg:ml-5 lg:mt-6">
                <h2 className="font-bold text-xs md:text-sm lg:text-[30px] lg:leading-[30px]">
                    Ranks & Rewards
                </h2>
                <p className="font-medium text-[11px] md:text-xs lg:text-base">
                    Celebrate wins & keep the friendly competition alive!
                </p>
            </div>
            <div className="hidden md:flex items-center justify-end gap-6 ml-[120px] mb-6">
                {icons.map((Icon, index) => (
                    <div key={index} className="bg-[#DA100B] rounded-xl flex flex-col items-center justify-center gap-3 h-[100px] w-[115px] lg:h-[199px] lg:w-[215px] p-4">
                        <div className="w-full flex items-center justify-between gap-3">
                            <div className="flex flex-row items-center justify-center gap-[1px]">
                                {[...Array(3)].map((_, dotIndex) => (
                                    <span key={dotIndex} className="block rounded-full bg-[#FFE6E6] h-[3px] w-[3px] lg:h-[6px] lg:w-[6px]"></span>
                                ))}
                            </div>
                            <h4 className="font-bold text-[10px] lg:text-xs text-[#FFFFFF]">Badges</h4>
                        </div>
                        <div className="w-20 h-20 lg:w-[185px] lg:h-[141px] bg-[#FFE6E6] rounded-xl flex items-center justify-center">
                            <Icon className="lg:w-[105px] lg:h-[105px] w-[20px] h-[20px] " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
