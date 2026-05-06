/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Rocket, MessageCircle, Phone, TrendingUp, Megaphone, Palette, Video, ChevronRight, Share2, Layout, Users, Zap, Mail, ArrowRight, Search, Target, Settings, ChartBar, MapPin, Facebook, Instagram, Globe, MousePointerClick, PenTool, Film, X, Check, Star } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px',
        ...options
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options]);

  return activeId;
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookOfficial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramOfficial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokOfficial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V15c0 1.9-.83 3.65-2.26 4.85-1.42 1.19-3.32 1.76-5.17 1.54-1.85-.21-3.55-1.15-4.71-2.61-1.15-1.46-1.68-3.32-1.49-5.17.2-1.85 1.18-3.53 2.71-4.7C7.26 7.6 9.17 7.14 11 7.42V11.5c-1.12-.13-2.28.16-3.18.84a3.86 3.86 0 0 0-1.41 3.25 3.86 3.86 0 0 0 3.25 4.1 3.86 3.86 0 0 0 4.41-3.69l.01-16z" />
    </svg>
  );
}

function YoutubeOfficial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={cn(
      "flex flex-col items-center font-poppins group transition-all duration-300 shrink-0 select-none", 
      className
    )}>
      {/* Top Text: CHEEMA */}
      <span className="text-[32px] sm:text-[38px] font-black text-white leading-none tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
        CHEEMA
      </span>
      
      {/* Bottom Decoration: line — dot — Digitals — dot — line */}
      <div className="flex items-center justify-center w-full min-w-[180px] sm:min-w-[200px] gap-2 sm:gap-3">
        {/* Left Tapered Line */}
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#A855F7]/50 to-[#A855F7]" />
        
        {/* Left Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.9)] shrink-0" />
        
        {/* Subtext: Digitals */}
        <span className="text-[13px] sm:text-[15px] font-medium leading-none tracking-wider px-1 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED] drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]">
          Digitals
        </span>
        
        {/* Right Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.9)] shrink-0" />
        
        {/* Right Tapered Line */}
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#A855F7]/50 to-[#A855F7]" />
      </div>
    </div>
  );
}

