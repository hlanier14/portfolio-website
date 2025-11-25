import React from "react";
import ExperienceTile from "./ExperienceTile";
import experience from "../data/experience.json";

function ExperienceSection() {
    return (
        <div>
            <div className="flex items-stretch">
                <div className="w-1/2 text-2xl mb-6 md:mb-8 text-text-primary">
                    Experience
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 gap-4">
                    {experience.map(function(item, index) {
                        return (
                            <ExperienceTile
                                key={index}
                                company={item.company}
                                title={item.title}
                                dateRange={item.dateRange}
                                description={item.bulletPoints}
                                location={item.location}
                                links={item.links}
                                isCurrent={item.isCurrent}
                                skills={item.skills}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;

