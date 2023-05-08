import React from "react";

function HeroSection() {
  return (
    <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-left md:items-center mx-10 md:mx-20">
                <div className="md:w-3/5 mb-10">
                    <h3 className="text-xl md:text-2xl font-bold">
                        I am
                    </h3>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Harrison Lanier
                    </h1>
                    {/* <p className="text-lg mb-8">
                        I love building cool shit.
                    </p> */}
                    <a
                        href="/portfolio"
                        className="bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded"
                    >
                        Portfolio
                    </a>
                </div>
                <div className="md:w-2/5">
                    <img
                        src="./profile.jpg"
                        alt="Profile"
                        className="w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
