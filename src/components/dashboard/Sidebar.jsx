import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  User, 
  PanelLeftClose, 
  PanelLeftOpen,
  FileText,
  Shield
} from 'lucide-react';

const historyGroups = [
  {
    title: 'Today',
    items: [
      { id: 1, title: 'Research Paper Analysis', active: true },
      { id: 2, title: 'Essay Draft v2' },
    ]
  },
  {
    title: 'Yesterday',
    items: [
      { id: 3, title: 'Assignment 1 - Intro' },
      { id: 4, title: 'Final Report Overview' },
    ]
  },
  {
    title: 'Previous 7 Days',
    items: [
      { id: 5, title: 'AI Generated Content Check' },
      { id: 6, title: 'Literature Review' },
      { id: 7, title: 'Thesis Chapter 1' },
    ]
  }
];

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ 
          width: isOpen ? 260 : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed md:relative z-50 h-full bg-[#111827] flex flex-col overflow-hidden border-r border-gray-800/50 shadow-2xl md:shadow-none whitespace-nowrap`}
      >
        {/* Header */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2 py-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">LearnovaAI</span>
          </div>

          <button className="w-full flex items-center gap-2 px-3 py-2.5 bg-[#1E293B] hover:bg-[#2D3748] border border-gray-700/50 rounded-xl text-sm font-medium transition-all hover:shadow-md group">
            <Plus className="w-4 h-4" />
            New Check
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded">⌘K</span>
            </div>
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {historyGroups.map((group, i) => (
            <div key={i} className="mb-6">
              <h3 className="px-3 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors group ${
                      item.active 
                        ? 'bg-[#1E293B] text-white' 
                        : 'text-gray-300 hover:bg-[#1E293B]/50 hover:text-white'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-gray-400 group-hover:text-gray-300 flex-shrink-0" />
                    <span className="truncate text-left">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-gray-800/50 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#1E293B] rounded-lg transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#1E293B] rounded-lg transition-colors">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </button>
          <div className="pt-2 mt-2 border-t border-gray-800/50">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#1E293B] rounded-lg transition-colors">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                U
              </div>
              User Profile
            </button>
          </div>
        </div>
      </motion.div>

      {/* Toggle Button (when sidebar is closed) */}
      {!isOpen && (
        <button 
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 p-2 text-gray-400 hover:text-white bg-[#111827] border border-gray-700 rounded-lg shadow-lg md:hidden"
        >
          <PanelLeftOpen className="w-5 h-5" />
        </button>
      )}

      {/* Floating Toggle Button for Desktop */}
      <button 
        onClick={onToggle}
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-50 p-1.5 text-gray-400 hover:text-white bg-[#111827] border border-gray-700 rounded-r-lg shadow-md transition-all hover:bg-[#1E293B] ${isOpen ? 'left-[260px]' : 'left-0'}`}
      >
        {isOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
      </button>
    </>
  );
}
