import React from 'react';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Leads', value: '1,284', trend: '+12.5%', isUp: true, icon: Users, color: 'text-indigo-500' },
    { label: 'CPL Promedio', value: '$4.20', trend: '-8.2%', isUp: false, icon: Target, color: 'text-pink-500' },
    { label: 'ROI Estimado', value: '3.4x', trend: '+15.1%', isUp: true, icon: TrendingUp, color: 'text-emerald-500' },
    { label: 'Gasto Total', value: '$5,402', trend: '+2.4%', isUp: true, icon: DollarSign, color: 'text-amber-500' },
  ];

  const recentLeads = [
    { id: 1, name: 'Juan Pérez', source: 'Facebook Ads', score: 85, time: 'Hace 5 min' },
    { id: 2, name: 'María García', source: 'Google Search', score: 92, time: 'Hace 12 min' },
    { id: 3, name: 'Carlos López', source: 'Instagram Stories', score: 45, time: 'Hace 24 min' },
    { id: 4, name: 'Ana Martínez', source: 'LinkedIn Web', score: 78, time: 'Hace 1 hora' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-white">Buen día, Alex</h2>
        <p className="text-slate-400 mt-1">Aquí tienes el resumen de rendimiento de hoy.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="card group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-slate-900/50 border border-slate-800 ${stat.color}`}>
                <stat.icon size={22} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.isUp ? 'text-emerald-400' : 'text-pink-400'}`}>
                {stat.trend}
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 card bg-[#1e293b]/50 border-slate-800">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Rendimiento Semanal</h3>
              <p className="text-sm text-slate-400">Leads vs Gasto Publicitario</p>
            </div>
            <select className="bg-slate-900 border border-slate-800 text-xs rounded-lg px-3 py-2 outline-none">
              <option>Últimos 7 días</option>
              <option>Últimos 30 días</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-3 justify-between">
             {/* Simple CSS bars for visualization */}
             {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                 <div className="w-full relative">
                   <div 
                     className="bg-indigo-500/20 w-full rounded-t-lg transition-all duration-500 group-hover:bg-indigo-500/40"
                     style={{ height: `${h+10}%` }}
                   ></div>
                   <div 
                     className="absolute bottom-0 bg-indigo-500 w-full rounded-t-lg transition-all duration-500 group-hover:bg-indigo-400"
                     style={{ height: `${h}%` }}
                   ></div>
                 </div>
                 <span className="text-[10px] text-slate-500 font-medium">Día {i+1}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card bg-[#1e293b]/50 border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">Leads Recientes</h3>
          <div className="space-y-6">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center gap-4 group">
                <div className={`w-2 h-2 rounded-full ${lead.score > 80 ? 'bg-emerald-500' : lead.score > 60 ? 'bg-amber-500' : 'bg-slate-600'}`}></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">{lead.name}</p>
                  <p className="text-xs text-slate-500">{lead.source}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-indigo-400">{lead.score}%</p>
                  <p className="text-[10px] text-slate-500">{lead.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-sm font-medium text-slate-400 hover:text-white border border-slate-800 rounded-lg hover:bg-slate-800 transition-all">
            Ver todos los leads
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
