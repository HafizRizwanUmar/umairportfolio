import React, { useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const textRef = useRef(null);
    const navRefs = useRef([]);
    const socialRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for "MUHTESSAM" text
            gsap.fromTo(textRef.current,
                { y: -50 },
                {
                    y: 50,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }
            );

            // Staggered animation for navigation lists
            gsap.fromTo(navRefs.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Magnetic button effect
            const button = footerRef.current.querySelector('.magnetic-button');
            if (button) {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(button, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
                });
                button.addEventListener('mouseleave', () => {
                    gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
                });
            }

            // Social icons animation
            gsap.fromTo(socialRef.current.children,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: socialRef.current,
                        start: "top 95%",
                    }
                }
            );

        }, footerRef);

        return () => ctx.revert();
    }, []);

    const addToNavRefs = (el) => {
        if (el && !navRefs.current.includes(el)) {
            navRefs.current.push(el);
        }
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer ref={footerRef} className="pt-12 md:pt-20 pb-10 px-4 md:px-6 bg-dark border-t border-white/10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">

                {/* Huge Text Background */}
                <div className="relative border-b border-white/10 pb-12 md:pb-20 mb-12 md:mb-20">
                    <h1 ref={textRef} className="text-[15vw] md:text-[12vw] font-bold text-white/5 leading-none text-center select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0">
                        MUHTESSAM
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between items-end relative z-10 px-2 md:px-4">
                        <div className="mb-8 md:mb-0 w-full md:w-auto">
                            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mb-4">A more meaningful home for photography</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-4">
                                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">LET'S <br /> WORK TOGETHER</h2>
                                <button className="bg-accent w-16 h-16 md:w-auto md:h-auto md:px-8 md:py-3 rounded-full text-white hover:bg-purple-600 transition flex items-center justify-center self-start sm:self-end mb-2 group magnetic-button">
                                    <span className="hidden md:inline mr-2">Get in touch</span>
                                    <BsArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20 border-b border-white/10 pb-12">
                    <div ref={addToNavRefs}>
                        <h4 className="text-gray-500 uppercase text-sm mb-4 md:mb-6 font-semibold">Home</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">About Me</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">My Works</a></li>
                            <li><a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Testimonials</a></li>
                        </ul>
                    </div>
                    <div ref={addToNavRefs}>
                        <h4 className="text-gray-500 uppercase text-sm mb-4 md:mb-6 font-semibold">Specialties</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Portraits</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Weddings</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Landscapes</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Street</a></li>
                        </ul>
                    </div>
                    <div ref={addToNavRefs}>
                        <h4 className="text-gray-500 uppercase text-sm mb-4 md:mb-6 font-semibold">Portfolio</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Editorial</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Commercial</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Events</a></li>
                        </ul>
                    </div>
                    <div ref={addToNavRefs}>
                        <h4 className="text-gray-500 uppercase text-sm mb-4 md:mb-6 font-semibold">Services</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Photo Shoots</a></li>
                            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Photo Editing</a></li>
                            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-white hover:text-accent transition uppercase text-xs md:text-sm tracking-wide">Print Sales</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center text-gray-500 text-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-8 md:mt-0">
                        <span className="md:hidden">© 2026 Muhtessam Umair Photography.</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        </div>
                        <span className="hidden md:block">© 2026 Minderfly.com . All rights reserved.</span>
                    </div>

                    <div ref={socialRef} className="flex gap-4">
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:text-white transition cursor-pointer text-white"><FaInstagram /></div>
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:text-white transition cursor-pointer text-white"><FaFacebookF /></div>
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:text-white transition cursor-pointer text-white"><FaLinkedinIn /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
