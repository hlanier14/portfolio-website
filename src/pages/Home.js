import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import RecentWork from "../components/RecentWork";

function Home() {
    return (
        <div class="flex w-full md:w-2/3 bg-slate-100">
            <div class="grid grid-flow-row auto-rows-auto gap-4 m-10 md:m-20">
                {/* <About /> */}
                <Experience />
                <RecentWork />
            </div>
        </div>
    )
}

export default Home;