import React from "react";

function ProjectTile({ title, subtitle, date, coverImage, link }) {
    const handleTileClick = () => {
        if (link && link !== "#") {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div 
            className="md:flex rounded-lg overflow-hidden shadow-md dark:shadow-theme-dark transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 bg-background-default dark:bg-surface-dark border border-surface-border dark:border-surface-border-dark hover:border-primary-main hover:bg-background-secondary dark:hover:bg-surface-dark"
            onClick={handleTileClick}
        >
          <div className="md:w-1/3 flex overflow-hidden">
            <img className="md:w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={ "/cover-images/" + coverImage } alt={coverImage} />
          </div>
          <div className="md:w-2/3 md:h-full px-6 py-4 flex flex-col justify-between">
            <div className="font-bold text-2xl mb-2 text-text-primary">
                { title }
            </div>
            <div className="text-s justify-end mb-2 text-text-tertiary">
                { date }
            </div>
            <p className="text-base text-sm md:text-md text-text-secondary">
              { subtitle }
            </p>
          </div>
        </div>
    );
  }
  
  export default ProjectTile;

