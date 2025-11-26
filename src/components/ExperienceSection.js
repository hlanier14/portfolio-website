import React from "react";
import ExperienceTile from "./ExperienceTile";
import experience from "../data/experience.json";

function ExperienceSection() {
    return (
        <div>
            <div className="flex items-stretch">
                <div className="w-1/2 text-2xl mb-4 md:mb-6 text-text-primary">
                    Experience
                </div>
            </div>
            <hr className="h-px mb-6 md:mb-8 border-0 bg-surface-border dark:bg-surface-border-dark" />
            <div>
                <div className="grid grid-cols-1 gap-4">
                    {experience.map(function(item, index) {
                        return (
                            <ExperienceTile
                                key={index}
                                company={item.company}
                                title={item.title}
                                dateRange={item.dateRange}
                                description={item.description}
                                bulletPoints={item.bulletPoints}
                                location={item.location}
                                links={item.links}
                                isCurrent={item.isCurrent}
                                skills={item.skills}
                                logo={item.logo}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;

