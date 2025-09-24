import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const Monthly = () => {
  const [data] = useState([
    { month: "Jan", completed: 1200, canceled: 150, noShows: 90 },
    { month: "Feb", completed: 1350, canceled: 200, noShows: 110 },
    { month: "Mar", completed: 1400, canceled: 180, noShows: 95 },
    { month: "Apr", completed: 1250, canceled: 210, noShows: 105 },
    { month: "May", completed: 1500, canceled: 220, noShows: 130 },
    { month: "Jun", completed: 1600, canceled: 190, noShows: 100 },
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
          <p className="text-sm text-gray-500">+8.2% from last month</p>
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

      {/* Monthly Chart */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Monthly Appointment Trends</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend />
            <Bar dataKey="completed" fill="#22c55e" name="Completed" />
            <Bar dataKey="canceled" fill="#ef4444" name="Canceled" />
            <Bar dataKey="noShows" fill="#f59e0b" name="No-Shows" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Monthly;
