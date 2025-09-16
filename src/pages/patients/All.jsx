import React, { useState } from "react";

const All = () => {
  const [patients] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://via.placeholder.com/40",
      specialty: "Cardiology",
      status: "Active",
      visits: 12,
      age: "34 years",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://via.placeholder.com/40",
      specialty: "Neurology",
      status: "Active",
      visits: 8,
      age: "41 years",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Lisa Patel",
      image: "https://via.placeholder.com/40",
      specialty: "Pediatrics",
      status: "On Leave",
      visits: 15,
      age: "29 years",
      email: "lisa.patel@example.com",
      phone: "+1 (555) 345-6789",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Patients</h1>
          <p className="text-gray-400">
            Manage your patients and their information.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          + Add Patient
        </button>
      </div>

      {/* Patients List Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Patients List</h2>
          <p className="text-gray-400 text-sm">
            A list of all patients in your clinic with their details.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search patients..."
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
              <th className="p-3">Specialty</th>
              <th className="p-3">Status</th>
              <th className="p-3">Visits</th>
              <th className="p-3">Age</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((pat) => (
              <tr key={pat.id} className="border-b border-gray-700">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={pat.image}
                    alt={pat.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold">{pat.name}</span>
                </td>
                <td className="p-3">{pat.specialty}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pat.status === "Active"
                        ? "bg-green-600"
                        : pat.status === "Inactive"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {pat.status}
                  </span>
                </td>
                <td className="p-3">{pat.visits}</td>
                <td className="p-3">{pat.age}</td>
                <td className="p-3">
                  <p>{pat.email}</p>
                  <p className="text-gray-400 text-sm">{pat.phone}</p>
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

export default All;
