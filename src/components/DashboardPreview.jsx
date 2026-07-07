import { motion } from 'framer-motion';
import { BarChart3, PieChart, FileText, Globe, Activity } from 'lucide-react';

function MiniProgressBar({ label, value, color, max = 100 }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#94A3B8]">{label}</span>
        <span className="text-xs font-bold" style={{ color }}>{value}%</span>
      </div>
      <div className="w-full rounded-full overflow-hidden" style={{ height: '6px', background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

function PieChartSVG() {
  const segments = [
    { value: 23, color: '#EF4444', label: 'Plagiarized' },
    { value: 15, color: '#F59E0B', label: 'Paraphrased' },
    { value: 62, color: '#22C55E', label: 'Original' },
  ];

  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let cumulative = 0;
  const paths = segments.map((seg) => {
    const startAngle = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
    cumulative += seg.value;
    const endAngle = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
    const r = 60;
    const cx = 80;
    const cy = 80;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = seg.value / total > 0.5 ? 1 : 0;
    return { ...seg, d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z` };
  });

  return (
    <div className="flex items-center gap-4">
      <svg width="160" height="160" className="flex-shrink-0">
        {paths.map((p, i) => (
          <motion.path
            key={p.label}
            d={p.d}
            fill={p.color}
            opacity={0.85}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          />
        ))}
        {/* Center hole */}
        <circle cx="80" cy="80" r="30" fill="#151C2F" />
        <text x="80" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">62%</text>
        <text x="80" y="90" textAnchor="middle" fill="#94A3B8" fontSize="8">Original</text>
      </svg>
      <div className="space-y-2">
        {paths.map((p) => (
          <div key={p.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: p.color }} />
            <span className="text-xs text-[#94A3B8]">{p.label}</span>
            <span className="text-xs font-semibold text-white ml-auto">{p.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  const sources = [
    { source: 'en.wikipedia.org', matched: '2,430 words', similarity: '34%', status: 'High' },
    { source: 'arxiv.org/abs/2312', matched: '1,890 words', similarity: '28%', status: 'Medium' },
    { source: 'medium.com/@ai', matched: '1,120 words', similarity: '19%', status: 'Low' },
    { source: 'stackoverflow.com', matched: '760 words', similarity: '12%', status: 'Low' },
  ];

  const statusColor = { High: '#EF4444', Medium: '#F59E0B', Low: '#22C55E' };

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Dashboard analytics preview"
    >
      <div
        className="orb w-[600px] h-[600px] opacity-6 top-[-100px] right-[-200px]"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#4F7CFF]/30 mb-5">
            <BarChart3 className="w-3.5 h-3.5 text-[#4F7CFF]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Analytics Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Deep <span className="gradient-text">Analytics</span> at a Glance
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            A comprehensive dashboard gives you complete visibility into every document analysis.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: '#151C2F' }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3 border-b border-white/8"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
              <div className="w-3 h-3 rounded-full bg-[#22C55E]/70" />
            </div>
            <div
              className="flex-1 max-w-xs mx-auto rounded-lg px-3 py-1 text-xs text-[#475569] text-center"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              app.aiplag.io/dashboard
            </div>
          </div>

          <div className="p-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Similarity', value: '23%', color: '#EF4444', icon: Activity },
                { label: 'AI Probability', value: '87%', color: '#8B5CF6', icon: BarChart3 },
                { label: 'Sources Found', value: '47', color: '#4F7CFF', icon: Globe },
                { label: 'Word Count', value: '6,482', color: '#22C55E', icon: FileText },
              ].map(({ label, value, color, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#94A3B8]">{label}</span>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div className="text-2xl font-black" style={{ color }}>{value}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left: Progress breakdown */}
              <div
                className="rounded-xl p-5 space-y-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h4 className="text-sm font-semibold text-white mb-4">Similarity Breakdown</h4>
                <MiniProgressBar label="Direct Match" value={23} color="#EF4444" />
                <MiniProgressBar label="Paraphrased" value={15} color="#F59E0B" />
                <MiniProgressBar label="AI Generated" value={87} color="#8B5CF6" />
                <MiniProgressBar label="Original" value={62} color="#22C55E" />
              </div>

              {/* Center: Pie chart */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h4 className="text-sm font-semibold text-white mb-4">Content Distribution</h4>
                <PieChartSVG />
              </div>

              {/* Right: Highlighted text */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h4 className="text-sm font-semibold text-white mb-4">Document Preview</h4>
                <div className="text-xs text-[#CBD5E1] leading-6 space-y-2">
                  <p>
                    The study of{' '}
                    <span className="bg-[#EF4444]/25 text-[#FCA5A5] px-1 rounded">artificial intelligence</span>
                    {' '}has grown exponentially in recent years.
                  </p>
                  <p>
                    <span className="bg-[#F59E0B]/25 text-[#FDE68A] px-1 rounded">Machine learning algorithms</span>
                    {' '}are being applied across diverse domains.
                  </p>
                  <p>
                    This research demonstrates{' '}
                    <span className="bg-[#8B5CF6]/25 text-[#C4B5FD] px-1 rounded">novel approaches to natural language processing</span>
                    {' '}that surpass previous benchmarks.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-sm inline-block bg-[#EF4444]/50" /> Direct match</span>
                    <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-sm inline-block bg-[#F59E0B]/50" /> Paraphrased</span>
                    <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-sm inline-block bg-[#8B5CF6]/50" /> AI generated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sources table */}
            <div
              className="mt-6 rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="grid grid-cols-4 px-4 py-2.5 text-xs font-semibold text-[#94A3B8] uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span>Source</span>
                <span>Matched Words</span>
                <span>Similarity</span>
                <span>Risk</span>
              </div>
              {sources.map((row, i) => (
                <motion.div
                  key={row.source}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-4 px-4 py-3 text-xs border-t border-white/5 hover:bg-white/3 transition-colors cursor-pointer"
                >
                  <span className="text-[#4F7CFF] font-medium truncate pr-2">{row.source}</span>
                  <span className="text-[#CBD5E1]">{row.matched}</span>
                  <span className="text-white font-semibold">{row.similarity}</span>
                  <span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{
                        color: statusColor[row.status],
                        background: `${statusColor[row.status]}20`,
                        border: `1px solid ${statusColor[row.status]}40`,
                      }}
                    >
                      {row.status}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
