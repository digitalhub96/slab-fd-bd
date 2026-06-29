import React from 'react';
// React Icons
import { FiChevronRight, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import FooterLogo from '../assets/logo/1.png'

const Footer = () => {
    const workingPlaces = [
        "Dedicated cabin 2-7 seater",
        "Hot desk(open area)",
        "Phone booth",
        "Corporate office upto 30 People",
        "Conference room 8 seater capacity's",
        "Lobby",
        "Reception",
        "Sleeping pod"
    ];

    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "#" },
        { name: "Our Facilities", link: "#" },
        { name: "Working Places", link: "/working-places" },
        { name: "Contact Us", link: "/contact" },
        { name: "Privacy Policy", link: "#" }
    ];

    const socialIcons = [
        { Icon: FaInstagram, link: "#" },
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaLinkedinIn, link: "#" },
        { Icon: FaXTwitter, link: "#" }
    ];

    return (
        <footer className="bg-[#EDE9D0] pt-24 pb-12 border-t border-[#9F5434]/10 overflow-hidden font-serif">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- MAIN GRID --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

                    {/* COLUMN 1: BRANDING & CONTACT */}
                    <div className="w-full lg:w-[30%]">
                        <div className="flex items-center gap-3 mb-8">

                            {/* Logo Image */}
                            <div className="w-70 h-30 overflow-hidden">
                                <img
                                    src={FooterLogo}
                                    alt="Slab Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* <span className="text-3xl font-black text-[#1A1A1A] tracking-tighter uppercase">
                                Slab<span className="text-[#9F5434]">.</span>
                            </span> */}
                        </div>

                        <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-10 font-medium">
                            Slab provides a premium global-style workspace environment in Salem, strategically optimized for high-performance teams and creative professionals.
                        </p>

                        <div className="space-y-5">
                            <a href="tel:8668034756" className="flex items-center gap-4 text-[#1A1A1A]/80 hover:text-[#9F5434] transition-all group">
                                <div className="w-10 h-10 rounded-full bg-[#9F5434]/5 flex items-center justify-center group-hover:bg-[#9F5434] group-hover:text-white transition-all shadow-sm">
                                    <FiPhone size={16} />
                                </div>
                                <span className="text-xs font-black tracking-[0.2em] uppercase">8668034756</span>
                            </a>

                            <a href="mailto:info@slabworkspace.com" className="flex items-center gap-4 text-[#1A1A1A]/80 hover:text-[#9F5434] transition-all group">
                                <div className="w-10 h-10 rounded-full bg-[#9F5434]/5 flex items-center justify-center group-hover:bg-[#9F5434] group-hover:text-white transition-all shadow-sm">
                                    <FiMail size={16} />
                                </div>
                                <span className="text-xs font-black tracking-[0.2em] uppercase">info@slabworkspace.com</span>
                            </a>
                        </div>
                    </div>


                    {/* COLUMN 2: WORKING PLACES (Arrow List) */}
                    <div className="w-full lg:w-[25%]">
                        <h4 className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px] mb-10 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-[#9F5434]"></span>
                            Working Places
                        </h4>
                        <ul className="grid grid-cols-1 gap-y-5">
                            {workingPlaces.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 group cursor-pointer">
                                    <FiChevronRight className="text-[#9F5434] group-hover:translate-x-2 transition-transform duration-300" size={18} />
                                    <span className="text-[#1A1A1A]/70 text-sm font-semibold group-hover:text-[#9F5434] transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VERTICAL BORDER */}
                    <div className="hidden lg:block w-[1px] h-80 bg-[#9F5434] mx-8"></div>

                    {/* COLUMN 3: NAVIGATION & SOCIAL */}
                    <div className="w-full lg:w-[25%]">
                        <h4 className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px] mb-10 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-[#9F5434]"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-5 mb-12">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="flex items-center gap-3 group cursor-pointer">
                                    <FiChevronRight className="text-[#9F5434] group-hover:translate-x-2 transition-transform duration-300" size={18} />
                                    <a href={link.link} className="text-[#1A1A1A]/70 text-sm font-semibold group-hover:text-[#9F5434] transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <p className="text-[#1A1A1A]/30 text-[9px] font-black uppercase tracking-[0.5em] mb-5 italic">Stay Connected</p>
                        <div className="flex gap-4">
                            {socialIcons.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="w-12 h-12 bg-white border border-[#9F5434]/10 flex items-center justify-center text-[#9F5434] hover:text-white hover:bg-[#9F5434] hover:shadow-lg hover:shadow-[#9F5434]/20 transition-all duration-500 group"
                                >
                                    <social.Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}

                <div className="mt-24 pt-10 border-t border-[#9F5434]/10 flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-[#1A1A1A]/50 text-[10px] font-bold tracking-[0.4em] uppercase">
                        © 2026 <span className="text-[#1A1A1A] font-black underline decoration-[#9F5434] decoration-2"><a
                            href="/"
                            rel="noopener noreferrer"
                            className="text-[#9F5434] hover:underline"
                        >
                            slab
                        </a></span> ALL RIGHTS RESERVED.
                    </div>

                    <div className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1A1A1A]/60">
                        Designed by{" "}
                        <a
                            href="https://mdsdigitalhub.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9F5434] hover:underline"
                        >
                            MDS Digital Hub Pvt Ltd
                        </a>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#9F5434] transition-all group"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Back to top</span>
                        <div className="w-10 h-10 rounded-full border border-[#9F5434]/20 flex items-center justify-center group-hover:-translate-y-2 transition-all duration-500 bg-white shadow-sm">
                            <FiArrowUp size={18} className="text-[#9F5434]" />
                        </div>
                    </button>

                </div>


            </div>
        </footer>
    );
};

export default Footer;