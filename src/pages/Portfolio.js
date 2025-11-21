import React from "react";
import ProjectTile from "../components/ProjectTile";
import projects from "../data/projects.json";

function Portfolio() {
    return (
        <div className="bg-background-default dark:bg-background-dark">
            <div className="flex flex-col min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-6 md:my-8 w-full">
                    <div className="text-2xl text-text-primary">
                        Projects
                        <hr className="h-px my-6 md:my-8 border-0 bg-surface-border dark:bg-surface-border-dark"></hr>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:gap-7 mb-12 md:mb-16">
                        { projects.map(function(item, index) {
                            return (
                                <ProjectTile
                                    key={index}
                                    title={ item["Title"] }
                                    subtitle={ item["Subtitle"] }
                                    date={ item["Date"] }
                                    coverImage={ item["Cover Image"] }
                                    link={ item["Link"] }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;