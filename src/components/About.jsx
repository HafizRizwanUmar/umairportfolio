import React, { useEffect, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const introRef = useRef(null);
    const contactRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section heading animation
            gsap.fromTo(headingRef.current.children,
                { y: 80, opacity: 0, skewY: 4 },
                {
                    y: 0, opacity: 1, skewY: 0,
                    duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Image reveal animation
            gsap.fromTo(imageRef.current,
                { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 },
                {
                    clipPath: 'inset(0% 0% 0% 0%)', scale: 1,
                    duration: 1.4, ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Introduction text animation
            const introElements = introRef.current.querySelectorAll('.animate-in');
            gsap.fromTo(introElements,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.8, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Contact info animation
            const contactElements = contactRef.current.querySelectorAll('.animate-in');
            gsap.fromTo(contactElements,
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Buttons animation
            gsap.fromTo(buttonsRef.current.children,
                { y: 20, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 0.6, stagger: 0.08, ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: buttonsRef.current,
                        start: 'top 90%',
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gray-400 text-sm uppercase tracking-widest block">About</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2">
                            I AM MUHTESSAM
                        </h2>
                    </div>
                    <div>
                        <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition hover:scale-105 duration-300">
                            Know More →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="relative">
                        <div ref={imageRef} className="rounded-[40px] overflow-hidden border border-white/10">
                            <img
                                src={profileImg}
                                alt="Muhtessam Umair"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-10">
                        <div ref={introRef}>
                            <h3 className="animate-in text-xl text-accent font-medium mb-4 flex items-center gap-2">
                                <span className="text-2xl">+</span> Introduction
                            </h3>
                            <p className="animate-in text-gray-400 leading-relaxed">
                                I'm Muhtessam Umair, a passionate photographer dedicated to the art of visual storytelling. Through my lens, I capture the raw beauty of fleeting moments — transforming light, shadow, and emotion into timeless frames. Whether it's the energy of an event, the intimacy of a portrait, or the grandeur of a landscape, I bring a creative and cinematic eye to every shoot.
                            </p>
                        </div>

                        <div ref={contactRef}>
                            <h3 className="animate-in text-xl text-accent font-medium mb-4 flex items-center gap-2">
                                <span className="text-2xl">+</span> Contact Information
                            </h3>
                            <div className="animate-in grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Email</p>
                                    <p className="text-white">muhtessamumair@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                                    <p className="text-white">+92 300 0000000</p>
                                </div>
                            </div>

                            <div ref={buttonsRef} className="flex gap-4">
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition duration-300">
                                        <FaInstagram size={14} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition duration-300">
                                        <FaFacebookF size={14} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition duration-300">
                                        <FaLinkedinIn size={14} />
                                    </button>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 hover:scale-105 transition duration-300">
                                        Let's Work
                                    </button>
                                    <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 hover:scale-105 transition duration-300">
                                        View Gallery
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
