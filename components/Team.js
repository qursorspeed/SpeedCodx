'use client';
import { motion } from 'framer-motion';

const team = [
    { name: 'Speed', realName: '(Abdullah Abbas)', role: 'CEO & Developer', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Daniyal', role: 'Operations Manager', color: 'from-blue-400 to-blue-600' },
    { name: 'Gohar', role: 'Social Media Handler', color: 'from-purple-400 to-purple-600' },
    { name: 'Maaz', role: 'Social Media Handler', color: 'from-green-400 to-green-600' },
    { name: 'Rehan', role: 'Social Media Handler', color: 'from-red-400 to-red-600' },
];

export default function Team() {
    return (
        <section id="team" className="section-padding relative">
            <div className="container-custom">
                <h2 className="section-title">Meet Our <span className="text-gradient">Team</span></h2>
                <p className="section-subtitle">The experts behind premium digital solutions.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 text-center hover:bg-white/5 transition-colors group"
                        >
                            <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                {member.name[0]}
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            {member.realName && <p className="text-sm font-medium text-white/80 mb-1">{member.realName}</p>}
                            <p className="text-sm text-gray-400">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
