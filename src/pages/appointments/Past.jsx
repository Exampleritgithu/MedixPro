import React, { useState } from "react";

const Past = () => {
  const [pastAppointments] = useState([
    {
      id: 1,
      patient: "Liam Carter",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "2025-09-10",
      time: "09:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      doctor: "Dr. Michael Chen",
      department: "Neurology",
      date: "2025-09-11",
      time: "01:00 PM",
      status: "Completed",
    },
    {
      id: 3,
      patient: "Noah Brown",
      doctor: "Dr. Lisa Patel",
      department: "Pediatrics",
      date: "2025-09-12",
      time: "11:45 AM",
      status: "Cancelled",
    },
    {
      id: 4,
      patient: "Sophia Davis",
      doctor: "Dr. Imran Farooq",
      department: "Orthopedic",
      date: "2025-09-13",
      time: "03:15 PM",
      status: "Completed",
    },
    {
      id: 5,
      patient: "Mason Clark",
      doctor: "Dr. Ayesha Malik",
      department: "Dermatology",
      date: "2025-09-14",
      time: "10:15 AM",
      status: "Completed",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Past Appointments</h1>
          <p className="text-gray-400">
            Review completed or cancelled appointments.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          Export History
        </button>
      </div>

      {/* Past Appointments List */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Appointment History</h2>
          <p className="text-gray-400 text-sm">
            A record of all past patient visits and consultations.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search past appointments..."
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
              <th className="p-3">Department</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {pastAppointments.map((appt) => (
              <tr key={appt.id} className="border-b border-gray-700">
                <td className="p-3 font-semibold">{appt.patient}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.department}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      appt.status === "Completed"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="p-3">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Past;
