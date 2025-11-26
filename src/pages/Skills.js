import React from "react";
import { Helmet } from "react-helmet-async";
import SkillsSection from "../components/SkillsSection";

function Skills() {
    const siteUrl = "https://harrisonlanier.com";
    
    return (
        <>
            <Helmet>
                <title>Skills - Harrison Lanier | Machine Learning Engineer</title>
                <meta
                    name="description"
                    content="View Harrison Lanier's technical skills and technologies. Expertise in PyTorch, TensorFlow, Python, cloud platforms, and production ML systems."
                />
                <link rel="canonical" href={`${siteUrl}/skills`} />
                <meta property="og:title" content="Skills - Harrison Lanier | Machine Learning Engineer" />
                <meta property="og:description" content="View Harrison Lanier's technical skills and technologies. Expertise in PyTorch, TensorFlow, Python, cloud platforms, and production ML systems." />
                <meta property="og:url" content={`${siteUrl}/skills`} />
                <meta property="og:type" content="website" />
            </Helmet>
            <section id="skills" className="bg-background-default dark:bg-background-dark pt-16">
                <div className="flex min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-flow-row auto-rows-auto gap-4 mt-8 md:mt-16 mb-32 w-full">
                        <SkillsSection />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;

