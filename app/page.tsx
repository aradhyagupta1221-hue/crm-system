'use client';

import React from 'react';

export default function CRMHome() {
  const leads = [
    { id: '1', name: 'Aarav Sharma', company: 'TechNova Solutions', status: 'NEW', value: 45000 },
    { id: '2', name: 'Rohan Verma', company: 'Apex Digital Labs', status: 'CONTACTED', value: 75000 },
    { id: '3', name: 'Priya Patel', company: 'Quantum Global Inc', status: 'PROPOSAL', value: 120000 },
    { id: '4', name: 'Neha Gupta', company: 'Zenith Logistics', status: 'WON', value: 95000 },
    { id: '5', name: 'Kabir Singh', company: 'Alpha Marketing Corp', status: 'LOST', value: 30000 },
  ];

  const columns = [
    { title: 'New Leads', status: 'NEW', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { title: 'Contacted', status: 'CONTACTED', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
    { title: 'Proposal Sent', status: 'PROPOSAL', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { title: 'Deals Won 🏆', status: 'WON', color: 'bg-green-50 border-green-200 text-green-700' },
    { title: 'Deals Lost ❌', status: 'LOST', color: 'bg-red-50 border-red-200 text-red-700' },
  ];

  const totalPipelineValue = leads
    .filter(l => l.status !== 'LOST')
    .reduce((sum, current) => sum + current.value, 0);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Enterprise CRM System</h1>
          <p className="text-sm text-gray-500 mt-1">Manage customers, sales pipelines, and active performance telemetry logs.</p>
        </div>
        <div className="mt-4 md:mt-0 p-4 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Pipeline Value</span>
          <span className="text-2xl font-black text-emerald-600 mt-0.5">₹{totalPipelineValue.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
        {columns.map((col) => {
          const filteredLeads = leads.filter(lead => lead.status === col.status);
          
          return (
            <div key={col.status} className="flex flex-col bg-gray-100/80 rounded-xl p-4 border border-gray-200 shadow-sm min-h-[450px]">
              <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wide uppercase mb-4 ${col.color} flex justify-between items-center`}>
                <span>{col.title}</span>
                <span className="bg-white/80 px-2 py-0.5 rounded-md shadow-xs">{filteredLeads.length}</span>
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{lead.name}</h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{lead.company}</p>
                    <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-gray-50">
                      <span className="text-xs font-semibold text-gray-400">Value</span>
                      <span className="text-xs font-bold text-gray-800">₹{lead.value.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))}

                {filteredLeads.length === 0 && (
                  <div className="h-32 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-xs text-gray-400 font-medium">No active deals</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

        