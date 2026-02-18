import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { FaCamera, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projects from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);

    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const metaRef = useRef(null);
    const descRef = useRef(null);
    const galleryRef = useRef(null);
    const processRef = useRef(null);
    const toolsRef = useRef(null);
    const navRef = useRef(null);

    const currentIndex = projects.findIndex(p => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!project) return;

        const ctx = gsap.context(() => {
            // Hero image reveal
            gsap.fromTo(heroRef.current,
                { clipPath: 'inset(100% 0% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut' }
            );

            // Title animation
            const titleChars = titleRef.current.querySelectorAll('.char');
            gsap.fromTo(titleChars,
                { y: 100, opacity: 0, rotateX: -60 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.4 }
            );

            // Meta info stagger
            const metaItems = metaRef.current.querySelectorAll('.meta-item');
            gsap.fromTo(metaItems,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.8 }
            );

            // Description slide up
            gsap.fromTo(descRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: descRef.current, start: 'top 85%' }
                }
            );

            // Gallery images stagger
            const galleryImages = galleryRef.current.querySelectorAll('.gallery-item');
            galleryImages.forEach((img, i) => {
                gsap.fromTo(img,
                    { y: 80, opacity: 0, scale: 0.95 },
                    {
                        y: 0, opacity: 1, scale: 1,
                        duration: 0.9, delay: i * 0.1, ease: 'power3.out',
                        scrollTrigger: { trigger: img, start: 'top 90%' }
                    }
                );
            });

            // Process section
            const processItems = processRef.current.querySelectorAll('.process-item');
            processItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                        scrollTrigger: { trigger: item, start: 'top 85%' }
                    }
                );
            });

            // Tools
            const toolItems = toolsRef.current.querySelectorAll('.tool-item');
            gsap.fromTo(toolItems,
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.7)',
                    scrollTrigger: { trigger: toolsRef.current, start: 'top 90%' }
                }
            );

            // Navigation
            gsap.fromTo(navRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: navRef.current, start: 'top 90%' }
                }
            );

        });

        return () => ctx.revert();
    }, [project, slug]);

    if (!project) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-400 mb-8">Project not found</p>
                    <Link to="/" className="px-6 py-3 bg-accent rounded-lg text-white hover:bg-purple-600 transition">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const splitChars = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <div className="bg-dark min-h-screen text-white">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 bg-dark/80 backdrop-blur-md border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition duration-300 group"
                >
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back
                </Link>
            </div>

            {/* Hero Image */}
            <div ref={heroRef} className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12">
                    <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">{project.category}</span>
                    <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6" style={{ perspective: '800px' }}>
                        {splitChars(project.title.toUpperCase())}
                    </h1>
                </div>
            </div>

            {/* Project Meta */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div ref={metaRef} className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-white/10 pb-12 mb-16">
                    <div className="meta-item">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FaUser size={12} />
                            <span className="text-xs uppercase tracking-wider text-gray-500">Client</span>
                        </div>
                        <p className="text-white font-medium">{project.client}</p>
                    </div>
                    <div className="meta-item">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FaCalendarAlt size={12} />
                            <span className="text-xs uppercase tracking-wider text-gray-500">Date</span>
                        </div>
                        <p className="text-white font-medium">{project.date}</p>
                    </div>
                    <div className="meta-item">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FaMapMarkerAlt size={12} />
                            <span className="text-xs uppercase tracking-wider text-gray-500">Location</span>
                        </div>
                        <p className="text-white font-medium">{project.location}</p>
                    </div>
                    <div className="meta-item">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FaClock size={12} />
                            <span className="text-xs uppercase tracking-wider text-gray-500">Duration</span>
                        </div>
                        <p className="text-white font-medium">{project.duration}</p>
                    </div>
                    <div className="meta-item">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FaCamera size={12} />
                            <span className="text-xs uppercase tracking-wider text-gray-500">Category</span>
                        </div>
                        <p className="text-white font-medium">{project.category}</p>
                    </div>
                </div>

                {/* Description */}
                <div ref={descRef} className="max-w-4xl mb-20">
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-4">About This Project</h2>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                        {project.description}
                    </p>
                </div>

                {/* Gallery */}
                <div ref={galleryRef} className="mb-20">
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.map((img, index) => (
                            <div
                                key={index}
                                className={`gallery-item group relative overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} - ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div ref={processRef} className="mb-20">
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-12">The Process</h2>
                    <div className="space-y-16">
                        <div className="process-item grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                            <div>
                                <span className="text-6xl font-bold text-white/10">01</span>
                                <h3 className="text-accent text-sm uppercase tracking-wider mt-2">The Challenge</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg border-l border-white/10 pl-8">
                                {project.challenge}
                            </p>
                        </div>
                        <div className="process-item grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                            <div>
                                <span className="text-6xl font-bold text-white/10">02</span>
                                <h3 className="text-accent text-sm uppercase tracking-wider mt-2">The Approach</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg border-l border-white/10 pl-8">
                                {project.approach}
                            </p>
                        </div>
                        <div className="process-item grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                            <div>
                                <span className="text-6xl font-bold text-white/10">03</span>
                                <h3 className="text-accent text-sm uppercase tracking-wider mt-2">The Result</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg border-l border-white/10 pl-8">
                                {project.result}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tools & Equipment */}
                <div ref={toolsRef} className="mb-20">
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8">Equipment Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool, index) => (
                            <span
                                key={index}
                                className="tool-item px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-accent/50 hover:text-white transition duration-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Navigation */}
                <div ref={navRef} className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {prevProject ? (
                        <Link
                            to={`/project/${prevProject.slug}`}
                            className="group flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-accent/30 transition duration-300"
                        >
                            <BsArrowLeft className="text-accent group-hover:-translate-x-2 transition-transform duration-300" size={20} />
                            <div>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Previous</span>
                                <p className="text-white font-medium">{prevProject.title}</p>
                            </div>
                        </Link>
                    ) : <div />}

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 p-6 bg-accent/10 border border-accent/20 rounded-2xl hover:bg-accent/20 transition duration-300 text-center"
                    >
                        <span className="text-white font-medium">All Projects</span>
                    </Link>

                    {nextProject ? (
                        <Link
                            to={`/project/${nextProject.slug}`}
                            className="group flex items-center justify-end gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-accent/30 transition duration-300"
                        >
                            <div className="text-right">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Next</span>
                                <p className="text-white font-medium">{nextProject.title}</p>
                            </div>
                            <BsArrowRight className="text-accent group-hover:translate-x-2 transition-transform duration-300" size={20} />
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
