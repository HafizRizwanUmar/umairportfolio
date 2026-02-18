import React, { useEffect, useRef } from 'react';
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        id: 1,
        name: "Ahmed Khan",
        location: "Lahore, Pakistan",
        rating: 5,
        review: "Muhtessam's photography doesn't just capture moments; it captures emotions. His work on our brand campaign was simply mesmerizing.",
        socials: ['facebook', 'twitter', 'linkedin']
    },
    {
        id: 2,
        name: "Sara Ali",
        location: "Islamabad, Pakistan",
        rating: 5,
        review: "Muhtessam has an incredible talent for making every event feel effortless, and the results speak for themselves. Truly world-class work.",
        socials: ['facebook', 'twitter', 'linkedin']
    },
    {
        id: 3,
        name: "Usman Raza",
        location: "Karachi, Pakistan",
        rating: 5,
        review: "I was blown away by Muhtessam's ability to capture the essence of our wedding day. His photographs are our most cherished memories.",
        socials: ['facebook', 'twitter', 'linkedin']
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);
    const counterRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
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

            // Counter animation
            const counterObj = { val: 0 };
            gsap.to(counterObj, {
                val: 150,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: 'top 90%',
                },
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = Math.round(counterObj.val) + '+';
                    }
                }
            });

            // Cards stagger animation
            cardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 60, opacity: 0, rotateY: -5 },
                    {
                        y: 0, opacity: 1, rotateY: 0,
                        duration: 0.9,
                        delay: index * 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        }
                    }
                );

                // Star rating pop-in inside each card
                const stars = card.querySelectorAll('.star-icon');
                gsap.fromTo(stars,
                    { scale: 0, rotation: -180 },
                    {
                        scale: 1, rotation: 0,
                        duration: 0.4, stagger: 0.06, ease: 'back.out(2)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="testimonials" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="flex justify-between items-start mb-12">
                    <div>
                        <span className="anim-el text-accent text-sm uppercase tracking-widest block">Testimonials</span>
                        <h2 className="anim-el text-3xl md:text-5xl font-semibold text-white mt-2 uppercase">
                            What My Clients Say
                        </h2>
                        <div className="anim-el mt-4">
                            <p className="text-sm text-gray-400">Happy Clients</p>
                            <p ref={counterRef} className="text-2xl font-bold text-white">0+</p>
                        </div>
                    </div>
                    <div className="anim-el flex gap-4">
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition hover:scale-110 duration-300">
                            ←
                        </button>
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition hover:scale-110 duration-300">
                            →
                        </button>
                        <button className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 text-white text-sm transition hover:scale-105 duration-300">
                            View All Testimonials →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-darkAccent p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-white font-medium">{review.name}</h4>
                                    <p className="text-gray-500 text-sm">{review.location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-accent hover:scale-110 transition duration-300 cursor-pointer"><FaFacebookF size={12} /></div>
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-accent hover:scale-110 transition duration-300 cursor-pointer"><FaTwitter size={12} /></div>
                                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-accent hover:scale-110 transition duration-300 cursor-pointer"><FaLinkedinIn size={12} /></div>
                                </div>
                            </div>

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
