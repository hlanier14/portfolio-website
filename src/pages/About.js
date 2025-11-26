import React from "react";
import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";

function About() {
    const siteUrl = "https://harrisonlanier.com";
    
    return (
        <>
            <Helmet>
                <title>About - Harrison Lanier | Machine Learning Engineer</title>
                <meta
                    name="description"
                    content="Learn more about Harrison Lanier - Machine Learning Engineer. Expert in PyTorch, TensorFlow, computer vision, and production ML systems. Recent Techstars Powered by JP Morgan alum."
                />
                <link rel="canonical" href={`${siteUrl}/about`} />
                <meta property="og:title" content="About - Harrison Lanier | Machine Learning Engineer" />
                <meta property="og:description" content="Learn more about Harrison Lanier - Machine Learning Engineer. Expert in PyTorch, TensorFlow, computer vision, and production ML systems. Recent Techstars Powered by JP Morgan alum." />
                <meta property="og:url" content={`${siteUrl}/about`} />
                <meta property="og:type" content="website" />
            </Helmet>
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
        </>
    );
}

export default About;