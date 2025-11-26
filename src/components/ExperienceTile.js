import React, { useState } from "react";
import { 
    HiOutlineExternalLink, 
    HiOutlineCalendar, 
    HiOutlineLink, 
    HiOutlineLocationMarker, 
    HiX 
} from "react-icons/hi";

function ExperienceTile({ company, title, dateRange, description, location, links, isCurrent, skills, logo }) {
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
                className="bg-background-secondary dark:bg-background-dark-darker rounded-2xl p-6 border border-surface-border dark:border-surface-border-dark hover:border-primary-main/50 dark:hover:border-primary-main/50 transition-all duration-200 cursor-pointer hover:shadow-xl hover:scale-[1.01]"
            >
                <div className="flex gap-4">
                    {logo && (
                        <div className="flex-shrink-0">
                            <img 
                                src={logo} 
                                alt={`${company} logo`}
                                className="w-12 h-12 object-contain rounded"
                            />
                        </div>
                    )}
                    <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <h3 className="text-lg text-text-primary">
                                <span className="font-semibold">{title}</span>, {company}
                            </h3>
                            <time className="text-sm font-medium text-text-secondary whitespace-nowrap">
                                {dateRange}
                            </time>
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
            </div>

            {/* Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="relative bg-gradient-to-br from-background-default via-background-secondary to-background-secondary/80 dark:from-background-dark dark:via-background-dark-darker dark:to-background-dark rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-surface-border/60 dark:border-surface-border-dark/60"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-background-secondary dark:hover:bg-background-dark-darker transition-colors"
                            aria-label="Close modal"
                        >
                            <HiX size={24} />
                        </button>
                        
                        <div className="p-6 md:p-8 space-y-8 modal-card-animation">
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    {logo && (
                                        <div className="flex-shrink-0">
                                            <img 
                                                src={logo} 
                                                alt={`${company} logo`}
                                                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl border border-surface-border/70 dark:border-surface-border-dark/70"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 space-y-3">
                                        <div className="space-y-1">
                                            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
                                                {title}
                                            </h2>
                                            <p className="text-lg text-text-secondary">
                                                {company}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
                                                <HiOutlineCalendar className="text-primary-main" />
                                                <span>{dateRange}</span>
                                            </div>
                                            {location && (
                                                <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
                                                    <HiOutlineLocationMarker className="text-primary-main" />
                                                    <span>{location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {links.length > 0 && (
                                    <div className="hidden md:flex flex-wrap gap-3 justify-end mr-12">
                                        {links.map(function(item, index){
                                            return (
                                                <a 
                                                    key={`header-${index}`} 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="group inline-flex items-center rounded-full border border-surface-border/80 dark:border-surface-border-dark/70 px-4 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary-main/60 hover:bg-primary-main/10 transition-all duration-200"
                                                >
                                                    {item.title}
                                                    <HiOutlineLink className="ml-2 text-primary-main group-hover:translate-x-0.5 transition-transform" size={16} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-3/5 space-y-5">
                                    {description && description.length > 0 && (
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-lg font-semibold text-text-primary">
                                                    Impact
                                                </h4>
                                                <span className="hidden md:inline-flex h-px w-24 bg-surface-border/60 dark:bg-surface-border-dark/60"></span>
                                            </div>
                                            <div className="space-y-3">
                                                {description.map(function(item, index){
                                                    return (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-primary-main shadow-[0_0_8px_rgba(59,130,246,0.45)]"></span>
                                                            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-2/5 space-y-6 md:border-l md:border-surface-border/70 md:pl-8">
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-text-primary">
                                            Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map(function(item, index){
                                                return (
                                                    <span 
                                                        key={index} 
                                                        className="inline-flex items-center rounded-full border border-primary-main/30 bg-primary-main/10 px-2.5 py-1 text-xs font-medium text-primary-active dark:text-primary-main transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                                                    >
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {links.length > 0 && (
                                        <div className="space-y-3 md:hidden">
                                            <h4 className="text-lg font-semibold text-text-primary">
                                                Resources
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {links.map(function(item, index){
                                                    return (
                                                        <a 
                                                            key={`mobile-${index}`} 
                                                            href={item.link} 
                                                            target="_blank" 
                                                            rel="noreferrer"
                                                            className="inline-flex items-center rounded-full border border-surface-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-primary-main/60 hover:bg-primary-main/10 transition-all duration-200"
                                                        >
                                                            {item.title}
                                                            <HiOutlineExternalLink className="ml-1 text-primary-main" size={14} />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExperienceTile;