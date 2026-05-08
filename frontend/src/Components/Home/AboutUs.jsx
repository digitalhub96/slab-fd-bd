import React from 'react';
import { Layout, ShieldCheck, Users, ArrowRight, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="relative py-12 md:py-24 bg-[#EDE9D0]/30 overflow-hidden font-serif">

      {/* Background Watermark Text */}
      <div className="absolute top-10 left-[-5%] text-[10rem] md:text-[15rem] font-black text-[#9F5434]/5 select-none pointer-events-none leading-none">
        SLAB
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* --- LEFT SIDE: IMAGE COMPOSITION --- */}
          <div className="relative h-[350px] md:h-[650px]">
            {/* Main Background Image */}
            <div className="absolute top-0 left-0 w-full md:w-[85%] h-full md:h-[80%] rounded-none overflow-hidden shadow-2xl z-0">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                alt="Slab Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#9F5434]/10 mix-blend-multiply"></div>
            </div>

            {/* Overlapping Front Image - HIDDEN ON MOBILE */}
            <div className="hidden md:block absolute bottom-0 right-0 w-[60%] h-[55%] rounded-none overflow-hidden border-[12px] border-white shadow-2xl z-20 transition-transform hover:scale-105 duration-500">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                alt="Collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* --- EXPERIENCE BADGE - HEIGHT REDUCED --- */}
            <div className="absolute bottom-4 right-4 md:top-1/2 md:right-[-0px] md:-translate-y-1/2 z-0 bg-[#1A1A1A] py-3 px-5 md:py-5 md:px-7 shadow-2xl border-l-4 border-[#9F5434]">
              <div className="text-center md:text-left leading-none">
                <span className="block text-xl md:text-3xl font-black text-[#9F5434] leading-none mb-1">5000+</span>
                <div className="space-y-0.5">
                  <span className="block text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Sq.Ft Premium</span>
                  <span className="block text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Workspace</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-[#9F5434]"></span>
                <h5 className="text-[#9F5434] font-black uppercase tracking-[0.4em] text-xs">Executive Summary</h5>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
                Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5434] to-[#1A1A1A]">Workspace Economy</span> in Salem.
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                Slab establishes a premium infrastructure in a prime Salem location, serving freelancers, startups, SMEs, and corporate satellite teams with modern flexibility.
              </p>
            </div>

            {/* Key Industry Solvers */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="p-5 bg-white border-l-4 border-[#EDE9D0] hover:border-[#9F5434] transition-all shadow-sm">
                <div className="text-[#9F5434] mb-3"><TrendingUp size={24} /></div>
                <h4 className="text-sm font-black text-[#1A1A1A] mb-1 uppercase tracking-wider">Flexible Leasing</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Solving traditional long lease problems with agile office models.</p>
              </div>

              <div className="p-5 bg-white border-l-4 border-[#EDE9D0] hover:border-[#9F5434] transition-all shadow-sm">
                <div className="text-[#9F5434] mb-3"><BarChart3 size={24} /></div>
                <h4 className="text-sm font-black text-[#1A1A1A] mb-1 uppercase tracking-wider">Cost Optimization</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Lowering capital investment and cost per employee for businesses.</p>
              </div>
            </div>

            {/* Key Drivers List */}
            <div className="space-y-3 bg-[#1A1A1A]/5 p-6 rounded-none border-l-2 border-[#9F5434]">
              <h6 className="text-[#1A1A1A] font-black text-[10px] uppercase tracking-[0.3em] mb-4 italic">Industry Key Drivers:</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Startup Ecosystem Growth',
                  'Remote Workforce Expansion',
                  'Hybrid Work Models',
                  'Global Dominant Office Model'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#9F5434]" />
                    <span className="text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer / CTA Section */}
            <div className="pt-4 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div>
                <p className="text-[#1A1A1A] font-black text-sm uppercase leading-none">Investment Strategy</p>
                <p className="text-[#9F5434] text-[10px] font-bold uppercase tracking-widest mt-2">₹90 Lakhs Capital | 18-24 Months Payback</p>
              </div>

              <a
                href="#enquiry"
                className="bg-[#9F5434] text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#1A1A1A] transition-all flex items-center gap-3 group inline-flex"
              >
                Enquiry Now
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;