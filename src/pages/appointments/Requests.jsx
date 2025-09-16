import React, { useState } from "react";

const Requests = () => {
  const [requests] = useState([
    {
      id: 1,
      patientName: "John Doe",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2025-09-20",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Emily Carter",
      doctor: "Dr. Michael Chen",
      specialty: "Neurology",
      date: "2025-09-21",
      time: "02:00 PM",
      status: "Approved",
    },
    {
      id: 3,
      patientName: "James Smith",
      doctor: "Dr. Lisa Patel",
      specialty: "Pediatrics",
      date: "2025-09-22",
      time: "11:15 AM",
      status: "Rejected",
    },
    {
      id: 4,
      patientName: "Sophia Khan",
      doctor: "Dr. Imran Farooq",
      specialty: "Orthopedic",
      date: "2025-09-23",
      time: "09:45 AM",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Appointment Requests</h1>
          <p className="text-gray-400">
            Manage patient requests for doctor appointments.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          + New Request
        </button>
      </div>

      {/* Requests List Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Requests List</h2>
          <p className="text-gray-400 text-sm">
            All patient appointment requests with details and status.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search requests..."
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
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Specialty</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-gray-700">
                <td className="p-3 font-semibold">{req.patientName}</td>
                <td className="p-3">{req.doctor}</td>
                <td className="p-3">{req.specialty}</td>
                <td className="p-3">{req.date}</td>
                <td className="p-3">{req.time}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      req.status === "Approved"
                        ? "bg-green-600"
                        : req.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="p-3 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
