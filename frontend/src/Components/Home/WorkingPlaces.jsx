import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Users, ArrowRight, ArrowUpRight } from 'lucide-react';
import img1 from '../../assets/working-places-images/1.png'
import img6 from '../../assets/working-places-images/6.png'
import img16 from '../../assets/working-places-images/16.png'
import img21 from '../../assets/working-places-images/21.png'
import img36 from '../../assets/working-places-images/36.png'

const WorkingPlaces = () => {
    const places = [
        {
            id: 1,
            title: "Private Executive Cabin",
            sqft: "150-400 SF",
            capacity: "2-7 Seater",
            price: "₹6500",
            desc: "Designed for focused work and high-level privacy. Sound-proof walls and ergonomic luxury furniture.",
            img: img1,
            tag: "EXECUTIVE"
        },
        {
            id: 2,
            title: "Premium Hot Desk",
            sqft: "Shared",
            capacity: "Open Area",
            price: "₹2500",
            desc: "Vibrant open environment for freelancers and digital nomads. High-speed ports and lounge access.",
            img: img6,
            tag: "FLEX SPACE"
        },
        {
            id: 3,
            title: "Corporate Office",
            sqft: "2500+ SF",
            capacity: "Up to 30",
            price: "₹25000",
            desc: "Full-floor or large wing solutions for established corporate teams and scaling startups.",
            img: img16,
            tag: "ENTERPRISE"
        },
        {
            id: 4,
            title: "Conference / Board Room",
            sqft: "350 SF",
            capacity: "08 People",
            price: "₹1200",
            desc: "Modern meeting rooms equipped with 4K displays, whiteboards, and video conferencing tech.",
            img: img21,
            tag: "MEETINGS"
        },
        {
            id: 5,
            title: "Sleeping Pod",
            sqft: "50 SF",
            capacity: "01 Person",
            price: "₹300",
            desc: "Ergonomic nap zones for quick power naps to recharge during long work hours.",
            img: img36,
            tag: "WELLNESS"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === places.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? places.length - 1 : prev - 1));
    };

    return (
        <section className="py-12 md:py-24 bg-[#1A1A1A] overflow-hidden font-serif">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 md:w-12 h-[2px] bg-[#9F5434]"></div>
                            <span className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Our Workspaces</span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
                            Space Utilization <span className="text-[#9F5434]">Strategy.</span>
                        </h2>
                    </div>

                    {/* Custom Navigation Arrows */}
                    <div className="flex gap-3 md:gap-4 self-end md:self-auto">
                        <button onClick={prevSlide} className="w-10 h-10 md:w-14 md:h-14 border border-white/10 text-white hover:bg-[#9F5434] transition-all flex items-center justify-center group active:scale-90">
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={nextSlide} className="w-10 h-10 md:w-14 md:h-14 border border-white/10 text-white hover:bg-[#9F5434] transition-all flex items-center justify-center group active:scale-90">
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Main Slider Container */}
                <div className="relative group">
                    {/* Responsive height: 550px for mobile, 650px for desktop */}
                    <div className="relative h-[550px] md:h-[650px] w-full overflow-hidden rounded-sm">
                        {places.map((place, index) => (
                            <div
                                key={place.id}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
                            >
                                {/* Background Image */}
                                <img
                                    src={place.img}
                                    alt={place.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Vertical Tag - Hidden on very small screens to save space */}
                                <div className="absolute top-0 right-6 md:right-12 h-32 md:h-48 w-10 md:w-12 bg-[#9F5434] flex items-center justify-center z-20">
                                    <span className="rotate-90 text-white font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs whitespace-nowrap">
                                        {place.tag}
                                    </span>
                                </div>

                                {/* Content Overlay Section */}
                                <div className="absolute bottom-0 left-0 w-full z-10">
                                    <div className="flex flex-col md:flex-row items-stretch md:items-end">
                                        
                                        {/* Main Details Box */}
                                        <div className="bg-white/95 backdrop-blur-md p-6 md:p-12 md:min-w-[550px] relative">
                                            
                                            {/* Price Tag (Mobile Only - Floating Style) */}
                                            <div className="md:hidden absolute -top-12 right-6 bg-[#EDE9D0] px-4 py-2 border-b-4 border-[#9F5434] shadow-xl">
                                                <span className="text-[#9F5434] font-black text-xl">{place.price}</span>
                                                <span className="text-[#1A1A1A] text-[9px] font-bold uppercase ml-1">
                                                    {place.id === 1 || place.id === 2 ? '/Seat' : 
                                                     place.id === 3 ? '/Mo' : 
                                                     place.id === 4 ? '/4H' : 
                                                     place.id === 5 ? '/Sft' : '/Mo'}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
                                                <div className="flex items-center gap-2 text-gray-500 font-bold text-[11px] md:text-sm">
                                                    <Maximize2 size={14} className="text-[#9F5434]" /> {place.sqft}
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 font-bold text-[11px] md:text-sm">
                                                    <Users size={14} className="text-[#9F5434]" /> {place.capacity}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl md:text-4xl font-black text-[#1A1A1A] mb-3 md:mb-4 uppercase tracking-tighter">
                                                {place.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm md:text-base max-w-sm mb-6 leading-relaxed">
                                                {place.desc}
                                            </p>

                                            <button className="flex items-center gap-2 text-[#1A1A1A] font-black uppercase text-[10px] md:text-xs tracking-[0.2em] group/btn hover:text-[#9F5434] transition-colors">
                                                Book This Space <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                        </div>

                                        {/* Price Box (Desktop Only) */}
                                        <div className="hidden md:flex bg-[#EDE9D0] p-12 flex-col justify-center items-center min-w-[200px] border-l border-white/20">
                                            <span className="text-[#9F5434] text-4xl font-black">{place.price}</span>
                                            <span className="text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest mt-1">
                                                {place.id === 1 || place.id === 2 ? '/ Per Seat' : 
                                                 place.id === 3 ? '/ Per Month' : 
                                                 place.id === 4 ? '/ 4 Hours' : 
                                                 place.id === 5 ? '/ Shift' : '/ Month'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Indicator (Hidden on Mobile) */}
                    <div className="absolute top-1/2 -right-4 flex flex-col gap-3 -translate-y-1/2 hidden xl:flex">
                        {places.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1 transition-all duration-500 ${i === currentIndex ? 'h-16 bg-[#9F5434]' : 'h-8 bg-white/10'}`}
                            ></div>
                        ))}
                    </div>
                </div>
                
                {/* Mobile Dots (New addition for better mobile navigation) */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {places.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#9F5434]' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkingPlaces;