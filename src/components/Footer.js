import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-4">
                    <a 
                        href="mailto:hlanier90@gmail.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    > 
                        <HiOutlineMail size={24}/> 
                    </a>
                    <a 
                        href="https://linkedin.com/in/harrison-lanier" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <RxLinkedinLogo size={24}/>
                    </a>
                    <a 
                        href="https://github.com/hlanier14" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <RxGithubLogo size={24}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;