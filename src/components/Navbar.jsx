import { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onLoginClick, onGetStartedClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/8 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" aria-label="LearnovaAI home">
            <div className="w-9 h-9 rounded-xl btn-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Learnova<span className="gradient-text-blue">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  activeLink === link.label
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                aria-current={activeLink === link.label ? 'page' : undefined}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(79,124,255,0.15)', border: '1px solid rgba(79,124,255,0.3)' }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={(e) => { e.preventDefault(); onLoginClick?.(); }}
              className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200"
              aria-label="Log in to your account"
            >
              Login
            </button>
            <button
              onClick={(e) => { e.preventDefault(); onGetStartedClick?.(); }}
              className="px-5 py-2 text-sm font-semibold text-white rounded-xl btn-gradient shadow-lg"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass border-t border-white/8 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                  className="block px-4 py-3 text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-white/8 flex flex-col gap-2">
                <button 
                  onClick={(e) => { e.preventDefault(); onLoginClick?.(); setMobileOpen(false); }} 
                  className="px-4 py-3 text-sm font-medium text-center text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  Login
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); onGetStartedClick?.(); setMobileOpen(false); }} 
                  className="px-4 py-3 text-sm font-semibold text-center text-white rounded-xl btn-gradient"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
