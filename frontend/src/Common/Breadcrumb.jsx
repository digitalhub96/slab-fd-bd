import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumb = () => {
    const location = useLocation();

    // Home page-la breadcrumb venam, so return null
    if (location.pathname === '/') return null;

    // Path-la irunthu page name-ah edukka (e.g., /working-places => Working Places)
    const pathName = location.pathname.split('/').filter((x) => x).join(' ');
    const formattedName = pathName.charAt(0).toUpperCase() + pathName.slice(1).replace('-', ' ');

    return (
        <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-end font-serif">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://wgl-dsites.net/workalley/wp-content/uploads/2021/06/bg-title-services.jpg"
                    alt="Breadcrumb Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* The Floating Breadcrumb Box (As per your image) */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="inline-block bg-[#1A1A1A] px-10 md:px-16 py-8 md:py-12 rounded-t-[10px] shadow-2xl border-t border-x border-white/10">

                    {/* Page Title */}
                    <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        {formattedName}
                    </h1>

                    {/* Path Links */}
                    <div className="flex items-center gap-3 text-white/60 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        <Link to="/" className="hover:text-[#9F5434] transition-colors">Home</Link>
                        <FiChevronRight className="text-[#9F5434]" />
                        <span className="text-white">{formattedName}</span>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9F5434]"></div>
        </section>
    );
};

export default Breadcrumb;