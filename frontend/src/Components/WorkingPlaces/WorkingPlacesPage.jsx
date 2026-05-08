import React, { useState } from 'react';
import { FiMaximize, FiUsers, FiDollarSign, FiChevronLeft, FiChevronRight, FiX, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../../assets/working-places-images/1.png'
import img2 from '../../assets/working-places-images/2.png'
import img3 from '../../assets/working-places-images/3.png'
import img4 from '../../assets/working-places-images/4.png'
import img5 from '../../assets/working-places-images/5.png'

import img6 from '../../assets/working-places-images/6.png'
import img7 from '../../assets/working-places-images/7.png'
import img8 from '../../assets/working-places-images/8.png'
import img9 from '../../assets/working-places-images/9.png'
import img10 from '../../assets/working-places-images/10.png'

import img11 from '../../assets/working-places-images/11.png'
import img12 from '../../assets/working-places-images/12.png'
import img13 from '../../assets/working-places-images/13.png'
import img14 from '../../assets/working-places-images/14.png'
import img15 from '../../assets/working-places-images/15.png'

import img16 from '../../assets/working-places-images/16.png'
import img17 from '../../assets/working-places-images/17.png'
import img18 from '../../assets/working-places-images/18.png'
import img19 from '../../assets/working-places-images/19.png'
import img20 from '../../assets/working-places-images/20.png'

import img21 from '../../assets/working-places-images/21.png'
import img22 from '../../assets/working-places-images/22.png'
import img23 from '../../assets/working-places-images/23.png'
import img24 from '../../assets/working-places-images/24.png'
import img25 from '../../assets/working-places-images/25.png'

import img26 from '../../assets/working-places-images/26.png'
import img27 from '../../assets/working-places-images/27.png'
import img28 from '../../assets/working-places-images/28.png'
import img29 from '../../assets/working-places-images/29.png'
import img30 from '../../assets/working-places-images/30.png'

import img31 from '../../assets/working-places-images/31.png'
import img32 from '../../assets/working-places-images/32.png'
import img33 from '../../assets/working-places-images/33.png'
import img34 from '../../assets/working-places-images/34.png'
import img35 from '../../assets/working-places-images/35.png'

import img36 from '../../assets/working-places-images/36.png'
import img37 from '../../assets/working-places-images/37.png'
import img38 from '../../assets/working-places-images/38.png'
import img39 from '../../assets/working-places-images/39.png'
import img40 from '../../assets/working-places-images/40.png'

import img41 from '../../assets/working-places-images/41.png'
import img42 from '../../assets/working-places-images/42.png'
import img43 from '../../assets/working-places-images/43.png'

import img44 from '../../assets/working-places-images/44.png'
import img45 from '../../assets/working-places-images/45.png'
import img46 from '../../assets/working-places-images/46.png'

import img47 from '../../assets/working-places-images/47.png'
import img48 from '../../assets/working-places-images/48.png'
import img49 from '../../assets/working-places-images/49.png'

import img50 from '../../assets/working-places-images/50.png'
import img51 from '../../assets/working-places-images/51.png'
import img52 from '../../assets/working-places-images/52.png'

import img53 from '../../assets/working-places-images/53.png'
import img54 from '../../assets/working-places-images/54.png'
import img55 from '../../assets/working-places-images/55.png'

import img56 from '../../assets/working-places-images/56.png'
import img57 from '../../assets/working-places-images/57.png'
import img58 from '../../assets/working-places-images/58.png'

import img59 from '../../assets/working-places-images/59.png'
import img60 from '../../assets/working-places-images/60.png'
import img61 from '../../assets/working-places-images/61.png'

import img62 from '../../assets/working-places-images/62.png'
import img63 from '../../assets/working-places-images/63.png'
import img64 from '../../assets/working-places-images/64.png'


const WorkingPlacesPage = () => {
    const navigate = useNavigate();
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [isPricingOpen, setIsPricingOpen] = useState(false);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    const spaces = [
        { id: 1, title: "Dedicated Cabin", category: "Private Suite", sqft: "150-400 SF", capacity: "02 - 07", price: "Premium", desc: "Designed for focused work and high-level privacy. Sound-proof walls and ergonomic luxury furniture.", longDesc: "Our Dedicated Cabins provide the ultimate privacy for your growing team. Each unit is equipped with high-speed LAN, independent climate control, and premium ergonomic seating.", images: [img1, img2, img3, img4, img5] },

        { id: 2, title: "Hot Desk", category: "Flex Space", sqft: "Shared", capacity: "Individual", price: "Flexible", desc: "Vibrant open environment for freelancers and digital nomads. High-speed ports and lounge access.", longDesc: "Grab a seat anywhere in our beautifully designed open area. Hot desks are perfect for those who thrive in a community-driven environment.", images: [img6, img7, img8, img9, img10] },

        { id: 3, title: "Phone Booth", category: "Privacy Pod", sqft: "20 SF", capacity: "01", price: "On-demand", desc: "Acoustically insulated booths for confidential calls and virtual meetings without distractions.", longDesc: "Need to take a private call? Our Phone Booths are soundproof and ventilated, providing a quiet oasis.", images: [img11, img12, img13, img14, img15] },

        { id: 4, title: "Corporate Office", category: "Enterprise", sqft: "2500+ SF", capacity: "Up to 30", price: "Custom", desc: "Full-floor or large wing solutions for established corporate teams and scaling startups.", longDesc: "Transform our space into your company headquarters. Tailored for larger teams with dedicated branding.", images: [img16, img17, img18, img19, img20] },

        { id: 5, title: "Conference Room", category: "Meetings", sqft: "350 SF", capacity: "08", price: "Hourly", desc: "Modern meeting rooms equipped with 4K displays, whiteboards, and video conferencing tech.", longDesc: "Impress your clients in our high-tech boardroom. Equipped with advanced AV systems.", images: [img21, img22, img23, img24, img25] },

        { id: 6, title: "Lobby Lounge", category: "Public", sqft: "500 SF", capacity: "15", price: "Member Only", desc: "Spacious and elegant lobby designed for informal meetings and guest waiting area.", longDesc: "Our lobby isn't just a waiting room; it's a social hub with premium coffee.", images: [img26, img27, img28, img29, img30] },

        { id: 7, title: "Reception Area", category: "Concierge", sqft: "250 SF", capacity: "03", price: "Included", desc: "Professional reception desk services to manage your guests, mail, and administrative needs.", longDesc: "Our professional front-desk team ensures your clients are greeted with warmth.", images: [img31, img32, img33, img34, img35] },

        { id: 8, title: "Sleeping Pod", category: "Wellness", sqft: "50 SF", capacity: "01", price: "Hourly", desc: "Ergonomic nap zones for quick power naps to recharge during long work hours.", longDesc: "Productivity requires rest. Our nap pods offer a private recharge environment.", images: [img36, img37, img38, img39, img40] },

        // NEW ITEMS

        { id: 9, title: "Customizable Cabin", category: "Private Suite", sqft: "Custom", capacity: "Flexible", price: "On Request", desc: "Tailored office space based on team size with fully customizable layout and interiors.", longDesc: "Design your workspace exactly how you need it. From layout planning to interior finishes, everything is customized to suit your team size and workflow.", cta: "Get Custom Quote", images: [img41, img42, img43] },

        { id: 10, title: "Private Office", category: "Private Workspace", sqft: "Custom", capacity: "Small Teams", price: "₹7,500 / Seat / Month", desc: "Dedicated and secure workspace ideal for small teams and professionals.", longDesc: "Enjoy a fully private and secure office environment designed for productivity. Perfect for professionals and small teams needing a focused workspace.", cta: "Book Private Office", images: [img44, img45, img46] },

        { id: 11, title: "Managed Office", category: "Enterprise", sqft: "Custom", capacity: "20+", price: "₹4,500 / Seat / Month", desc: "Fully managed plug-and-play office solution for growing teams.", longDesc: "Ideal for teams of 20+ members. We handle everything from setup to maintenance so you can focus on your business.", cta: "Enquire Now", images: [img47, img48, img49] },

        { id: 12, title: "Coworking Seats", category: "Flex Space", sqft: "Shared", capacity: "Individual", price: "Starting ₹250", desc: "Flexible shared workspace with daily, shift, and monthly plans.", longDesc: "Choose a plan that fits your schedule: Monthly at ₹4,000, refundable deposit ₹6,000, or daily/shift access at ₹250 for 8 hours.", cta: "Start Coworking", images: [img50, img51, img52] },

        { id: 13, title: "Twin Pod (Startup Plan)", category: "Startup", sqft: "Compact", capacity: "02", price: "₹6,000 / Month", desc: "Compact workspace designed for early-stage entrepreneurs.", longDesc: "A cost-effective and efficient 2-person workspace tailored for startups and founders beginning their journey.", cta: "Get Started", images: [img53, img54, img55] },

        { id: 14, title: "Branch Office (5-Seater)", category: "Office Setup", sqft: "Custom", capacity: "05", price: "₹15,000 / Month", desc: "Ready-to-use branch office setup ideal for remote teams.", longDesc: "Quickly establish your branch presence with a fully equipped 5-seater office designed for distributed teams.", cta: "Enquire Now", images: [img56, img57, img58] },

        { id: 15, title: "Studio", category: "Creative Space", sqft: "Custom", capacity: "Flexible", price: "₹2,500 / Day", desc: "Perfect space for content creation, shoots, and recording.", longDesc: "A professional environment tailored for creators, photographers, and video production needs.", cta: "Book Studio", images: [img59, img60, img61] },

        { id: 16, title: "Event & Shoot Space", category: "Event Space", sqft: "Large", capacity: "Flexible", price: "₹10,000 / Day", desc: "Ideal for events, workshops, and large-scale shoots.", longDesc: "Host your events, workshops, or shoots in a spacious and versatile environment designed for maximum impact.", cta: "Book Event Space", images: [img62, img63, img64] },
    ];

    const pricingModels = [
        { title: "Cabin Seat", price: "₹8000", period: "/ month", size: "For one person only", access: "Daily access", policy: "With locked storage", isDark: false },
        { title: "Hot Desk", price: "₹200", period: "/ 4 hours", size: "Flexible seating", access: "Lounge access", policy: "High-speed Wi-Fi", isDark: false },
        { title: "Conference", price: "₹1000", period: "/ hour", size: "Up to 8 people", access: "4K LED display", policy: "Whiteboard & Tech", isDark: true },
        { title: "Meeting Room", price: "₹500", period: "/ hour", size: "Up to 4 people", access: "Private space", policy: "AC & Coffee", isDark: false },
        { title: "Virtual Office", price: "₹1500", period: "/ month", size: "Business Address", access: "Mail handling", policy: "GST Registration", isDark: false },
        { title: "Event Space", price: "₹5000", period: "/ day", size: "Up to 50 people", access: "Full A/V support", policy: "Catering options", isDark: false },
    ];

    const openModal = (space) => { setSelectedSpace(space); setCurrentImgIdx(0); document.body.style.overflow = 'hidden'; };
    const closeModal = () => { setSelectedSpace(null); document.body.style.overflow = 'unset'; };
    const openPricing = () => { setIsPricingOpen(true); document.body.style.overflow = 'hidden'; };
    const closePricing = () => { setIsPricingOpen(false); document.body.style.overflow = 'unset'; };

    // Slider functions for Places Modal
    const nextImg = (e) => {
        e.stopPropagation();
        setCurrentImgIdx((prev) => (prev + 1) % selectedSpace.images.length);
    };

    const prevImg = (e) => {
        e.stopPropagation();
        setCurrentImgIdx((prev) => (prev - 1 + selectedSpace.images.length) % selectedSpace.images.length);
    };

    return (
        <main className="bg-[#FAF9F6] pt-24 pb-20 px-6 min-h-screen selection:bg-[#9F5434] selection:text-white font-serif">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h5 className="text-[#9F5434] font-black uppercase tracking-[0.5em] text-xs mb-4">The Portfolio</h5>
                    <h2 className="text-4xl md:text-7xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none">Our Strategic <span className="text-[#9F5434]">Inventory</span></h2>
                </motion.div>

                {/* Places Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {spaces.map((space, index) => (
                        <motion.div key={space.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="relative group cursor-pointer" onClick={() => openModal(space)}>
                            <div className="h-[450px] overflow-hidden relative shadow-xl">
                                <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 1.2, ease: "circOut" }} src={space.images[0]} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0" alt={space.title} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="relative mt-[-100px] ml-auto w-[92%] bg-white p-10 shadow-2xl border-b-[6px] border-[#9F5434] transition-transform duration-500 group-hover:-translate-y-3">
                                <div className="absolute -top-3 left-8 w-6 h-6 bg-[#9F5434] rotate-45"></div>
                                <h3 className="text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tighter leading-none">{space.title}</h3>
                                <div className="flex items-center gap-5 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                                    <span className="flex items-center gap-2"><FiMaximize className="text-[#9F5434]" /> {space.sqft}</span>
                                    <span className="flex items-center gap-2"><FiUsers className="text-[#9F5434]" /> {space.capacity}</span>
                                    <span className="text-[#9F5434]">{space.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">{space.desc}</p>
                                <button className="text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group/btn hover:text-[#9F5434] transition-colors">
                                    Full Details <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- PRICING MODAL --- */}
            <AnimatePresence>
                {isPricingOpen && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-md" onClick={closePricing}></motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative bg-[#FAF9F6] w-full max-w-7xl max-h-[90vh] overflow-y-auto p-8 md:p-12 shadow-2xl rounded-sm"
                        >
                            <button className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#9F5434] transition-colors" onClick={closePricing}><FiX size={32} /></button>
                            <div className="text-center mb-12">
                                <h5 className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-xs mb-2">Pricing Model</h5>
                                <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter">Choose Your Plan</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {pricingModels.map((plan, idx) => (
                                    <div key={idx} className={`p-8 rounded-3xl shadow-sm border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${plan.isDark ? 'bg-[#1A1A1A] text-white border-white/10' : 'bg-white text-[#1A1A1A] border-gray-100'}`}>
                                        <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{plan.title}</h3>
                                        <div className="mb-8">
                                            <span className="text-4xl md:text-5xl font-black text-[#9F5434]">{plan.price}</span>
                                            <span className={`text-sm font-bold opacity-60 ml-1 ${plan.isDark ? 'text-white' : 'text-gray-500'}`}>{plan.period}</span>
                                            <p className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-40">Starting price</p>
                                        </div>
                                        <div className="space-y-4 mb-10">
                                            {[{ label: "Ideal Team Size", val: plan.size }, { label: "Access Control", val: plan.access }, { label: "Storage & Policy", val: plan.policy }].map((feat, fIdx) => (
                                                <div key={fIdx} className={`p-4 rounded-xl ${plan.isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                                    <p className="text-[10px] uppercase font-black tracking-widest mb-1 text-gray-400">{feat.label}</p>
                                                    <p className="text-sm font-bold">{feat.val}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <Link to="/contact-us" onClick={closePricing} className="w-full block text-center py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 bg-[#9F5434] text-white hover:bg-white hover:text-[#9F5434] border border-[#9F5434]">Choose a Plan</Link>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- PLACES MODAL (WITH SLIDER) --- */}
            <AnimatePresence>
                {selectedSpace && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/98 backdrop-blur-md" onClick={closeModal}></motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-7xl flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-sm">

                            <button className="absolute top-6 right-6 z-[120] bg-white text-[#1A1A1A] p-3 rounded-full hover:bg-[#9F5434] hover:text-white transition-all shadow-xl" onClick={closeModal}><FiX size={24} /></button>

                            {/* LEFT: IMAGE SLIDER */}
                            <div className="w-full lg:w-[55%] relative bg-black h-[400px] lg:h-auto overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImgIdx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        src={selectedSpace.images[currentImgIdx]}
                                        className="w-full h-full object-cover"
                                        alt="Gallery"
                                    />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {selectedSpace.images.length > 1 && (
                                    <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                                        <button onClick={prevImg} className="pointer-events-auto bg-black/40 hover:bg-[#9F5434] text-white p-4 backdrop-blur-sm rounded-full transition-all group">
                                            <FiChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                                        </button>
                                        <button onClick={nextImg} className="pointer-events-auto bg-black/40 hover:bg-[#9F5434] text-white p-4 backdrop-blur-sm rounded-full transition-all group">
                                            <FiChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                )}

                                {/* Image Indicator */}
                                <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 text-white text-[10px] font-black tracking-widest">
                                    {currentImgIdx + 1} / {selectedSpace.images.length}
                                </div>
                            </div>

                            {/* RIGHT: CONTENT */}
                            <div className="w-full lg:w-[45%] p-10 md:p-20 flex flex-col justify-center bg-white text-[#1A1A1A]">
                                <span className="text-[#9F5434] text-xs font-black uppercase tracking-[0.5em] mb-6 block">{selectedSpace.category}</span>
                                <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 leading-none">{selectedSpace.title}</h2>
                                <p className="text-gray-500 text-lg mb-12 leading-relaxed">{selectedSpace.longDesc}</p>
                                <button onClick={() => { closeModal(); navigate('/contact-us'); }} className="w-full bg-[#1A1A1A] text-white py-6 font-black uppercase tracking-[0.4em] text-xs hover:bg-[#9F5434] transition-all duration-500 shadow-xl">Request Booking</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- CTA SECTION --- */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-32 max-w-[1420px] mx-auto">
                <div className="bg-[#1A1A1A] p-16 md:p-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#9F5434]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 leading-none">Tailor Your <span className="text-[#9F5434]">Corporate</span> Lifestyle</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link to="/contact-us" className="bg-[#9F5434] text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 w-full md:w-auto shadow-2xl">Book A Site Visit</Link>
                            <Link onClick={openPricing} className="border border-white/20 text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all w-full md:w-auto">Our Pricing</Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default WorkingPlacesPage;