import React from "react";
import Navbar from "../components/Navbar";
import CreateTeam from "../components/CreateTeam";

const page = () => {
    return (
        <section>
            <Navbar />
            <div className="w-[495px] mx-auto mt-20">
                <CreateTeam />
            </div>
        </section>
    );
};

export default page;
