import React from "react";
import Navbar from "../components/Navbar";
import CreateTeam from "../components/CreateTeam";

const page = () => {
    return (
        <section>
            <Navbar />
            <div className="lg:w-[495px] w-[95%] mx-auto mt-20">
                <CreateTeam />
            </div>
        </section>
    );
};

export default page;
