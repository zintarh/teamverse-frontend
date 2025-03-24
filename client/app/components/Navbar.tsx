import Image from "next/image";

const Navbar = () => {
    return (
        <div className="border-b border-[#BDBDBD00]">
            <div>
                <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                <span className="text-[24px]">TEAMVERSE</span>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;
