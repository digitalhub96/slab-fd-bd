import React from 'react';
import { Target, Users2, Move, Coffee, Monitor, Mic2, SunMedium, ArrowUpRight } from 'lucide-react';

const DesignPhilosophy = () => {
    const pillars = [
        { icon: <Target size={20} />, title: "Productivity", desc: "Designed to minimize distractions and maximize output." },
        { icon: <Users2 size={20} />, title: "Collaboration", desc: "Open spaces that spark spontaneous ideas and teamwork." },
        { icon: <Move size={20} />, title: "Flexibility", desc: "Adapts to your needs, from solo focus to team huddles." },
        { icon: <Coffee size={20} />, title: "Comfort", desc: "Ergonomic luxury that makes long hours feel effortless." },
    ];

    const elements = [
        { title: "Open Desk Layouts", icon: <Monitor />, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
        { title: "Acoustic Phone Booths", icon: <Mic2 />, img: "https://www.haworth.com/content/dam/haworth-com/global/products/booths/hushphone/hero-carousel/Hushoffice_HushPhone_photo_interior_4.jpg" },
        { title: "Collaborative Zones", icon: <Users2 />, img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" },
        { title: "Natural Lighting", icon: <SunMedium />, img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" },
    ];

    return (
        <section className="py-14 bg-white overflow-hidden font-serif">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- SECTION HEADER --- */}
                <div className="grid lg:grid-cols-2 items-end gap-10 mb-20">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-[#9F5434]"></span>
                            <span className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-xs">The Vision</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-tight tracking-tighter uppercase">
                            Design <br /> <span className="text-[#9F5434]">Philosophy.</span>
                        </h2>
                    </div>
                    <div className="lg:pb-4">
                        <p className="text-gray-500 text-xl font-light leading-relaxed italic border-l-4 border-[#EDE9D0] pl-8">
                            "Creating a modern global-style workspace environment where every square inch is optimized for human excellence."
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* --- LEFT: PILLARS (The 'What') --- */}
                    <div className="lg:col-span-4 space-y-6">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="group p-8 bg-[#F9F7F2] hover:bg-[#9F5434] transition-all duration-500 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9F5434] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-[#1A1A1A] group-hover:text-white mb-2 uppercase">{pillar.title}</h4>
                                    <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed font-medium">
                                        {pillar.desc}
                                    </p>
                                </div>
                                {/* Background Watermark Number */}
                                <span className="absolute bottom-[-20px] right-[-10px] text-8xl font-black text-black/5 group-hover:text-white/5 transition-colors">
                                    0{index + 1}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* --- RIGHT: DESIGN ELEMENTS GRID (The 'How') --- */}
                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                        {elements.map((el, index) => (
                            <div key={index} className={`relative group overflow-hidden rounded-2xl h-[300px] md:h-auto ${index === 1 || index === 2 ? 'md:mt-12' : ''}`}>
                                <img
                                    src={el.img}
                                    alt={el.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-[#9F5434] mb-2">{el.icon}</div>
                                            <h4 className="text-white font-black uppercase tracking-widest text-lg leading-none">{el.title}</h4>
                                        </div>
                                        <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-[#9F5434] group-hover:border-[#9F5434] transition-all duration-500">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Glass Tag */}
                                <div className="absolute top-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1 rounded-full text-[10px] text-white font-black uppercase tracking-widest">
                                    Premium Element
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Callout */}
                <div className="mt-20 p-1 bg-[#1A1A1A]">
                    <div className="bg-[#1A1A1A] border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">
                            Ready to experience the <span className="text-[#9F5434]">future of work?</span>
                        </h3>
                        <button className="whitespace-nowrap bg-[#9F5434] text-white px-10 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#9F5434] transition-all duration-300">
                            Explore Our Layouts
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DesignPhilosophy;