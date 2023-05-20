import React from "react";
import ExperienceTile from "../components/ExperienceTile";
import experience from "../data/experience.json";

function About() {
    return (
        <div>
            <div className="bg-slate-100">
                <div className="flex min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-flow-row auto-rows-auto gap-4 my-10 mx-5 md:m-20">
                        <div>
                            <div className="text-2xl">
                                Interesting Facts
                            </div>
                            <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                                <ul>
                                    <li>Starred in two local commercials.</li>
                                    <li>Avid traveler who gets nervous on airplanes.</li>
                                    <li>Once went on a slip and slide with NBA Champion Tyson Chandler.</li>
                                </ul>
                            </div>
                            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
                        </div>
                        <div>
                            <div class="flex items-stretch">
                                <div class="w-1/2 text-2xl mb-10">
                                    Experience
                                </div>
                            </div>
                            <div>
                                <ol class="relative border-l border-gray-200 mx-5 md:mx-10">
                                    { experience.map(function(item) {
                                        return (
                                            <ExperienceTile
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