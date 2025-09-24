import React, { useState } from "react";

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ali Khan",
      age: 32,
      gender: "Male",
      contact: "0301-1234567",
      disease: "Fever",
      date: "2025-09-01",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 27,
      gender: "Female",
      contact: "0302-9876543",
      disease: "Diabetes",
      date: "2025-09-03",
    },
    {
      id: 3,
      name: "John Doe",
      age: 40,
      gender: "Male",
      contact: "0305-1122334",
      disease: "Asthma",
      date: "2025-09-05",
    },
    {
      id: 4,
      name: "Fatima Noor",
      age: 22,
      gender: "Female",
      contact: "0307-4455667",
      disease: "Allergy",
      date: "2025-09-07",
    },
    {
      id: 5,
      name: "Hamza Yousaf",
      age: 36,
      gender: "Male",
      contact: "0309-7788990",
      disease: "Hypertension",
      date: "2025-09-10",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    disease: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const addPatient = () => {
    if (
      newPatient.name &&
      newPatient.age &&
      newPatient.gender &&
      newPatient.contact &&
      newPatient.disease &&
      newPatient.date
    ) {
      setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
      setNewPatient({
        name: "",
        age: "",
        gender: "Male",
        contact: "",
        disease: "",
        date: "",
      });
      setShowForm(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Patients</h1>
          <p className="text-gray-400">Manage patient records and details.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow"
        >
          + Add Patient
        </button>
      </div>

      {/* Patients Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Patient List</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Age</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Disease</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{p.name}</td>
                <td className="p-4">{p.age}</td>
                <td className="p-4">{p.gender}</td>
                <td className="p-4">{p.contact}</td>
                <td className="p-4">{p.disease}</td>
                <td className="p-4">{p.date}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Patient Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-zinc-900 p-6 rounded-lg w-[500px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={newPatient.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newPatient.age}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <select
                name="gender"
                value={newPatient.gender}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={newPatient.contact}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="disease"
                placeholder="Disease / Issue"
                value={newPatient.disease}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="date"
                name="date"
                value={newPatient.date}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Cancel
              </button>
              <button
                onClick={addPatient}
                className="px-4 py-2 bg-green-500 rounded"
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
