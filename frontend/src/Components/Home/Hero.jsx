import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import bgImg1 from '../../assets/bg-images/1.jfif'; // Path check panniko mapla

const Hero = () => {
    const slides = [
        {
            img: bgImg1,
            tag: "ESTABLISHED 2025",
            title: "WHERE INNOVATION",
            titleOrange: "MEETS COMFORT",
            desc: "Experience Salem's most sophisticated workspace designed for elite professionals and growing businesses."
        },
        {
            img: "https://theheadquarters.space/wp-content/uploads/2023/09/3d-rendering-modern-loft-office-lounge-co-working-space.png",
            tag: "PREMIUM CO-WORKING",
            title: "THE ULTIMATE",
            titleOrange: "BUSINESS ADDRESS",
            desc: "Elevate your corporate identity with Slab. Premium office suites in the heart of Nedunchalai Nagar."
        }
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-[#1A1A1A]">

            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={slide.img}
                        className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${index === current ? 'scale-110' : 'scale-100'}`}
                        alt="Premium Office"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            {/* Left Side Navigation Arrow */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-[#9F5434] border border-white/20 text-white backdrop-blur-sm transition-all duration-300 group"
                >
                    <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Right Side Navigation Arrow */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30">
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-[#9F5434] border border-white/20 text-white backdrop-blur-sm transition-all duration-300 group"
                >
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Center Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto mt-10 md:mt-20">
                <div className="overflow-hidden mb-4">
                    <span className="inline-block text-[#fff] text-xs md:text-sm font-black tracking-[0.4em] uppercase animate-pulse">
                        {slides[current].tag}
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-6 font-serif">
                    {slides[current].title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5434] to-[#EDE9D0]">
                        {slides[current].titleOrange}
                    </span>
                </h1>

                <p className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed mb-10 opacity-90">
                    {slides[current].desc}
                </p>

                {/* Two Buttons side by side */}
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">

                    {/* Primary Button */}
                    <a href="/contact-us" className="group relative">
                        <div className="absolute -inset-1 bg-[#9F5434] rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <button className="relative bg-[#9F5434] text-white px-8 md:px-10 py-4 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:bg-[#86432a]">
                            Book A Work Places
                        </button>
                    </a>

                    {/* Secondary Button */}
                    <a href="/working-places">
                        <button className="border border-white/30 hover:border-[#9F5434] text-white px-8 md:px-10 py-4 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 bg-white/5 backdrop-blur-sm hover:text-[#9F5434]">
                            Explore Work Places
                        </button>
                    </a>

                </div>
            </div>

            {/* Social Icons - Bottom Left (Clean look) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-30 flex md:flex-col gap-6 items-center">
                <FaInstagram className="text-white/50 hover:text-[#9F5434] transition-colors text-lg cursor-pointer" />
                <FaFacebook className="text-white/50 hover:text-[#9F5434] transition-colors text-lg cursor-pointer" />
                <FaLinkedin className="text-white/50 hover:text-[#9F5434] transition-colors text-lg cursor-pointer" />
                <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-[#9F5434] to-transparent"></div>
            </div>

        </section>
    );
};

export default Hero;