import Image from "next/image";

const Navbar = () => {
    return (
        <div className="border-b border-[#2C2C2C] flex flex-wrap justify-between items-center py-3 px-4 lg:py-5 lg:px-10">
            <div className="flex items-center space-x-3">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={33}
                    height={15}
                    className="block"
                />
                <h1 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold">
                    TEAMVERSE
                </h1>
            </div>
            <div className="mt-3 lg:mt-0">
                <ConnectWallet />
            </div>
        </div>
    );
};

const ConnectWallet = () => {
    return (
        <button className="bg-[#1C1924] py-2 px-4 rounded-xl text-[14px] md:text-[16px]">
            <span className="gradientText">Connect to Wallet</span>
        </button>
    );
};

export default Navbar;
