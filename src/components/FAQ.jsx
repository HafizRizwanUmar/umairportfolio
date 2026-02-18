import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-white font-medium text-lg md:text-xl group-hover:text-accent transition uppercase">{question}</span>
                <span className="text-white border border-white/10 rounded-full p-2 group-hover:bg-accent group-hover:border-accent transition">
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What type of photography do you specialize in?",
            answer: "I specialize in Portrait, Landscape, Street, Wedding, and Commercial photography. Each genre allows me to tell stories from a different perspective, and I love the creative challenge that comes with each."
        },
        {
            question: "How can I book a photography session?",
            answer: "You can book a session by reaching out through the contact form below, DMing me on Instagram, or emailing me directly at muhtessamumair@gmail.com. I'll get back to you within 24 hours."
        },
        {
            question: "What equipment do you use?",
            answer: "I use professional-grade mirrorless cameras paired with a curated selection of prime and zoom lenses. My gear is chosen for its ability to deliver exceptional sharpness, color accuracy, and low-light performance."
        },
        {
            question: "Can I request a specific location for a shoot?",
            answer: "Absolutely! I'm open to shooting at locations that are meaningful to you or provide the perfect backdrop for your vision. I also love scouting new and unique locations."
        }
    ];

    const faqsRight = [
        {
            question: "What is your editing style?",
            answer: "My editing style leans towards a cinematic, moody aesthetic with rich tones and deep contrast. I focus on enhancing the natural beauty of each image while maintaining a consistent and professional feel across the entire set."
        },
        {
            question: "Are digital files included in your packages?",
            answer: "Yes, all of my packages include high-resolution, professionally edited digital files that you can use for prints, social media, and personal archives."
        },
        {
            question: "Do you offer prints of your photographs?",
            answer: "Yes, gallery-quality prints are available for purchase in various sizes and finishes. Feel free to reach out for pricing and options."
        },
        {
            question: "How long does it take to receive the edited photos?",
            answer: "Typically, I deliver the final edited gallery within 2-3 weeks after the session. For weddings and large events, it may take up to 4 weeks."
        }
    ];

    return (
        <section id="services" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">FAQ's</span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2 uppercase">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                    <div>
                        {faqsRight.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
