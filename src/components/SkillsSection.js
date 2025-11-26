import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
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
    
    // Calculate count for each category
    const getCategoryCount = (type) => {
        if (type === "All") {
            return skills.length;
        }
        if (type === "Cloud") {
            return skills.filter(skill => skill.type.startsWith("Cloud -")).length;
        }
        return skills.filter(skill => skill.type === type).length;
    };
    
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    // Filter skills based on selected filter and search query
    const filteredSkills = skills.filter(skill => {
        // Filter by category
        const matchesCategory = selectedFilter === "All" 
            ? true
            : selectedFilter === "Cloud"
                ? skill.type.startsWith("Cloud -")
                : skill.type === selectedFilter;
        
        // Filter by search query
        const matchesSearch = searchQuery === "" 
            ? true
            : skill.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    // Reset to page 1 when filter or search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilter, searchQuery]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedSkills = filteredSkills.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="text-2xl mb-4 md:mb-6 text-text-primary">
                Skills
            </div>
            <hr className="h-px mb-6 md:mb-8 border-0 bg-surface-border dark:bg-surface-border-dark" />
            
            {/* Search Bar - Mobile First */}
            <div className="mb-6 md:mb-8 lg:hidden">
                <div className="relative">
                    <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={20} />
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-surface-border dark:border-surface-border-dark bg-background-default dark:bg-background-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-colors"
                    />
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Sidebar - Filter Buttons (Large Screens) */}
                <div className="lg:w-48 lg:flex-shrink-0">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-semibold text-text-secondary mb-2 lg:mb-4">
                            Categories
                        </div>
                        <div className="flex flex-wrap lg:flex-col gap-2">
                            {skillTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedFilter(type)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left w-full lg:w-auto flex items-center justify-between ${
                                        selectedFilter === type
                                            ? 'bg-primary-main text-primary-text'
                                            : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-background-secondary dark:hover:bg-background-dark'
                                    }`}
                                >
                                    <span>{type}</span>
                                    <span className={`ml-2 text-xs ${
                                        selectedFilter === type
                                            ? 'text-primary-text/80'
                                            : 'text-text-tertiary'
                                    }`}>
                                        {getCategoryCount(type)}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Search (Desktop) and Skills Grid */}
                <div className="flex-1 min-w-0">
                    {/* Search Bar - Desktop Only */}
                    <div className="hidden lg:block mb-6 md:mb-8">
                        <div className="relative">
                            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" size={20} />
                            <input
                                type="text"
                                placeholder="Search skills..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-surface-border dark:border-surface-border-dark bg-background-default dark:bg-background-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-colors"
                            />
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
                {paginatedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-background-secondary dark:bg-background-dark-darker flex flex-col items-center justify-center p-4 md:p-6 bg-background-secondary dark:bg-background-dark rounded-lg border border-surface-border dark:border-surface-border-dark hover:shadow-lg transition-shadow cursor-pointer"
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
                </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;

