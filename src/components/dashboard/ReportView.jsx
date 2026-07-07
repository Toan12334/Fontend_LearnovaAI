import { Activity, BarChart2, Globe2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReportView({ onBack }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Analysis Report</h2>
        <button 
          onClick={onBack}
          className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Similarity */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 font-medium">Total Similarity</span>
            <Activity className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-red-400">23%</div>
        </div>

        {/* AI Probability */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 font-medium">AI Probability</span>
            <BarChart2 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400">87%</div>
        </div>

        {/* Sources Found */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 font-medium">Sources Found</span>
            <Globe2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-blue-400">47</div>
        </div>

        {/* Word Count */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 font-medium">Word Count</span>
            <FileText className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400">6,482</div>
        </div>
      </div>

      {/* Middle Row (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Similarity Breakdown */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-gray-700/50">
          <h3 className="font-semibold text-white mb-6">Similarity Breakdown</h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">Direct Match</span>
                <span className="text-red-400 font-medium">23%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-red-400 h-1.5 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">Paraphrased</span>
                <span className="text-amber-400 font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">AI Generated</span>
                <span className="text-purple-400 font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">Original</span>
                <span className="text-emerald-400 font-medium">62%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Distribution */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-gray-700/50 flex flex-col">
          <h3 className="font-semibold text-white mb-6">Content Distribution</h3>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="flex items-center gap-8">
              {/* SVG Donut Chart */}
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#1F2937" strokeWidth="4"></circle>
                  {/* Original (62%) - Emerald */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#34D399" strokeWidth="4" strokeDasharray="62 38" strokeDashoffset="0"></circle>
                  {/* Plagiarized (23%) - Red */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#F87171" strokeWidth="4" strokeDasharray="23 77" strokeDashoffset="-62"></circle>
                  {/* Paraphrased (15%) - Amber */}
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#FBBF24" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-85"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-lg">62%</span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Original</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <span className="text-sm text-gray-300">Plagiarized</span>
                  </div>
                  <span className="text-sm text-white font-medium ml-auto">23%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <span className="text-sm text-gray-300">Paraphrased</span>
                  </div>
                  <span className="text-sm text-white font-medium ml-auto">15%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-gray-300">Original</span>
                  </div>
                  <span className="text-sm text-white font-medium ml-auto">62%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Preview */}
        <div className="bg-[#1E293B] rounded-xl p-6 border border-gray-700/50">
          <h3 className="font-semibold text-white mb-4">Document Preview</h3>
          <div className="text-sm text-gray-300 leading-relaxed space-y-4">
            <p>
              The study of <span className="bg-red-500/20 text-red-300 px-1 rounded">artificial intelligence</span> has grown exponentially in recent years.
            </p>
            <p>
              <span className="bg-amber-500/20 text-amber-300 px-1 rounded">Machine learning algorithms</span> are being applied across diverse domains.
            </p>
            <p>
              This research demonstrates <span className="bg-purple-500/20 text-purple-300 px-1 rounded">novel approaches to natural language processing</span> that surpass previous benchmarks.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-medium text-gray-400">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-400"></div> Direct match</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Paraphrased</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-400"></div> AI generated</div>
          </div>
        </div>
      </div>

      {/* Bottom Row (Sources Table) */}
      <div className="bg-[#1E293B] rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#111827]/50 text-xs text-gray-400 uppercase font-semibold border-b border-gray-700/50">
              <tr>
                <th className="px-6 py-4 font-semibold tracking-wider">Source</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Matched Words</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Similarity</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">en.wikipedia.org</a>
                </td>
                <td className="px-6 py-4 text-gray-300">2,430 words</td>
                <td className="px-6 py-4 font-medium text-white">34%</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-[11px] font-medium bg-red-500/10 text-red-400 border border-red-500/20 rounded-full">
                    High
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">arxiv.org/abs/2312</a>
                </td>
                <td className="px-6 py-4 text-gray-300">1,890 words</td>
                <td className="px-6 py-4 font-medium text-white">28%</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                    Medium
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">medium.com/@ai</a>
                </td>
                <td className="px-6 py-4 text-gray-300">1,120 words</td>
                <td className="px-6 py-4 font-medium text-white">19%</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    Low
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">stackoverflow.com</a>
                </td>
                <td className="px-6 py-4 text-gray-300">760 words</td>
                <td className="px-6 py-4 font-medium text-white">12%</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    Low
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
