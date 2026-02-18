import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gray-400 text-sm uppercase tracking-widest">About</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2">
                            I AM MUHTESSAM
                        </h2>
                    </div>
                    <div>
                        <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition">
                            Know More →
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000&auto=format&fit=crop"
                                alt="Muhtessam Umair"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-10">
                        <div>
                            <h3 className="text-xl text-accent font-medium mb-4 flex items-center gap-2">
                                <span className="text-2xl">+</span> Introduction
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm Muhtessam Umair, a passionate photographer dedicated to the art of visual storytelling. Through my lens, I capture the raw beauty of fleeting moments — transforming light, shadow, and emotion into timeless frames. Whether it's the energy of an event, the intimacy of a portrait, or the grandeur of a landscape, I bring a creative and cinematic eye to every shoot.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl text-accent font-medium mb-4 flex items-center gap-2">
                                <span className="text-2xl">+</span> Contact Information
                            </h3>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Email</p>
                                    <p className="text-white">muhtessamumair@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                                    <p className="text-white">+92 300 0000000</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent transition">
                                        <FaInstagram size={14} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent transition">
                                        <FaFacebookF size={14} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent transition">
                                        <FaLinkedinIn size={14} />
                                    </button>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition">
                                        Let's Work
                                    </button>
                                    <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition">
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
