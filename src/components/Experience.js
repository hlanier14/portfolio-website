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
                    <div class="flex justify-end w-1/2 text-2xl mb-10 ">
                        <a href="HarrisonLanier_Resume.pdf" target="_blank" rel="noreferrer" class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                            <HiOutlineDownload />
                            <div class="ml-2">Resume</div>
                        </a>
                    </div>
                </div>
                <div>
                    <ol class="relative border-l border-gray-200">
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