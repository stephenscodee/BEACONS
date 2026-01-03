import React from 'react';
import { Megaphone, ExternalLink, Play, Pause, BarChart3, Target } from 'lucide-react';

const Campaigns: React.FC = () => {
  const campaigns = [
    { 
      id: 1, 
      name: 'Promoción Verano 2024', 
      platform: 'Meta', 
      spend: '$1,200', 
      leads: 145, 
      cpl: '$8.27', 
      status: 'Active',
      progress: 65,
      icon: 'meta'
    },
    { 
      id: 2, 
      name: 'Google Search - Leads B2B', 
      platform: 'Google', 
      spend: '$2,450', 
      leads: 89, 
      cpl: '$27.52', 
      status: 'Active',
      progress: 42,
      icon: 'google'
    },
    { 
      id: 3, 
      name: 'Retargeting Carrito', 
      platform: 'Meta', 
      spend: '$450', 
      leads: 67, 
      cpl: '$6.71', 
      status: 'Paused',
      progress: 100,
      icon: 'meta'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Campañas de Ads</h2>
          <p className="text-slate-400 mt-1">Monitorea tu inversión en tiempo real en todas las plataformas.</p>
        </div>
        <button className="btn-primary">
          <Megaphone size={18} />
          Crear Campaña
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="card bg-[#1e293b]/50 border-slate-800 hover:border-indigo-500/50 p-6 flex flex-col md:flex-row gap-8 items-center">
            {/* Campaign Branding */}
            <div className="flex items-center gap-4 min-w-[300px]">
              <div className={`p-4 rounded-2xl ${camp.icon === 'meta' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'bg-rose-600/10 text-rose-400 border border-rose-500/20'}`}>
                <Megaphone size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {camp.name}
                  <ExternalLink size={14} className="text-slate-500" />
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${camp.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`}></span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{camp.platform} • {camp.status}</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Inversión</p>
                <p className="text-xl font-bold text-white mt-1">{camp.spend}</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <Target size={14} className="text-indigo-400" />
                  <p className="text-xs font-bold text-slate-500 uppercase">Leads</p>
                </div>
                <p className="text-xl font-bold text-white mt-1">{camp.leads}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">CPL</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-bold text-white">{camp.cpl}</p>
                  <span className="text-[10px] text-emerald-400 font-bold">-4%</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                 <p className="text-xs font-bold text-slate-500 uppercase mb-2">Presupuesto</p>
                 <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                   <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${camp.progress}%` }}
                   ></div>
                 </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 min-w-[120px] justify-end">
              <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
                <BarChart3 size={18} />
              </button>
              <button className="p-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                {camp.status === 'Active' ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
