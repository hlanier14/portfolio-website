import React from "react";

function AboutMe() {
    return (
        <div>
            <div>
                <div className="text-2xl text-text-primary">
                    About Me
                </div>
                <div className="text-base text-md md:text-lg mt-6 md:mt-8 text-text-secondary">
                    Machine Learning Engineer with expertise in building and deploying production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience developing computer vision models using PyTorch and TensorFlow, achieving 92% accuracy in real-time detection systems. A Data Science graduate from Saint Louis University with strong foundations in deep learning, MLOps, and production ML infrastructure. Experienced in end-to-end ML workflows from model development to deployment on cloud platforms (GCP, AWS). Passionate about solving complex problems with machine learning and building scalable ML systems.
                </div>
            </div>
            <hr className="h-px my-6 md:my-8 border-0 bg-surface-border dark:bg-surface-border-dark"></hr>
        </div>
    );
}

export default AboutMe;

