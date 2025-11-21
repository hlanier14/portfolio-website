import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiMoon, HiSun, HiOutlineMail } from "react-icons/hi";
import { useDarkMode } from "../hooks/useDarkMode";

function Sidebar() {
    const { theme, toggle } = useDarkMode();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Close dropdown when clicking outside
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
        { href: "/", label: "About" },
        { href: "/projects", label: "Projects" },
    ];

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 h-16 z-50 md:hidden flex items-center justify-between px-4 bg-background-default dark:bg-background-dark-darker border-b border-surface-border dark:border-surface-border-dark">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 flex-1 min-w-0">
                    <img
                        src="./profile.jpg"
                        alt="Harrison Lanier"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <h1 className="text-lg font-bold truncate text-text-primary">
                        Harrison Lanier
                    </h1>
                </Link>
                <div className="relative flex-shrink-0" ref={buttonRef}>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg transition-colors text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark"
                        aria-label="Toggle menu"
                    >
                        <RxHamburgerMenu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-background-dark-darker bg-opacity-50 z-30 md:hidden top-16"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div ref={dropdownRef} className="fixed left-0 right-0 top-16 shadow-lg z-40 md:hidden bg-background-default dark:bg-background-dark-darker border-b border-surface-border dark:border-surface-border-dark">
                        <nav className="py-4 px-4 flex flex-col items-center space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors w-full text-center ${
                                        isActive(item.href)
                                            ? 'bg-primary-main text-primary-text'
                                            : 'text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}

            {/* Sidebar - Desktop Only */}
            <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 z-40 flex-col bg-background-default dark:bg-background-dark-darker border-r border-surface-border dark:border-surface-border-dark">

                {/* Profile Section */}
                <div className="p-8">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center">
                        <img
                            src="./profile.jpg"
                            alt="Harrison Lanier"
                            className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
                        />
                        <h1 className="text-xl font-bold text-center text-text-primary">
                            Harrison Lanier
                        </h1>
                        <p className="text-sm text-center mt-1 text-text-secondary">
                            Data Enthusiast who loves to build.
                        </p>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                            <Link
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        isActive(item.href)
                                            ? 'bg-primary-main text-primary-text'
                                            : 'text-text-secondary hover:bg-background-secondary dark:hover:bg-background-dark'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Links & Theme Toggle */}
                <div className="p-4 border-t border-surface-border dark:border-surface-border-dark">
                    <div className="flex justify-center items-center space-x-4">
                        <a
                            href="mailto:hlanier90@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="Email"
                        >
                            <HiOutlineMail size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/harrison-lanier"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="LinkedIn"
                        >
                            <RxLinkedinLogo size={20} />
                        </a>
                        <a
                            href="https://github.com/hlanier14"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="GitHub"
                        >
                            <RxGithubLogo size={20} />
                        </a>
                        <button
                            onClick={toggle}
                            className="transition-colors text-text-secondary hover:text-primary-main"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;

