import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import { resumeUrl } from "../constants";

function Home() {
    const siteUrl = "https://harrisonlanier.com";
    
    return (
        <>
            <Helmet>
                <title>Harrison Lanier - Machine Learning Engineer</title>
                <meta
                    name="description"
                    content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments."
                />
                <meta name="keywords" content="Machine Learning Engineer, ML Engineer, PyTorch, TensorFlow, Deep Learning, ML Systems, Production ML, ML Ops, Data Science, Harrison Lanier" />
                <link rel="canonical" href={siteUrl} />
                <meta property="og:title" content="Harrison Lanier - Machine Learning Engineer" />
                <meta property="og:description" content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models." />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${siteUrl}/profile.jpg`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Harrison Lanier - Machine Learning Engineer" />
                <meta name="twitter:description" content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum." />
                <meta name="twitter:image" content={`${siteUrl}/profile.jpg`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Harrison Lanier",
                        "jobTitle": "Machine Learning Engineer",
                        "description": "Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments.",
                        "url": siteUrl,
                        "image": `${siteUrl}/profile.jpg`,
                        "sameAs": [
                            "https://linkedin.com/in/harrison-lanier"
                        ],
                        "alumniOf": {
                            "@type": "EducationalOrganization",
                            "name": "Saint Louis University"
                        },
                        "knowsAbout": [
                            "Machine Learning",
                            "Deep Learning",
                            "PyTorch",
                            "TensorFlow",
                            "MLOps",
                            "Production ML Systems",
                            "Computer Vision",
                            "Data Engineering"
                        ]
                    }, null, 0)}
                </script>
            </Helmet>
            <section id="home" className="pt-16">
            <div className="bg-background-default dark:bg-background-dark min-h-screen flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                        {/* Profile Picture */}
                        <div className="relative">
                            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-surface-border dark:ring-surface-border-dark shadow-lg">
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
                                Machine Learning Engineer
                            </p>
                        </div>

                        {/* Description */}
                        <div className="max-w-2xl mt-4">
                            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">
                                Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments.
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
                                View Projects
                            </Link>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center space-x-2 px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-surface-border dark:border-surface-border-dark text-text-primary dark:text-text-primary rounded-lg font-medium text-base md:text-lg hover:bg-background-secondary dark:hover:bg-background-dark transition-colors"
                            >
                                <span>View Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;
