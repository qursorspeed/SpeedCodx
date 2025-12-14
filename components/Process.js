'use client';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, Code2, Rocket, Headphones } from 'lucide-react';

const steps = [
    { icon: MessageSquare, title: 'Requirement Discussion', desc: 'We listen to your ideas and goals.' },
    { icon: Layout, title: 'UI Planning & Design', desc: 'Wireframing and designing the perfect look.' },
    { icon: Code2, title: 'Development', desc: 'Writing clean, scalable, and secure code.' },
    { icon: Rocket, title: 'Testing & Optimization', desc: 'Ensuring everything runs perfectly.' },
    { icon: Headphones, title: 'Delivery & Support', desc: 'Launch and continuous support.' },
];

export default function Process() {
    return (
        <section id="process" className="section-padding">
            <div className="container-custom">
                <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
                <p className="section-subtitle">A streamlined workflow to bring your vision to life.</p>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                                    <step.icon size={32} />
                                    <div className="absolute -inset-2 rounded-full border border-accent/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
