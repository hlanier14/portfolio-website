import React from "react";
import { Helmet } from "react-helmet-async";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

function Experience() {
    const siteUrl = "https://harrisonlanier.com";
    
    return (
        <>
            <Helmet>
                <title>Experience - Harrison Lanier | Machine Learning Engineer</title>
                <meta
                    name="description"
                    content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments."
                />
                <link rel="canonical" href={`${siteUrl}/experience`} />
                <meta property="og:title" content="Experience - Harrison Lanier | Machine Learning Engineer" />
                <meta property="og:description" content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments." />
                <meta property="og:url" content={`${siteUrl}/experience`} />
                <meta property="og:type" content="website" />
            </Helmet>
            <section id="experience" className="bg-background-default dark:bg-background-dark pt-16">
                <div className="flex min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-flow-row auto-rows-auto gap-8 mt-8 md:mt-16 mb-32 w-full">
                        <ExperienceSection />
                        <EducationSection />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;

