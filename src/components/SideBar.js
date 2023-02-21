import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function SideBar() {
    return (
        <div class="flex h-96 w-full top-0 md:h-screen md:sticky md:w-1/3 bg-[url('/public/sidebar-bg.jpg')] bg-cover">
            <div class="grid grid-rows-1 md:grid-rows-3 grid-cols-1 place-content-start w-full h-full top-0 pt-16 pb-8 md:pt-36 backdrop-brightness-50 justify-center contents-center text-white text-center">
                <div class="flex justify-center mt-5">
                    <div class="grid grid-cols-1 grid-rows-2 gap-10 justify-center">
                        <a href="/">
                            <img class="w-48 h-48 rounded-full " src='/profile.jpg' alt="Avatar" />
                        </a>
                        <div class="text-3xl mt-12 md:mt-2">
                            Harrison Lanier
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex justify-center mt-5 text-2xl">
                    <div class="grid grid-cols-1 grid-rows-2 gap-10">
                        <a href="/" class="hover:text-gray-500 self-end">
                            Home
                        </a>
                        <a href="/blog" class="hover:text-gray-500">
                            Blog
                        </a>
                    </div>
                </div>
                <div class="hidden md:flex self-end justify-center mt-5">
                    <div class="grid grid-cols-3 gap-2">
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
        </div>
    );
  }
  
  export default SideBar;