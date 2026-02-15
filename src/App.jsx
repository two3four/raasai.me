import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    QrCode, Shield, Bell, Menu, X, ArrowRight, Smartphone, MessageSquare,
    Car, Wallet, Briefcase, PhoneCall, Zap, Lock, CreditCard, AlertTriangle,
    ChevronDown, Heart, UserPlus, Users, Info
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Global Reach", href: "#how-it-works" },
        { name: "Get Started", href: "#pricing" },
        { name: "Our Vision", href: "#about" }
    ];

    const features = [
        {
            icon: <Shield size={28} className="text-primary-red" />,
            title: "Encrypted Privacy",
            description: "Connect instantly via our secure gateway. Your personal data and phone number remain shielded from public view."
        },
        {
            icon: <MessageSquare size={28} className="text-primary-red" />,
            title: "Dynamic Interaction",
            description: "Choose your preferred way to be contacted. You maintain total control over every interaction."
        },
        {
            icon: <Smartphone size={28} className="text-primary-red" />,
            title: "Smart Command",
            description: "Manage your digital identity, assets, and notifications in real-time through the intuitive Raasai dashboard."
        },
        {
            icon: <CreditCard size={28} className="text-primary-red" />,
            title: "Lifetime Ownership",
            description: "A single one-time investment for permanent digital connectivity. No subscriptions, no hidden fees."
        },
        {
            icon: <AlertTriangle size={28} className="text-primary-red" />,
            title: "Intelligent Fallback",
            description: "Our system automatically alerts your emergency contacts if you're unreachable during critical moments."
        },
        {
            icon: <Lock size={28} className="text-primary-red" />,
            title: "Active Perimeter",
            description: "Instantly block unauthorized reach. You define the boundaries of your digital accessibility."
        }
    ];

    const comparisonData = [
        { feature: "Instant Reachability", dash: true, card: true, raasai: true },
        { feature: "Data Encryption", dash: false, card: false, raasai: true },
        { feature: "Active Access Control", dash: false, card: false, raasai: true },
        { feature: "Emergency Cascading", dash: false, card: false, raasai: true },
        { feature: "Spam Mitigation", dash: false, card: false, raasai: true },
        { feature: "Safety Protocol for Everyone", dash: false, card: false, raasai: true },
        { feature: "Asset Tracking", dash: false, card: false, raasai: true },
    ];

    const faqs = [
        {
            q: "What defines the Raasai platform?",
            a: "Raasai is an elite digital bridge designed for the modern world. We provide a secure, QR-powered gateway that facilitates communication without compromising your personal privacy."
        },
        {
            q: "How does the privacy protocol work?",
            a: "When a Raasai tag is scanned, our system creates a secure, anonymous session. This allows for seamless communication while keeping your physical phone number entirely hidden from the public."
        },
        {
            q: "Are there recurring costs?",
            a: "Absolutely not. Raasai is built on a lifetime ownership model. Your one-time purchase secures your digital identity and access for life."
        },
        {
            q: "What is the Emergency Fallback system?",
            a: "If you cannot be reached directly, our platform triggers a cascading notification to your pre-defined emergency network, ensuring critical messages always find a safe destination."
        },
        {
            q: "How resilient are Raasai tags?",
            a: "Our tags are engineered for extreme durability. Using aerospace-grade UV protection and weatherproofing, they are built to withstand the harshest environments on vehicles or gear."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white text-black selection:bg-primary-red selection:text-white font-outfit antialiased">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
                <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 text-2xl font-black italic tracking-tighter cursor-pointer group">
                        <div className="relative">
                            <PhoneCall className="text-primary-red animate-ring" size={28} />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-red rounded-full animate-pulse" />
                        </div>
                        RAASAI<span className="text-primary-red">.ME</span>
                    </a>

                    <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-black/60">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="hover:text-primary-red transition-colors">{link.name}</a>
                        ))}
                        <button className="bg-black text-white px-6 py-2 rounded-full font-bold transition-all hover:bg-primary-red active:scale-95 shadow-lg shadow-black/10">
                            Partner with Us
                        </button>
                        <button className="bg-primary-red hover:bg-primary-red-hover text-white px-6 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-red-500/20">
                            Access Portal
                        </button>
                    </div>

                    <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
                >
                    <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter pb-10">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                        ))}
                        <button className="bg-black text-white py-4 rounded-2xl w-full">Partner with Us</button>
                        <button className="bg-primary-red text-white py-4 rounded-2xl w-full">Access Portal</button>
                    </div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.05)_0%,rgba(255,255,255,0)_60%)]">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-red/5 text-primary-red rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-red"></span>
                            </span>
                            Universal Digital Connectivity
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tighter uppercase text-black">
                            ONE SCAN TO <br />
                            <span className="text-primary-red">PROTECT WHAT</span><br />
                            MATTERS MOST.
                        </h1>
                        <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-lg font-medium">
                            The elite way to stay reachable for your vehicle, essentials, and gear — without ever exposing your private identity. Safe. Instant. Permanent.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary-red hover:bg-primary-red-hover text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1">
                                Secure Your Raasai Kit <ArrowRight size={22} />
                            </button>
                            <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-zinc-800 hover:-translate-y-1">
                                <Users size={22} /> Commercial Program
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Premium CSS Sticker Mockup */}
                        <div className="w-full aspect-[16/10] bg-white rounded-[40px] shadow-3xl border border-black/5 p-2 relative group overflow-hidden">
                            <div className="w-full h-full bg-white rounded-[32px] border-4 border-black/5 flex overflow-hidden relative">
                                {/* Left Content */}
                                <div className="flex-1 p-8 flex flex-col justify-between items-start">
                                    <div className="text-black font-black italic text-3xl tracking-tighter">
                                        RAASAI<span className="text-primary-red">.ME</span>
                                    </div>
                                    <div className="w-full flex flex-col items-start gap-2">
                                        <div className="text-primary-red"><PhoneCall size={64} className="animate-ring" /></div>
                                        <div className="text-black font-black text-4xl leading-none uppercase tracking-tighter">
                                            SCAN TO <br /> REACH OWNER
                                        </div>
                                    </div>
                                    <div className="bg-black text-white px-4 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase">
                                        ID: RS-159563
                                    </div>
                                </div>
                                {/* Right QR Area */}
                                <div className="w-2/5 h-full bg-white border-l-4 border-black/5 flex items-center justify-center p-8 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,rgba(255,255,255,0)_100%)]">
                                    <div className="w-full aspect-square border-2 border-black/10 rounded-2xl p-4 flex items-center justify-center relative">
                                        <QrCode size={160} strokeWidth={1} />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md border border-black/5">
                                            <PhoneCall className="text-primary-red" size={24} />
                                        </div>
                                    </div>
                                </div>
                                {/* Security Strip */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-primary-red" />
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-50 flex items-center px-8 justify-between border-t border-black/5">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30">Universal Digital Safety Tag</div>
                                    <div className="flex gap-4">
                                        <AlertTriangle size={16} className="text-primary-red/40" />
                                        <Shield size={16} className="text-primary-red/40" />
                                        <Bell size={16} className="text-primary-red/40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative floating elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-red/5 blur-[80px] rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 blur-[80px] rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section id="how-it-works" className="py-32 border-y border-black/5 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Universal Scope</h2>
                        <p className="text-xl text-black/40 font-bold max-w-2xl mx-auto uppercase tracking-widest">Connect everything you own.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Car />, title: "Automotive", items: ["Luxury Vehicles", "Motorcycles", "Fleets"] },
                            { icon: <Briefcase />, title: "Travel Gear", items: ["Laptops", "Luggage", "Bags"] },
                            { icon: <Wallet />, title: "Essentials", items: ["Wallets", "Phones", "Keys"] },
                            { icon: <Zap />, title: "Lifestyle", items: ["Bicycles", "Office", "Gear"] }
                        ].map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[40px] bg-gray-50/50 border border-black/5 text-center flex flex-col items-center group hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all"
                            >
                                <div className="p-6 rounded-3xl bg-white shadow-xl shadow-black/5 text-primary-red mb-8 group-hover:scale-110 transition-transform">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase">{useCase.title}</h3>
                                <ul className="text-black/40 space-y-3 font-bold text-sm tracking-wide">
                                    {useCase.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-32 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Safety Logic</h2>
                        <p className="text-xl text-black/40 font-bold uppercase tracking-widest">Proprietary connectivity features.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-10 rounded-[40px] bg-white border border-black/[0.04] shadow-xl shadow-black/[0.02] hover:shadow-2xl transition-all group"
                            >
                                <div className="mb-8 p-5 rounded-3xl bg-gray-50 text-black w-fit group-hover:bg-primary-red group-hover:text-white transition-all shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{feature.title}</h3>
                                <p className="text-black/50 leading-relaxed font-bold text-sm tracking-wide">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">PROTOCOL CHOICE</h2>
                    </div>

                    <div className="overflow-x-auto rounded-[40px] border border-black/5">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left text-xs font-black uppercase tracking-[0.2em] text-black/40 bg-gray-50 border-b border-black/5">
                                    <th className="px-8 py-6">Digital Connectivity</th>
                                    <th className="px-8 py-6 text-center">Open Number</th>
                                    <th className="px-8 py-6 text-center">Static Tag</th>
                                    <th className="px-8 py-6 text-center text-primary-red">RAASAI PROTOCOL</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-black/[0.03]">
                                        <td className="px-8 py-6">{row.feature}</td>
                                        <td className="px-8 py-6 text-center opacity-30">{row.dash ? "✅" : "❌"}</td>
                                        <td className="px-8 py-6 text-center opacity-30">{row.card ? "✅" : "❌"}</td>
                                        <td className="px-8 py-6 text-center text-primary-red text-xl">✅</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 uppercase">LIFETIME ACCESS</h2>
                        <p className="text-xl text-black/40 font-bold uppercase tracking-widest italic">Secured Asset Connectivity</p>
                    </div>

                    <div className="p-12 md:p-20 rounded-[60px] bg-white border border-black/5 shadow-3xl relative overflow-hidden text-center group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary-red" />
                        <div className="relative z-10">
                            <div className="text-primary-red font-black text-6xl md:text-9xl mb-4 tracking-tighter">Rs. 1500</div>
                            <div className="text-black font-black text-sm uppercase tracking-[0.3em] mb-12">Universal License • No Expiry</div>

                            <div className="grid md:grid-cols-2 gap-8 text-left max-w-xl mx-auto mb-16">
                                {["Universal Digital Tag", "Secure Access Gateway", "Fallback Emergency System", "Encryption Layers", "Universal Compatibility", "Elite Support"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 font-black text-sm uppercase tracking-tighter">
                                        <div className="w-8 h-8 rounded-2xl bg-primary-red text-white flex items-center justify-center">
                                            <Zap size={14} className="fill-current" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <button className="w-full bg-primary-red hover:bg-primary-red-hover text-white py-6 rounded-3xl font-black text-2xl transition-all shadow-2xl shadow-red-500/40 hover:-translate-y-1">
                                Secure This Asset
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4">Core Knowledge</h2>
                        <p className="text-sm font-black uppercase tracking-[0.4em] text-black/20 italic">Common protocol inquiries</p>
                    </div>
                    <div className="grid gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-[40px] border border-black/5 overflow-hidden transition-all group">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full p-10 flex items-center justify-between text-left transition-all font-black text-xl uppercase tracking-tighter ${openFaq === i ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                                >
                                    {faq.q}
                                    <ChevronDown className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="p-10 text-black/60 font-medium text-lg leading-relaxed bg-white border-t border-black/5 italic">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="about" className="pt-32 pb-16 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                        <div>
                            <a href="#" className="flex items-center gap-3 text-3xl font-black italic tracking-tighter mb-8">
                                <PhoneCall className="text-primary-red" size={32} />
                                RAASAI<span className="text-primary-red">.ME</span>
                            </a>
                            <p className="text-white/40 font-bold mb-10 leading-relaxed italic">
                                Elite digital connectivity for automotive and personal essentials. Universal. Secure. Private.
                            </p>
                            <div className="space-y-6 text-xs font-black tracking-widest uppercase">
                                <div className="flex items-center gap-4 text-white/40">Faisalabad, Pakistan</div>
                                <div className="flex items-center gap-4 text-white/40">+92 317 8844444</div>
                            </div>
                        </div>

                        {[
                            { title: "Gateway", links: ["Features", "Use Cases", "Pricing"] },
                            { title: "Company", links: ["Our Vision", "Contact Center", "Partners"] },
                            { title: "Privacy", links: ["Core Policy", "Terms", "Security"] }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="font-black text-xs mb-10 uppercase tracking-widest text-primary-red">{col.title}</h4>
                                <ul className="space-y-6 font-black text-white/40 uppercase text-xs tracking-widest">
                                    {col.links.map(link => (
                                        <li key={link}><a href="#" className="hover:text-primary-red transition-colors">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">© 2026 RAASAI CONNECTIVITY PROTOCOL. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-4">
                            <div className="bg-white/5 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-pointer">App Store</div>
                            <div className="bg-white/5 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-pointer">Play Store</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
