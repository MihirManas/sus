import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true);  // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ease-in-out ${
          showNavbar ? 'top-4 translate-y-0 opacity-100' : '-top-20 -translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="w-[98%] max-w-[1200px] bg-black/65 backdrop-blur-xl border border-white/10 rounded-full px-6 sm:px-8 py-2 sm:py-2.5 flex justify-between items-center shadow-2xl">
          <Link to="/" className="flex flex-row gap-3 items-center" onClick={() => setMenuOpen(false)}>
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" width="90" height="90" rx="25" stroke="url(#logo-gradient)" strokeWidth="6" fill="transparent"/>
              <path d="M 35 35 L 50 50 L 35 65" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="55" y1="65" x2="70" y2="65" stroke="#ffffff" strokeWidth="8" strokeLinecap="round"/>
            </svg>
            <span className="text-[20px] sm:text-[24px] font-poppins font-bold text-white tracking-tight">
              0 to 40 LPA
            </span>
            <span className="border border-white/30 text-white bg-white/10 text-[10px] sm:text-[12px] font-poppins font-bold px-2.5 py-1 rounded-md ml-1 tracking-widest hidden lg:inline-block uppercase">
              Accelerator
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-row items-center gap-12 text-[17px] text-white font-poppins font-semibold tracking-wide">
            <Link to="/curriculum" className="hover:text-blood transition-colors">Curriculum</Link>
            <Link to="/mentors" className="hover:text-blood transition-colors">Mentors</Link>
            <Link to="/enroll" className="hover:text-blood transition-colors">Enroll</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/enroll" className="text-[15px] sm:text-[16px] font-poppins font-bold text-white bg-[#dc2626] hover:bg-white hover:text-black px-5 py-2 rounded-full transition-colors duration-300 tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Join Cohort
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] z-50 relative ml-auto mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-[2px] bg-white duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-6 h-[2px] bg-white duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-6 h-[2px] bg-white duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col justify-center px-8 gap-8 z-[40] md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/curriculum" onClick={() => setMenuOpen(false)} className="text-[32px] font-heading text-white hover:text-blood transition-colors">Curriculum</Link>
        <Link to="/mentors" onClick={() => setMenuOpen(false)} className="text-[32px] font-heading text-white hover:text-blood transition-colors">Mentors</Link>
        <Link to="/enroll" onClick={() => setMenuOpen(false)} className="text-[32px] font-heading text-white hover:text-blood transition-colors">Enroll</Link>
        
        <Link to="/enroll" onClick={() => setMenuOpen(false)} className="text-[24px] font-heading text-white bg-blood text-center py-4 rounded-lg mt-8 hover:bg-blood-light transition-colors">
          Secure Your Seat
        </Link>
      </div>

      <main className="w-full h-full min-h-screen">
        <Outlet />
      </main>
      
      {/* Footer */}
      {!isHome && (
        <footer className="bg-black border-t border-white/10 py-12 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-row gap-3 items-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <defs>
                  <linearGradient id="logo-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" width="90" height="90" rx="25" stroke="url(#logo-gradient-footer)" strokeWidth="6" fill="transparent"/>
                <path d="M 35 35 L 50 50 L 35 65" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="55" y1="65" x2="70" y2="65" stroke="#ffffff" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <span className="text-[18px] tracking-tight text-white font-bold">0 to 40 LPA</span>
            </div>
            <p className="text-white/50 text-sm font-body">© 2026 0 to 40 LPA. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="mailto:workribhususmita@gmail.com" className="text-white/70 hover:text-white transition-colors text-sm">workribhususmita@gmail.com</a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
