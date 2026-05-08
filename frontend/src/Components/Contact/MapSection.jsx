import React from 'react';

const MapSection = () => {
    return (
        <section className="max-w-[1600px] mx-auto px-6 py-14">
            <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden shadow-2xl group rounded-2xl">
                {/* Map Image - Nedunchalai Nagar Context */}
                <img
                    alt="Slab Office Map Location"
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-[2000ms] group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80"
                />

                {/* Overlay for premium feel */}
                <div className="absolute inset-0 bg-[#9F5434]/5 pointer-events-none"></div>

                {/* Floating Address Card */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-220 bg-white/90 backdrop-blur-xl p-8 shadow-2xl max-w-sm border-l-4 border-[#9F5434]">
                    <h3 className="text-[#1A1A1A] font-black uppercase tracking-widest text-sm mb-3">Our Headquarters</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-bold">
                        No 500, Nedunchalai Nagar Main Rd,<br />
                        Nedunchalai Nagar, Salem,<br />
                        Tamil Nadu 636005
                    </p>
                    <div className="mt-4 inline-block text-[#9F5434] text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#9F5434]/20 pb-1 cursor-pointer hover:border-[#9F5434] transition-all">
                        Get Directions
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;