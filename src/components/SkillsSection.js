import React, { useState, useEffect } from "react";
import skills from "../data/skills.json";

function SkillsSection() {
    // Get unique skill types for filter buttons
    const skillTypes = ["All", ...Array.from(new Set(skills.map(skill => {
        // Group Cloud types together
        if (skill.type.startsWith("Cloud -")) {
            return "Cloud";
        }
        return skill.type;
    })))];
    
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter skills based on selected filter
    const filteredSkills = selectedFilter === "All" 
        ? skills 
        : skills.filter(skill => {
            if (selectedFilter === "Cloud") {
                return skill.type.startsWith("Cloud -");
            }
            return skill.type === selectedFilter;
        });

    // Reset to page 1 when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilter]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedSkills = filteredSkills.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of skills section when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="text-2xl mb-6 md:mb-8 text-text-primary">
                Skills
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {skillTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedFilter(type)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedFilter === type
                                ? 'bg-primary-main text-primary-text'
                                : 'bg-background-secondary dark:bg-background-dark text-text-secondary hover:opacity-80 border border-surface-border dark:border-surface-border-dark'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {paginatedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 md:p-6 bg-background-secondary dark:bg-background-dark rounded-lg border border-surface-border dark:border-surface-border-dark hover:shadow-lg transition-shadow cursor-pointer"
                    >
                        {skill.logo ? (
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-12 h-12 md:w-16 md:h-16 mb-3 object-contain"
                            />
                        ) : (
                            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center bg-background-default dark:bg-background-dark-darker rounded-lg">
                                <span className="text-2xl md:text-3xl text-text-tertiary">
                                    {skill.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                        )}
                        <span className="text-sm md:text-base text-text-secondary text-center font-medium">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 mt-6 md:mt-8">
                    <div className="flex items-center gap-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                currentPage === 1
                                    ? 'opacity-50 cursor-not-allowed bg-background-secondary dark:bg-background-dark text-text-secondary border border-surface-border dark:border-surface-border-dark'
                                    : 'bg-background-secondary dark:bg-background-dark text-text-secondary hover:opacity-80 border border-surface-border dark:border-surface-border-dark'
                            }`}
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                // Show first page, last page, current page, and pages around current
                                if (
                                    page === 1 ||
                                    page === totalPages ||
                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                ) {
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                currentPage === page
                                                    ? 'bg-primary-main text-primary-text'
                                                    : 'bg-background-secondary dark:bg-background-dark text-text-secondary hover:opacity-80 border border-surface-border dark:border-surface-border-dark'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                } else if (
                                    page === currentPage - 2 ||
                                    page === currentPage + 2
                                ) {
                                    return (
                                        <span key={page} className="px-2 text-text-tertiary">
                                            ...
                                        </span>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                currentPage === totalPages
                                    ? 'opacity-50 cursor-not-allowed bg-background-secondary dark:bg-background-dark text-text-secondary border border-surface-border dark:border-surface-border-dark'
                                    : 'bg-background-secondary dark:bg-background-dark text-text-secondary hover:opacity-80 border border-surface-border dark:border-surface-border-dark'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                    
                    {/* Page Info */}
                    <div className="text-sm text-text-tertiary">
                        Showing {startIndex + 1}-{Math.min(endIndex, filteredSkills.length)} of {filteredSkills.length} skills
                    </div>
                </div>
            )}
            
            <hr className="h-px my-6 md:my-8 border-0 bg-surface-border dark:bg-surface-border-dark"></hr>
        </div>
    );
}

export default SkillsSection;

