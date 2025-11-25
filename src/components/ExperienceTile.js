import React, { useState } from "react";
import { HiOutlineExternalLink, HiX } from "react-icons/hi";

function ExperienceTile({ company, title, dateRange, description, location, links, isCurrent, skills }) {
    const [showModal, setShowModal] = useState(false);

    const handleTileClick = (e) => {
        // Don't open modal if clicking on links
        if (e.target.closest('a')) {
            return;
        }
        setShowModal(true);
    };

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget || e.target.closest('button')) {
            setShowModal(false);
        }
    };

    return (
        <>
            <div 
                onClick={handleTileClick}
                className="bg-background-secondary dark:bg-background-dark-darker rounded-lg p-6 border border-surface-border dark:border-surface-border-dark hover:border-primary-main/50 dark:hover:border-primary-main/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:scale-[1.01]"
            >
                <div className="space-y-4">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                                <h3 className="text-xl font-bold text-text-primary mb-1">
                                    {company}
                                </h3>
                                <h4 className="text-lg font-semibold text-text-primary mb-1">
                                    {title}
                                </h4>
                                {location && (
                                    <p className="text-sm text-text-tertiary">
                                        {location}
                                    </p>
                                )}
                            </div>
                            <time className="text-sm font-medium text-text-secondary whitespace-nowrap">
                                {dateRange}
                            </time>
                        </div>
                    </div>
                    
                    {description && description.length > 0 && (
                        <div className="pt-1">
                            <p className="text-sm text-text-secondary line-clamp-2">
                                {description[0]}
                            </p>
                        </div>
                    )}
                    
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="relative bg-background-default dark:bg-background-dark rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-surface-border dark:border-surface-border-dark"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-background-secondary dark:hover:bg-background-dark-darker transition-colors"
                            aria-label="Close modal"
                        >
                            <HiX size={24} />
                        </button>
                        
                        <div className="p-6 md:p-8">
                            <div className="pr-10 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                    {company}
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                                    {title}
                                </h3>
                                {location && (
                                    <p className="text-base text-text-secondary mb-2">
                                        {location}
                                    </p>
                                )}
                                <time className="block text-base text-text-secondary font-medium">
                                    {dateRange}
                                </time>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-text-primary mb-3">
                                    Description
                                </h4>
                                <ul className="space-y-3 ml-5">
                                    {description.map(function(item, index){
                                        return (
                                            <li key={index} className="text-base text-text-secondary list-disc">
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-text-primary mb-3">
                                    Skills & Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(function(item, index){
                                        return (
                                            <span 
                                                key={index} 
                                                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-primary-main/10 dark:bg-primary-main/20 text-primary-active dark:text-primary-main border border-primary-main/20 dark:border-primary-main/40"
                                            >
                                                {item}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            {links.length > 0 && (
                                <div>
                                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                                        Links
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {links.map(function(item, index){
                                            return (
                                                <a 
                                                    key={index} 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-main text-primary-text hover:bg-primary-hover transition-colors"
                                                >
                                                    <HiOutlineExternalLink className="mr-2" size={16} />
                                                    {item.title}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExperienceTile;