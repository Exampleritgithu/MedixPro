import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Staff = () => {
  const [staff] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      designation: "Administrator",
      department: "Management",
      contact: "0300-1234567",
      joined: "2023-04-10",
    },
    {
      id: 2,
      name: "Sara Malik",
      designation: "Receptionist",
      department: "Front Desk",
      contact: "0301-2345678",
      joined: "2024-01-05",
    },
    {
      id: 3,
      name: "Bilal Ahmed",
      designation: "Nurse",
      department: "Emergency",
      contact: "0302-3456789",
      joined: "2022-11-15",
    },
    {
      id: 4,
      name: "Fatima Raza",
      designation: "Lab Technician",
      department: "Pathology",
      contact: "0303-4567890",
      joined: "2023-08-20",
    },
    {
      id: 5,
      name: "John Doe",
      designation: "Pharmacist",
      department: "Pharmacy",
      contact: "0304-5678901",
      joined: "2025-02-12",
    },
  ]);

  // Count staff by designation
  const designationCounts = Array.from(
    new Set(staff.map((s) => s.designation))
  ).map((des) => ({
    designation: des,
    count: staff.filter((s) => s.designation === des).length,
  }));

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Hospital Staff</h1>
          <p className="text-gray-400">Manage and view staff details</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Staff</h2>
          <p className="text-3xl font-bold mt-2">{staff.length}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Departments</h2>
          <p className="text-3xl font-bold mt-2">
            {new Set(staff.map((s) => s.department)).size}
          </p>
        </div>
      </div>

      {/* Staff Distribution Chart */}
      <div className="bg-zinc-900 p-6 rounded-lg mb-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Staff by Designation</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={designationCounts}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="designation" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Staff Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Staff Directory</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Department</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Joined</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{s.name}</td>
                <td className="p-4">{s.designation}</td>
                <td className="p-4">{s.department}</td>
                <td className="p-4">{s.contact}</td>
                <td className="p-4">{s.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staff;
