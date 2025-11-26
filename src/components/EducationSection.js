import React from "react";
import EducationTile from "./EducationTile";
import education from "../data/education.json";

function EducationSection() {
    return (
        <div>
            <div className="flex items-stretch">
                <div className="w-1/2 text-2xl mb-4 md:mb-6 text-text-primary">
                    Education
                </div>
            </div>
            <hr className="h-px mb-6 md:mb-8 border-0 bg-surface-border dark:bg-surface-border-dark" />
            <div>
                <div className="grid grid-cols-1 gap-4">
                    {education.map(function(item, index) {
                        return (
                            <EducationTile
                                key={index}
                                school={item.school}
                                degree={item.degree}
                                dateRange={item.dateRange}
                                description={item.bulletPoints}
                                location={item.location}
                                links={item.links}
                                skills={item.skills}
                                logo={item.logo}
                                isCurrent={item.isCurrent}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default EducationSection;

