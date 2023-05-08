import React, { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

function ExperienceTile({ company, title, dateRange, description, links, isCurrent, skills }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <li className="mb-10 ml-10">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd">
                        </path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 ">
                    { company }
                    { isCurrent ? 
                        (<div classNameName="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            Current
                        </div>) : (<></>)
                    }
                </h3>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                    { title }
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    { dateRange }
                </time>
                <div className="flex flex-wrap w-full md:w-2/3 mt-5 mb-2">
                    { skills.map(function(item){
                        return (
                            <div className="rounded-md text-sm bg-gray-300 mb-1 mr-1 px-2">
                                {item}
                            </div>
                        );
                    })}
                </div> 
                { (links.length !== 0) ? (
                    <div className="mb-2">
                        { links.map(function(item){
                            return (
                            <a href={ item["Link"] } target="_blank" rel="noreferrer" className="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                                <HiOutlineExternalLink />
                                <div className="ml-2">
                                    { item["Title"] }
                                </div>
                            </a>
                            )
                        })}
                    </div>) : (<></>)
                }
                <div className="my-2">
                    { showDetails ? (
                        <>
                            <ul className="ml-5 list-disc my-2">
                                { description.map(function(item){
                                    return <li>{item}</li>;
                                })}
                            </ul>
                            <button className="text-sm font-normal leading-none text-blue-700 " onClick={() => setShowDetails(false)}>
                                Hide Details
                            </button>
                        </>) : (
                        <button className="text-sm font-normal leading-none text-blue-700 " onClick={() => setShowDetails(true)}>
                            Details
                        </button>)
                    }
                </div>
            </li>
        </>
    );
  }
  
  export default ExperienceTile;