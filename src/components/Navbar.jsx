import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Me', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wider text-white uppercase">
                    Muhtessam
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-1 border border-white/10 rounded-full px-2 py-1 bg-white/5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 rounded-full text-sm transition-colors duration-300 ${link.name === 'Home' ? 'bg-darkAccent text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <a href="#contact" className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition">
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-dark border-b border-white/10 p-4 flex flex-col space-y-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white block"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="block text-center py-2 bg-white/5 border border-white/10 rounded-lg text-white">
                        Contact Me
                    </a>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
