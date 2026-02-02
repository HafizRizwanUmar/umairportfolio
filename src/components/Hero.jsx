import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-gray-400 text-sm md:text-base font-medium tracking-widest mb-4 uppercase">
                            Stunning Photography By
                        </h3>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[0.9]">
                            LUKE <br /> DAVIES
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-8 md:mt-0 flex flex-col items-start md:items-end"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-4xl md:text-6xl font-semibold text-white">LET'S</h2>
                            <button className="bg-accent px-8 py-3 rounded-full text-white hover:bg-purple-600 transition flex items-center justify-center">
                                <BsArrowUpRight size={24} />
                            </button>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold text-white">WORK TOGETHER</h2>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 opacity-20 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
