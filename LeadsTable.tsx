import React, { useState } from 'react';
import { Search, Download, MoreVertical, Mail, Phone, PlusCircle } from 'lucide-react';

const LeadsTable: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const leads = [
    { id: 1, name: 'Juan Pérez', email: 'juan.p@gmail.com', phone: '+34 612 345 678', source: 'Facebook Ads', campaign: 'Verano 2024', score: 85, status: 'Caliente', date: '03 Ene 2024' },
    { id: 2, name: 'María García', email: 'm.garcia@outlook.com', phone: '+34 654 987 321', source: 'Google Ads', campaign: 'Retargeting Web', score: 92, status: 'Caliente', date: '03 Ene 2024' },
    { id: 3, name: 'Carlos López', email: 'clopez@empresa.es', phone: '+34 600 111 222', source: 'Instagram', campaign: 'Influencer Post', score: 45, status: 'Frío', date: '02 Ene 2024' },
    { id: 4, name: 'Ana Martínez', email: 'ana.mtz@yahoo.com', phone: '+34 622 333 444', source: 'Organic', campaign: '-', score: 78, status: 'Tibio', date: '02 Ene 2024' },
    { id: 5, name: 'Roberto Sanz', email: 'rsanz@servicios.com', phone: '+34 688 777 666', source: 'LinkedIn', campaign: 'B2B Outreach', score: 65, status: 'Tibio', date: '01 Ene 2024' },
    { id: 6, name: 'Elena Ruiz', email: 'elena.ruiz@gmail.com', phone: '+34 699 000 111', source: 'TikTok Ads', campaign: 'Brand Awareness', score: 30, status: 'Frío', date: '01 Ene 2024' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Caliente': return 'status-hot';
      case 'Tibio': return 'status-warm';
      case 'Frío': return 'status-cold';
      default: return '';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Gestión de Leads</h2>
          <p className="text-slate-400 mt-1">Administra y califica tus prospectos en tiempo real.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium border border-slate-700">
            <Download size={18} />
            Exportar CSV
          </button>
          <button className="btn-primary">
            <PlusCircle size={18} />
            Nuevo Lead
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="card bg-[#1e293b]/50 border-slate-800 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {['Todos', 'Calientes', 'Tibios', 'Fríos'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === f 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Buscar por nombre o email..." 
              className="bg-slate-900 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50 w-64"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden p-0 border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 border-b border-slate-800">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Origen / Campaña</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Scoring</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-indigo-400">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{lead.name}</p>
                      <p className="text-xs text-slate-500">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-white">{lead.source}</p>
                  <p className="text-xs text-slate-500">{lead.campaign}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden w-24">
                      <div 
                        className={`h-full rounded-full ${lead.score > 80 ? 'bg-emerald-500' : lead.score > 60 ? 'bg-amber-500' : 'bg-pink-500'}`} 
                        style={{ width: `${lead.score}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-300">{lead.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`status-badge ${getStatusClass(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">
                  {lead.date}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-white"><Mail size={16} /></button>
                    <button className="p-1.5 text-slate-400 hover:text-white"><Phone size={16} /></button>
                    <button className="p-1.5 text-slate-400 hover:text-white"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
