import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminDemoRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtering
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDate, setFilterDate] = useState("all");

  // Editing state mapping by row id: { [id]: { status, remarks, isSaving } }
  const [editState, setEditState] = useState({});

  useEffect(() => {
    fetch('/api/demo')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then(data => {
        setRequests(data.requests || []);

        // Initialize edit states
        const initialEdits = {};
        data.requests.forEach(r => {
          initialEdits[r.id] = { status: r.status || 'new', remarks: r.remarks || '', isSaving: false };
        });
        setEditState(initialEdits);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEditChange = (id, field, value) => {
    setEditState(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleSave = async (id) => {
    const currentState = editState[id];
    handleEditChange(id, 'isSaving', true);

    try {
      const res = await fetch(`/api/demo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: currentState.status,
          remarks: currentState.remarks
        })
      });

      if (!res.ok) throw new Error("Failed to update");

      // Update original array to maintain accurate local state
      setRequests(prev => prev.map(req =>
        req.id === id ? { ...req, status: currentState.status, remarks: currentState.remarks } : req
      ));

      alert("Updated successfully!");
    } catch (err) {
      alert("Error saving: " + err.message);
    } finally {
      handleEditChange(id, 'isSaving', false);
    }
  };

  const filteredRequests = requests.filter(req => {
    // 1. Check Status
    if (filterStatus !== "all" && req.status !== filterStatus && !(!req.status && filterStatus === "new")) {
      return false;
    }

    // 2. Check Date
    if (filterDate !== "all") {
      const reqDate = new Date(req.created_at);
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Midnight today

      const diffTime = new Date().getTime() - reqDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (filterDate === "today") {
        if (reqDate < now) return false;
      } else if (filterDate === "this_week") {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
        if (reqDate < startOfWeek) return false;
      } else if (filterDate === "past_15_days") {
        if (diffDays > 15) return false;
      } else if (filterDate === "this_month") {
        if (reqDate.getMonth() !== now.getMonth() || reqDate.getFullYear() !== now.getFullYear()) return false;
      } else if (filterDate === "past_month") {
        if (diffDays > 30) return false;
      }
    }
    return true;
  });

  return (
    <div className="w-full min-h-screen px-4 md:px-8 py-24 bg-[#f6f7f4]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-serif text-[#1D2B24] font-semibold">Demo Requests (Admin)</h1>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
            <label className="text-sm font-medium text-slate-600">Date:</label>
            <select
              value={filterDate}
              onChange={e => setFilterDate(e.target.value)}
              className="bg-transparent text-sm font-semibold outline-none cursor-pointer text-[#1D2B24]"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="this_week">This Week</option>
              <option value="past_15_days">Past 15 Days</option>
              <option value="this_month">This Month</option>
              <option value="past_month">Past Month (30 Days)</option>
            </select>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
            <label className="text-sm font-medium text-slate-600">Status:</label>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="bg-transparent text-sm font-semibold outline-none cursor-pointer text-[#1D2B24]"
            >
              <option value="all">All Requests</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-slate-500">Loading requests...</p>
      ) : error ? (
        <p className="text-red-500">Error connecting to database: {error}</p>
      ) : requests.length === 0 ? (
        <p className="text-slate-500 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center text-lg">No demo requests yet.</p>
      ) : (
        <div className="w-full shadow-2xl rounded-2xl border border-slate-200 bg-white overflow-hidden">

          {/* DESKTOP VIEW (TABLE) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="bg-emerald-900 text-white border-b border-emerald-800">
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider">Date & Info</th>
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider">Contact</th>
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider">Needs & Prefs</th>
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider w-[25%]">Status & Remarks</th>
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req, i) => {
                  const id = req.id || i;
                  const state = editState[id] || { status: 'new', remarks: '', isSaving: false };

                  return (
                    <tr key={id} className="border-b border-slate-100 hover:bg-emerald-50/30 transition-colors align-top">
                      {/* User Info col */}
                      <td className="p-5">
                        <div className="text-xs text-slate-400 mb-1">{new Date(req.created_at).toLocaleString()}</div>
                        <div className="font-bold text-[#1D2B24] text-lg">{req.first_name} {req.last_name}</div>
                        <div className="text-sm text-slate-600 font-medium mt-1">{req.company || 'No Company'}</div>
                        <div className="text-xs text-slate-500">{req.job_title || 'No Job Title'}</div>
                      </td>

                      {/* Contact col */}
                      <td className="p-5">
                        <a href={`mailto:${req.email}`} className="text-sm font-medium text-emerald-600 hover:text-emerald-800 underline break-all">
                          {req.email}
                        </a>
                      </td>

                      {/* Needs col */}
                      <td className="p-5 text-xs">
                        <div className="flex flex-col gap-2 items-start">
                          {req.join_sales ? <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">Sales Call</span> : null}
                          {req.join_technical ? <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-bold">Tech Experts</span> : null}
                          {req.newsletter ? <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">Newsletter</span> : null}
                          {!req.join_sales && !req.join_technical && !req.newsletter && <span className="text-slate-400 italic">No preferences</span>}
                        </div>
                      </td>

                      {/* Status & Remarks editor col */}
                      <td className="p-5">
                        <div className="flex flex-col gap-3 min-w-[200px]">
                          <select
                            value={state.status}
                            onChange={(e) => handleEditChange(id, 'status', e.target.value)}
                            className={`w-full p-2 rounded-lg text-sm font-bold shadow-sm outline-none border cursor-pointer
                              ${state.status === 'new' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                              ${state.status === 'contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                              ${state.status === 'resolved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                            `}
                          >
                            <option value="new">🆕 New</option>
                            <option value="contacted">📞 Contacted</option>
                            <option value="resolved">✅ Resolved</option>
                          </select>

                          <textarea
                            value={state.remarks}
                            onChange={(e) => handleEditChange(id, 'remarks', e.target.value)}
                            placeholder="Add admin notes here..."
                            className="w-full h-20 p-3 text-sm text-slate-900 border border-slate-300 rounded-lg outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 resize-none shadow-inner bg-white placeholder:text-slate-400"
                          />
                        </div>
                      </td>

                      {/* Actions col */}
                      <td className="p-5 text-right">
                        <button
                          onClick={() => handleSave(id)}
                          disabled={state.isSaving || (state.status === req.status && state.remarks === (req.remarks || ''))}
                          className="bg-[#0B3B2E] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md flex items-center gap-2 ml-auto shrink-0 whitespace-nowrap"
                        >
                          {state.isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW (CARDS) */}
          <div className="grid grid-cols-1 divide-y divide-slate-100 lg:hidden">
            {filteredRequests.map((req, i) => {
              const id = req.id || i;
              const state = editState[id] || { status: 'new', remarks: '', isSaving: false };
              return (
                <div key={id} className="p-5 flex flex-col gap-5 bg-white hover:bg-slate-50 transition-colors">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-3 border-b border-slate-100 pb-3">
                    <div>
                      <h3 className="font-bold text-[#1D2B24] text-xl leading-tight">{req.first_name} {req.last_name}</h3>
                      <p className="text-xs text-emerald-600 font-semibold uppercase tracking-widest mt-1">
                        {new Date(req.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <a href={`mailto:${req.email}`} className="text-sm border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full font-semibold shrink-0">
                      Email
                    </a>
                  </div>

                  {/* Organization Row */}
                  <div className="flex gap-4 border-l-2 border-slate-200 pl-3">
                    <div className="flex-1">
                      <span className="text-slate-500 text-[10px] uppercase tracking-wider block font-bold mb-0.5">Company</span>
                      <span className="font-semibold text-slate-800 text-sm break-all">{req.company || '-'}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-500 text-[10px] uppercase tracking-wider block font-bold mb-0.5">Job Title</span>
                      <span className="font-semibold text-slate-800 text-sm break-all">{req.job_title || '-'}</span>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase tracking-wider block font-bold mb-2">Needs & Preferences</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {req.join_sales && <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">Sales Call</span>}
                      {req.join_technical && <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-bold">Tech Experts</span>}
                      {req.newsletter && <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">Newsletter</span>}
                      {!req.join_sales && !req.join_technical && !req.newsletter && <span className="text-slate-400 italic">No preferences selected</span>}
                    </div>
                  </div>

                  {/* Status & Remarks */}
                  <div className="flex flex-col gap-3 pt-3">
                    <select
                      value={state.status}
                      onChange={(e) => handleEditChange(id, 'status', e.target.value)}
                      className={`w-full p-3 rounded-lg text-sm font-bold shadow-sm outline-none border cursor-pointer
                           ${state.status === 'new' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                           ${state.status === 'contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                           ${state.status === 'resolved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                         `}
                    >
                      <option value="new">🆕 Status: New</option>
                      <option value="contacted">📞 Status: Contacted</option>
                      <option value="resolved">✅ Status: Resolved</option>
                    </select>

                    <textarea
                      value={state.remarks}
                      onChange={(e) => handleEditChange(id, 'remarks', e.target.value)}
                      placeholder="Add admin notes here..."
                      className="w-full h-24 p-3 text-sm text-slate-900 border border-slate-300 rounded-lg outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 resize-none shadow-inner bg-white placeholder:text-slate-400"
                    />

                    <button
                      onClick={() => handleSave(id)}
                      disabled={state.isSaving || (state.status === req.status && state.remarks === (req.remarks || ''))}
                      className="bg-[#0B3B2E] w-full text-white px-4 py-3 mt-1 rounded-lg text-sm font-semibold hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md flex justify-center items-center gap-2"
                    >
                      {state.isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRequests.length === 0 && (
            <div className="p-10 text-center text-slate-500 font-medium lg:border-t lg:border-slate-100">
              No requests match the current filters.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
