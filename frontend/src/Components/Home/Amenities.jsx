import React from 'react';
import { 
  FiWifi, 
  FiClock, 
  FiZap, 
  FiShield, 
  FiWind, 
  FiPrinter, 
  FiCoffee, 
  FiShoppingBag, 
  FiUserCheck,
  FiArrowRight 
} from 'react-icons/fi'; // react-icons use panni iruken mapla

const Amenities = () => {
    const facilityList = [
        { icon: <FiWifi size={24} />, title: "High-speed WiFi" },
        { icon: <FiClock size={24} />, title: "24/7 Access" },
        { icon: <FiZap size={24} />, title: "Power Backup" },
        { icon: <FiShield size={24} />, title: "CCTV Security" },
        { icon: <FiWind size={24} />, title: "Air-Conditioned" },
        { icon: <FiPrinter size={24} />, title: "Printing & Scanning" },
        { icon: <FiShoppingBag size={24} />, title: "Pantry Area" },
        { icon: <FiCoffee size={24} />, title: "Coffee Station" },
        { icon: <FiUserCheck size={24} />, title: "Reception Support" },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#EDE9D0]/50 relative overflow-hidden font-serif">

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-[-100px] w-64 h-64 bg-[#9F5434]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-[-100px] w-80 h-80 bg-[#9F5434]/10 rounded-full blur-3xl"></div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">

                {/* --- MAIN FLOATING CARD --- */}
                <div className="bg-white rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.06)] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white">

                    {/* LEFT SIDE: CONTENT */}
                    <div className="lg:w-2/5 text-center lg:text-left">
                        <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                            <span className="w-10 h-[2px] bg-[#9F5434]"></span>
                            <h5 className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                                Our Services
                            </h5>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] leading-tight mb-6 uppercase tracking-tighter">
                            FACILITIES & <br /> <span className="text-[#9F5434]">AMENITIES.</span>
                        </h2>
                        
                        <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 font-medium italic border-l-2 border-[#EDE9D0] pl-4">
                            "Slab Salem provides a premium environment in Nedunchalai Nagar, equipped with all the modern infrastructure you need to thrive."
                        </p>

                        {/* Button replaced with <a> tag mapla */}
                        <a 
                            href="working-places" 
                            className="inline-flex items-center gap-3 bg-[#9F5434] text-white px-10 py-5 rounded-none font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#1A1A1A] transition-all duration-300 shadow-xl shadow-[#9F5434]/20 group"
                        >
                            View more Working Places 
                            <FiArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>

                    {/* RIGHT SIDE: ICONS GRID */}
                    <div className="lg:w-3/5 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {facilityList.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#F9F7F2] hover:bg-[#9F5434] p-6 md:p-8 rounded-none border border-transparent hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[180px]"
                                >
                                    <div className="w-14 h-14 bg-white shadow-md flex items-center justify-center text-[#9F5434] mb-4 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-[#1A1A1A] group-hover:text-white font-black text-[11px] md:text-[13px] uppercase tracking-widest leading-tight transition-colors duration-500">
                                        {item.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Architectural Info (Desktop) */}
                <div className="hidden lg:flex mt-12 items-center justify-between opacity-30">
                     <p className="text-[#1A1A1A] font-bold text-[10px] uppercase tracking-[0.5em]">Global Standards</p>
                     <div className="h-[1px] flex-1 mx-10 bg-[#1A1A1A]"></div>
                     <p className="text-[#1A1A1A] font-bold text-[10px] uppercase tracking-[0.5em]">Nedunchalai Nagar, Salem</p>
                </div>

            </div>
        </section>
    );
};

export default Amenities;