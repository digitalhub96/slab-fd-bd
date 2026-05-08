import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiBookOpen, FiClock, FiCalendar, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ContactSection = () => {
    // Professional-ah default-ah set panniruken mapla
    const [userType, setUserType] = useState('Professional');
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        companyName: '',
        jobRole: '',
        gstNumber: '',
        institutionName: '',
        courseField: '',
        workspace: 'Private Executive Cabin (2-7 Seater) - ₹6500/Seat',
        startDate: '',
        endDate: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Show loading state
        Swal.fire({
            title: 'Processing...',
            text: 'Sending your inquiry to Slab',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            // Using localhost for development - change back to production URL when deploying
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, userType })
            });
            
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inquiry Sent!',
                    text: 'We have received your request and will contact you shortly.',
                    confirmButtonColor: '#B85C38'
                });
                setFormData({
                    fullName: '', mobileNumber: '', email: '', companyName: '', jobRole: '',
                    gstNumber: '', institutionName: '', courseField: '',
                    workspace: 'Private Executive Cabin (2-7 Seater) - ₹6500/Seat', startDate: '', endDate: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to send enquiry. Please try again.',
                    confirmButtonColor: '#121212'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please check your connection.',
                confirmButtonColor: '#121212'
            });
        } finally {
            setStatus('');
        }
    };

    const socialIcons = [
        { Icon: FaInstagram, link: "#" },
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaLinkedinIn, link: "#" },
        { Icon: FaXTwitter, link: "#" }
    ];

    const inputWrapper = "relative group flex flex-col gap-2";
    const labelStyle = "text-[10px] font-black text-[#B85C38] uppercase tracking-[0.25em] ml-1";
    const inputStyle = "w-full bg-[#f8f9fa] border-2 border-transparent focus:border-[#B85C38]/20 focus:bg-white rounded-xl px-6 py-4 outline-none transition-all duration-300 font-bold text-[#1A1A1A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:shadow-lg focus:shadow-[#B85C38]/5 appearance-none";

    return (
        <section className="relative min-h-screen flex items-center justify-center py-10 md:py-20 bg-[#fdfdfd] overflow-hidden font-sans">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#121212] hidden lg:block translate-x-10 -skew-x-6"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-[40px] overflow-hidden border border-gray-100">

                    {/* --- FORM SIDE (order-1 makes it top on mobile) --- */}
                    <div className="lg:col-span-7 bg-white p-8 md:p-16 order-1 lg:order-2">

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                            <div>
                                <h3 className="text-3xl font-black text-[#121212] uppercase tracking-tighter italic">Book Your <span className="text-[#B85C38]">Slab</span></h3>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Premium Workspace Inquiry</p>
                            </div>

                            {/* Toggle Switcher */}
                            <div className="flex bg-[#f8f9fa] p-1.5 rounded-2xl border border-gray-100 w-fit">
                                <button
                                    type="button"
                                    onClick={() => setUserType('Professional')}
                                    className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${userType === 'Professional' ? 'bg-white text-[#B85C38] shadow-md' : 'text-gray-400'}`}
                                >
                                    Professional
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserType('Student')}
                                    className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${userType === 'Student' ? 'bg-white text-[#B85C38] shadow-md' : 'text-gray-400'}`}
                                >
                                    Student
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className={inputWrapper}>
                                    <label className={labelStyle}>Full Name</label>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Your Name" className={inputStyle} required />
                                </div>
                                <div className={inputWrapper}>
                                    <label className={labelStyle}>Mobile Number</label>
                                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" className={inputStyle} required />
                                </div>
                            </div>

                            <div className={inputWrapper}>
                                <label className={labelStyle}>Work / Personal Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className={inputStyle} required />
                            </div>

                            {/* Dynamic Section (Professional/Student) */}
                            <div className="p-6 bg-[#B85C38]/5 rounded-[2rem] border border-[#B85C38]/10 space-y-5 transition-all">
                                {userType === 'Professional' ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className={inputWrapper}>
                                            <label className={labelStyle}>Company Name</label>
                                            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Design Agency" className={inputStyle} />
                                        </div>
                                        <div className={inputWrapper}>
                                            <label className={labelStyle}>Job Role</label>
                                            <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} placeholder="Enter Your Job Role" className={inputStyle} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelStyle}>GST Number (Optional)</label>
                                            <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} placeholder="GSTIN-000000" className={inputStyle} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className={inputWrapper}>
                                            <label className={labelStyle}>Institution Name</label>
                                            <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} placeholder="University / School" className={inputStyle} />
                                        </div>
                                        <div className={inputWrapper}>
                                            <label className={labelStyle}>Course / Field</label>
                                            <input type="text" name="courseField" value={formData.courseField} onChange={handleChange} placeholder="B.Arch / Design" className={inputStyle} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Workspace & Timeline */}
                            <div className="space-y-6">
                                <div className={inputWrapper}>
                                    <label className={labelStyle}>Select Workspace</label>
                                    <div className="relative">
                                        <select name="workspace" value={formData.workspace} onChange={handleChange} className={inputStyle}>
                                            <option>Private Executive Cabin (2-7 Seater) - ₹6500/Seat</option>
                                            <option>Premium Hot Desk / Open Area - ₹2500/Seat</option>
                                            <option>Phone Booth - Free</option>
                                            <option>Corporate Office - ₹25000/Month</option>
                                            <option>Conference / Board Room - ₹1200/4 Hours</option>
                                            <option>Lobby Lounge - Free</option>
                                            <option>Reception Area - Free</option>
                                            <option>Sleeping Pod</option>
                                            <option>Customizable Cabin</option>
                                            <option>Private Office - ₹18000</option>
                                            <option>Managed Office - ₹12000</option>
                                            <option>Coworking Seats - ₹250/Day</option>
                                            <option>Twin Pod (Startup Plan) - ₹6000/Cabin</option>
                                            <option>Branch Office (5-Seater) - ₹20000</option>
                                            <option>Studio - ₹10000/Day</option>
                                            <option>Event & Shoot Space - ₹8000/Day</option>
                                        </select>
                                        <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B85C38] pointer-events-none" size={18} />
                                    </div>
                                </div>

                                {/* Unified Date and Time Inputs Mapla */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={inputWrapper}>
                                        <label className={labelStyle}><FiCalendar className="inline mr-1 mb-1" /> Starting Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleChange}
                                            className={inputStyle + " !px-4 !text-[12px]"}
                                            required
                                        />
                                    </div>
                                    <div className={inputWrapper}>
                                        <label className={labelStyle}><FiClock className="inline mr-1 mb-1" /> Ending Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleChange}
                                            className={inputStyle + " !px-4 !text-[12px]"}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#121212] hover:bg-[#B85C38] text-white py-5 rounded-2xl flex items-center justify-center gap-4 transition-all duration-500 shadow-xl group">
                                <span className="font-black uppercase text-xs tracking-[0.4em]">{status || 'Initialize Inquiry'}</span>
                                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>

                    {/* --- CONTACT SIDE (order-2 makes it bottom on mobile) --- */}
                    <div className="lg:col-span-5 bg-[#121212] p-10 md:p-16 flex flex-col justify-between text-white order-2 lg:order-1 border-t lg:border-t-0 border-white/5">
                        <div className="space-y-12">
                            <div>
                                <div className="w-12 h-1 bg-[#B85C38] mb-6"></div>
                                <h2 className="text-4xl font-black tracking-tighter leading-none mb-4">CONNECT <br /><span className="text-[#B85C38]">OFFICE.</span></h2>
                                <p className="text-gray-500 text-xs font-medium leading-relaxed italic max-w-xs">
                                    Book a tour of our premium studio. We provide the infrastructure, you provide the creativity.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: FiMail, label: "Official Email", val: "hello@slab-salem.com", link: "mailto:hello@slab-salem.com" },
                                    { icon: FiPhone, label: "Direct Support", val: "+91 86680 34756", link: "tel:8668034756" },
                                    { icon: FiMapPin, label: "Our Studio", val: "Nedunchalai Nagar, Salem, TN", link: "#" }
                                ].map((item, idx) => (
                                    <a key={idx} href={item.link} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-white transition-all duration-500">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{item.label}</p>
                                            <p className="font-bold text-sm text-gray-200">{item.val}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0">
                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-5">Social Connection</p>
                            <div className="flex gap-4">
                                {socialIcons.map((soc, i) => (
                                    <a key={i} href={soc.link} className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#B85C38] text-white transition-all">
                                        <soc.Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;