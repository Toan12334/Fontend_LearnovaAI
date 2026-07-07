import { motion } from 'framer-motion';
import { Brain, Zap, Globe, FileBarChart, FileDown, Languages } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Semantic Analysis',
    description: 'Goes beyond keyword matching. Our AI understands meaning and context, catching paraphrased and reworded content that traditional checkers miss.',
    color: '#4F7CFF',
    gradient: 'from-[#4F7CFF]/20 to-[#4F7CFF]/5',
    border: 'rgba(79,124,255,0.3)',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Detection',
    description: 'Scan documents up to 100,000 words in under 3 seconds. Our distributed AI infrastructure handles millions of checks simultaneously.',
    color: '#F59E0B',
    gradient: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
    border: 'rgba(245,158,11,0.3)',
  },
  {
    icon: Globe,
    title: 'Source Identification',
    description: 'Identify exact sources from our database of 10B+ pages including academic journals, websites, books, and previously submitted papers.',
    color: '#00D4FF',
    gradient: 'from-[#00D4FF]/20 to-[#00D4FF]/5',
    border: 'rgba(0,212,255,0.3)',
  },
  {
    icon: FileBarChart,
    title: 'Detailed Reports',
    description: 'Get comprehensive reports with highlighted passages, side-by-side comparison with original sources, and a visual similarity breakdown.',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5',
    border: 'rgba(139,92,246,0.3)',
  },
  {
    icon: FileDown,
    title: 'PDF Export',
    description: 'Export professional PDF reports instantly. Share with teachers, clients, or colleagues with a single click. Formatted for academic and professional use.',
    color: '#22C55E',
    gradient: 'from-[#22C55E]/20 to-[#22C55E]/5',
    border: 'rgba(34,197,94,0.3)',
  },
  {
    icon: Languages,
    title: 'Multi-language Support',
    description: 'Detect plagiarism in 50+ languages including English, Spanish, French, Chinese, Arabic, and more. Full Unicode support for all scripts.',
    color: '#EF4444',
    gradient: 'from-[#EF4444]/20 to-[#EF4444]/5',
    border: 'rgba(239,68,68,0.3)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      aria-label="Platform features"
    >
      {/* Background decoration */}
      <div
        className="orb w-[600px] h-[600px] opacity-6 top-0 left-[-200px]"
        style={{ background: 'radial-gradient(circle, #4F7CFF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#8B5CF6]/30 mb-5">
            <Brain className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">
            Everything You Need to{' '}
            <span className="gradient-text">Ensure Originality</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            LearnovaAI combines cutting-edge AI with the world's largest content database to deliver 
            unmatched plagiarism detection accuracy.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-hover relative group rounded-2xl p-6 cursor-default"
                style={{
                  background: '#151C2F',
                  border: `1px solid rgba(255,255,255,0.08)`,
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${feature.color}10, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}10)`,
                    border: `1px solid ${feature.border}`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed group-hover:text-[#CBD5E1] transition-colors">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
