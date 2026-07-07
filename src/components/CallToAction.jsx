import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0d1530 0%, #111038 50%, #0d1530 100%)',
        }}
      />
      {/* Orbs */}
      <div
        className="orb w-[500px] h-[500px] opacity-15 top-[-100px] left-[-100px]"
        style={{ background: 'radial-gradient(circle, #4F7CFF, transparent)' }}
      />
      <div
        className="orb w-[400px] h-[400px] opacity-12 bottom-[-80px] right-[-80px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />
      <div
        className="orb w-[300px] h-[300px] opacity-8 top-[50%] left-[50%] transform-translate-[-50%,-50%]"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl btn-gradient shadow-2xl mb-8 animate-pulse-glow">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            Start Detecting Plagiarism{' '}
            <span className="gradient-text">Today</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students, researchers, and professionals using AI-powered 
            plagiarism detection. Free plan available — no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#live-demo"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-2xl w-full sm:w-auto justify-center"
              aria-label="Start free plagiarism detection"
            >
              Start Free — No Credit Card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:sales@aiplag.io"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto justify-center"
              aria-label="Contact sales team"
            >
              <Mail className="w-4 h-4" />
              Contact Sales
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#94A3B8]">
            {[
              '✓ Free plan forever',
              '✓ No setup fee',
              '✓ Cancel anytime',
              '✓ GDPR compliant',
              '✓ 99.9% uptime',
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
