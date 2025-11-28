import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineMail } from "react-icons/hi";
import { RxLinkedinLogo } from "react-icons/rx";
import { trackFormInteraction } from "../utils/analytics";

function Contact() {
    const siteUrl = "https://harrisonlanier.com";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const hasTrackedFormStart = useRef(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        
        // Track form start on first interaction
        if (!hasTrackedFormStart.current) {
            trackFormInteraction("contact_form", "start");
            hasTrackedFormStart.current = true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Track form submission
        trackFormInteraction("contact_form", "submit", {
            form_fields: Object.keys(formData).join(", "),
        });

        // Simulate form submission (you can integrate with a backend service later)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            
            // Track form success
            trackFormInteraction("contact_form", "success");
            
            setFormData({ name: "", email: "", message: "" });
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1000);
    };

    return (
        <>
            <Helmet>
                <title>Contact - Harrison Lanier | Machine Learning Engineer</title>
                <meta
                    name="description"
                    content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments."
                />
                <link rel="canonical" href={`${siteUrl}/contact`} />
                <meta property="og:title" content="Contact - Harrison Lanier | Machine Learning Engineer" />
                <meta property="og:description" content="Machine Learning Engineer with expertise in PyTorch, TensorFlow, and production ML systems. Recent Techstars Powered by JP Morgan alum with hands-on experience building and deploying ML models in production environments." />
                <meta property="og:url" content={`${siteUrl}/contact`} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Harrison Lanier",
                        "description": "Contact page for Harrison Lanier - Machine Learning Engineer",
                        "url": `${siteUrl}/contact`,
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Harrison Lanier",
                            "jobTitle": "Machine Learning Engineer",
                            "email": "hlanier90@gmail.com",
                            "sameAs": [
                                "https://linkedin.com/in/harrison-lanier"
                            ]
                        }
                    }, null, 0)}
                </script>
            </Helmet>
            <section id="contact" className="pt-16 min-h-screen">
            <div className="bg-background-default dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                            Get In Touch
                        </h1>
                        <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
                            Have a question or want to work together? Feel free to reach out!
                        </p>
                    </div>

                    <div className="rounded-lg bg-background-secondary dark:bg-background-dark-darker grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-8">
                        {/* Contact Buttons */}
                        <div className="order-1 md:order-1">
                            <div className="h-full flex flex-col justify-center space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-text-primary">
                                        Reach out directly
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="mailto:hlanier90@gmail.com"
                                        className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-primary-main text-primary-text font-medium rounded-lg hover:bg-primary-hover active:bg-primary-active transition-colors"
                                    >
                                        <HiOutlineMail size={20} />
                                        <span>Email Me</span>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/harrison-lanier"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-background-default dark:bg-background-dark border-2 border-primary-main text-primary-main font-medium rounded-lg hover:bg-primary-main/10 dark:hover:bg-primary-main/20 transition-colors"
                                    >
                                        <RxLinkedinLogo size={20} />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="order-2 md:order-2">
                            <div className="h-full">
                                <h2 className="text-xl font-semibold mb-4 text-text-primary">
                                    Send a message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2 text-text-primary"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-surface-border dark:border-surface-border-dark bg-background-default dark:bg-background-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2 text-text-primary"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-surface-border dark:border-surface-border-dark bg-background-default dark:bg-background-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 text-text-primary"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 rounded-lg border border-surface-border dark:border-surface-border-dark bg-background-default dark:bg-background-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-primary-main text-primary-text font-medium rounded-lg hover:bg-primary-hover active:bg-primary-active transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>

                                    {submitStatus === "success" && (
                                        <div className="p-4 rounded-lg bg-status-success/10 border border-status-success/20 text-status-success text-sm">
                                            Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;

