import React from "react";
import { HiOutlineDownload } from 'react-icons/hi';
import ExperienceTile from "./ExperienceTile";
import experience from "../data/experience.json";

function Experience() {
    return (
        <>
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
            <hr class="h-px my-8 bg-gray-200 border-0"></hr>
        </>
    );
  }
  
  export default Experience;