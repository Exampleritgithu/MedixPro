import React, { useState } from "react";

const History = () => {
  const [history] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Cardiology",
      date: "2025-08-10",
      diagnosis: "Hypertension",
      status: "Discharged",
    },
    {
      id: 2,
      name: "Michael Chen",
      department: "Neurology",
      date: "2025-07-22",
      diagnosis: "Migraine",
      status: "Follow-up",
    },
    {
      id: 3,
      name: "Lisa Patel",
      department: "Pediatrics",
      date: "2025-06-15",
      diagnosis: "Asthma",
      status: "Recovered",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Patient History</h1>
          <p className="text-gray-400">
            Review previous admissions and medical records of patients.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">History Records</h2>
          <p className="text-gray-400 text-sm">
            A list of past visits, treatments, and discharge details.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search patient history..."
            className="bg-zinc-800 text-white p-2 rounded w-1/3 outline-none"
          />
          <div className="flex gap-2">
            <button className="bg-zinc-800 p-2 rounded">🔍</button>
            <button className="bg-zinc-800 p-2 rounded">⏬</button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Date</th>
              <th className="p-3">Diagnosis</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id} className="border-b border-gray-700">
                <td className="p-3">{record.name}</td>
                <td className="p-3">{record.department}</td>
                <td className="p-3">{record.date}</td>
                <td className="p-3">{record.diagnosis}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      record.status === "Discharged"
                        ? "bg-green-600"
                        : record.status === "Follow-up"
                        ? "bg-yellow-500"
                        : "bg-blue-600"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
