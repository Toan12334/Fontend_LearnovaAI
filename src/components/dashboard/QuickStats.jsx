import { Target, Layers, Globe2, Zap } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Accuracy',
    value: '98.7%',
    icon: Target,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    id: 2,
    title: 'Documents scanned',
    value: '10M+',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    id: 3,
    title: 'Supported Languages',
    value: '100+',
    icon: Globe2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    id: 4,
    title: 'Average Scan Time',
    value: '5s',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

export default function QuickStats() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-200 mb-4 tracking-tight">System Status</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 hover:bg-[#1E293B] hover:border-gray-600/50 transition-all hover:-translate-y-1 group"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-white mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-400">
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
