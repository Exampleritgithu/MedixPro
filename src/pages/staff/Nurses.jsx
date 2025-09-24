import React, { useState } from "react";

const Nurses = () => {
  const [nurses, setNurses] = useState([
    {
      id: 1,
      name: "Nurse Ayesha",
      designation: "Senior Nurse",
      email: "ayesha@nurses.com",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      postal: "54000",
      address: "Lahore, Pakistan",
      specialist: "Cardiology",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newNurse, setNewNurse] = useState({
    name: "",
    designation: "",
    email: "",
    image: "",
    postal: "",
    address: "",
    specialist: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setNewNurse({ ...newNurse, [e.target.name]: e.target.value });
  };

  // Add nurse
  const addNurse = () => {
    const { name, designation, email, image, postal, address, specialist } =
      newNurse;
    if (
      name &&
      designation &&
      email &&
      image &&
      postal &&
      address &&
      specialist
    ) {
      setNurses([...nurses, { id: nurses.length + 1, ...newNurse }]);
      setNewNurse({
        name: "",
        designation: "",
        email: "",
        image: "",
        postal: "",
        address: "",
        specialist: "",
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
          <h1 className="text-4xl font-bold">Nurses</h1>
          <p className="text-gray-400">
            Manage nurses and their ongoing work in the hospital.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow"
        >
          + Add Nurse
        </button>
      </div>

      {/* Nurses List */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Nurses List</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Email</th>
              <th className="p-4">Postal Code</th>
              <th className="p-4">Address</th>
              <th className="p-4">Specialist</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {nurses.map((n) => (
              <tr key={n.id} className="border-b border-gray-700">
                <td className="p-4">
                  <img
                    src={n.image}
                    alt={n.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-4 font-semibold">{n.name}</td>
                <td className="p-4">{n.designation}</td>
                <td className="p-4">{n.email}</td>
                <td className="p-4">{n.postal}</td>
                <td className="p-4">{n.address}</td>
                <td className="p-4">{n.specialist}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Nurse Form (Popup Modal) */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-zinc-900 p-6 rounded-lg w-[500px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Nurse</h2>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={newNurse.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={newNurse.designation}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newNurse.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newNurse.image}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="postal"
                placeholder="Postal Code"
                value={newNurse.postal}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newNurse.address}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="specialist"
                placeholder="Specialist"
                value={newNurse.specialist}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Cancel
              </button>
              <button
                onClick={addNurse}
                className="px-4 py-2 bg-green-500 rounded"
              >
                Add Nurse
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nurses;
