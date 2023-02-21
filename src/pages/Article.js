import React from "react";
import { useParams } from 'react-router';
import { HiArrowNarrowLeft } from "react-icons/hi";
import articles from "../data/articles.json";

function Article() {

  const { slug } = useParams();

  var article = articles.find(obj => {
    return obj["Slug"] === slug
  });

  return (
    <div class="flex w-full pb-36 md:w-2/3 bg-slate-100">
      <div class="m-10 md:m-20">
        <a href="/blog" class="inline-flex md:hidden items-center mr-2 mt-5 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
            <HiArrowNarrowLeft />
            <div class="ml-2">Back to Blog</div>
        </a>
        <div class="text-3xl md:text-5xl font-bold mb-3 mt-20 md:mt-10">
          { article["Title"] }
        </div>
        <div class="text-xl md:text-2xl text-gray-700 mb-3">
          { article["Subtitle"] }
        </div>
        <div class="text-sm text-gray-500 mb-7">
          { article["Date"] }
        </div>
        <div class="flex justify-center">
          <img class="w-5/6 md:w-3/4" src={ article["Cover Image"] } alt={ article["Cover Image"] }/> 
        </div>
        <div class="mt-20 md:mx-20 text-lg">
          { article["Text"].map(function(item) {
            return (
              <p class="indent-4">{ item }</p>
            )
          })}
        </div>
      </div>
    </div>
  );
}
  
export default Article;