import React from "react";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiMoon, HiSun, HiOutlineMail } from "react-icons/hi";
import { useDarkMode } from "../hooks/useDarkMode";

function MobileFooter() {
    const { theme, toggle } = useDarkMode();

    return (
        <footer className="w-full h-16 md:hidden bg-background-default dark:bg-background-dark border-t border-surface-border dark:border-surface-border-dark">
            <div className="flex justify-center items-center h-full space-x-6 px-4">
                <a
                    href="mailto:hlanier90@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors text-text-secondary hover:text-primary-main"
                    aria-label="Email"
                >
                    <HiOutlineMail size={22} />
                </a>
                <a
                    href="https://linkedin.com/in/harrison-lanier"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors text-text-secondary hover:text-primary-main"
                    aria-label="LinkedIn"
                >
                    <RxLinkedinLogo size={22} />
                </a>
                <a
                    href="https://github.com/hlanier14"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors text-text-secondary hover:text-primary-main"
                    aria-label="GitHub"
                >
                    <RxGithubLogo size={22} />
                </a>
                <button
                    onClick={toggle}
                    className="transition-colors text-text-secondary hover:text-primary-main"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <HiSun size={22} /> : <HiMoon size={22} />}
                </button>
            </div>
        </footer>
    );
}

export default MobileFooter;

