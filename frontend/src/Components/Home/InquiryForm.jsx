import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const InquiryForm = () => {
    return (
        <section className="bg-[#F9F7F2] flex items-center justify-center font-serif py-10 px-20" id='enquiry'>
            {/* Main Container - max-w-7xl kuduthu wide design panniruken */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-full w-full bg-white shadow-2xl overflow-hidden grid lg:grid-cols-12 min-h-[650px]"
            >

                {/* --- LEFT SIDE: IMAGE (Size kammiya panniruken - col-span-4) --- */}
                <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden group">
                    <img
                        src="https://buildwithsatellite.com/images/careers/recruiter-screening.png"
                        alt="Contact Us"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>

                    {/* Floating Info inside Image (Optional style) */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hidden lg:block">
                        <p className="text-white text-sm italic font-light">
                            "Our team is ready to help you find the perfect workspace."
                        </p>
                    </div>
                </div>

                {/* --- RIGHT SIDE: FORM (Wide area - col-span-8) --- */}
                <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center bg-white">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-[2px] bg-[#9F5434]"></span>
                            <span className="text-[#9F5434] font-black uppercase tracking-[0.3em] text-xs">Inquiry</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-10 uppercase tracking-tighter leading-none">
                            Get In <span className="text-[#9F5434]">Touch.</span>
                        </h2>

                        <form className="space-y-8">

                            {/* Row 1 */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Name */}
                                <div className="relative group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#9F5434] outline-none transition-all duration-300 text-lg font-medium text-[#1A1A1A]"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div className="relative group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#9F5434] outline-none transition-all duration-300 text-lg font-medium text-[#1A1A1A]"
                                        placeholder="Enter 10 digit mobile number"
                                        required
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                        }}
                                    />
                                </div>

                            </div>

                            {/* Row 2 */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Email */}
                                <div className="relative group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#9F5434] outline-none transition-all duration-300 text-lg font-medium text-[#1A1A1A]"
                                        placeholder="Enter your mail"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                                        Message *
                                    </label>
                                    <textarea
                                        rows="3"
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#9F5434] outline-none transition-all duration-300 text-lg font-medium text-[#1A1A1A] resize-none"
                                        placeholder="Share your requirements..."
                                        required
                                    ></textarea>
                                </div>

                            </div>

                            {/* Submit */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full md:w-auto bg-[#1A1A1A] hover:bg-[#9F5434] text-white px-14 py-5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-500 shadow-xl flex items-center justify-center gap-3"
                                >
                                    Submit Request <Send size={14} />
                                </motion.button>

                                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                    <CheckCircle2 size={16} className="text-[#9F5434]" />
                                    <span>Typically responds within 2 hours</span>
                                </div>
                            </div>

                        </form>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default InquiryForm;