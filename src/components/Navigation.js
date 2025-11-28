import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import InitialsLogo from "./InitialsLogo";
import { resumeUrl } from "../constants";

function Navigation() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { path: "/experience", label: "Experience" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background-default/80 dark:bg-background-dark-darker/80 backdrop-blur-md border-b border-surface-border dark:border-surface-border-dark">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Name */}
                        <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
                            <InitialsLogo className="w-10 h-10" />
                        </Link>

                        {/* Desktop Navigation - Right Aligned */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        isActive(item.path)
                                            ? 'bg-primary-main text-primary-text'
                                            : 'text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark transition-colors border border-surface-border dark:border-surface-border-dark hover:border-primary-main/50"
                            >
                                <span>Resume</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="relative flex-shrink-0 md:hidden" ref={buttonRef}>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg transition-colors text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark"
                                aria-label="Toggle menu"
                            >
                                <RxHamburgerMenu size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-background-dark-darker bg-opacity-50 z-30 md:hidden top-16"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div ref={dropdownRef} className="fixed left-0 right-0 top-16 shadow-lg z-40 md:hidden bg-background-default dark:bg-background-dark-darker border-b border-surface-border dark:border-surface-border-dark">
                            <div className="px-4 py-4">
                                <nav className="flex flex-col items-center space-y-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors text-center w-full ${
                                                isActive(item.path)
                                                    ? 'bg-primary-main text-primary-text'
                                                    : 'text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <a
                                        href={resumeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-base font-medium text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark transition-colors text-center w-full border border-surface-border dark:border-surface-border-dark"
                                    >
                                        <span>Resume</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
}

export default Navigation;

