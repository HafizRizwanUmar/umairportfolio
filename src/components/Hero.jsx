import React, { useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const subtitleRef = useRef(null);
    const nameRef = useRef(null);
    const ctaRef = useRef(null);
    const circlesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline for hero entrance
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            // Subtitle slide up + fade
            tl.fromTo(subtitleRef.current,
                { y: 60, opacity: 0, skewY: 3 },
                { y: 0, opacity: 1, skewY: 0, duration: 1 }
            );

            // Name — split into individual letters for stagger
            const nameChars = nameRef.current.querySelectorAll('.char');
            tl.fromTo(nameChars,
                { y: 120, opacity: 0, rotateX: -90 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.03, ease: 'power3.out' },
                '-=0.6'
            );

            // CTA block
            tl.fromTo(ctaRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.5'
            );

            // Background circles pulse
            const circles = circlesRef.current.querySelectorAll('.hero-circle');
            gsap.fromTo(circles,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 0.2, duration: 2, stagger: 0.3, ease: 'power2.out', delay: 0.5 }
            );

            // Subtle floating animation on circles
            circles.forEach((circle, i) => {
                gsap.to(circle, {
                    y: i % 2 === 0 ? -15 : 15,
                    duration: 3 + i * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Helper to wrap text into individual span chars
    const splitChars = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section ref={sectionRef} id="home" className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
                    <div>
                        <h3 ref={subtitleRef} className="text-gray-400 text-sm md:text-base font-medium tracking-widest mb-4 uppercase opacity-0">
                            Capturing Moments That Last Forever
                        </h3>
                        <h1 ref={nameRef} className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[0.9]" style={{ perspective: '600px' }}>
                            {splitChars('MUHTESSAM')}
                            <br />
                            {splitChars('UMAIR')}
                        </h1>
                    </div>

                    <div ref={ctaRef} className="mt-8 md:mt-0 flex flex-col items-start md:items-end opacity-0">
                        <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-4xl md:text-6xl font-semibold text-white">LET'S</h2>
                            <button className="bg-accent px-8 py-3 rounded-full text-white hover:bg-purple-600 transition flex items-center justify-center hover:scale-110 duration-300">
                                <BsArrowUpRight size={24} />
                            </button>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold text-white">WORK TOGETHER</h2>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div ref={circlesRef}>
                <div className="hero-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 opacity-0 pointer-events-none"></div>
                <div className="hero-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 opacity-0 pointer-events-none"></div>
                <div className="hero-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/10 rounded-full z-0 opacity-0 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Hero;
