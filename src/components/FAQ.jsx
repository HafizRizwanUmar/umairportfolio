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
            answer: "I specialize in Portrait, Landscape, Event, and Commercial photography, capturing moments that tell unique stories from various perspectives."
        },
        {
            question: "How can I book a photography session with you?",
            answer: "You can book a session by contacting me through the contact form below or emailing me directly at lukedavies@gmail.com."
        },
        {
            question: "What equipment do you use for your photography?",
            answer: "I use high-end professional Canon and Sony mirrorless cameras with a wide range of prime and zoom lenses to ensure the best quality."
        },
        {
            question: "Can I request a specific location for a shoot?",
            answer: "Absolutely! I am open to travel and shooting in locations that are meaningful to you or provide the perfect backdrop for your vision."
        }
    ];

    const faqsRight = [
        {
            question: "What is your editing process like?",
            answer: "My editing process focuses on enhancing the natural beauty of the image while maintaining a consistent and professional mood."
        },
        {
            question: "Are digital files included in your packages?",
            answer: "Yes, high-resolution digital files are included in most of my photography packages."
        },
        {
            question: "Do you offer prints of your photographs?",
            answer: "Yes, prints are available for purchase. Explore the specific prints section for more details on sizes and pricing."
        },
        {
            question: "How long does it take to receive the edited photos?",
            answer: "Typically, I deliver the final edited photos within 2-3 weeks after the session, depending on the volume of work."
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
