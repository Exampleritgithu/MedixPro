import React, { useState } from "react";

const Specialists = () => {
  const [specialties] = useState([
    {
      id: 1,
      name: "Cardiology",
      description: "Heart and blood vessel treatments",
      doctors: 14,
    },
    {
      id: 2,
      name: "Neurology",
      description: "Brain, nerves, and spinal cord care",
      doctors: 9,
    },
    {
      id: 3,
      name: "Orthopedics",
      description: "Bone and joint treatments",
      doctors: 11,
    },
    {
      id: 4,
      name: "Pediatrics",
      description: "Healthcare for children",
      doctors: 18,
    },
    {
      id: 5,
      name: "Dermatology",
      description: "Skin, hair, and nail care",
      doctors: 7,
    },
    {
      id: 6,
      name: "ENT",
      description: "Ear, Nose, and Throat specialists",
      doctors: 5,
    },
    {
      id: 7,
      name: "Psychiatry",
      description: "Mental health and behavioral treatments",
      doctors: 6,
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Specialties</h1>
          <p className="text-gray-400">
            Manage medical specialties and assigned doctors.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow">
          + Add Specialty
        </button>
      </div>

      {/* Specialties Section */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow mb-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Specialties List</h2>
          <p className="text-gray-400">
            A list of specialties available in your clinic.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search specialties..."
            className="bg-zinc-800 text-white p-3 rounded w-1/3 outline-none"
          />
          <div className="flex gap-2">
            <button className="bg-zinc-800 p-3 rounded">🔍</button>
            <button className="bg-zinc-800 p-3 rounded">⏬</button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Specialty</th>
              <th className="p-4">Description</th>
              <th className="p-4">Doctors</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {specialties.map((s) => (
              <tr key={s.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{s.name}</td>
                <td className="p-4">{s.description}</td>
                <td className="p-4">{s.doctors}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Specialization Statistics */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-2">Specialization Statistics</h2>
        <p className="text-gray-400 mb-4">
          Overview of specializations and associated doctors.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold">Cardiology</h3>
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-400">Doctors</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold">Neurology</h3>
            <p className="text-3xl font-bold">3</p>
            <p className="text-gray-400">Doctors</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold">Pediatrics</h3>
            <p className="text-3xl font-bold">7</p>
            <p className="text-gray-400">Doctors</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold">Orthopedics</h3>
            <p className="text-3xl font-bold">4</p>
            <p className="text-gray-400">Doctors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
