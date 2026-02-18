import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const itemRef = useRef(null);
    const answerRef = useRef(null);

    useEffect(() => {
        if (!itemRef.current) return;
        gsap.fromTo(itemRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.7,
                delay: index * 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: itemRef.current,
                    start: 'top 92%',
                }
            }
        );
    }, [index]);

    useEffect(() => {
        if (!answerRef.current) return;
        if (isOpen) {
            gsap.fromTo(answerRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        } else {
            gsap.to(answerRef.current,
                { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' }
            );
        }
    }, [isOpen]);

    return (
        <div ref={itemRef} className="border-b border-white/10 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-white font-medium text-lg md:text-xl group-hover:text-accent transition uppercase">{question}</span>
                <span className={`text-white border border-white/10 rounded-full p-2 transition duration-300 ${isOpen ? 'bg-accent border-accent rotate-180' : 'group-hover:bg-accent group-hover:border-accent'}`}>
                    <IoIosArrowDown />
                </span>
            </button>
            <div ref={answerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <p className="text-gray-400 leading-relaxed pt-4">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current.querySelectorAll('.anim-el'),
                { y: 60, opacity: 0, skewY: 3 },
                {
                    y: 0, opacity: 1, skewY: 0,
                    duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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
        <section ref={sectionRef} id="services" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="mb-12">
                    <span className="anim-el text-gray-400 text-sm uppercase tracking-widest block">FAQ's</span>
                    <h2 className="anim-el text-3xl md:text-5xl font-semibold text-white mt-2 uppercase">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} index={index} {...faq} />
                        ))}
                    </div>
                    <div>
                        {faqsRight.map((faq, index) => (
                            <FAQItem key={index} index={index + 4} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
