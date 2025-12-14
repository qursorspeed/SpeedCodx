'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of <span className="text-gradient">Digital Assets</span></h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        SpeedCodx is a premier digital agency aimed at providing fast, secure, and scalable solutions.
                        We don't just write code; we engineer growth engines for your business.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Our mission is to bridge the gap between complex technology and user-friendly experience,
                        ensuring your digital presence is not just visible, but dominant.
                    </p>

                    <div className="space-y-4">
                        {['Fast Performance', 'Clean Code Architecture', 'Scalable Infrastructure'].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <CheckCircle className="text-accent" size={20} />
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4 relative z-10">
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            {/* Abstract visual */}
                            <div className="absolute inset-0 opacity-20 bg-repeat bg-[length:100px_100px] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            <div className="w-32 h-32 bg-accent/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/30 transition-all duration-500"></div>
                            <h3 className="text-3xl font-bold relative z-10">Speed<span className="text-accent">Codx</span></h3>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-accent/5 rounded-full blur-[80px] -z-10"></div>
                </motion.div>
            </div>
        </section>
    )
}
