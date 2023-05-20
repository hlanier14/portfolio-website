import React from "react";
import ArticleTile from "../components/ArticleTile";
import articles from "../data/articles.json";

function Portfolio() {
    return (
        <div className="bg-slate-100">
            <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div class="my-10 mx-5 md:m-20">
                    <div class="text-2xl">
                        Portfolio
                        <hr class="h-px my-8 bg-gray-200 border-0"></hr>
                    </div>
                    <div class="grid grid-cols-1 gap-7 md:mx-10 mb-20">
                        { articles.map(function(item) {
                            return (
                                <ArticleTile
                                    title={ item["Title"] }
                                    subtitle={ item["Subtitle"] }
                                    date={ item["Date"] }
                                    coverImage={ item["Cover Image"] }
                                    links={ item["Links"] }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;