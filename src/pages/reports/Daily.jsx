import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Daily = () => {
  const [appointments] = useState({
    total: 1248,
    completed: 876,
    canceled: 187,
    noShows: 85,
  });

  const statusData = [
    { name: "Completed", value: appointments.completed, color: "#22c55e" },
    { name: "Canceled", value: appointments.canceled, color: "#ef4444" },
    { name: "No-Shows", value: appointments.noShows, color: "#f59e0b" },
  ];

  const barData = [
    { day: "Mon", appointments: 120 },
    { day: "Tue", appointments: 145 },
    { day: "Wed", appointments: 100 },
    { day: "Thu", appointments: 180 },
    { day: "Fri", appointments: 160 },
    { day: "Sat", appointments: 90 },
    { day: "Sun", appointments: 70 },
  ];

  const people = [
    { id: 1, name: "Dr. Sarah Johnson", role: "Cardiologist" },
    { id: 2, name: "Dr. Ahmed Raza", role: "Neurologist" },
    { id: 3, name: "Dr. Emily Carter", role: "Dermatologist" },
  ];

  const completionRate = ((appointments.completed / appointments.total) * 100).toFixed(1);
  const cancelRate = ((appointments.canceled / appointments.total) * 100).toFixed(1);
  const noShowRate = ((appointments.noShows / appointments.total) * 100).toFixed(1);

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Header Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <input
          type="date"
          className="bg-zinc-900 text-white p-3 rounded-lg"
          defaultValue="2025-09-24"
        />
        <select className="bg-zinc-900 text-white p-3 rounded-lg">
          <option>All Departments</option>
          <option>Cardiology</option>
          <option>Neurology</option>
        </select>
        <select className="bg-zinc-900 text-white p-3 rounded-lg">
          <option>All Doctors</option>
          <option>Dr. Sarah Johnson</option>
          <option>Dr. Ahmed Raza</option>
        </select>
        <div className="flex gap-3">
          <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
            Refresh
          </button>
          <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">Total Appointments</h2>
          <p className="text-3xl font-bold mt-2">{appointments.total}</p>
          <p className="text-sm text-gray-500 mt-1">+12.5% from last month</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">Completed</h2>
          <p className="text-3xl font-bold mt-2">{appointments.completed}</p>
          <p className="text-sm text-green-500">{completionRate}% completion</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">Canceled</h2>
          <p className="text-3xl font-bold mt-2">{appointments.canceled}</p>
          <p className="text-sm text-red-500">{cancelRate}% cancellation</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">No-Shows</h2>
          <p className="text-3xl font-bold mt-2">{appointments.noShows}</p>
          <p className="text-sm text-yellow-500">{noShowRate}% no-show rate</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-700">
        <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-500">
          Overview
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          Trends
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          By Doctor
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          By Service
        </button>
      </div>

      {/* Appointment Status Distribution */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Appointment Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Daily Appointments Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }} />
            <Bar dataKey="appointments" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* People Section */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Doctors On Duty</h2>
        <div className="space-y-4">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex items-center gap-4 bg-zinc-800 p-4 rounded-lg"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                {person.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{person.name}</p>
                <p className="text-gray-400 text-sm">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daily;
