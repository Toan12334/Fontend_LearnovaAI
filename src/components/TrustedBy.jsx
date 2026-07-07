import { motion } from 'framer-motion';

const brands = [
  { name: 'MIT', abbr: 'MIT', color: '#4F7CFF' },
  { name: 'Harvard', abbr: 'Harvard', color: '#8B5CF6' },
  { name: 'Stanford', abbr: 'Stanford', color: '#00D4FF' },
  { name: 'Oxford', abbr: 'Oxford', color: '#22C55E' },
  { name: 'Google', abbr: 'Google', color: '#F59E0B' },
  { name: 'Microsoft', abbr: 'Microsoft', color: '#4F7CFF' },
  { name: 'UNESCO', abbr: 'UNESCO', color: '#8B5CF6' },
  { name: 'Coursera', abbr: 'Coursera', color: '#00D4FF' },
];

function BrandLogo({ name, abbr, color }) {
  return (
    <div className="flex-shrink-0 px-6 group cursor-default">
      <div
        className="flex items-center gap-2 opacity-40 group-hover:opacity-80 transition-opacity duration-300"
      >
        {/* Logo mark */}
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
          style={{ background: `${color}25`, border: `1px solid ${color}40` }}
        >
          {abbr.charAt(0)}
        </div>
        <span className="text-[#94A3B8] font-semibold text-sm whitespace-nowrap tracking-wide group-hover:text-white transition-colors duration-200">
          {abbr}
        </span>
      </div>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      aria-label="Trusted by organizations"
    >
      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#94A3B8] text-sm font-medium uppercase tracking-[0.2em]">
            Trusted by Students, Researchers &amp; Organizations
          </p>
        </motion.div>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0B1020, transparent)' }}
          />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0B1020, transparent)' }}
          />

          <motion.div
            className="flex"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            {/* Duplicate for seamless loop */}
            {[...brands, ...brands].map((brand, i) => (
              <BrandLogo key={`${brand.name}-${i}`} {...brand} />
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/6"
        >
          {[
            { value: '10M+', label: 'Documents Checked' },
            { value: '98%', label: 'Accuracy Rate' },
            { value: '150+', label: 'Countries' },
            { value: '4.9★', label: 'Average Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold gradient-text-blue">{value}</div>
              <div className="text-xs text-[#94A3B8] mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
