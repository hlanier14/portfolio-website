import React, { useState } from "react";
import { 
    HiOutlineExternalLink, 
    HiOutlineCalendar, 
    HiOutlineLink, 
    HiX 
} from "react-icons/hi";
import { trackProjectClick } from "../utils/analytics";

function ProjectTile({ title, shortDescription, subtitle, date, coverImage, link }) {
    const [showModal, setShowModal] = useState(false);

    const handleTileClick = (e) => {
        // Don't open modal if clicking on links
        if (e.target.closest('a')) {
            return;
        }
        // Track the click
        trackProjectClick(title);
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
                className="bg-background-secondary dark:bg-background-dark-darker rounded-2xl overflow-hidden border border-surface-border dark:border-surface-border-dark hover:border-primary-main/50 dark:hover:border-primary-main/50 transition-all duration-200 cursor-pointer hover:shadow-xl hover:scale-[1.01] flex"
            >
                {coverImage && (
                    <div className="flex-shrink-0 w-24 md:w-32">
                        <img 
                            src={"/cover-images/" + coverImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="flex-1 p-6 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="text-lg text-text-primary">
                            <span className="font-semibold">{title}</span>
                        </h3>
                        <time className="text-sm font-medium text-text-secondary whitespace-nowrap">
                            {date}
                        </time>
                    </div>
                    
                    {shortDescription && (
                        <div className="pt-1">
                            <p className="text-sm text-text-secondary line-clamp-2">
                                {shortDescription}
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
                                <div className="flex-1 space-y-3">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
                                            {title}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
                                            <HiOutlineCalendar className="text-primary-main" />
                                            <span>{date}</span>
                                        </div>
                                    </div>
                                </div>
                                {link && link !== "#" && (
                                    <div className="hidden md:flex flex-wrap gap-3 justify-end mr-12">
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="group inline-flex items-center rounded-full border border-surface-border/80 dark:border-surface-border-dark/70 px-4 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary-main/60 hover:bg-primary-main/10 transition-all duration-200"
                                        >
                                            View Project
                                            <HiOutlineLink className="ml-2 text-primary-main group-hover:translate-x-0.5 transition-transform" size={16} />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {coverImage && (
                                <div className="w-full rounded-xl overflow-hidden border border-surface-border/60 dark:border-surface-border-dark/60">
                                    <img 
                                        src={"/cover-images/" + coverImage}
                                        alt={title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <div className="space-y-5">
                                {subtitle && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-semibold text-text-primary">
                                                About
                                            </h4>
                                            <span className="hidden md:inline-flex h-px flex-1 ml-4 bg-surface-border/60 dark:bg-surface-border-dark/60"></span>
                                        </div>
                                        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
                                            {subtitle}
                                        </p>
                                    </div>
                                )}
                                
                                {link && link !== "#" && (
                                    <div className="space-y-3 md:hidden pt-4 border-t border-surface-border/60 dark:border-surface-border-dark/60">
                                        <h4 className="text-lg font-semibold text-text-primary">
                                            Resources
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            <a 
                                                href={link} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="inline-flex items-center rounded-full border border-surface-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-primary-main/60 hover:bg-primary-main/10 transition-all duration-200"
                                            >
                                                View Project
                                                <HiOutlineExternalLink className="ml-1 text-primary-main" size={14} />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectTile;

