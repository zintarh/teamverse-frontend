import { FC } from "react";
import icon from "../public/icon.svg"
import icon2 from "../public/icon2.svg"
import icon3 from "../public/icon3.svg"
import Image from "next/image";
const BottomButtons: FC = () => {
  return (
    <div className="flex justify-center gap-6 p-4 bg-transparent absolute bottom-4 w-full z-50  dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <button className="bg-gray-700 bg-opacity-60 rounded-full p-3 text-white hover:bg-opacity-80 transition">
<Image src={icon} alt="icon"  />
       
      </button>
      <button className="bg-gray-700 bg-opacity-60 rounded-full p-3 text-white hover:bg-opacity-80 transition">
      <Image src={icon2} alt="icon" />
      </button>
      <button className="bg-gray-700 bg-opacity-60 rounded-full p-3 text-white hover:bg-opacity-80 transition">
      <Image src={icon3} alt="icon"  />
      </button>
    </div>
  );
};

export default BottomButtons;
