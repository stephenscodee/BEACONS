import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Globe,
  Search,
  Bell,
  Target,
} from "lucide-react";
import Dashboard from "./components/Dashboard";
import LeadsTable from "./components/LeadsTable";
import Campaigns from "./components/Campaigns";
import LandingBuilder from "./components/LandingBuilder";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "leads", icon: Users, label: "Leads" },
    { id: "campaigns", icon: Megaphone, label: "Campañas" },
    { id: "landing", icon: Globe, label: "Landings" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <LeadsTable />;
      case "campaigns":
        return <Campaigns />;
      case "landing":
        return <LandingBuilder />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col bg-[#111827]">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Target className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            LeadFlow
          </h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors">
            <span className="font-medium">Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar leads, campañas..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-[#0f172a]"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-800 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold">Alex Marketing</p>
                <p className="text-xs text-slate-500">Plan Pro</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-sm">
                  AM
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic View */}
        <section className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">{renderContent()}</div>
        </section>
      </main>
    </div>
  );
};

export default App;
