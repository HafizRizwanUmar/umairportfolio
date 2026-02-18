import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projects from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(headingRef.current.querySelectorAll('.anim-heading'),
                { y: 70, opacity: 0, skewY: 3 },
                {
                    y: 0, opacity: 1, skewY: 0,
                    duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Cards staggered reveal
            cardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 80, opacity: 0, scale: 0.95 },
                    {
                        y: 0, opacity: 1, scale: 1,
                        duration: 0.9,
                        delay: index * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        }
                    }
                );

                // Parallax effect on image inside card
                const img = card.querySelector('img');
                if (img) {
                    gsap.to(img, {
                        yPercent: -10,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        }
                    });
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="portfolio" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="anim-heading text-gray-400 text-sm uppercase tracking-widest block">Portfolio</span>
                        <h2 className="anim-heading text-3xl md:text-5xl font-semibold text-white mt-2">
                            EXPLORE MY <br /> PHOTOGRAPHY WORK.
                        </h2>
                    </div>
                    <div className="anim-heading flex gap-4 mt-6 md:mt-0">
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition hover:scale-110 duration-300">
                            ←
                        </button>
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition hover:scale-110 duration-300">
                            →
                        </button>
                        <button className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 text-white text-sm transition hover:scale-105 duration-300">
                            View All Works →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`group relative overflow-hidden rounded-2xl ${project.size === 'large' ? 'md:col-span-1 md:row-span-2 aspect-[3/4]' : 'md:col-span-1 aspect-square'}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-xs text-accent uppercase tracking-wider font-medium">{project.category}</span>
                                        <h3 className="text-lg font-medium text-white mb-1">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.date}</p>
                                    </div>
                                    <Link
                                        to={`/project/${project.slug}`}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent uppercase tracking-wider transition duration-300"
                                    >
                                        View Project <BsArrowUpRight />
                                    </Link>
                                </div>
                            </div>

                            {/* Full card clickable overlay */}
                            <Link
                                to={`/project/${project.slug}`}
                                className="absolute inset-0 z-10"
                                aria-label={`View ${project.title}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
