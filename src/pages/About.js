import React from "react";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";

function About() {
    return (
        <section id="about" className="pt-16">
            <div className="bg-background-default dark:bg-background-dark">
                <div className="flex min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-flow-row auto-rows-auto gap-4 my-6 md:my-8 w-full">
                        <AboutMe />
                        <SkillsSection />
                        <ExperienceSection />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;