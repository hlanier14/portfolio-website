import React from "react";
import BlogTile from "./BlogTile";
import articles from "../data/articles.json";

function BlogSection() {
    return (
        <>
            <div>
                <div class="flex items-stretch">
                    <div class="w-1/2 text-2xl mb-10">
                        Blog
                    </div>
                </div>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    { articles.map(function(item) {
                        return (
                            <BlogTile
                                title={ item["Title"] }
                                subtitle={ item["Subtitle"] }
                                date={ item["Date"] }
                                coverImage={ item["Cover Image"] }
                                slug={ item["Slug"] }
                            />
                        )
                    })}
                </div>
                <div class="flex justify-center text-2xl my-10 ">
                    <a href="/blog" class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                        See Full Blog
                    </a>
                </div>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0"></hr>
        </>
    );
  }
  
  export default BlogSection;