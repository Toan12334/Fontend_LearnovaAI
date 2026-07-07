import { Search, Bell, LogOut } from 'lucide-react';

export default function TopNav({ onExit }) {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-gray-800/50 bg-[#0F172A]/80 backdrop-blur-md z-30 sticky top-0">
      <div className="flex items-center gap-4">
        {/* Mobile spacing for toggle button */}
        <div className="w-8 md:hidden"></div>
        <h2 className="text-lg font-medium text-gray-200">
          Personal Workspace
        </h2>
        <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
          Pro Plan
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800/50 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800/50 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0F172A]"></span>
        </button>
        
        <div className="w-px h-6 bg-gray-800 mx-1"></div>

        {onExit && (
          <button 
            onClick={onExit}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Exit</span>
          </button>
        )}
      </div>
    </header>
  );
}
