import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileSearch, Target, Globe, Activity } from 'lucide-react';

const stats = [
  {
    icon: FileSearch,
    value: 10000000,
    display: '10M+',
    label: 'Documents Checked',
    color: '#4F7CFF',
    description: 'Across all industries',
  },
  {
    icon: Target,
    value: 98,
    display: '98%',
    label: 'Detection Accuracy',
    color: '#8B5CF6',
    description: 'Industry-leading precision',
  },
  {
    icon: Globe,
    value: 150,
    display: '150+',
    label: 'Countries',
    color: '#00D4FF',
    description: 'Global coverage',
  },
  {
    icon: Activity,
    value: 99.9,
    display: '99.9%',
    label: 'Uptime SLA',
    color: '#22C55E',
    description: 'Enterprise reliability',
  },
];

function Counter({ target, suffix = '', display }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    // Just show the display value after animation
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
}

export default function Statistics() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Platform statistics"
    >
      {/* Gradient section background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(79,124,255,0.05) 0%, rgba(139,92,246,0.08) 50%, rgba(0,212,255,0.05) 100%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Trusted at <span className="gradient-text">Global Scale</span>
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Numbers that speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-hover relative rounded-2xl p-6 text-center group"
                style={{
                  background: '#151C2F',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Glow bg on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}10, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${stat.color}20`,
                    border: `1px solid ${stat.color}40`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Counter */}
                <div
                  className="text-4xl font-black mb-1 tracking-tight"
                  style={{ color: stat.color }}
                >
                  <Counter target={stat.value} display={stat.display} />
                </div>

                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-[#94A3B8]">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
