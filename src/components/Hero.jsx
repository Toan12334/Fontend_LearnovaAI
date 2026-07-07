import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Sparkles, TrendingUp, Shield } from 'lucide-react';

// Animated circular progress ring
function CircularProgress({ value, size = 120, color = '#4F7CFF', label }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            style={{ filter: `drop-shadow(0 0 8px ${color}70)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">{value}%</span>
        </div>
      </div>
      <span className="text-xs text-[#94A3B8] text-center">{label}</span>
    </div>
  );
}

// Dashboard mockup component
function DashboardMockup() {
  const matchedSources = [
    { name: 'Wikipedia', percent: 34, color: '#4F7CFF' },
    { name: 'ResearchGate', percent: 28, color: '#8B5CF6' },
    { name: 'arXiv.org', percent: 19, color: '#00D4FF' },
    { name: 'Medium.com', percent: 12, color: '#22C55E' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
      className="relative"
    >
      {/* Floating glow orbs */}
      <div
        className="orb w-64 h-64 opacity-20 -top-12 -right-12"
        style={{ background: 'radial-gradient(circle, #4F7CFF, transparent)' }}
      />
      <div
        className="orb w-48 h-48 opacity-15 bottom-0 -left-8"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      {/* Main dashboard card */}
      <div className="relative z-10 glass rounded-2xl p-5 shadow-2xl border border-white/10 animate-float" style={{ maxWidth: '480px' }}>
        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
            <span className="text-xs font-semibold text-[#22C55E]">Analysis Complete</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
            <div className="w-3 h-3 rounded-full bg-[#22C55E]/70" />
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <CircularProgress value={23} size={90} color="#4F7CFF" label="Similarity" />
          <CircularProgress value={87} size={90} color="#8B5CF6" label="AI Generated" />
          <CircularProgress value={94} size={90} color="#22C55E" label="Originality" />
        </div>

        {/* Highlighted text preview */}
        <div
          className="rounded-xl p-4 mb-4 text-xs leading-relaxed"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[#94A3B8] mb-2 font-medium text-xs uppercase tracking-wider">Document Preview</p>
          <p className="text-[#CBD5E1] text-xs leading-5">
            The <span className="bg-[#4F7CFF]/30 text-[#93BBFF] px-1 rounded">artificial intelligence</span> model
            processes documents using <span className="bg-[#8B5CF6]/30 text-[#C4B5FD] px-1 rounded">semantic analysis</span>{' '}
            to identify{' '}
            <span className="bg-[#EF4444]/25 text-[#FCA5A5] px-1 rounded">similar content</span> across millions of sources...
          </p>
        </div>

        {/* Matched sources */}
        <div>
          <p className="text-xs text-[#94A3B8] font-medium mb-3 uppercase tracking-wider">Matched Sources</p>
          <div className="space-y-2.5">
            {matchedSources.map((src, i) => (
              <motion.div
                key={src.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-xs text-[#94A3B8] w-24 truncate">{src.name}</span>
                <div className="flex-1 rounded-full overflow-hidden" style={{ height: '6px', background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: src.color, boxShadow: `0 0 8px ${src.color}80` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${src.percent}%` }}
                    transition={{ duration: 1.2, delay: 1 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-xs font-semibold w-8 text-right" style={{ color: src.color }}>
                  {src.percent}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute -top-4 -left-6 glass rounded-xl px-4 py-2.5 border border-white/10 shadow-xl z-20"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#22C55E]" />
          <div>
            <div className="text-[10px] text-[#94A3B8]">Scan Speed</div>
            <div className="text-sm font-bold text-white">2.3s</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2.5 border border-white/10 shadow-xl z-20"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <div>
            <div className="text-[10px] text-[#94A3B8]">AI Accuracy</div>
            <div className="text-sm font-bold text-white">98.7%</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const badges = [
  { icon: CheckCircle2, text: 'No Credit Card', color: '#22C55E' },
  { icon: Shield, text: 'Fast Scan', color: '#4F7CFF' },
  { icon: Sparkles, text: 'Accurate AI Detection', color: '#8B5CF6' },
];

export default function Hero({ onGetStartedClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden animated-gradient grid-pattern"
      aria-label="Hero section"
    >
      {/* Background orbs */}
      <div
        className="orb w-[600px] h-[600px] opacity-10 top-[-100px] left-[-200px]"
        style={{ background: 'radial-gradient(circle, #4F7CFF, transparent)' }}
      />
      <div
        className="orb w-[500px] h-[500px] opacity-8 bottom-[-100px] right-[-150px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />
      <div
        className="orb w-[300px] h-[300px] opacity-10 top-[40%] left-[40%]"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#4F7CFF]/30 mb-6 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs font-semibold text-[#94A3B8]">Powered by Advanced AI Semantic Analysis</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-balance"
            >
              Detect LearnovaAI{' '}
              <span className="gradient-text">with Confidence</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-[#94A3B8] mb-8 leading-relaxed max-w-xl"
            >
              Use advanced AI semantic analysis to identify copied content, AI-generated text, 
              and similarity in seconds. Trusted by millions worldwide.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={(e) => { e.preventDefault(); onGetStartedClick?.(); }}
                className="group inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl btn-gradient shadow-xl"
                aria-label="Start free plagiarism check"
              >
                Start Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="group inline-flex items-center gap-3 px-7 py-4 text-base font-semibold text-white rounded-xl border border-white/15 hover:border-[#4F7CFF]/50 hover:bg-white/5 transition-all duration-200"
                aria-label="Watch product demo video"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center btn-gradient shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5"
            >
              {badges.map(({ icon: Icon, text, color }, i) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color }} />
                  <span className="text-sm text-[#94A3B8] font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column – dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
