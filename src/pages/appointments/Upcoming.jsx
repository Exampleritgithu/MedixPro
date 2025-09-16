import React, { useState } from "react";

const Upcoming = () => {
  const [appointments] = useState([
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "2025-09-18",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Emily Davis",
      doctor: "Dr. Michael Chen",
      department: "Neurology",
      date: "2025-09-18",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Robert Wilson",
      doctor: "Dr. Lisa Patel",
      department: "Pediatrics",
      date: "2025-09-19",
      time: "09:15 AM",
      status: "Completed",
    },
    {
      id: 4,
      patient: "Sophia Lee",
      doctor: "Dr. Imran Farooq",
      department: "Orthopedic",
      date: "2025-09-20",
      time: "02:00 PM",
      status: "Cancelled",
    },
    {
      id: 5,
      patient: "Daniel Martinez",
      doctor: "Dr. Ayesha Malik",
      department: "Dermatology",
      date: "2025-09-21",
      time: "01:30 PM",
      status: "Confirmed",
    },
    {
      id: 6,
      patient: "Olivia Brown",
      doctor: "Dr. Kamran Abbas",
      department: "Neurology",
      date: "2025-09-22",
      time: "10:45 AM",
      status: "Pending",
    },
    {
      id: 7,
      patient: "James Anderson",
      doctor: "Dr. Hina Shah",
      department: "Gynecology",
      date: "2025-09-22",
      time: "03:15 PM",
      status: "Completed",
    },
    {
      id: 8,
      patient: "Isabella Taylor",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "2025-09-23",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 9,
      patient: "William Harris",
      doctor: "Dr. Michael Chen",
      department: "Neurology",
      date: "2025-09-23",
      time: "11:00 AM",
      status: "Cancelled",
    },
    {
      id: 10,
      patient: "Charlotte White",
      doctor: "Dr. Lisa Patel",
      department: "Pediatrics",
      date: "2025-09-24",
      time: "01:00 PM",
      status: "Confirmed",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Upcoming Appointments</h1>
          <p className="text-gray-400">
            Manage and review all scheduled appointments.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          + Add Appointment
        </button>
      </div>

      {/* Appointments List Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Appointments List</h2>
          <p className="text-gray-400 text-sm">
            A list of all upcoming doctor appointments with details.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search appointments..."
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
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b border-gray-700">
                <td className="p-3 font-semibold">{appt.patient}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.department}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      appt.status === "Confirmed"
                        ? "bg-green-600"
                        : appt.status === "Pending"
                        ? "bg-yellow-500"
                        : appt.status === "Completed"
                        ? "bg-blue-600"
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

export default Upcoming;
