import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function Footer() {
    return (
        <div class="flex md:hidden bg-[url('/public/sidebar-bg.jpg')] bg-cover bg-bottom">
            <div class="flex self-end justify-center backdrop-brightness-50 w-full h-full contents-center text-white text-center">
                <div class="grid grid-cols-3 gap-2 my-7">
                    <a href="mailto:hlanier90@gmail.com" target="_blank" rel="noreferrer" class="hover:text-gray-500"> 
                        <HiOutlineMail size={24}/> 
                    </a>
                    <a href="https://linkedin.com/in/harrison-lanier" target="_blank" rel="noreferrer" class="hover:text-gray-500">
                        <RxLinkedinLogo size={24}/>
                    </a>
                    <a href="https://github.com/hlanier14" target="_blank" rel="noreferrer" class="hover:text-gray-500">
                        <RxGithubLogo size={24}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;