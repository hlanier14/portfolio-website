import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="sticky top-0 bg-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                                <a
                                    href="/"
                                    className="text-white text-xl font-large"
                                >
                                    Harrison Lanier
                                </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <a
                            href="/portfolio"
                            className="text-white hover:text-blue-500 px-3 py-2 mr-10 rounded-md text-sm font-medium"
                        >
                            Portfolio
                        </a>
                        <a
                            href="HarrisonLanier_Resume.pdf"
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                        >
                            Resume
                        </a>
                    </div>    
                    <div className="md:hidden">
                        <button
                            onClick={toggleDropdown}
                            className="text-white focus:outline-none focus:text-white"
                        >
                            <RxHamburgerMenu size={24}/>
                        </button>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className="w-full bg-gray-800 rounded-md overflow-hidden shadow-xl z-10">
                        <div className="px-2 py-5 space-y-1">
                            <a
                                href="/portfolio"
                                className="block text-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                Portfolio
                            </a>
                            <a
                                href="HarrisonLanier_Resume.pdf"
                                target="_blank" 
                                rel="noreferrer"
                                className="block bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-gray-800 text-white font-bold px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
