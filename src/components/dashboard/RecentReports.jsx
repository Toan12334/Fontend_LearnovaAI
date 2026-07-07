import { FileText, ExternalLink, AlertTriangle, CheckCircle2, Search } from 'lucide-react';

const reports = [
  {
    id: 1,
    name: 'Research Paper Analysis.pdf',
    similarity: 12,
    aiScore: 45,
    date: 'Just now',
    status: 'Completed',
    statusColor: 'text-emerald-400',
    statusBg: 'bg-emerald-400/10'
  },
  {
    id: 2,
    name: 'Essay Draft v2.docx',
    similarity: 89,
    aiScore: 92,
    date: '2 hours ago',
    status: 'High Risk',
    statusColor: 'text-red-400',
    statusBg: 'bg-red-400/10'
  },
  {
    id: 3,
    name: 'Assignment 1 - Intro.txt',
    similarity: 2,
    aiScore: 5,
    date: 'Yesterday',
    status: 'Clean',
    statusColor: 'text-blue-400',
    statusBg: 'bg-blue-400/10'
  }
];

export default function RecentReports() {
  if (reports.length === 0) {
    return (
      <div className="mt-12 text-center py-16 px-4 border border-gray-800/50 rounded-2xl bg-[#1E293B]/30 backdrop-blur-sm">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">No documents checked yet</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Upload a document or paste some text above to get started with your first plagiarism check.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-200 tracking-tight">Recent Reports</h3>
        <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
          View all
        </button>
      </div>
      
      <div className="grid gap-4">
        {reports.map((report) => (
          <div 
            key={report.id}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#1E293B] hover:bg-[#2D3748] border border-gray-700/50 rounded-2xl transition-all group gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-gray-700/50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {report.name}
                </h4>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                  <span>{report.date}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                  <span className={`inline-flex items-center gap-1 ${report.statusColor} font-medium`}>
                    {report.status === 'High Risk' ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3" />
                    )}
                    {report.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-6 text-sm">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs">Similarity</span>
                  <span className="font-semibold text-gray-200">{report.similarity}%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs">AI Score</span>
                  <span className="font-semibold text-gray-200">{report.aiScore}%</span>
                </div>
              </div>

              <div className="w-px h-8 bg-gray-700/50 hidden md:block"></div>

              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0F172A] hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 border border-gray-700/50 hover:border-blue-500/30 rounded-xl transition-all font-medium text-sm">
                View Report
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
