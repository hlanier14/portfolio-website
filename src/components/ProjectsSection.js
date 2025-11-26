import React from "react";
import ProjectTile from "./ProjectTile";
import projects from "../data/projects.json";

function ProjectsSection() {
    return (
        <div>
            <div className="flex items-stretch">
                <div className="w-1/2 text-2xl mb-4 md:mb-6 text-text-primary">
                    Projects
                </div>
            </div>
            <hr className="h-px mb-6 md:mb-8 border-0 bg-surface-border dark:bg-surface-border-dark" />
            <div>
                <div className="grid grid-cols-1 gap-4">
                    {projects.map(function(item, index) {
                        return (
                            <ProjectTile
                                key={index}
                                title={item.title}
                                shortDescription={item.shortDescription}
                                subtitle={item.subtitle}
                                date={item.date}
                                coverImage={item.coverImage}
                                link={item.link}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;

