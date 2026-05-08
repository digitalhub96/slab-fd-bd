import React from 'react';
import {
    Maximize,
    Monitor,
    DoorOpen,
    PhoneIncoming,
    MessagesSquare,
    Presentation,
    CheckCircle2,
    Coffee,
    Printer,
    UserCheck,
    Car
} from 'lucide-react';

const ProjectOverview = () => {
    // New items added to the list mapla
    const stats = [
        { icon: <Monitor size={24} />, label: "Workstations", value: "90" },
        { icon: <DoorOpen size={24} />, label: "Private Cabins", value: "19" },
        { icon: <PhoneIncoming size={24} />, label: "Phone Booths", value: "02" },
        { icon: <MessagesSquare size={24} />, label: "Discussion Rooms", value: "02" },
        { icon: <Presentation size={24} />, label: "Conference Room", value: "01" },
        { icon: <Coffee size={24} />, label: "Pantry Area", value: "01" },
        { icon: <Printer size={24} />, label: "Print Station", value: "01" },
        { icon: <UserCheck size={24} />, label: "Reception", value: "01" },
        { icon: <Car size={24} />, label: "Parking Space", value: "Large Capacity", isSpecial: true },
    ];

    return (
        <section className="py-24 bg-[#1A1A1A] relative overflow-hidden font-serif">

            {/* Background Watermark Text */}
            <div className="absolute top-0 right-0 text-[10rem] md:text-[15rem] font-black text-white/[0.02] select-none leading-none translate-y-[-10%] pointer-events-none">
                SLAB.
            </div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* --- LEFT SIDE: PROJECT IDENTITY --- */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[2px] bg-[#9F5434]"></div>
                            <span className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-xs">Project Overview</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
                            Capacity <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5434] to-[#EDE9D0]">Planning.</span>
                        </h2>

                        {/* Total Space Hero Card */}
                        <div className="relative group p-10 bg-[#9F5434] rounded-none overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#9F5434]/20 border border-white/10">
                            <div className="relative z-10">
                                <Maximize className="text-white/40 mb-4" size={40} />
                                <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">Total Infrastructure</p>
                                <h3 className="text-6xl font-black text-white mt-2">
                                    5000 <span className="text-xl font-light opacity-60">Sq.ft</span>
                                </h3>
                            </div>
                            {/* Decorative Grid Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <CheckCircle2 size={18} className="text-[#9F5434]" />
                                <p className="text-sm font-bold tracking-wide">Optimized Circulation: 400 Sq.ft</p>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-[#9F5434] pl-4 italic">
                                "A modern global-style workspace environment where every inch is designed for human excellence."
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: DETAILED STATS GRID --- */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={`group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between min-h-[160px] 
                                ${item.isSpecial ? 'md:col-span-2 border-[#9F5434]/30 bg-[#9F5434]/5' : ''}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-none text-[#9F5434] group-hover:bg-[#9F5434] group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-white/10 font-black text-2xl group-hover:text-[#9F5434]/20 transition-colors">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">
                                        {item.label}
                                    </h4>
                                    <div className="flex items-baseline justify-between">
                                        <p className={`text-white font-black tracking-tighter ${item.isSpecial ? 'text-2xl md:text-3xl' : 'text-3xl'}`}>
                                            {item.value} 
                                            {!item.isSpecial && <span className="text-[10px] font-bold text-gray-600 uppercase ml-2 tracking-widest">Units</span>}
                                        </p>
                                        <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-[#9F5434] transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Architectural Line */}
                <div className="mt-20 flex items-center gap-4 opacity-40">
                    <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">Technical Blueprint v1.0</span>
                    <div className="w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;