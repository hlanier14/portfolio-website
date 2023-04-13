import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function SideBar() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const showNavBar = (window.location.pathname !== "/") && (windowSize.width < 600);

    return (
        <>
        { showNavBar ? (
            <nav class="relative flex flex-wrap md:hidden bg-[url('/public/sidebar-bg.jpg')] bg-top bg-cover items-center justify-between text-white">
                <div class="container backdrop-brightness-50">
                    <div class="px-4 mx-10 my-4 flex flex-wrap items-center justify-between ">
                        <div class="text-2xl ">
                            <a href="/">
                                HL
                            </a>
                        </div>
                        <div class="flex justify-end text-xl ">
                            <a href="/portfolio">
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            ) : (
            <div class="flex h-96 w-full top-0 md:h-screen md:sticky md:w-1/3 bg-[url('/public/sidebar-bg.jpg')] bg-cover text-white text-center">
                <div class="w-full h-full backdrop-brightness-50">
                    <div class="justify-center my-20 md:my-36">
                        <div class="flex justify-center">
                            <a href="/" class="rounded-full">
                                <img class="rounded-full w-48 h-48" src='/profile.jpg' alt="Avatar" />
                            </a>
                        </div>
                        <div class="text-3xl pt-5 md:pt-20 lg:pt-2 max-h-fit">
                            Harrison Lanier
                        </div>
                    </div>
                    <div class="hidden md:grid grid-cols-1 grid-rows-2 h-fit text-2xl justify-center gap-10">
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
            )
        }
        </>
    );
  }
  
  export default SideBar;