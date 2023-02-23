import React from "react";

function ArticleTile({ title, subtitle, date, coverImage, slug }) {
    return (
        <div class="h-min rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all ease-in">
          <a href={ "/portfolio/" + slug }>
            <img class="w-full hover:backdrop-brightness-50 " src={ "/cover-images/" + coverImage } alt={coverImage} />
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2">
                  { title }
              </div>
              <p class="text-gray-700 text-base">
                { subtitle }
              </p>
              <div class="text-s mt-2 text-gray-400 justify-end">
                  { date }
              </div>
            </div>
          </a>
        </div>
    );
  }
  
  export default ArticleTile;