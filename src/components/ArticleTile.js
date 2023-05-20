import React from "react";

function ArticleTile({ title, subtitle, date, coverImage, links }) {
    return (
        <div class="md:flex rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="md:w-1/3 flex">
            <img class="md:w-full h-full object-cover " src={ "/cover-images/" + coverImage } alt={coverImage} />
          </div>
          <div class="md:w-2/3 md:h-full px-6 py-4 flex flex-col justify-between">
            <div class="font-bold text-2xl mb-2">
                { title }
            </div>
            <div class="text-s text-gray-400 justify-end mb-2">
                { date }
            </div>
            <p class="text-gray-700 text-base text-sm md:text-md">
              { subtitle }
            </p>
            <div class="flex justify-center md:justify-left items-end text-s mt-5 text-gray-400 space-x-3">
              { links.map(function(item) {
                    return (
                      <a
                          href={item["href"]}
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-white text-white text-xs font-bold py-2 px-4 rounded text-center"
                      >
                          {item["name"]}
                      </a>
                    )
                })}
            </div>
          </div>
        </div>
    );
  }
  
  export default ArticleTile;