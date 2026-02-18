import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const projects = [
    {
        id: 1,
        title: "Golden Hour Portraits",
        category: "Portrait",
        date: "November 2025",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Urban Geometry",
        category: "Street",
        date: "September 2025",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "Mountain Serenity",
        category: "Landscape",
        date: "July 2025",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 4,
        title: "A Wedding Story",
        category: "Wedding",
        date: "January 2026",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 5,
        title: "The Brand Identity",
        category: "Commercial",
        date: "December 2025",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 6,
        title: "Ethereal Mood",
        category: "Editorial",
        date: "October 2025",
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop",
        size: "large"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-gray-400 text-sm uppercase tracking-widest">Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2">
                            EXPLORE MY <br /> PHOTOGRAPHY WORK.
                        </h2>
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition">
                            ←
                        </button>
                        <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 text-white transition">
                            →
                        </button>
                        <button className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 text-white text-sm transition">
                            View All Works →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-2xl ${project.size === 'large' ? 'md:col-span-1 md:row-span-2 aspect-[3/4]' : 'md:col-span-1 aspect-square'}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-xs text-accent uppercase tracking-wider font-medium">{project.category}</span>
                                        <h3 className="text-lg font-medium text-white mb-1">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.date}</p>
                                    </div>
                                    <a href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent uppercase tracking-wider">
                                        View Project <BsArrowUpRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
