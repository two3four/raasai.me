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
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    const features = [
        {
            icon: <Shield size={28} className="text-primary-red" />,
            title: "Stay Reachable, Stay Private",
            description: "Your number is never shown to anyone who scans your QR code. Your privacy is our priority."
        },
        {
            icon: <MessageSquare size={28} className="text-primary-red" />,
            title: "Call or Message",
            description: "They choose how to contact you — you stay in control of the communication."
        },
        {
            icon: <Smartphone size={28} className="text-primary-red" />,
            title: "Full App Control",
            description: "Manage contacts, vehicles, and notifications anytime directly from the mobile app."
        },
        {
            icon: <CreditCard size={28} className="text-primary-red" />,
            title: "One Time Purchase",
            description: "No subscriptions. No monthly fees. Pay once and use for a lifetime."
        },
        {
            icon: <AlertTriangle size={28} className="text-primary-red" />,
            title: "Emergency Contacts",
            description: "Backup contacts get an Emergency Call instantly if you are unreachable."
        },
        {
            icon: <Lock size={28} className="text-primary-red" />,
            title: "Block and Protect",
            description: "Block unwanted callers instantly. You decide exactly who can reach you."
        }
    ];

    const comparisonData = [
        { feature: "Be Reachable", dash: true, card: true, raasai: true },
        { feature: "Privacy Protected", dash: false, card: false, raasai: true },
        { feature: "Control Who Contacts You", dash: false, card: false, raasai: true },
        { feature: "Emergency Alerts", dash: false, card: false, raasai: true },
        { feature: "Spam Protection", dash: false, card: false, raasai: true },
        { feature: "Safety for Women", dash: false, card: false, raasai: true },
        { feature: "Track Contacts", dash: false, card: false, raasai: true },
    ];

    const familySafety = [
        {
            title: "Elderly Parents",
            description: "Your aging parents deserve to drive with peace of mind. If something happens, help is just a scan away.",
            icon: <Heart />
        },
        {
            title: "Women Drivers",
            description: "Stay reachable without sharing your number with strangers. Safety and privacy, together.",
            icon: <Shield />
        },
        {
            title: "New Drivers",
            description: "Let your kids be independent on the road, with emergency contacts always ready.",
            icon: <UserPlus />
        }
    ];

    const faqs = [
        { q: "What is Raasai?", a: "Raasai is a smart QR-based communication platform that lets people reach vehicle owners or property owners without needing their private phone numbers." },
        { q: "How does it protect my privacy?", a: "When someone scans your QR code, they are connected through our secure gateway. Your actual phone number is never revealed." },
        { q: "Is this a one-time purchase or subscription?", a: "Raasai is 100% one-time purchase. No monthly fees, no hidden costs. Pay once, use forever." },
        { q: "What happens in an emergency?", a: "In Emergency Mode, your secondary/backup contacts are notified instantly, ensuring help is on the way even if you don't answer." },
        { q: "How long does the sticker last?", a: "Our premium stickers are made with high-quality UV-resistant materials designed to last for years in all weather conditions." }
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
                            Become Distributor
                        </button>
                        <button className="bg-primary-red hover:bg-primary-red-hover text-white px-6 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-red-500/20">
                            Login
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
                        <button className="bg-black text-white py-4 rounded-2xl w-full">Become Distributor</button>
                        <button className="bg-primary-red text-white py-4 rounded-2xl w-full shadow-xl shadow-red-500/20">Login</button>
                    </div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.05)_0%,rgba(255,255,255,0)_60%)]">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
                            A Phone Number for Your Car
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tighter">
                            NEVER MISS AN<br />
                            <span className="text-primary-red">IMPORTANT CALL</span><br />
                            ABOUT YOUR VEHICLE.
                        </h1>
                        <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-lg">
                            Let people reach you when they need to, without seeing your phone number. Smart QR sticker + mobile app for ultimate privacy.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center mb-8">
                            <div className="flex items-center gap-2 text-sm font-bold"><Zap size={18} className="text-primary-red" /> One-Time Payment</div>
                            <div className="flex items-center gap-2 text-sm font-bold"><Lock size={18} className="text-primary-red" /> 100% Private</div>
                            <div className="flex items-center gap-2 text-sm font-bold"><Smartphone size={18} className="text-primary-red" /> Smart App Control</div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary-red hover:bg-primary-red-hover text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1">
                                Get Your Raasai Tag <ArrowRight size={22} />
                            </button>
                            <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-zinc-800 hover:-translate-y-1">
                                <Users size={22} /> Distributor Program
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-[60px] border border-black/5 shadow-3xl flex items-center justify-center p-12">
                            <div className="w-full h-full border-4 border-black/5 rounded-[40px] flex items-center justify-center relative bg-white">
                                <QrCode size={240} strokeWidth={1} className="text-black/80" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl">
                                    <PhoneCall className="text-primary-red" size={40} />
                                </div>
                            </div>
                        </div>
                        {/* Status floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-black/5 max-w-[240px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <PhoneCall size={20} />
                                </div>
                                <div className="font-black text-sm">Incoming Alert</div>
                            </div>
                            <p className="text-xs text-black/40 font-bold">Vehicle: Honda Civic (ABC-123)<br />Action: Parking Issue</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-32 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">Everything You Need</h2>
                        <p className="text-xl text-black/40 font-bold">Powerful features designed to keep you safe and connected.</p>
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
                                <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
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
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">Why RAASAI Is Better</h2>
                        <p className="text-xl text-black/40 font-bold">See how RAASAI compares to traditional methods.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-left text-xs font-black uppercase tracking-[0.2em] text-black/40">
                                    <th className="px-6 py-4">Features</th>
                                    <th className="px-6 py-4 text-center">Dashboard No.</th>
                                    <th className="px-6 py-4 text-center">Business Card</th>
                                    <th className="px-6 py-4 text-center text-primary-red">RAASAI.ME</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="bg-gray-50/50 rounded-2xl overflow-hidden hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-6 rounded-l-2xl border-y border-l border-black/[0.03]">{row.feature}</td>
                                        <td className="px-6 py-6 text-center border-y border-black/[0.03]">{row.dash ? "✅" : "❌"}</td>
                                        <td className="px-6 py-6 text-center border-y border-black/[0.03]">{row.card ? "✅" : "❌"}</td>
                                        <td className="px-6 py-6 text-center text-primary-red rounded-r-2xl border-y border-r border-black/[0.03]">✅</td>
                                    </tr>
                                ))}
                                <tr className="bg-black text-white">
                                    <td className="px-6 py-8 rounded-l-3xl border-y border-l border-black/10">Cost Analysis</td>
                                    <td className="px-6 py-8 text-center text-sm border-y border-black/10 opacity-60">Free<br />But Dangerous</td>
                                    <td className="px-6 py-8 text-center text-sm border-y border-black/10 opacity-60">Rs. 50<br />But Risky</td>
                                    <td className="px-6 py-8 text-center text-primary-red text-xl font-black rounded-r-3xl border-y border-r border-black/10">Rs. 1500<br /><span className="text-[10px] uppercase tracking-widest text-white">One-Time</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Emergency Mode */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-red/20 text-primary-red rounded-full text-xs font-black uppercase tracking-widest mb-8">
                            <AlertTriangle size={14} /> Emergency Mode
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                            WHEN EVERY<br /> SECOND COUNTS.
                        </h2>
                        <p className="text-xl text-white/40 mb-12 leading-relaxed">
                            Full control at your fingertips. Toggle your availability — all from our RAASAI mobile app. When emergency is tapped, everyone on your list is notified.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Scan", sub: "QR Code Scanned", icon: <QrCode /> },
                                { label: "Emergency", sub: "Emergency Tapped", icon: <AlertTriangle /> },
                                { label: "Contacts", sub: "Family Notified", icon: <Users /> },
                                { label: "Helplines", sub: "Quick Dial Access", icon: <PhoneCall /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="text-primary-red mb-4">{item.icon}</div>
                                    <div className="font-black text-lg mb-1">{item.label}</div>
                                    <div className="text-xs text-white/40 uppercase font-black tracking-widest">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="w-[300px] h-[600px] bg-zinc-900 rounded-[50px] border-[8px] border-zinc-800 shadow-3xl relative p-6 overflow-hidden">
                            <div className="w-full h-full bg-primary-red rounded-[32px] flex flex-col items-center justify-center text-center p-8">
                                <AlertTriangle size={80} className="mb-6 animate-pulse" />
                                <h3 className="text-3xl font-black mb-4">EMERGENCY<br />ALERT</h3>
                                <p className="text-sm font-bold opacity-80 mb-8">Notifying your secondary contacts now...</p>
                                <div className="w-full h-12 bg-white/20 rounded-xl flex items-center justify-center font-black animate-pulse">STOP ALERT</div>
                            </div>
                        </div>
                        {/* Shadow/glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-red/20 blur-[100px] -z-10 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Family Safety */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">Protect Everyone</h2>
                    <p className="text-xl text-black/40 font-bold mb-20">See how Raasai compares to traditional methods of sharing your contact.</p>

                    <div className="grid md:grid-cols-3 gap-12">
                        {familySafety.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="p-10 rounded-[40px] border border-black/5 bg-gray-50/50 text-center"
                            >
                                <div className="inline-flex p-6 bg-white rounded-3xl shadow-xl shadow-black/5 text-primary-red mb-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tighter">{item.title}</h3>
                                <p className="text-black/50 leading-relaxed font-bold text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <button className="mt-20 bg-black text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-red transition-all shadow-xl shadow-black/10">
                        Protect Your Family
                    </button>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">One Price. Forever Yours.</h2>
                        <p className="text-xl text-black/40 font-bold">No hidden fees. No subscriptions. Pay once, use forever.</p>
                    </div>

                    <div className="p-12 md:p-20 rounded-[60px] bg-white border border-black/5 shadow-3xl relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <div className="text-primary-red font-black text-6xl md:text-8xl mb-4 tracking-tighter">Rs. 1500</div>
                            <div className="text-black/40 text-sm font-black uppercase tracking-[0.2em] mb-12">One-time Purchase • Lifetime Access</div>

                            <div className="grid md:grid-cols-2 gap-6 text-left max-w-xl mx-auto mb-16">
                                {["1x Premium QR Sticker", "Lifetime App Access", "Unlimited Scans", "Emergency Mode", "Spam Protection", "Family Safety Pack"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-primary-red/10 flex items-center justify-center text-primary-red">
                                            <Zap size={14} className="fill-current" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <button className="w-full bg-primary-red hover:bg-primary-red-hover text-white py-6 rounded-3xl font-black text-2xl transition-all shadow-2xl shadow-red-500/40 hover:-translate-y-1 mb-6">
                                Order Now
                            </button>
                            <p className="text-sm text-black/40 font-bold uppercase tracking-widest">Works For One Car. Buy More For Additional Vehicles.</p>

                            <div className="mt-12 p-6 bg-red-50 rounded-3xl inline-flex flex-col items-center">
                                <div className="text-primary-red font-black text-lg mb-2 flex items-center gap-2 animate-pulse">
                                    <AlertTriangle size={20} /> Launch Price Ending Soon
                                </div>
                                <div className="text-xs font-bold text-black/40 uppercase tracking-widest">
                                    After 10,000 Tags, Price Increases By Rs. 1000.<br />
                                    ONLY <span className="text-black font-black">3,247</span> TAGS LEFT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-3xl border border-black/5 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors font-black text-lg"
                                >
                                    {faq.q}
                                    <ChevronDown className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="p-8 pt-0 text-black/50 font-bold leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-32 pb-16 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                        <div>
                            <a href="#" className="flex items-center gap-3 text-2xl font-black italic tracking-tighter mb-8">
                                <PhoneCall className="text-primary-red" size={28} />
                                RAASAI<span className="text-primary-red">.ME</span>
                            </a>
                            <p className="text-white/40 font-bold mb-8">Connect to vehicle owners privately and securely. No phone numbers exchanged.</p>
                            <div className="space-y-4 text-sm font-bold">
                                <div className="flex items-center gap-3 text-white/60 hover:text-white cursor-pointer transition-colors">
                                    <Zap size={18} className="text-primary-red" /> Street #2, Officers Colony # 2, Faisalabad
                                </div>
                                <div className="flex items-center gap-3 text-white/60 hover:text-white cursor-pointer transition-colors">
                                    <PhoneCall size={18} className="text-primary-red" /> +92 317 8844444
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-black text-lg mb-8 uppercase tracking-[0.2em] text-primary-red">Product</h4>
                            <ul className="space-y-4 font-bold text-white/40">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-black text-lg mb-8 uppercase tracking-[0.2em] text-primary-red">Company</h4>
                            <ul className="space-y-4 font-bold text-white/40">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Safety Guide</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Distributor Program</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-black text-lg mb-8 uppercase tracking-[0.2em] text-primary-red">Support</h4>
                            <ul className="space-y-4 font-bold text-white/40">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-white/20 text-xs font-black uppercase tracking-widest">© 2026 RAASAI.ME. All rights reserved.</p>
                        <div className="flex gap-6">
                            <div className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-xl text-sm font-bold items-center gap-2 flex transition-all cursor-pointer">
                                <Smartphone size={18} /> App Store
                            </div>
                            <div className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-xl text-sm font-bold items-center gap-2 flex transition-all cursor-pointer">
                                <Smartphone size={18} /> Play Store
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
