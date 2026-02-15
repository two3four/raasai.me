import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Shield, Bell, Menu, X, ArrowRight, Smartphone, MessageSquare, Car, Wallet, Briefcase, PhoneCall } from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const features = [
        {
            icon: <QrCode size={28} className="text-primary-red" />,
            title: "Smart QR Contact",
            description: "Allow people to contact you by scanning a secure QR code on your vehicle or property."
        },
        {
            icon: <Shield size={28} className="text-primary-red" />,
            title: "Privacy First",
            description: "Connect without ever sharing your phone number or personal details publicly."
        },
        {
            icon: <Bell size={28} className="text-primary-red" />,
            title: "Instant Alerts",
            description: "Receive immediate notifications on your phone whenever someone needs to reach you."
        },
        {
            icon: <MessageSquare size={28} className="text-primary-red" />,
            title: "Safe Comms",
            description: "Communicate through our encrypted gateway, keeping both parties safe and anonymous."
        }
    ];

    const useCases = [
        {
            icon: <Car size={32} />,
            title: "Vehicles",
            items: ["Cars", "Bikes", "Motorcycles"]
        },
        {
            icon: <Wallet size={32} />,
            title: "Personal",
            items: ["Wallets", "Phone Covers", "Keys"]
        },
        {
            icon: <Briefcase size={32} />,
            title: "Travel",
            items: ["Luggage Bags", "Backpacks", "Travel Gear"]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-primary-red selection:text-white font-outfit antialiased">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
                <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-2xl font-black italic tracking-tighter cursor-pointer group">
                        <div className="relative">
                            <PhoneCall className="text-primary-red animate-ring" size={28} />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-red rounded-full animate-pulse" />
                        </div>
                        RAASAI<span className="text-primary-red">.ME</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-black/60">
                        <a href="#" className="hover:text-primary-red transition-colors">How it works</a>
                        <a href="#" className="hover:text-primary-red transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary-red transition-colors">Pricing</a>
                        <button className="bg-primary-red hover:bg-primary-red-hover text-white px-6 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-red-500/20">
                            Get Started
                        </button>
                    </div>

                    <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter">
                        <a href="#" onClick={() => setIsMenuOpen(false)}>How it works</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Privacy</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                        <button className="bg-primary-red text-white py-4 rounded-2xl shadow-xl shadow-red-500/20">Get Started</button>
                    </div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.03)_0%,rgba(255,255,255,0)_50%)]">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight"
                    >
                        ONE SCAN TO<br />
                        <span className="text-primary-red">
                            REACH YOU ANYWHERE.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-black/50 mb-12 max-w-xl mx-auto leading-relaxed"
                    >
                        Premium QR tags for your vehicle, wallet, phone, or luggage. Stay reachable without sharing personal info.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="bg-primary-red hover:bg-primary-red-hover text-white px-8 py-4 rounded-xl font-black text-md flex items-center justify-center gap-2 transition-all hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-0.5">
                            Get Your Raasai Kit <ArrowRight size={20} />
                        </button>
                        <button className="bg-black/5 hover:bg-black/10 border border-black/10 text-black px-8 py-4 rounded-xl font-black text-md flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">
                            <Smartphone size={20} /> Download App
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-32 bg-gray-50/50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-20 tracking-tighter">Where to use RAASAI?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="p-8 rounded-[40px] bg-white shadow-xl shadow-black/5 text-primary-red mb-8 border border-black/5">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4">{useCase.title}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {useCase.items.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-black/5 rounded-full text-xs font-bold uppercase tracking-widest text-black/40">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-10 rounded-[40px] bg-gray-50 hover:bg-white border border-black/[0.03] hover:border-primary-red/20 transition-all group hover:shadow-2xl hover:shadow-black/5"
                            >
                                <div className="mb-8 p-4 rounded-3xl bg-white shadow-md w-fit group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                                <p className="text-black/50 leading-relaxed text-sm font-medium">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="p-16 md:p-24 rounded-[60px] bg-black text-white overflow-hidden relative shadow-3xl">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">Ready to secure<br /> your peace of mind?</h2>
                            <p className="text-lg md:text-xl mb-12 text-white/40">Join thousands of users who trust Raasai for their daily communication needs.</p>
                            <button className="bg-primary-red hover:bg-primary-red-hover text-white px-12 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20">
                                Start for Free
                            </button>
                        </div>
                        {/* Abstract background */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-gray-50 border-t border-black/5">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="flex items-center gap-3 text-2xl font-black italic tracking-tighter text-black/20">
                        <PhoneCall size={24} /> RAASAI<span>.ME</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 font-bold text-xs text-black/30 uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-black transition-colors">Terms</a>
                        <a href="#" className="hover:text-black transition-colors">Privacy</a>
                        <a href="#" className="hover:text-black transition-colors">Contact</a>
                    </div>
                    <p className="text-black/20 text-xs font-bold tracking-widest uppercase">© 2026 RAASAI.ME</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
