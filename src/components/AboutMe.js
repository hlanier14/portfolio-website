import React from "react";

function AboutMe() {
    return (
        <div>
            <div>
                <div className="text-2xl text-text-primary">
                    About Me
                </div>
                <div className="text-base text-md md:text-lg mt-6 md:mt-8 text-text-secondary">
                    Recent Techstars Powered by JP Morgan alum with hands-on experience building production data pipelines in a fast-paced startup environment. A Data Science graduate from Saint Louis University trained in Python, SQL, machine learning, and software development. Entrepreneur who loves working on projects that solve problems with data engineering and automation.
                </div>
            </div>
            <hr className="h-px my-6 md:my-8 border-0 bg-surface-border dark:bg-surface-border-dark"></hr>
        </div>
    );
}

export default AboutMe;