export default function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [formData, setFormData] = useState<any>(undefined);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = (data?: any) => {
    setFormData(data);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen text-on-background font-inter selection:bg-white/30 selection:text-white overflow-x-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-[#0b0c14] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#4a25e1] rounded-full blur-[160px] opacity-[0.18]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#8b5cf6] rounded-full blur-[140px] opacity-[0.12]"></div>
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-[#2e2a5e] rounded-full blur-[130px] opacity-25"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
      </div>
      
      <ProgressBar />
      <Navbar onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <InfiniteLogoScroll />
      <Services />
      <Portfolio onContactClick={openContactModal} />
      <Process />
      <Team />
      <Testimonials />
      <Contact onContactClick={openContactModal} />
      <Footer 
        onPrivacyClick={() => setShowPrivacyModal(true)} 
        onTermsClick={() => setShowTermsModal(true)} 
      />
      <WhatsAppFab />

      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <TermsConditionsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
      <PremiumContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} initialFormData={formData} />
    </div>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#8b5cf6] origin-[0%] z-[60]"
      style={{ scaleX }}
    />
  );
}

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const activeSection = useScrollSpy(['home', 'services', 'portfolio', 'process', 'leadership', 'contact']);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 z-50 md:left-1/2 md:-translate-x-1/2 md:max-w-6xl md:w-full"
    >
      <div className="bg-white/[0.06] backdrop-blur-[24px] backdrop-saturate-150 border border-white/10 rounded-[1.25rem] shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-8 h-20">
          <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
            <Logo />
          </a>
          <div className="hidden md:flex gap-1 sm:gap-2 bg-white/5 p-1 rounded-full border border-white/5">
            {['Services', 'Portfolio', 'Process', 'Leadership', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  className={cn(
                    "relative font-inter text-[13px] font-black uppercase tracking-widest flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 transition-all duration-500",
                    isActive 
                      ? "text-white" 
                      : "text-white/40 hover:text-white"
                  )}
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                >
                  <span className="relative z-10">{item}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navBubble"
                      className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <motion.button 
              onClick={onContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-bold px-5 sm:px-8 py-2.5 rounded-full glass-bubble shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(167,139,250,0.2)]"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero({ onContactClick }: { onContactClick: () => void }) {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-8" id="home">
      <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Rocket className="text-[#a78bfa] w-4 h-4" />
            <span className="text-[11px] font-bold text-white/80 uppercase tracking-[0.2em]">Elite Digital Strategy</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] font-black text-white font-lexend leading-[1.05] tracking-tighter">
            We Grow Your <span className="text-[#a78bfa]">Business</span> with Professional Digital Marketing Solutions
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-xl leading-relaxed">
            Strategic growth, precision ad management, and high-impact creative solutions for ambitious brands. Elevate your presence in the digital landscape.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4 z-20">
            <motion.button 
              onClick={onContactClick}
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-[#0b0914] text-sm font-bold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Start Project
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-[0_0_50px_rgba(74,37,225,0.2)]"
        >
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#130f26]">
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0uiZYTZnlt-JY4Y1OH_H2UdhpWtq9ro4IGr1kSYm3cGgyM2ZpNGu0b2-0LrSkxNWFw3hWuIAnfYglnmKA8t7fETyKvw8LvVjWQBOyiRN-lWGbkDkPDLieHFJ03dXaIOv3_DhTTTpZV6lUv6-0M7JAB_QXXI6tiL_8AtuJAjKgpGhfShINyVjnailtn3DXqjEfhzZ_e-SssaTH7YOhpH3XHxMIVk8xLcKpBxvDknXGFku7bJdfzZB5SMI6ugfUijUdviA9bI1rEtaWnQ=s0"
              alt="Digital Marketing Campaign Growth Visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-transparent to-transparent"></div>
            
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.2, duration: 0.8 }}
               className="absolute bottom-6 left-6 right-6 p-4 rounded-[2rem] bg-[#1d1933]/90 border border-white/10 backdrop-blur-xl flex items-center justify-between cursor-pointer group active:scale-95 transition-all shadow-2xl"
               onClick={() => setShowAnalytics(!showAnalytics)}
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4a25e1]/30 flex items-center justify-center group-hover:bg-[#4a25e1]/50 transition-colors">
                    <TrendingUp className="w-6 h-6 text-[#a78bfa] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Campaign Active</h4>
                    <p className="text-[#a78bfa] text-[13px] font-black tracking-wide">+124% Growth</p>
                  </div>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">View Analytics</span>
                 <motion.div
                   animate={{ rotate: showAnalytics ? 90 : 0 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 >
                   <ChevronRight className={cn("w-5 h-5 transition-colors", showAnalytics ? "text-[#a78bfa]" : "text-white/40")} />
                 </motion.div>
               </div>

               {/* Digital Analytics Popup */}
               <AnimatePresence>
                 {showAnalytics && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                     onClick={(e) => e.stopPropagation()}
                     className="absolute bottom-full left-0 right-0 mb-4 p-6 bg-[#0b0c14]/95 border border-white/20 rounded-[2.5rem] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 cursor-default"
                   >
                     <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-[#a78bfa]/10 flex items-center justify-center">
                           <ChartBar className="w-4 h-4 text-[#a78bfa]" />
                         </div>
                         <h5 className="text-white font-black text-xs uppercase tracking-widest">Digital Analytics</h5>
                       </div>
                       <div className="flex items-center gap-1">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-green-500 text-[10px] font-black uppercase tracking-tight">Live Data</span>
                       </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                       {[
                         { label: 'Reach', value: '84.2k', progress: 85, icon: Users },
                         { label: 'Engagement', value: '12.4%', progress: 65, icon: Zap },
                         { label: 'Clicks', value: '4.2k', progress: 45, icon: MousePointerClick },
                         { label: 'Conversions', value: '2.8%', progress: 30, icon: Target },
                       ].map((stat, i) => (
                         <div key={i} className="space-y-2">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-1.5 text-white/40">
                               <stat.icon className="w-3 h-3" />
                               <span className="text-[10px] font-bold uppercase tracking-tight">{stat.label}</span>
                             </div>
                             <span className="text-white font-black text-[11px]">{stat.value}</span>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${stat.progress}%` }}
                               transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                               className="h-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.5)]"
                             />
                           </div>
                         </div>
                       ))}
                     </div>

                     <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                       <p className="text-white/30 text-[9px] font-medium leading-relaxed">
                         Real-time tracking powered by Cheema Digitals AI
                       </p>
                       <div className="flex -space-x-2">
                         {[1, 2, 3].map((n) => (
                           <div key={n} className="w-5 h-5 rounded-full border-2 border-[#0b0c14] bg-white/10 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${n + 10}`} alt="Analyst" className="w-full h-full object-cover" />
                           </div>
                         ))}
                       </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfiniteLogoScroll() {
  const logos = [
    { name: "Google Ads", icon: Target },
    { name: "Meta Ads", icon: Share2 },
    { name: "Shopify", icon: Layout },
    { name: "Mailchimp", icon: Mail },
    { name: "TikTok Ads", icon: Video },
    { name: "Analytics", icon: ChartBar },
    { name: "Clutch", icon: Search },
    { name: "HubSpot", icon: Users }
  ];

  return (
    <div className="py-12 relative overflow-hidden bg-white/[0.02] border-y border-white/5 backdrop-blur-sm">
      <div className="flex animate-infinite-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center gap-3 px-12 opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap grayscale hover:grayscale-0">
            <logo.icon className="w-6 h-6 text-white" />
            <span className="text-white font-lexend font-bold text-sm tracking-widest uppercase">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive strategies to elevate brand visibility and drive measurable conversions across all digital touchpoints.',
    icon: Globe,
    details: 'Our digital marketing ecosystem is designed to amplify your brand voice where it matters most. We don\'t just chase clicks; we engineer experiences that convert.',
    features: [
      'Omnichannel Strategy Development',
      'Search Engine Optimization (SEO)',
      'Content Marketing & Strategy',
      'Conversion Rate Optimization'
    ],
    outcomes: 'Expect an average 40% increase in qualified traffic and 25% growth in customer retention within the first 6 months.',
    benefits: 'Build long-term brand equity and a sustainable pipeline of incoming leads.',
    useCases: 'Perfect for established businesses looking to modernize their acquisition channels.'
  },
  {
    title: 'Ad Management',
    description: 'Targeted campaigns across Facebook, Instagram, and Google Ads engineered for maximum ROI and lead performance.',
    icon: MousePointerClick,
    details: 'Stop wasting budget on broad targeting. We use data-driven segments and hyper-local optimization to put your solution in front of the exact person searching for it.',
    features: [
      'Meta (Facebook/Instagram) Ads',
      'Google Search & Display Network',
      'TikTok Ad Campaigns',
      'Retargeting & LAL Strategy'
    ],
    outcomes: 'Our clients consistently see a 4x–7x ROAS (Return on Ad Spend) through precise targeting and creative testing.',
    benefits: 'Instant visibility and immediate traffic to your highest-converting offers.',
    useCases: 'Ideal for e-commerce stores or service providers looking for rapid sales growth.'
  },
  {
    title: 'Graphic Designing',
    description: 'Striking visual identities and creative assets that capture attention and communicate your brand story with precision.',
    icon: PenTool,
    details: 'Visual communication is the heartbeat of your brand. We design with intent, ensuring every pixel aligns with your core values and market positioning.',
    features: [
      'Brand Identity & Logo Design',
      'UI/UX Web & Mobile Design',
      'Social Media Creative Bundles',
      'Print & Digital Marketing Assets'
    ],
    outcomes: 'Transform your professional image with a consistent visual language that increases perceived brand value by up to 60%.',
    benefits: 'Consistent, premium look that instills confidence and professional trust in your audience.',
    useCases: 'Essential for companies undergoing a rebrand or launching new high-end products.'
  },
  {
    title: 'Video Editing',
    description: 'High-impact motion graphics and cinematic video content engineered to trend on modern high-speed digital platforms.',
    icon: Film,
    details: 'In the age of short-form content, attention is the currency. We create high-retention video assets that stop the scroll and drive engagement across TikTok, Reels, and YouTube.',
    features: [
      'Cinematic Short-Form Editing',
      '2D/3D Motion Graphics',
      'Color Grading & Professional Audio',
      'Storyboarding & Content Flow'
    ],
    outcomes: 'Boost engagement rates by 3x and triple your average watch time with psychology-backed editing techniques.',
    benefits: 'Viral-potential content that makes your brand "trend" and builds massive social proof.',
    useCases: 'Crucial for influencers, coaches, and brands scaling via TikTok and Instagram Reels.'
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section className="py-24 px-8 relative z-10" id="services">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tight">Our Expertise</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Precision-engineered solutions tailored to dominate your specific market niche.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(service)}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-[3rem] p-8 cursor-pointer backdrop-blur-2xl flex flex-col hover:bg-white/[0.08] hover:border-[#a78bfa]/30 active:bg-white/[0.12] hover:shadow-2xl hover:shadow-[#a78bfa]/10 shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden glass-bubble"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 group-hover:bg-[#4a25e1] flex items-center justify-center mb-6 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(74,37,225,0.4)]">
                  <Icon className="text-[#8b5cf6] group-hover:text-white transition-colors duration-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide drop-shadow-md">{service.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
}

const PORTFOLIO_PROJECTS = [
  {
    title: "Social Media Campaign (Real Estate)",
    subtitle: "Facebook & Instagram Ads",
    description: "We created high-converting ad creatives and targeted campaigns for a real estate client, helping them generate quality leads and improve brand visibility.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    challenge: "The client was struggling to reach potential home buyers and was generating low-quality leads through traditional advertising methods.",
    solution: "We implemented a hyper-targeted Facebook and Instagram ad campaign, utilizing dynamic real estate ads and retargeting pixel data.",
    metrics: ["300% increase in lead volume", "45% reduction in CPA", "Over 2M impressions"],
    benefits: "Direct access to high-intent buyers and a massive reduction in wasted marketing spend.",
    useCases: "Highly effective for real estate developers and agencies looking for rapid inventory movement."
  },
  {
    title: "Graphic Designing",
    subtitle: "Brand Identity & Visuals",
    description: "Crafted stunning visual assets, custom logos, and engaging marketing materials designed to elevate brand presence in a crowded market.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    challenge: "The brand lacked a cohesive visual identity, causing confusion among their target demographic and hindering brand recall.",
    solution: "We developed a comprehensive brand kit, including a modernized logo, consistent color palettes, typography, and marketing templates.",
    metrics: ["150% increase in brand mentions", "Complete brand rollout in 4 weeks", "Award-winning design package"],
    benefits: "Stronger brand authority and an instantly recognizable presence across all platforms.",
    useCases: "Perfect for brands moving from local to regional or national competition levels."
  },
  {
    title: "Video Editing",
    subtitle: "E-commerce",
    description: "Edited engaging short videos and ad creatives that helped increase product visibility and audience interaction.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    challenge: "E-commerce client had low engagement rates on product description pages and social media channels.",
    solution: "We produced high-energy, fast-paced product showcase videos optimized for TikTok, Instagram Reels, and YouTube Shorts.",
    metrics: ["5x engagement rate on social media", "35% higher conversion rate on product pages", "Over 500k organic views"],
    benefits: "Increased 'dwell-time' and significantly higher conversion rates on direct-to-consumer websites.",
    useCases: "Essential for jewelry, fashion, and gadget brands where visual demonstration is the key to sales."
  },
  {
    title: "Social Media Management",
    subtitle: "Content & Strategy",
    description: "Managed complete social media accounts with creative posts, branding, and regular content scheduling.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    challenge: "The client did not have the internal resources for consistent posting, leading to a stagnant follower count and low community interaction.",
    solution: "We took over complete account management, creating a 30-day rolling content calendar, interactive stories, and prompt community engagement protocols.",
    metrics: ["120% organic follower growth", "Consistent posting 5x a week", "250% increase in community engagement"],
    benefits: "Active, thriving community and consistent brand voice without the burden of daily management.",
    useCases: "Ideal for busy founders and teams who value social presence but lack the time for daily upkeep."
  },
  {
    title: "Google Ads and Meta Ads",
    subtitle: "Search Optimization",
    description: "Created and optimized Google Ads campaigns to improve search visibility and drive targeted traffic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    challenge: "High cost-per-click and low conversion rates on existing search campaigns due to broad matching and poor ad copy.",
    solution: "We restructured the account using Single Keyword Ad Groups (SKAGs), updated ad copy for higher CTR, and implemented rigorous negative keyword lists.",
    metrics: ["50% reduction in CPC", "2x increase in Conversion Rate", "Top 3 positions for primary keywords"],
    benefits: "Maximum efficiency for every search dollar and dominance in primary commercial search terms.",
    useCases: "Crucial for service-based businesses in high-competition industries like legal, insurance, or repairs."
  },
  {
    title: "Website Design Project",
    subtitle: "Business Website",
    description: "Designed a modern, responsive website with a clean layout and user-friendly structure.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    challenge: "Client possessed an outdated, slow website that was not mobile-responsive, resulting in a high bounce rate.",
    solution: "We designed and developed a custom, lightning-fast website focusing on mobile-first design, intuitive navigation, and clear calls to action.",
    metrics: ["60% decrease in bounce rate", "Sub-2 second page load time", "95+ Core Web Vitals score"],
    benefits: "A permanent, high-performance digital asset that works as a silent salesperson 24/7.",
    useCases: "A must-have for any modern business wanting to convert digital traffic into booked appointments or sales."
  }
];

function Portfolio({ onContactClick }: { onContactClick: () => void }) {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_PROJECTS[0] | null>(null);

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="py-24 px-8 relative z-10" id="portfolio">
      <div className="max-w-[1280px] mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tight">Our Work</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4 mb-16">
            A showcase of our most impactful digital campaigns and creative projects.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PORTFOLIO_PROJECTS.map((project, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="group relative h-[420px] rounded-[3rem] overflow-hidden bg-[#130f26] border border-white/10 cursor-pointer hover:shadow-2xl hover:shadow-[#a78bfa]/20 transition-all duration-700 glass-bubble"
                onClick={() => setSelectedProject(project)}
             >
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
               <div className="absolute inset-x-0 bottom-0 p-8 text-left flex flex-col justify-end transform transition-transform duration-500">
                  <span className="text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-2 block">{project.subtitle}</span>
                  <h3 className="text-xl font-bold text-white font-lexend mb-3 leading-tight">{project.title}</h3>
                  <p className="text-sm text-white/70 line-clamp-2 leading-relaxed mb-6">{project.description}</p>
                  <div className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full glass-bubble text-xs font-black tracking-widest uppercase border border-white/10">
                    Learn More <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0c14]/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-2xl flex flex-col md:flex-row group"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full glass-bubble text-white/80 hover:text-white border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-2/5 h-64 md:h-auto shrink-0 relative overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b0c14] via-[#0b0c14]/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col relative z-0 flex-1">
                <span className="text-[#a78bfa] text-xs font-black tracking-[0.2em] uppercase mb-3 block">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white font-lexend mb-8 leading-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-[#a78bfa]/30 rounded-full" />
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-3">The Challenge</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base font-medium">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-[#a78bfa]/30 rounded-full" />
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-3">The Solution</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base font-medium">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-4">Impact & Results</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProject.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                          <div className="w-8 h-8 rounded-full bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4 text-[#a78bfa]" />
                          </div>
                          <span className="text-white/90 text-sm font-bold tracking-wide">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-[#a78bfa]/5 border border-[#a78bfa]/10 p-6 rounded-[2rem]">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-[#a78bfa]" />
                        <h4 className="text-[#a78bfa] font-lexend text-sm uppercase tracking-widest font-black">Strategic Benefit</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed tracking-wide italic leading-relaxed">{selectedProject.benefits}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-white/40" />
                        <h4 className="text-white/40 font-lexend text-sm uppercase tracking-widest font-black">Best For</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{selectedProject.useCases}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      onContactClick();
                    }} 
                    className="inline-flex bg-white text-black px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:bg-white/90 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all items-center gap-2"
                  >
                    Start a Similar Project <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Process() {
  const steps = [
    { 
      title: "Understanding Your Business", 
      desc: "We begin by carefully understanding your business model, goals, and target audience.",
      icon: Search,
      details: "Our discovery phase is the foundation of your success. We deep-dive into your market presence, identifying untapped opportunities where your competitors are falling short. By aligning our strategy with your core business values, we ensure every marketing dollar is spent with purpose and precision.",
      features: [
        "In-depth Market Analysis",
        "Competitor Benchmarking",
        "Audience Persona Creation",
        "Goal Alignment Sessions"
      ],
      benefits: "Eliminate guesswork and launch campaigns that resonate with your ideal customers from day one.",
      useCases: "Perfect for brands entering new markets or looking to pivot their digital presence for higher profitability."
    },
    { 
      title: "Strategy & Planning", 
      desc: "Based on your requirements, we develop a structured digital marketing strategy for maximum ROI.",
      icon: Target,
      details: "Action without a plan is just noise. We engineer a bespoke roadmap that utilizes the right mix of platforms and tactics to hit your KPIs. Our tactical plans are flexible enough to adapt to market shifts but rigorous enough to maintain consistent growth trajectories.",
      features: [
        "Budget Optimization Mapping",
        "Platform Selection Strategy",
        "Content Calendar Blueprint",
        "KPI and Analytics Setup"
      ],
      benefits: "Clear transparency on how your investment will be distributed and what specific milestones to expect.",
      useCases: "Essential for established businesses scaling their budget or startups needing a professional go-to-market plan."
    },
    { 
      title: "Creative Design & Visual Content", 
      desc: "We create high-quality graphics and videos that represent your brand professionally and engage your audience.",
      icon: Palette,
      details: "Design isn't just about looking good; it's about building trust. Our creative team produces high-impact visuals that transform passive scrollers into active leads. We focus on 'conversion-first' aesthetics that maintain your professional brand integrity while driving engagement.",
      features: [
        "High-Retention Video Editing",
        "Ad-Creative Production",
        "Brand Consistent Graphic Assets",
        "Landing Page Visual Design"
      ],
      benefits: "Increase your brand's perceived value and lower your cost-per-click with professional, trustworthy visuals.",
      useCases: "Ideal for e-commerce brands needing fresh ad content or professional services wanting to look 'top-tier'."
    },
    { 
      title: "Campaign Setup & Execution", 
      desc: "We professionally set up and launch campaigns across Facebook, Instagram, and Google Ads.",
      icon: Rocket,
      details: "The 'Go-Live' phase is where technical precision meets market reality. We handle the complex plumbing of modern ad managers—pixels, tracking, and account structure—ensuring your campaigns launch without technical friction or wasted spend.",
      features: [
        "Multi-Platform Ad Execution",
        "Pixel & API Tracking Setup",
        "A/B Split Testing Frameworks",
        "Copywriting & Creative Deployment"
      ],
      benefits: "Peace of mind knowing your campaigns are structured by experts following latest platform best practices.",
      useCases: "Best for busy business owners who want to delegate the technical complexity of ad platforms to specialists."
    },
    { 
      title: "Optimization & Performance Management", 
      desc: "We continuously monitor performance, analyze data, and optimize campaigns to ensure better ROI.",
      icon: Settings,
      details: "Launch day is just the beginning. Our true magic happens in the days and weeks that follow. We obsess over the data, killing underperforming ads and scaling the winners. We treat your budget like our own, constantly squeezing more value from every impression.",
      features: [
        "Daily Performance Monitoring",
        "Audience Scaling & Refinement",
        "Bid Strategy Optimization",
        "Creative Refresh Cycles"
      ],
      benefits: "Drastically reduce wasted spend and continuously lower your cost-per-lead over time.",
      useCases: "Mandatory for anyone running long-term growth campaigns where ad fatigue is a potential risk."
    },
    { 
      title: "Growth & Results Delivery", 
      desc: "Our focus is on delivering real business results — including visibility, engagement, and quality leads.",
      icon: ChartBar,
      details: "We don't deliver just 'vanity metrics'. We focus on the bottom line. Our monthly reporting isn't just a list of numbers; it's a strategic summary of what worked, what we learned, and how we're going to win even bigger next month.",
      features: [
        "Detailed Performance Reporting",
        "ROI and ROAS Data Analysis",
        "Future Scaling Recommendations",
        "Monthly Strategy Review Calls"
      ],
      benefits: "Clear insight into your true business growth and a dedicated partner focused on your long-term success.",
      useCases: "For visionaries who want more than just an agency; they want a growth partner focused on the big picture."
    }
  ];

  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null);

  return (
    <section className="py-24 px-8 relative z-10" id="process">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tight">Our Process</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            A structured approach to transforming your vision into measurable business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStep(step)}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-[3rem] p-8 cursor-pointer backdrop-blur-2xl flex flex-col hover:bg-white/[0.08] hover:border-[#a78bfa]/30 active:bg-white/[0.12] hover:shadow-2xl hover:shadow-[#a78bfa]/10 shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden glass-bubble"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 group-hover:bg-[#4a25e1] flex items-center justify-center shrink-0 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(74,37,225,0.4)]">
                    <Icon className="text-[#8b5cf6] group-hover:text-white transition-colors duration-500 w-6 h-6" />
                  </div>
                  <div className="text-4xl font-black text-white/10 group-hover:text-[#a78bfa]/20 transition-colors duration-300 font-lexend">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide drop-shadow-md">{step.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ProcessDetailModal 
        step={selectedStep} 
        onClose={() => setSelectedStep(null)} 
      />
    </section>
  );
}

function ProcessDetailModal({ step, onClose }: { step: any; onClose: () => void }) {
  if (!step) return null;

  return (
    <AnimatePresence>
      {step && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="relative w-full max-w-2xl bg-[#0b0c14] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#a78bfa]/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-lexend">{step.title}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Process Insight</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 transition-all"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-10">
              <div>
                <h4 className="text-white font-lexend text-lg mb-3">Professional Strategy</h4>
                <p className="text-white/60 leading-relaxed text-sm">
                  {step.details}
                </p>
              </div>

              <div>
                <h4 className="text-white font-lexend text-lg mb-4">Phase Milestones</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {step.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <Check className="w-4 h-4 text-[#a78bfa] shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#a78bfa]/5 border border-[#a78bfa]/10 p-6 rounded-[2rem]">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#a78bfa]" />
                    <h4 className="text-[#a78bfa] font-lexend text-sm uppercase tracking-widest font-black">Strategic Benefit</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{step.benefits}</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-white/40" />
                    <h4 className="text-white/40 font-lexend text-sm uppercase tracking-widest font-black">Best For</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{step.useCases}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-5 rounded-full transition-all text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Understood
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const TEAM_MEMBERS = [
  {
    name: "Mohsin Cheema",
    role: "Founder & CEO of Cheema Digitals",
    description: "Leads overall strategy, client communication, and business growth with over a decade of expertise.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  },
  {
    name: "Hira Yaseen",
    role: "Executive Secretary",
    description: "Assists the CEO with scheduling, communication, and administrative tasks while ensuring efficient coordination and smooth business operations.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  },
  {
    name: "Ali Haider",
    role: "Video Editor",
    description: "A master of motion storytelling, creating high-impact reels and cinematic ad creatives for digital engagement.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  },
  {
    name: "Ray Fahad",
    role: "Ads Specialist",
    description: "Expert in scaling brands through precision targeting on Facebook, Instagram, and Google Ads platforms.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  },
  {
    name: "Zoya Khan",
    role: "Social Media Manager",
    description: "Driven by community engagement, managing content pipelines that foster deep audience connections.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  },
  {
    name: "Zainab Malik",
    role: "Content Writer",
    description: "Writes professional captions, ad copy, and marketing content that connects with the audience and drives results.",
    socials: { facebook: "https://www.facebook.com/?_rdc=1&_rdr#", instagram: "https://instagram.com/" }
  }
];

function Team() {
  return (
    <section className="py-24 px-8 relative z-10" id="leadership">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tight">Owner & Leadership</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            The visionary minds driving Cheema Digitals toward global excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {TEAM_MEMBERS.map((member, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-[3rem] p-8 md:p-10 cursor-pointer backdrop-blur-2xl flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#a78bfa]/30 active:bg-white/[0.12] hover:shadow-2xl hover:shadow-[#a78bfa]/10 shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-500 glass-bubble"
             >
               <div>
                 <h3 className="text-3xl font-black text-white font-lexend tracking-tight mb-4 transition-all duration-500 whitespace-nowrap">
                   {member.name}
                 </h3>
                 <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
                    {member.role}
                 </div>
                 <p className="text-[15px] sm:text-base text-white/70 leading-relaxed font-medium">
                    {member.description}
                 </p>
               </div>
               <div className="w-12 h-px bg-white/20 mt-10 group-hover:w-full group-hover:bg-[#8b5cf6]/50 transition-all duration-500" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    rating: 5,
    text: "Cheema Digitals completely transformed our online presence. Within weeks, we started getting real leads and consistent growth.",
    name: "Ahmed R.",
    role: "Business Owner",
    city: "Lahore"
  },
  {
    rating: 5,
    text: "Highly professional team. Their social media strategy helped us scale our brand faster than expected.",
    name: "Sana K.",
    role: "Founder",
    city: "Karachi"
  },
  {
    rating: 5,
    text: "One of the best digital marketing agencies in Pakistan. Clean design, fast delivery, and excellent communication.",
    name: "Usman T.",
    role: "CEO",
    city: "Islamabad"
  },
  {
    rating: 5,
    text: "ہماری سیلز میں واضح اضافہ ہوا ہے۔ ٹیم بہت cooperative ہے اور results واقعی deliver کرتی ہے۔",
    name: "Ali M.",
    role: "E-commerce Owner",
    city: "Faisalabad"
  },
  {
    rating: 5,
    text: "From branding to ads, everything was handled perfectly. Truly a premium experience.",
    name: "Hira A.",
    role: "Startup Owner",
    city: "Lahore"
  }
];

function Testimonials() {
  return (
    <section className="py-24 px-8 relative z-10 overflow-hidden" id="testimonials">
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-[#a78bfa]/20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-[#4a25e1]/20 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" />
      </div>
      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           className="mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tight">Trusted by Leading Brands Across Pakistan 🇵🇰</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Real Results. Real Clients. Digital Growth That Delivers.</p>
          <div className="inline-flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10 mt-6">
            <span className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </span>
            <span className="text-white font-bold text-sm tracking-widest">4.9 / 5 Average Rating</span>
            <span className="text-white/40 text-sm">Based on 120+ Happy Clients in Pakistan</span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl hover:bg-white/[0.08] hover:border-[#a78bfa]/30 transition-all duration-500 glass-bubble shadow-[0_4px_24px_rgba(0,0,0,0.15)] text-left"
              >
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current shimmer-star" />)}
                  </div>
                  <p className="text-white/80 text-lg italic mb-8 min-h-[100px]">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#4a25e1] flex items-center justify-center text-white font-bold text-lg">
                      {t.name.split(' ').map(s => s[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{t.role} • {t.city}</p>
                    </div>
                  </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onContactClick }: { onContactClick: (data: any) => void }) {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'Digital Marketing'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-8 relative z-10" id="contact">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white font-lexend tracking-tight leading-[1.1] mb-6">Let's Build the <br/><span className="text-[#a78bfa]">Future Together.</span></h2>
          <p className="text-lg text-white/70 max-w-md mb-12">
            Ready to dominate your market? Fill out the form or reach out directly. Our experts are standing by.
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={() => setIsPhoneModalOpen(true)}
              className="flex items-center gap-6 group p-5 md:p-4 -ml-4 rounded-[2rem] cursor-pointer w-full text-left glass-bubble transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#a78bfa]/20 transition-colors">
                <Phone className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Call Us</span>
                <span className="block font-bold text-white text-base tracking-wide">+92 304 1143680</span>
              </div>
            </button>
            <a 
              href="mailto:cheema.official59@gmail.com" 
              className="flex items-center gap-6 group p-5 md:p-4 -ml-4 rounded-[2rem] cursor-pointer glass-bubble transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#a78bfa]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Email Us</span>
                <span className="block font-bold text-white text-base tracking-wide">cheema.official59@gmail.com</span>
              </div>
            </a>
            <a 
              href="https://maps.google.com/?q=City+Arifwala,+Pakistan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 group p-5 md:p-4 -ml-4 rounded-[2rem] cursor-pointer glass-bubble transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#a78bfa]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Location</span>
                <span className="block font-bold text-white text-base tracking-wide">City Arifwala, Pakistan</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="bg-white/[0.04] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] inset-shadow-sm inset-shadow-white/5"
        >
          <form onSubmit={(e) => { e.preventDefault(); onContactClick(formData); }} className="space-y-6 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold tracking-widest text-white/55 uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold tracking-widest text-white/55 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+92 300 0000000" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2 text-left w-full">
              <label className="text-[10px] font-bold tracking-widest text-white/55 uppercase">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
              />
            </div>
            
            <div className="space-y-2 text-left w-full">
              <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your goals..." 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-full mt-4 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all text-sm uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <PhoneSelectionModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
    </section>
  );
}

function ContactDeliveryModal({ isOpen, onClose, formData }: { isOpen: boolean; onClose: () => void; formData: { name: string; phone: string; email: string; message: string } }) {
  const generateMessage = () => {
    return `New Client Inquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/923041143680?text=${text}`, '_blank');
    onClose();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('New Client Inquiry');
    const body = encodeURIComponent(generateMessage());
    window.location.href = `mailto:cheema.official59@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-[#0b0c14] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-black text-white font-lexend">Choose Delivery Method</h3>
              <p className="text-white/50 text-sm mt-2">How would you like to send this message?</p>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-full transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmail}
                className="w-full flex items-center justify-center gap-3 bg-[#a78bfa] text-white font-black py-4 rounded-full transition-all shadow-[0_0_20px_rgba(167,139,250,0.3)]"
              >
                <Mail className="w-5 h-5" />
                Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Footer({ onPrivacyClick, onTermsClick }: { onPrivacyClick: () => void; onTermsClick: () => void }) {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-4 md:mx-auto mb-12 py-12 px-10 bg-white/[0.04] backdrop-blur-[24px] backdrop-saturate-150 border border-white/10 rounded-[3rem] relative z-10 mt-24 shadow-[0_-12px_40px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/40 to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
        {/* Left Section: Brand & Legal */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-4">
            <Logo className="md:-ml-1" />
            <p className="font-inter text-[10px] font-medium text-white/50 tracking-[0.2em] uppercase text-center w-full">
              © 2026 Cheema Digitals. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={onPrivacyClick}
              className="font-inter text-[10px] font-black text-white/40 hover:text-[#a78bfa] px-6 py-2.5 rounded-full cursor-pointer tracking-[0.2em] uppercase glass-bubble transition-all"
            >
              Privacy
            </button>
            <button
              onClick={onTermsClick}
              className="font-inter text-[10px] font-black text-white/40 hover:text-[#a78bfa] px-6 py-2.5 rounded-full cursor-pointer tracking-[0.2em] uppercase glass-bubble transition-all"
            >
              Terms
            </button>
          </div>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-end items-center gap-3">
          {[
            { name: 'Facebook', href: 'https://www.facebook.com/?_rdc=1&_rdr#', icon: FacebookOfficial },
            { name: 'Instagram', href: 'https://instagram.com/', icon: InstagramOfficial },
            { name: 'TikTok', href: 'https://tiktok.com/', icon: TikTokOfficial },
            { name: 'YouTube', href: 'https://youtube.com/@mohsincheema-222?si=7D6JDE4zIrSkU-7-', icon: YoutubeOfficial }
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-inter text-[11px] font-black text-white/60 hover:text-white px-7 py-3.5 rounded-full cursor-pointer tracking-[0.15em] uppercase glass-bubble group whitespace-nowrap"
            >
              <link.icon className="w-4 h-4 text-[#a78bfa] group-hover:scale-110 transition-transform" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden bg-[#0b0c14]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-black text-white font-lexend tracking-tight">Privacy Policy</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
              <p className="text-white/70 leading-relaxed">
                At Cheema Digitals, we respect your privacy and are committed to protecting your personal information.
              </p>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Information We Collect</h3>
                <p className="text-white/60 leading-relaxed">
                  We may collect personal information such as your name, email address, phone number, and business details when you contact us or use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">How We Use Your Information</h3>
                <ul className="list-disc list-inside text-white/60 space-y-2 leading-relaxed">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you</li>
                  <li>To process inquiries and projects</li>
                  <li>For marketing and promotional purposes (only with your consent)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Data Protection</h3>
                <p className="text-white/60 leading-relaxed">
                  We take appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Third-Party Services</h3>
                <p className="text-white/60 leading-relaxed">
                  We may use trusted third-party tools (e.g., analytics, ads platforms) which may collect limited data as per their policies.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Your Rights</h3>
                <p className="text-white/60 leading-relaxed">
                  You can request to access, update, or delete your personal data at any time.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Contact Us</h3>
                <p className="text-white/60 leading-relaxed">
                  If you have any questions about this policy, contact us at:<br />
                  <a href="mailto:cheema.official59@gmail.com" className="text-[#a78bfa] hover:underline font-medium">cheema.official59@gmail.com</a>
                </p>
              </section>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">
                  Last Updated: 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function TermsConditionsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden bg-[#0b0c14]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-black text-white font-lexend tracking-tight">Terms & Conditions</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
              <p className="text-white/70 leading-relaxed">
                Welcome to Cheema Digitals. By accessing our website, you agree to these terms.
              </p>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Services</h3>
                <p className="text-white/60 leading-relaxed">
                  We provide digital marketing, website design, and related services. All services are subject to agreement and pricing discussed with the client.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Payments</h3>
                <ul className="list-disc list-inside text-white/60 space-y-2 leading-relaxed">
                  <li>Payments must be made as agreed before or during project execution</li>
                  <li>No refunds once the project has started unless agreed otherwise</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Intellectual Property</h3>
                <p className="text-white/60 leading-relaxed">
                  All designs and content remain the property of Cheema Digitals until full payment is made.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">User Responsibilities</h3>
                <p className="text-white/60 leading-relaxed">
                  You agree not to misuse our website or services for illegal or unauthorized purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Limitation of Liability</h3>
                <p className="text-white/60 leading-relaxed">
                  We are not responsible for any indirect damages or losses resulting from the use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Changes to Terms</h3>
                <p className="text-white/60 leading-relaxed">
                  We may update these terms at any time without prior notice.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white font-lexend">Contact</h3>
                <p className="text-white/60 leading-relaxed">
                  For any queries, contact us at:<br />
                  <a href="mailto:cheema.official59@gmail.com" className="text-[#a78bfa] hover:underline font-medium">cheema.official59@gmail.com</a>
                </p>
              </section>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">
                  Last Updated: 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function PremiumContactModal({ isOpen, onClose, initialFormData }: { isOpen: boolean; onClose: () => void; initialFormData?: { name: string; phone: string; email: string; message: string; service: string } }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: initialFormData?.name || '',
    phone: initialFormData?.phone || '',
    email: initialFormData?.email || '',
    service: initialFormData?.service || 'Digital Marketing',
    message: initialFormData?.message || ''
  });

  // Keep state in sync if initialFormData changes (e.g. if the modal is reopened with new data)
  useEffect(() => {
    if (initialFormData) {
      setFormData({
        name: initialFormData.name || '',
        phone: initialFormData.phone || '',
        email: initialFormData.email || '',
        service: initialFormData.service || 'Digital Marketing',
        message: initialFormData.message || ''
      });
    }
  }, [initialFormData]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Digital Marketing',
    'Ad Management',
    'Graphic Designing',
    'Video Editing'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 600);
  };

  const generateMessage = () => {
    return `New Client Inquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`;
  };

  const handleWhatsAppRedirection = () => {
    setShowSuccess(true);
    const text = encodeURIComponent(generateMessage());
    const whatsappUrl = `https://wa.me/923041143680?text=${text}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      handleClose();
    }, 1500);
  };

  const handleEmailRedirection = () => {
    setShowSuccess(true);
    const subject = encodeURIComponent('New Client Inquiry');
    const body = encodeURIComponent(generateMessage());
    const mailtoUrl = `mailto:cheema.official59@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      handleClose();
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after a short delay to allow closing animation
    setTimeout(() => {
      setStep(1);
      setShowSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Digital Marketing',
        message: ''
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-hidden bg-[#0b0c14]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {showSuccess ? (
              <div className="p-12 flex flex-col items-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-[#a78bfa]/20 flex items-center justify-center border border-[#a78bfa]/30"
                >
                  <Zap className="w-10 h-10 text-[#a78bfa]" />
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-white font-lexend tracking-tight">Redirecting Now...</h2>
                  <p className="text-white/60">Preparing your message for instant delivery.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-white/10 flex justify-between items-center">
                  <h2 className="text-2xl font-black text-white font-lexend tracking-tight">
                    {step === 1 ? 'Start Your Project' : 'Choose where to send your message'}
                  </h2>
                  <button 
                    onClick={handleClose}
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                  <div className="p-8 overflow-y-auto custom-scrollbar">
                  {step === 1 ? (
                    <form onSubmit={handleNextStep} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase ml-4">Full Name</label>
                          <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase ml-4">Phone Number</label>
                          <input 
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel" 
                            placeholder="+92 300 0000000" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase ml-4">Email Address</label>
                        <input 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase ml-4">Selected Service</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-[#13111c] border border-white/10 rounded-full px-6 py-3.5 text-white focus:outline-none focus:border-[#a78bfa]/50 transition-all font-medium text-sm appearance-none cursor-pointer"
                        >
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase ml-4">Your Message</label>
                        <textarea 
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your digital goals..." 
                          rows={3}
                          className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-white/10 transition-all font-medium text-sm resize-none"
                        />
                      </div>

                      <motion.button 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit" 
                        className="w-full bg-white text-black font-black py-4 rounded-full mt-4 hover:bg-[#a78bfa] hover:text-white transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                          <>Continue <ArrowRight className="w-4 h-4" /></>
                        )}
                      </motion.button>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <p className="text-center text-white/60 text-sm mb-8">Choose where to send your inquiry message for instant connectivity.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleWhatsAppRedirection}
                          className="flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                            <WhatsAppIcon className="w-8 h-8 fill-current text-white" />
                          </div>
                          <div className="text-center">
                            <span className="block text-white font-bold text-lg mb-1">WhatsApp</span>
                            <span className="block text-[#25D366] text-[10px] font-bold uppercase tracking-widest">Instant Reply</span>
                          </div>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleEmailRedirection}
                          className="flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] bg-[#a78bfa]/10 border border-[#a78bfa]/20 hover:bg-[#a78bfa]/20 transition-all group"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#a78bfa] flex items-center justify-center shadow-[0_0_20px_rgba(167,139,250,0.4)]">
                            <Mail className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-center">
                            <span className="block text-white font-bold text-lg mb-1">Email</span>
                            <span className="block text-[#a78bfa] text-[10px] font-bold uppercase tracking-widest">Professional</span>
                          </div>
                        </motion.button>
                      </div>
                      
                      <button 
                        onClick={() => setStep(1)}
                        className="w-full text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest py-4"
                      >
                        Go Back to Form
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ServiceDetailModal({ 
  service, 
  onClose 
}: { 
  service: typeof SERVICES[0] | null; 
  onClose: () => void; 
}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (service) {
      setStep(1);
      setIsSuccess(false);
    }
  }, [service]);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="relative w-full max-w-2xl bg-[#0b0c14] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#a78bfa]/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-lexend">{service.title}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                    {step === 1 ? 'Expertise Details' : 'Start Your Project'}
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-black text-white font-lexend mb-2">Request Received!</h4>
                    <p className="text-white/60">Our strategy team will contact you within 24 hours.</p>
                    <button 
                      onClick={onClose}
                      className="mt-8 px-8 py-3 bg-white text-black font-black rounded-full uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-white font-lexend text-lg mb-3">Strategic Overview</h4>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {service.details}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-lexend text-lg mb-4">What's Included</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <Check className="w-4 h-4 text-[#a78bfa] shrink-0" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#a78bfa]/5 border border-[#a78bfa]/10 p-6 rounded-[2rem]">
                      <div className="flex items-center gap-2 mb-2">
                        <ChartBar className="w-5 h-5 text-[#a78bfa]" />
                        <h4 className="text-[#a78bfa] font-lexend text-sm uppercase tracking-widest font-black">Proven Results</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed italic">"{service.outcomes}"</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-[#a78bfa]" />
                          <h4 className="text-[#a78bfa] font-lexend text-sm uppercase tracking-widest font-black">Strategic Benefit</h4>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{service.benefits}</p>
                      </div>

                      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-5 h-5 text-white/40" />
                          <h4 className="text-white/40 font-lexend text-sm uppercase tracking-widest font-black">Best For</h4>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{service.useCases}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-5 rounded-full transition-all text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Start a Similar Project
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="text-center mb-8">
                      <p className="text-white/60 text-sm">
                        Tell us about your project so we can create a similar solution for you.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4">Selected Service</label>
                          <input 
                            readOnly 
                            value={service.title} 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white/50 text-sm cursor-not-allowed outline-none focus:border-[#a78bfa]/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4">Your Name</label>
                          <input 
                            required
                            placeholder="John Doe" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm outline-none focus:border-[#a78bfa]/50 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4">Email Address</label>
                          <input 
                            required
                            type="email"
                            placeholder="john@example.com" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm outline-none focus:border-[#a78bfa]/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4">Phone Number</label>
                          <input 
                            required
                            placeholder="+1 234 567 890" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm outline-none focus:border-[#a78bfa]/50 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4">Project Details</label>
                        <textarea 
                          required
                          rows={4}
                          placeholder="Describe your goals and vision..." 
                          className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 text-white text-sm outline-none focus:border-[#a78bfa]/50 transition-colors resize-none"
                        />
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-white/5 border border-white/10 text-white font-black py-4 rounded-full transition-all text-xs uppercase tracking-widest hover:bg-white/10"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-[2] bg-white text-black font-black py-4 rounded-full transition-all text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Request Strategy Call'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function PhoneSelectionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleCall = () => {
    window.location.href = 'tel:+923041143680';
    onClose();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi, I'm interested in your digital marketing services.");
    window.open(`https://wa.me/923041143680?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-[#0b0c14] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#a78bfa]/20 flex items-center justify-center mx-auto mb-4 border border-[#a78bfa]/30">
                <Phone className="w-8 h-8 text-[#a78bfa]" />
              </div>
              <h3 className="text-xl font-black text-white font-lexend">Contact Us</h3>
              <p className="text-white/50 text-sm mt-1 tracking-wide">+92 304 1143680</p>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-4 rounded-full transition-all text-sm uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-full transition-all text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/923041143680"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 fill-current text-white" />
    </motion.a>
  );
}
