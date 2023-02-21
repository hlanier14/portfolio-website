import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function SideBar() {
    return (
        <div class="flex h-96 w-full top-0 md:h-screen md:sticky md:w-1/3 bg-[url('/public/sidebar-bg.jpg')] bg-cover text-white text-center">
            <div class="w-full h-full backdrop-brightness-50">
                <div class="justify-center my-20">
                    <div class="flex justify-center">
                        <a href="/" class="rounded-full">
                            <img class="rounded-full w-48 h-48" src='/profile.jpg' alt="Avatar" />
                        </a>
                    </div>
                    <div class="text-3xl pt-5 md:pt-20 lg:pt-2 max-h-fit">
                        Harrison Lanier
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-1 grid-rows-2 text-2xl mt-20 justify-center gap-10">
                    <a href="/" class="hover:text-gray-500 justify-self-center max-w-fit">
                        Home
                    </a>
                    <a href="/portfolio" class="hover:text-gray-500 justify-self-center max-w-fit">
                        Portfolio
                    </a>
                </div>
                <div class="absolute bottom-0 w-full">
                    <div class="flex justify-center m-10">
                        <div class="hidden md:grid grid-cols-3 gap-5 max-w-fit">
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
        </div>
    );
  }
  
  export default SideBar;