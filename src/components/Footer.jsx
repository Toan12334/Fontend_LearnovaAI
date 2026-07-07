import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Send } from 'lucide-react';

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 5.888L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Dashboard', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: TwitterXIcon, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@aiplag.io' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: '#08101f' }}
      aria-label="Site footer"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/40 to-transparent" />
      
      {/* Background orb */}
      <div
        className="orb w-[600px] h-[300px] opacity-4 bottom-0 left-1/2 transform -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, #4F7CFF, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                AI<span className="gradient-text-blue">Plag</span>
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 max-w-xs">
              The world's most accurate AI-powered plagiarism detection platform. 
              Trusted by 10M+ students, researchers, and professionals in 150+ countries.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-200 hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: '#151C2F', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white mb-1">Stay in the Loop</h4>
              <p className="text-sm text-[#94A3B8]">
                Get product updates, feature releases, and AI detection insights. No spam.
              </p>
            </div>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#22C55E]"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                ✓ You're subscribed!
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2 w-full md:w-auto"
                aria-label="Newsletter subscription form"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 md:w-56 px-4 py-2.5 text-sm text-white placeholder-[#475569] rounded-xl outline-none transition-all duration-200 focus:border-[#4F7CFF]/60"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} LearnovaAI, Inc. All rights reserved. Made with ❤️ for academic integrity.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Terms</a>
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Cookies</a>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs text-[#475569]">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
