import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/ProjectsSection";
import projects from "../data/projects.json";

function Projects() {
    const siteUrl = "https://harrisonlanier.com";
    
    return (
        <>
            <Helmet>
                <title>ML Projects - Harrison Lanier | Machine Learning Engineer Portfolio</title>
                <meta
                    name="description"
                    content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments."
                />
                <link rel="canonical" href={`${siteUrl}/projects`} />
                <meta property="og:title" content="ML Projects - Harrison Lanier | Machine Learning Engineer Portfolio" />
                <meta property="og:description" content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments." />
                <meta property="og:url" content={`${siteUrl}/projects`} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Harrison Lanier - ML Engineer Projects Portfolio",
                        "description": "Portfolio of machine learning, computer vision, and data engineering projects. ML Engineer portfolio featuring production ML systems and deep learning models.",
                        "url": `${siteUrl}/projects`,
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": projects.map((project, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "CreativeWork",
                                    "name": project.title,
                                    "description": project.subtitle,
                                    "url": project.link,
                                    "datePublished": project.date
                                }
                            }))
                        }
                    }, null, 0)}
                </script>
            </Helmet>
            <section id="projects" className="bg-background-default dark:bg-background-dark pt-16">
                <div className="flex min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-flow-row auto-rows-auto gap-4 mt-8 md:mt-16 mb-32 w-full">
                        <ProjectsSection />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;

