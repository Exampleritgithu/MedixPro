import React, { useState } from "react";

const Stock = () => {
  const [medicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      category: "Pain Relief",
      expiry: "2026-05-15",
      use: "Used to treat fever and mild pain.",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Antibiotic",
      expiry: "2025-12-20",
      use: "Helps in treating bacterial infections.",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Cetirizine",
      category: "Antihistamine",
      expiry: "2027-03-10",
      use: "Relieves allergy symptoms like runny nose and itching.",
      status: "Out of Stock",
    },
    {
      id: 4,
      name: "Ibuprofen",
      category: "Pain Relief",
      expiry: "2026-09-05",
      use: "Reduces pain, inflammation, and fever.",
      status: "In Stock",
    },
    {
      id: 5,
      name: "Metformin",
      category: "Diabetes",
      expiry: "2028-01-18",
      use: "Used to control high blood sugar in type 2 diabetes.",
      status: "Low Stock",
    },
    {
      id: 6,
      name: "Atorvastatin",
      category: "Cholesterol",
      expiry: "2027-06-11",
      use: "Helps lower cholesterol and prevent heart disease.",
      status: "In Stock",
    },
    {
      id: 7,
      name: "Azithromycin",
      category: "Antibiotic",
      expiry: "2025-11-02",
      use: "Treats infections such as respiratory and skin infections.",
      status: "Out of Stock",
    },
    {
      id: 8,
      name: "Omeprazole",
      category: "Antacid",
      expiry: "2026-03-15",
      use: "Reduces stomach acid and treats ulcers.",
      status: "In Stock",
    },
    {
      id: 9,
      name: "Losartan",
      category: "Blood Pressure",
      expiry: "2027-08-20",
      use: "Used to treat high blood pressure and heart conditions.",
      status: "Low Stock",
    },
    {
      id: 10,
      name: "Insulin",
      category: "Diabetes",
      expiry: "2025-10-12",
      use: "Used for controlling blood sugar in diabetes.",
      status: "Out of Stock",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Medicine Stock</h1>
          <p className="text-gray-400">
            Manage your medicines, expiry dates, and availability.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow">
          + Add Medicine
        </button>
      </div>

      {/* Stock List Section */}
      <div className="bg-zinc-900 rounded-lg p-4 shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Stock List</h2>
          <p className="text-gray-400 text-sm">
            A list of all medicines in your pharmacy with their details.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search medicines..."
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
              <th className="p-3">Medicine Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Use</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med) => (
              <tr key={med.id} className="border-b border-gray-700">
                <td className="p-3 font-semibold">{med.name}</td>
                <td className="p-3">{med.category}</td>
                <td className="p-3">{med.expiry}</td>
                <td className="p-3 text-gray-300">{med.use}</td>
                <td className="p-3">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold text-center w-28 ${
                      med.status === "In Stock"
                        ? "bg-green-600"
                        : med.status === "Low Stock"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {med.status}
                  </div>
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

export default Stock;
