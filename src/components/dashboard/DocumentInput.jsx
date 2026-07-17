import { useState } from 'react';
import { Upload, Sparkles, FileText, Clock, Type } from 'lucide-react';

export default function DocumentInput({ onCheck, onLimitExceeded }) {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleCheckClick = (e) => {
    e.preventDefault();
    if (wordCount > 500) {
      onLimitExceeded?.();
    } else {
      onCheck?.(text);
    }
  };

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-[#1E293B] rounded-2xl shadow-xl border border-gray-700/50 p-6 flex flex-col h-[320px] transition-all hover:border-gray-600/50">
        <textarea 
          placeholder="Paste your document here..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full bg-transparent resize-none outline-none text-gray-200 placeholder-gray-500 text-lg leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        ></textarea>
        
        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-gray-800/50 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          
          {/* Stats and Badges */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5 bg-[#0F172A] px-2.5 py-1 rounded-md border border-gray-700/50">
              <Type className="w-3.5 h-3.5" />
              <span>{wordCount} words</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0F172A] px-2.5 py-1 rounded-md border border-gray-700/50">
              <Clock className="w-3.5 h-3.5" />
              <span>{Math.ceil(wordCount / 200)} min read</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 border-l border-gray-700/50 pl-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Formats</span>
              <div className="flex gap-1">
                {['PDF', 'DOC', 'DOCX', 'TXT', 'RTF'].map(ext => (
                  <span key={ext} className="text-[10px] font-bold bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full md:w-auto items-center gap-3">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl transition-all font-medium text-sm border border-gray-700/50">
              <Upload className="w-4 h-4" />
              Upload File
            </button>
            <button 
              onClick={handleCheckClick}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all font-medium text-sm shadow-lg shadow-blue-900/20 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
