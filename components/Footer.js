import Link from 'next/link';
import Image from 'next/image';



export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="relative block h-10 w-40 mb-6">
                            <Image
                                src="/logo.png"
                                alt="SpeedCodx Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Fast, clean, and scalable digital solutions. We help businesses grow with premium website development and SEO services.
                        </p>

                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {['Web Development', 'UI/UX Design', 'SEO Optimization', 'Custom Apps'].map(item => (
                                <li key={item}><Link href="#" className="hover:text-accent transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            {['About Us', 'Our Process', 'Team'].map(item => (
                                <li key={item}><Link href="#" className="hover:text-accent transition-colors">{item}</Link></li>
                            ))}
                            <li><Link href="https://wa.me/923359890334" target="_blank" className="hover:text-accent transition-colors">Contact via WhatsApp</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} SpeedCodx. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
