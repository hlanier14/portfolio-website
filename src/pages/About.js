import React from "react";
import ExperienceTile from "../components/ExperienceTile";
import experience from "../data/experience.json";

function About() {
    return (
        <div>
            <div className="bg-gradient-to-br from-background-default to-background-secondary dark:from-background-dark dark:to-background-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-text-secondary">
                            I am
                        </h3>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">
                            Harrison Lanier
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text-secondary">
                            a data enthusiast who loves to build.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-background-default dark:bg-background-dark">
                <div className="flex min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-flow-row auto-rows-auto gap-4 my-6 md:my-8 w-full">
                        <div>
                            <div>
                                <div className="text-2xl text-text-primary">
                                    About Me
                                </div>
                                <div className="text-base text-md md:text-lg mt-6 md:mt-8 text-text-secondary">
                                    Recent Techstars Powered by JP Morgan alum with hands-on experience building production data pipelines in a fast-paced startup environment. A Data Science graduate from Saint Louis University trained in Python, SQL, machine learning, and software development. Entrepreneur who loves working on projects that solve problems with data engineering and automation.
                                </div>
                                <div className="text-base text-md md:text-lg mt-6 md:mt-8 text-text-secondary">
                                    Currently looking for full-time roles and love meeting new people. Please reach out and connect!
                                </div>
                            </div>
                            <hr className="h-px my-6 md:my-8 border-0 bg-surface-border dark:bg-surface-border-dark"></hr>
                        </div>
                        <div>
                            <div className="flex items-stretch">
                                <div className="w-1/2 text-2xl mb-6 md:mb-8 text-text-primary">
                                    Experience
                                </div>
                            </div>
                            <div>
                                <ol className="relative border-l border-surface-border dark:border-surface-border-dark">
                                    { experience.map(function(item, index) {
                                        return (
                                            <ExperienceTile
                                                key={index}
                                                company={ item["Company"] }
                                                title={ item["Title"] }
                                                dateRange={ item["DateRange"] }
                                                description={ item["Description"] }
                                                links={ item["Links"] }
                                                isCurrent={ item["isCurrent"] }
                                                skills={ item["Skills"] }
                                            />
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;