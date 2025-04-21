import React from "react";

interface Props {
    children: React.ReactNode;
    title?: string
  }

export default function Sidebar({ children, title }: Props) {
  return (
    <div className="absolute bg-background top-0 right-0 bottom-0 w-[540px] mx-5 my-5 rounded-[20px] border-accent-blue  text-white p-4 flex flex-col justify-between">
        <div className="px-5 py-5 text-text-primary flex justify-between items-center">
            <h1 className="">{title}</h1>
            <button>
                    Connect Wallet
            </button>
        </div>
      {children}
    </div>
  );
}
