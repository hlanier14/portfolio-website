import React from "react";

function About() {
    return (
        <>
            <div>
                <div className="text-2xl">
                    About Me
                </div>
                <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                    Recent Techstars Powered by JP Morgan alum with hands on experience building production data pipelines in a fast-paced startup environment. A Data Science graduate from Saint Louis University trained in Python, SQL, machine learning, and software development. Two-time entrepreneur who loves working on projects that solve problems with data engineering and automation.
                </div>
                <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                    Some interesting facts about me:
                    <ul>
                        <li>Starred in two local commercials.</li>
                        <li>Avid traveler who gets nervous on airplanes.</li>
                        <li>Once went on a slip and slide with NBA Champion Tyson Chandler.</li>
                    </ul>
                </div>
                <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                    Currently looking for full-time roles and love meeting new people. Please reach out and connect!
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
        </>
    );
  }
  
  export default About;