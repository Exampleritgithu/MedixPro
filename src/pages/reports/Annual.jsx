import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const Annual = () => {
  const [data] = useState([
    { year: "2020", completed: 12800, canceled: 1800, noShows: 950 },
    { year: "2021", completed: 14200, canceled: 2100, noShows: 1200 },
    { year: "2022", completed: 15050, canceled: 2000, noShows: 1000 },
    { year: "2023", completed: 16500, canceled: 2500, noShows: 1350 },
    { year: "2024", completed: 17200, canceled: 2600, noShows: 1400 },
    { year: "2025", completed: 18100, canceled: 2700, noShows: 1500 },
  ]);

  // Totals
  const totalAppointments = data.reduce(
    (sum, item) => sum + item.completed + item.canceled + item.noShows,
    0
  );
  const totalCompleted = data.reduce((sum, item) => sum + item.completed, 0);
  const totalCanceled = data.reduce((sum, item) => sum + item.canceled, 0);
  const totalNoShows = data.reduce((sum, item) => sum + item.noShows, 0);

  const completionRate = ((totalCompleted / totalAppointments) * 100).toFixed(1);
  const cancelRate = ((totalCanceled / totalAppointments) * 100).toFixed(1);
  const noShowRate = ((totalNoShows / totalAppointments) * 100).toFixed(1);

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
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
          <p className="text-3xl font-bold mt-2">{totalAppointments}</p>
          <p className="text-sm text-gray-500">+10.5% from last year</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">Completed</h2>
          <p className="text-3xl font-bold mt-2">{totalCompleted}</p>
          <p className="text-sm text-green-500">{completionRate}% completion</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">Canceled</h2>
          <p className="text-3xl font-bold mt-2">{totalCanceled}</p>
          <p className="text-sm text-red-500">{cancelRate}% cancellation</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg text-gray-400">No-Shows</h2>
          <p className="text-3xl font-bold mt-2">{totalNoShows}</p>
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

      {/* Annual Line Chart */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Annual Appointment Trends</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend />
            <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={3} name="Completed" />
            <Line type="monotone" dataKey="canceled" stroke="#ef4444" strokeWidth={3} name="Canceled" />
            <Line type="monotone" dataKey="noShows" stroke="#f59e0b" strokeWidth={3} name="No-Shows" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Annual;
