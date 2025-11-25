import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section id="home" className="pt-16">
            <div className="bg-background-default dark:bg-background-dark min-h-screen flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                        {/* Profile Picture */}
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-surface-border dark:ring-surface-border-dark shadow-lg">
                                <img
                                    src="/profile.jpg"
                                    alt="Harrison Lanier"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Name */}
                        <div className="space-y-3">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight">
                                Harrison Lanier
                            </h1>
                            
                            {/* Title */}
                            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
                                Data Engineer & Software Developer
                            </p>
                        </div>

                        {/* Description */}
                        <div className="max-w-2xl mt-4">
                            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">
                                Recent Techstars Powered by JP Morgan alum with hands-on experience building production data pipelines in a fast-paced startup environment.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
                            <Link
                                to="/contact"
                                className="px-8 py-3 md:px-10 md:py-4 bg-primary-main text-primary-text rounded-lg font-medium text-base md:text-lg hover:bg-primary-hover dark:hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg"
                            >
                                Contact Me
                            </Link>
                            <Link
                                to="/projects"
                                className="px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-surface-border dark:border-surface-border-dark text-text-primary dark:text-text-primary rounded-lg font-medium text-base md:text-lg hover:bg-background-secondary dark:hover:bg-background-dark transition-colors"
                            >
                                View My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
