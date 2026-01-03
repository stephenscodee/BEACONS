import React from 'react';
import { Globe, Plus, MousePointer2, Layout, CheckCircle2 } from 'lucide-react';

const LandingBuilder: React.FC = () => {
  const templates = [
    { id: 1, name: 'Lead Magnet Pro', type: 'Ebook / Webinar', conversion: '32%', visits: '1.2k', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Service Booking', type: 'Consultoría', conversion: '24%', visits: '850', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Product Waitlist', type: 'SaaS / App', conversion: '41%', visits: '3.4k', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Landings & Formularios</h2>
          <p className="text-slate-400 mt-1">Crea páginas de alta conversión sin tocar una línea de código.</p>
        </div>
        <button className="btn-primary">
          <Plus size={18} />
          Crear Nueva Landing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((temp) => (
          <div key={temp.id} className="card group overflow-hidden border-slate-800 p-0">
             <div className="h-48 relative overflow-hidden bg-slate-900">
               <img 
                 src={temp.image} 
                 alt={temp.name} 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
               <div className="absolute bottom-4 left-4">
                 <span className="px-2 py-1 bg-indigo-600/20 text-indigo-400 text-[10px] font-bold uppercase rounded border border-indigo-500/20 backdrop-blur-md">
                   {temp.type}
                 </span>
               </div>
             </div>
             <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{temp.name}</h3>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                    <CheckCircle2 size={12} />
                    {temp.conversion} CR
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Visitas</p>
                    <p className="text-sm font-bold text-white">{temp.visits}</p>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Variantes</p>
                    <p className="text-sm font-bold text-white">A / B</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-xs font-bold border border-slate-700 flex items-center justify-center gap-2">
                    <MousePointer2 size={14} /> Editar
                  </button>
                  <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
                    <Globe size={16} />
                  </button>
                </div>
             </div>
          </div>
        ))}

        {/* Create New Card */}
        <button className="border-2 border-dashed border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-500/50 group transition-all bg-slate-900/20">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:scale-110 transition-all border border-slate-800">
            <Plus size={32} />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-300">Empezar de cero</p>
            <p className="text-xs text-slate-500 mt-1">Crea una página personalizada</p>
          </div>
        </button>
      </div>

      <div className="card bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-indigo-500/20 p-8 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="p-4 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/20">
              <Layout size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Constructor Inteligente Beta</h3>
              <p className="text-slate-400 mt-1 max-w-md text-sm">Próximamente: Usa IA para generar el copy y las imágenes de tu landing page basándote en tu anuncio.</p>
            </div>
         </div>
         <button className="px-6 py-2 bg-white text-indigo-900 rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors">
            Unirse a la espera
         </button>
      </div>
    </div>
  );
};

export default LandingBuilder;
