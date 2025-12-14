'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-white/10 shadow-lg' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="relative h-10 w-40">
                    <Image
                        src="/logo.png"
                        alt="SpeedCodx Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact" className="btn-primary py-2 px-5 text-sm">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden absolute w-full left-0 top-full"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="btn-primary">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
