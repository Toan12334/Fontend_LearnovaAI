import { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import TopNav from './dashboard/TopNav';
import DocumentInput from './dashboard/DocumentInput';
import QuickStats from './dashboard/QuickStats';
import RecentReports from './dashboard/RecentReports';
import ReportView from './dashboard/ReportView';

export default function Dashboard({ onExit }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showReport, setShowReport] = useState(false);

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
                <DocumentInput onCheck={() => setShowReport(true)} />

                {/* Quick Stats */}
                <QuickStats />

                {/* Recent Reports */}
                <RecentReports />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
