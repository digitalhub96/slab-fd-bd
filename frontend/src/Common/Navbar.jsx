import React, { useState, useEffect } from 'react';
// 1. Logo-ah inga import panniko mapla
import slabLogo from '../assets/logo/1.png';
import { FiSearch, FiShoppingBag, FiX, FiArrowRight, FiPhone } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'; // Different menu icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Working Places', href: '/working-places' },
        { name: 'Investor Lounge', href: '/investor-lounge' },
        { name: 'Contact Us', href: '/contact-us' },
    ];

    return (
        <>
            {/* --- MAIN NAVBAR --- */}
            <nav className={`fixed font-serif top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#EDE9D0] shadow-xl py-3' : 'bg-[#EDE9D0] py-3'
                }`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-3 cursor-pointer group">
                        {/* Logo Image Placeholder */}
                        <div className="w-50 h-18 relative overflow-hidden flex items-center justify-center rounded-sm group-hover:rotate-6 transition-transform">
                            <img src={slabLogo} alt="Slab Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Desktop Menu - Aligned to Right */}
                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex gap-10 items-center">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-[13px] font-serif font-black uppercase tracking-[0.2em] transition-all relative group ${scrolled ? 'text-[#1A1A1A]' : 'text-[#9F5434]'
                                        }`}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#9F5434] transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Search & Cart Icons */}
                        <div className={`flex items-center gap-6 border-l border-gray-400/30 pl-10 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'
                            }`}>
                        </div>


                    </div>

                    {/* Mobile Menu Toggler - Staggered Icon Style */}
                    <div className="lg:hidden flex items-center gap-6">
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`p-2 transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-[#9F5434]'}`}
                        >
                            <HiOutlineMenuAlt3 size={32} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MOBILE OFF-CANVAS DRAWER --- */}
            {/* Background Overlay */}
            <div
                className={`fixed inset-0 bg-[#1A1A1A]/90 backdrop-blur-sm z-[110] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer Content */}
            <div className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-screen bg-[#EDE9D0] z-[120] transition-transform duration-500 ease-in-out p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        {/* Logo Image in Offcanvas */}
                        <div className="w-30 h-14 relative overflow-hidden flex items-center justify-center">
                            <img src={slabLogo} alt="Slab Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center rounded-full hover:rotate-90 transition-transform"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-8">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter hover:text-[#9F5434] flex items-center justify-between group"
                        >
                            {item.name}
                            <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        </a>
                    ))}
                </div>

                {/* Bottom Drawer Content */}
                <div className="mt-auto border-t border-[#9F5434]/20 pt-10">
                    <p className="text-[#9F5434] font-black uppercase tracking-[0.3em] text-[10px] mb-4 italic">Quick Contact</p>
                    <div className="flex items-center gap-4 text-[#1A1A1A] mb-8 font-bold text-xl">
                        <FiPhone className="text-[#9F5434]" />
                        8668034756
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;