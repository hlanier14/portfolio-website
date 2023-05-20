import React, { useState } from 'react';
import ArticleTile from "../components/ArticleTile";
import articles from "../data/articles.json";
import axios from 'axios';


function Home() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        setSending(true);
        event.preventDefault();
        console.log(formData);
        const response = await axios.post('https://portfolio-website-backend-qkncq25ynq-uc.a.run.app/contact-form-submission', formData);
        if(response.status == 200) {
            setSubmitted(true);
        } else {
            setError(true);
        }
        setSending(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row items-left md:items-center mx-10 md:mx-20">
                        <div className="md:w-3/5 mb-10">
                            <h3 className="text-2xl font-bold">
                                I am
                            </h3>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                Harrison Lanier,
                            </h1>
                            <p className="text-lg mb-8">
                                a data enthusiast who loves to build.
                            </p>
                            <a
                                href="/portfolio"
                                className="bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded"
                            >
                                Portfolio
                            </a>
                        </div>
                        <div className="md:w-2/5">
                            <img
                                src="./profile.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100">
                <div className="flex min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-flow-row auto-rows-auto gap-4 my-10 mx-5 md:m-20">
                        <div>
                            <div>
                                <div className="text-2xl">
                                    About Me
                                </div>
                                <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                                    Recent Techstars Powered by JP Morgan alum with hands-on experience building production data pipelines in a fast-paced startup environment. A Data Science graduate from Saint Louis University trained in Python, SQL, machine learning, and software development. Entrepreneur who loves working on projects that solve problems with data engineering and automation.
                                </div>
                                <div className="text-base text-md md:text-lg mt-10 mx-5 md:mx-10">
                                    Currently looking for full-time roles and love meeting new people. Please reach out and connect!
                                </div>
                                <div class="flex justify-center text-2xl mt-10 ">
                                    <a href="/about" class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
                        </div>
                        <div>
                            <div>
                                <div class="flex items-stretch">
                                    <div class="w-1/2 text-2xl mb-10">
                                        Recent Work
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-10 md:gap-7 md:mx-10 ">
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
                                <div class="flex justify-center text-2xl mt-10 ">
                                    <a href="/portfolio" class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ">
                                        Full Portfolio
                                    </a>
                                </div>
                            </div>
                            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
                        </div>
                        <div className='w-full flex justify-center mb-10'>
                            {submitted ? (
                                <div className='h-80 '>
                                    Thank you for reaching out! I will follow up soon.
                                </div>
                                ) : (
                                <form className="w-full md:w-2/3 bg-white shadow rounded py-12 lg:px-12 px-8 md:mx-10" onSubmit={handleSubmit}>
                                    <p className="text-2xl md:text-3xl font-bold mb-2 text-center ">
                                        Contact me!
                                    </p>
                                    <div className="md:flex items-center mt-8">
                                        <div className="flex flex-col w-full md:w-2/3">
                                            <label className="text-base font-semibold leading-none text-gray-800">
                                                Name *
                                            </label>
                                            <input 
                                                name="name"
                                                tabIndex={0} 
                                                arial-label="Please input name" 
                                                type="name" 
                                                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" 
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-4">
                                        <div className="flex flex-col w-full md:w-2/3">
                                            <label className="text-base font-semibold leading-none text-gray-800">
                                                Email *
                                            </label>
                                            <input 
                                                name="email"
                                                tabIndex={0} 
                                                role="input" 
                                                arial-label="Please input email" 
                                                type="email" 
                                                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " 
                                                placeholder="Please input email" 
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full flex flex-col mt-4">
                                            <label className="text-base font-semibold leading-none text-gray-800">
                                                Message *
                                            </label>
                                            <textarea 
                                                name="message"
                                                tabIndex={0} 
                                                aria-label="Leave a message" 
                                                role="textbox" 
                                                type="name" 
                                                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" 
                                                defaultValue={""} 
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full mt-8">
                                        <button className="w-1/3 bg-blue-500 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-white text-white font-bold py-2 rounded mb-3">
                                            Submit
                                        </button>
                                        {sending ? (
                                            <div>
                                                Sending...
                                            </div>
                                        ) : (<></>)}
                                        {error ? (
                                            <div>
                                                There was an error submitting your message! Please <a 
                                                    href="mailto:hlanier90@gmail.com" 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="text-blue-500 hover:text-gray-800"
                                                > 
                                                    email me
                                                </a> instead.
                                            </div>
                                        ) : (<></>)}
                                    </div>
                                </form>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;