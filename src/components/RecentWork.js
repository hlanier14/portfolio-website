import React from "react";
import ArticleTile from "./ArticleTile";
import articles from "../data/articles.json";

function RecentWork() {
    return (
            <div>
                <div class="flex items-stretch">
                    <div class="w-1/2 text-2xl mb-10">
                        Recent Work
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 mx-5 md:mx-10 ">
                    { articles.map(function(item) {
                        return (
                            <ArticleTile
                                title={ item["Title"] }
                                subtitle={ item["Subtitle"] }
                                date={ item["Date"] }
                                coverImage={ item["Cover Image"] }
                                link={ item["Link"] }
                            />
                        )
                    })}
                </div>
                <div class="flex justify-center text-2xl my-10 ">
                    <a href="/portfolio" class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                        Full Portfolio
                    </a>
                </div>
            </div>
    );
  }
  
  export default RecentWork;