import React from "react";
import ArticleTile from "../components/ArticleTile";
import articles from "../data/articles.json";

function Portfolio() {

    return (
        <div class="flex w-full pb-36 md:w-2/3 bg-slate-100">
            <div class="m-10 md:m-20">
                <div class="text-2xl">
                    Portfolio
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0"></hr>
                <div class="flex p-5 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                    {/* <div class="h-1/2"> */}
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
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;