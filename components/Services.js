'use client';
import { motion } from 'framer-motion';
import { Code, Monitor, Rocket, Layers, Smartphone, AppWindow } from 'lucide-react';

const services = [
    { icon: Code, title: 'Web Development', desc: 'Custom, high-performance websites tailored to your business needs using the latest tech.' },
    { icon: Monitor, title: 'Business Websites', desc: 'Professional digital presence for agencies, corporates, and small businesses.' },
    { icon: Layers, title: 'Landing Pages', desc: 'High-converting landing pages designed to turn visitors into paying customers.' },
    { icon: AppWindow, title: 'Custom Web Apps', desc: 'Complex web applications with secure databases and dynamic functionality.' },
    { icon: Smartphone, title: 'UI/UX Design', desc: 'User-centric interfaces that look premium and provide seamless experiences.' },
    { icon: Rocket, title: 'Speed & Optimization', desc: 'Lightning fast loading times and SEO fixes to rank higher on Google.' }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-black/50 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle">Comprehensive digital solutions engineered for growth and performance.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group"
                        >
                            <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
