import Image from "next/image";

const Navbar = () => {
    return (
        <div className="border-b border-[#2C2C2C] flex justify-between items-center py-4 lg:py-6 px-4 lg:px-18 ">
            <div className="flex items-center space-x-3">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={33}
                    height={15}
                    className="block"
                />
                <h1 className="text-[20px] md:text-[24px] font-bold">
                    TEAMVERSE
                </h1>
            </div>
            <div>
                <ConnectWallet />
            </div>
        </div>
    );
};

const ConnectWallet = () => {
    return (
        <button className="bg-[#1C1924] py-2 px-4 rounded-xl lg:text-[16px]">
            <span className="gradientText lg:text-[16px] text-[14px]">
                Connect to Wallet
            </span>
        </button>
    );
};

export default Navbar;
