'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10"
                    >
                        <span className="text-accent text-sm font-bold tracking-widest uppercase">
                            Fast. Clean. Scalable.
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
                        Professional Website <br />
                        <span className="text-gradient">Development Agency</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        SpeedCodx builds fast, secure, and modern websites that grow your business.
                        We turn your vision into a high-performance digital reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link href="#contact" className="btn-primary group w-full sm:w-auto min-w-[200px]">
                            Get Your Website
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link href="#services" className="btn-outline w-full sm:w-auto min-w-[200px]">
                            View Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-accent rounded-full mb-1" />
                </div>
            </motion.div>
        </section>
    );
}
