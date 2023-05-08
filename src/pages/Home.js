import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import RecentWork from "../components/RecentWork";
import HeroSection from "../components/HeroSection";

function Home() {
    return (
        <>
        <HeroSection />
        <div className="bg-slate-100">
            <div className="flex min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-flow-row auto-rows-auto gap-4 my-10 mx-5 md:m-20">
                    {/* <About /> */}
                    <Experience />
                    <RecentWork />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;