import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Zap, FileText, Globe, CheckCircle2, AlertTriangle, Clock, BarChart3 } from 'lucide-react';

const sampleSources = [
  { icon: '📖', name: 'Wikipedia', url: 'en.wikipedia.org', similarity: 34, color: '#4F7CFF' },
  { icon: '💻', name: 'Stack Overflow', url: 'stackoverflow.com', similarity: 28, color: '#8B5CF6' },
  { icon: '📝', name: 'Medium', url: 'medium.com', similarity: 19, color: '#00D4FF' },
  { icon: '🔬', name: 'Research Paper', url: 'arxiv.org', similarity: 12, color: '#F59E0B' },
];

const SAMPLE_TEXT = `Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.`;

function ProgressBar({ value, color, animated = false }) {
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height: '8px', background: 'rgba(255,255,255,0.06)' }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)`, boxShadow: `0 0 10px ${color}60` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  );
}

export default function LiveDemo() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const fileRef = useRef(null);

  const handleCheck = () => {
    if (!text.trim() && !analyzed) {
      // Insert sample text for demo
      setText(SAMPLE_TEXT);
    }
    setIsAnalyzing(true);
    setAnalyzed(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 2500);
  };

  const handleReset = () => {
    setText('');
    setAnalyzed(false);
    setIsAnalyzing(false);
  };

  return (
    <section
      id="live-demo"
      className="py-24 relative overflow-hidden section-glow"
      aria-label="Live plagiarism demo checker"
    >
      {/* Background */}
      <div
        className="orb w-[500px] h-[500px] opacity-8 top-0 right-[-150px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
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
            <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Try It <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Paste your text or upload a document and watch our AI analyze it in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Input panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-6 border border-white/10 shadow-xl"
              style={{ background: '#151C2F' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4F7CFF]" />
                  <span className="text-sm font-semibold text-white">Document Input</span>
                </div>
                {text && (
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#94A3B8] hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-white/5"
                  >
                    Clear
                  </button>
                )}
              </div>

              <textarea
                className="w-full rounded-xl p-4 text-sm text-[#CBD5E1] placeholder-[#475569] resize-none outline-none transition-all duration-200 focus:border-[#4F7CFF]/60"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minHeight: '220px',
                  fontFamily: 'Inter, sans-serif',
                }}
                placeholder="Paste your document here... or click 'Check Now' to see a demo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                aria-label="Document text input"
              />

              <div className="flex items-center gap-3 mt-4">
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setText(`[File loaded: ${e.target.files[0].name}] - Demo mode active`);
                    }
                  }}
                  aria-label="Upload file"
                />
                <button
                  onClick={() => fileRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#94A3B8] border border-white/10 rounded-xl hover:border-[#4F7CFF]/40 hover:text-white hover:bg-white/5 transition-all duration-200"
                  aria-label="Upload a file for analysis"
                >
                  <Upload className="w-4 h-4" />
                  Upload File
                </button>
                <button
                  onClick={handleCheck}
                  disabled={isAnalyzing}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  aria-label="Check document for plagiarism"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Check Now
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {['PDF', 'DOC', 'DOCX', 'TXT', 'RTF'].map((fmt) => (
                  <span
                    key={fmt}
                    className="px-2 py-0.5 text-xs rounded text-[#94A3B8]"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {fmt}
                  </span>
                ))}
                <span className="text-xs text-[#94A3B8] self-center ml-1">supported</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Results panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {!analyzed && !isAnalyzing ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-white/15 p-12 flex flex-col items-center justify-center text-center"
                  style={{ minHeight: '400px' }}
                >
                  <BarChart3 className="w-16 h-16 text-[#4F7CFF]/30 mb-4" />
                  <p className="text-[#475569] font-medium">Analysis results will appear here</p>
                  <p className="text-sm text-[#334155] mt-2">Paste text and click "Check Now" to begin</p>
                </motion.div>
              ) : isAnalyzing ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
                  style={{ background: '#151C2F', minHeight: '400px' }}
                >
                  <div className="relative w-20 h-20 mb-6">
                    <div className="w-20 h-20 rounded-full border-4 border-[#4F7CFF]/20 border-t-[#4F7CFF] animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#4F7CFF]" />
                    </div>
                  </div>
                  <p className="text-white font-semibold mb-2">AI Processing...</p>
                  <p className="text-sm text-[#94A3B8]">Scanning across 10M+ sources</p>
                  <div className="mt-6 w-48">
                    <div className="shimmer h-2 rounded-full" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 overflow-hidden shadow-xl"
                  style={{ background: '#151C2F' }}
                >
                  {/* Result header */}
                  <div
                    className="p-5 border-b border-white/8"
                    style={{ background: 'linear-gradient(135deg, rgba(79,124,255,0.1), rgba(139,92,246,0.1))' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                        <span className="font-semibold text-white text-sm">Analysis Completed</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                        <Clock className="w-3.5 h-3.5" />
                        2.3s
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-5">
                    {/* Key metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl p-4" style={{ background: 'rgba(79,124,255,0.08)', border: '1px solid rgba(79,124,255,0.2)' }}>
                        <div className="text-xs text-[#94A3B8] mb-1">Similarity</div>
                        <div className="text-2xl font-black text-[#4F7CFF]">23%</div>
                        <div className="mt-2">
                          <ProgressBar value={23} color="#4F7CFF" />
                        </div>
                      </div>
                      <div className="rounded-xl p-4" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
                        <div className="text-xs text-[#94A3B8] mb-1">AI Generated</div>
                        <div className="text-2xl font-black text-[#8B5CF6]">87%</div>
                        <div className="mt-2">
                          <ProgressBar value={87} color="#8B5CF6" />
                        </div>
                      </div>
                    </div>

                    {/* AI warning badge */}
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
                    >
                      <AlertTriangle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <span className="text-xs text-[#F59E0B] font-medium">
                        High probability of AI-generated content detected
                      </span>
                    </div>

                    {/* Matched sources */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-4 h-4 text-[#94A3B8]" />
                        <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">Matched Sources</span>
                      </div>
                      <div className="space-y-2.5">
                        {sampleSources.map((src, i) => (
                          <motion.div
                            key={src.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors cursor-pointer"
                            style={{ background: 'rgba(255,255,255,0.02)' }}
                          >
                            <span className="text-base">{src.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-semibold text-white">{src.name}</span>
                                <span className="text-xs font-bold" style={{ color: src.color }}>{src.similarity}%</span>
                              </div>
                              <ProgressBar value={src.similarity} color={src.color} />
                              <span className="text-[10px] text-[#475569] mt-1">{src.url}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-1">
                      <button className="flex-1 py-2.5 text-xs font-semibold text-white rounded-xl btn-gradient">
                        Download Report
                      </button>
                      <button
                        className="px-4 py-2.5 text-xs font-medium text-[#94A3B8] border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all"
                        onClick={handleReset}
                      >
                        New Check
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
