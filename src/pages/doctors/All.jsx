import React, { useState } from "react";

const All = () => {
  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "https://via.placeholder.com/40",
      specialty: "Cardiology",
      status: "Active",
      patients: 120,
      experience: "8 years",
      email: "sarah.johnson@medixpro.com",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image: "https://via.placeholder.com/40",
      specialty: "Neurology",
      status: "Active",
      patients: 85,
      experience: "12 years",
      email: "michael.chen@medixpro.com",
      phone: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Dr. Lisa Patel",
      image: "https://via.placeholder.com/40",
      specialty: "Pediatrics",
      status: "On Leave",
      patients: 150,
      experience: "10 years",
      email: "lisa.patel@medixpro.com",
      phone: "+1 (555) 345-6789",
    },
    {
      id: 4,
      name: "Dr. Imran Farooq",
      image: "https://via.placeholder.com/40",
      specialty: "Orthopedic",
      status: "Inactive",
      patients: 60,
      experience: "7 years",
      email: "imran.farooq@medixpro.com",
      phone: "+1 (555) 456-7890",
    },
    {
      id: 5,
      name: "Dr. Ayesha Malik",
      image: "https://via.placeholder.com/40",
      specialty: "Dermatology",
      status: "Active",
      patients: 95,
      experience: "6 years",
      email: "ayesha.malik@medixpro.com",
      phone: "+1 (555) 567-8901",
    },
    {
      id: 6,
      name: "Dr. Kamran Abbas",
      image: "https://via.placeholder.com/40",
      specialty: "Neurologist",
      status: "On Leave",
      patients: 72,
      experience: "9 years",
      email: "kamran.abbas@medixpro.com",
      phone: "+1 (555) 678-9012",
    },
    {
      id: 7,
      name: "Dr. Hina Shah",
      image: "https://via.placeholder.com/40",
      specialty: "Gynecologist",
      status: "Inactive",
      patients: 110,
      experience: "11 years",
      email: "hina.shah@medixpro.com",
      phone: "+1 (555) 789-0123",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Doctors</h1>
          <p className="text-gray-400">
            Manage your medical staff and their information.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          + Add Doctor
        </button>
      </div>

      {/* Doctors List Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Doctors List</h2>
          <p className="text-gray-400 text-sm">
            A list of all doctors in your clinic with their details.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search doctors..."
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
              <th className="p-3">Patients</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-700">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold">{doc.name}</span>
                </td>
                <td className="p-3">{doc.specialty}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      doc.status === "Active"
                        ? "bg-green-600"
                        : doc.status === "Inactive"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-3">{doc.patients}</td>
                <td className="p-3">{doc.experience}</td>
                <td className="p-3">
                  <p>{doc.email}</p>
                  <p className="text-gray-400 text-sm">{doc.phone}</p>
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
