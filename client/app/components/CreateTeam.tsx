import React from "react";

const CreateTeam = () => {
    return (
        <div className="w-full">
            <h1 className="text-center text-[36px] font-bold">Create a team</h1>
            <p className="text-[#A6A0BB] text-center mt-2 text-[16px]">
                Promoting team bonding for teams, one game at a time
            </p>
            <form className="w-full bg-[#131118] px-3 py-4 flex flex-col space-y-6 mt-12 rounded-xl">
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="teamName"
                        className="text-[#A6A0BB] text-[16px]"
                    >
                        Team Name
                    </label>
                    <input
                        type="text"
                        className="bg-[#1C1924] px-4 py-4 rounded-xl focus:outline-none"
                        placeholder="chi-hub"
                        required
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="staffNo"
                        className="text-[#A6A0BB] text-[16px]"
                    >
                        No of staff
                    </label>
                    <input
                        type="number"
                        className="bg-[#1C1924] px-4 py-4 rounded-xl focus:outline-none"
                        placeholder="30"
                        required
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="description"
                        className="text-[#A6A0BB] text-[16px]"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        className="bg-[#1C1924] px-4 py-4 rounded-xl focus:outline-none"
                        placeholder="A team for the decentralized world"
                        required
                    />
                </div>
                <button className="block gradientBg py-3 rounded-xl font-bold text-[20px]">
                    Continue
                </button>
            </form>
        </div>
    );
};

export default CreateTeam;
