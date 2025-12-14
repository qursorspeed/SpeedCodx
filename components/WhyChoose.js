'use client';
import { motion } from 'framer-motion';
import { Clock, Layout, Smartphone, Search, DollarSign, LifeBuoy } from 'lucide-react';

const reasons = [
    { icon: Clock, title: 'Fast Delivery', desc: 'We value your time. Expect rapid turnaround without compromising quality.' },
    { icon: Layout, title: 'Clean & Modern UI', desc: 'Designs that look professional and build trust with your customers.' },
    { icon: Smartphone, title: 'Mobile Responsive', desc: 'Flawless experiences across all devices: mobile, tablet, and desktop.' },
    { icon: Search, title: 'SEO Friendly', desc: 'Built-in best practices to help your site rank better on search engines.' },
    { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium quality services at competitive rates for maximum ROI.' },
    { icon: LifeBuoy, title: 'Long-term Support', desc: 'We don’t just leave you. We are here for updates and maintenance.' }
];

export default function WhyChoose() {
    return (
        <section className="section-padding relative">
            <div className="container-custom">
                <h2 className="section-title">Why Choose <span className="text-gradient">SpeedCodx</span></h2>
                <p className="section-subtitle">We deliver excellence in every project.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white/5 transition-colors"
                        >
                            <div className="text-accent mt-1">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
