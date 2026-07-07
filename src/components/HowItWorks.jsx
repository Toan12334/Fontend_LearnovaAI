import { motion } from 'framer-motion';
import { Upload, Cpu, Search, FileText } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: Upload,
    title: 'Upload Document',
    description: 'Upload any file format — PDF, DOCX, TXT, or paste text directly. We support files up to 50MB.',
    color: '#4F7CFF',
    bg: 'rgba(79,124,255,0.12)',
    border: 'rgba(79,124,255,0.3)',
  },
  {
    id: '02',
    icon: Cpu,
    title: 'AI Processing',
    description: 'Our LLM-powered engine breaks down your document into semantic chunks and cross-references billions of sources.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.3)',
  },
  {
    id: '03',
    icon: Search,
    title: 'Similarity Detection',
    description: 'Advanced vector similarity search identifies paraphrased content, AI-generated passages, and direct matches.',
    color: '#00D4FF',
    bg: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.3)',
  },
  {
    id: '04',
    icon: FileText,
    title: 'Generate Report',
    description: 'Receive a detailed PDF report with color-coded highlights, source links, similarity percentages, and remediation tips.',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.3)',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      aria-label="How LearnovaAI works"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div
        className="orb w-[400px] h-[400px] opacity-8 bottom-0 right-0"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00D4FF]/30 mb-5">
            <Cpu className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            From upload to report in under 10 seconds. Our streamlined workflow makes plagiarism detection effortless.
          </p>
        </motion.div>

        {/* Steps – horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] via-[#00D4FF] to-[#22C55E] opacity-30" />
            {/* Animated dot on line */}
            <motion.div
              className="absolute top-[-3px] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute top-28 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                  )}

                  {/* Step number badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span
                      className="px-2 py-0.5 text-xs font-bold rounded-full"
                      style={{ background: step.color, color: '#0B1020' }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mt-4 transition-all duration-300 shadow-lg"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      boxShadow: `0 8px 30px ${step.color}20`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#live-demo"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-xl"
          >
            Try It Free
          </a>
          <p className="text-sm text-[#94A3B8] mt-3">No credit card required. Free plan available.</p>
        </motion.div>
      </div>
    </section>
  );
}
