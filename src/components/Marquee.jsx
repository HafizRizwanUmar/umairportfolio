import React from 'react';
import { motion } from 'framer-motion';
import { RxStarFilled } from 'react-icons/rx';

const Marquee = () => {
    const services = [
        "Portrait Photography",
        "Wedding Photography",
        "Landscape Photography",
        "Street Photography",
        "Editorial Photography",
        "Commercial Photography",
        "Event Photography"
    ];

    return (
        <div className="py-10 bg-dark overflow-hidden border-y border-white/5">
            <div className="relative flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-12 min-w-full"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...services, ...services].map((service, index) => (
                        <div key={index} className="flex items-center gap-4 text-gray-400 text-sm md:text-base tracking-widest uppercase">
                            <RxStarFilled className="text-accent" />
                            {service}
                        </div>
                    ))}
                </motion.div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent z-10"></div>
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
            </div>
        </div>
    );
};

export default Marquee;
