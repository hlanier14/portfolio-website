import React, { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

function ExperienceTile({ company, title, dateRange, description, links, isCurrent, skills }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <li className="mb-10 ml-10">            
                <span 
                    className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 bg-primary-main/10 dark:bg-primary-main/30 ring-background-default dark:ring-background-dark"
                >
                    <svg aria-hidden="true" className="w-3 h-3 text-primary-active dark:text-primary-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd">
                        </path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-text-primary">
                    { company }
                </h3>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-text-primary">
                    { title }
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-text-tertiary">
                    { dateRange }
                </time>
                <div className="flex flex-wrap w-full md:w-2/3 mt-5 mb-2">
                    { skills.map(function(item, index){
                        return (
                            <div key={index} className="rounded-md text-sm mb-1 mr-1 px-2 border bg-primary-main/10 dark:bg-primary-main/30 text-primary-active dark:text-primary-main border-primary-main/20 dark:border-primary-main/50">
                                {item}
                            </div>
                        );
                    })}
                </div> 
                { (links.length !== 0) ? (
                    <div className="mb-2">
                        { links.map(function(item, index){
                            return (
                            <a key={index} href={ item["Link"] } target="_blank" rel="noreferrer" className="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none transition-colors shadow-sm bg-primary-main text-primary-text border border-primary-main hover:bg-primary-hover">
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
                            <ul className="ml-5 list-disc my-2 text-text-secondary">
                                { description.map(function(item, index){
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                            <button className="text-sm font-normal leading-none transition-colors text-primary-main hover:text-primary-hover" onClick={() => setShowDetails(false)}>
                                Hide Details
                            </button>
                        </>) : (
                        <button className="text-sm font-normal leading-none transition-colors text-primary-main hover:text-primary-hover" onClick={() => setShowDetails(true)}>
                            Details
                        </button>)
                    }
                </div>
            </li>
        </div>
    );
  }
  
  export default ExperienceTile;