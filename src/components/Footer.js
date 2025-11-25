import React from "react";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return (
        <footer className="bg-background-default dark:bg-background-dark border-t border-surface-border dark:border-surface-border-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center justify-center space-x-6">
                        <a
                            href="mailto:hlanier90@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="Email"
                        >
                            <HiOutlineMail size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/harrison-lanier"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="LinkedIn"
                        >
                            <RxLinkedinLogo size={24} />
                        </a>
                        <a
                            href="https://github.com/hlanier14"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="GitHub"
                        >
                            <RxGithubLogo size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

