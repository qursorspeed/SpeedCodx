'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function CallToAction() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Let’s Build Your <br /><span className="text-gradient">Website Today</span></h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Ready to scale your business? Get a professional, high-converting website from SpeedCodx.
                    </p>
                    <Link href="https://wa.me/923359890334" target="_blank" className="btn-primary text-lg px-10 py-4 flex items-center gap-2 mx-auto">
                        <MessageCircle size={24} />
                        Chat on WhatsApp
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
