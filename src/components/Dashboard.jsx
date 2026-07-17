import { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import TopNav from './dashboard/TopNav';
import DocumentInput from './dashboard/DocumentInput';
import QuickStats from './dashboard/QuickStats';
import RecentReports from './dashboard/RecentReports';
import ReportView from './dashboard/ReportView';
import Pricing from './Pricing';
import { X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard({ onExit }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showReport, setShowReport] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  return (
    <div className="flex h-screen bg-[#0F172A] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden transition-all duration-300">
        <TopNav onExit={onExit} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-5xl mx-auto space-y-12 pb-20">

            {showReport ? (
              <ReportView onBack={() => setShowReport(false)} />
            ) : (
              <>
                {/* Hero Section */}
                <div className="text-center mt-8 mb-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    LearnovaAI
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Check originality using advanced AI similarity detection.
                  </p>
                </div>

                {/* Document Input */}
                <DocumentInput 
                  onCheck={() => setShowReport(true)} 
                  onLimitExceeded={() => setShowPricingModal(true)}
                />

                {/* Quick Stats */}
                <QuickStats />

                {/* Recent Reports */}
                <RecentReports />
              </>
            )}
          </div>
        </main>
      </div>

      {/* Pricing Modal */}
      <AnimatePresence>
        {showPricingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl bg-[#0F172A] rounded-3xl border border-gray-700 shadow-2xl my-8 flex flex-col"
              style={{ maxHeight: '90vh' }}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Text Limit Exceeded</h3>
                  <p className="text-sm text-[#F59E0B]">
                    <AlertTriangle className="inline w-4 h-4 mr-1" />
                    Your text has exceeded the free limit of 500 words. Please upgrade to check larger documents.
                  </p>
                </div>
                <button
                  onClick={() => setShowPricingModal(false)}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors border border-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                <Pricing />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
