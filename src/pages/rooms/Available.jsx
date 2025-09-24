import React, { useState } from "react";

const Available = () => {
  const [rooms, setRooms] = useState([
    { id: 1, roomNo: "101", type: "Single", status: "Available", price: 3000 },
    { id: 2, roomNo: "102", type: "Double", status: "Occupied", price: 5000 },
    { id: 3, roomNo: "103", type: "ICU", status: "Available", price: 10000 },
    { id: 4, roomNo: "104", type: "Single", status: "Occupied", price: 3000 },
    { id: 5, roomNo: "105", type: "VIP Suite", status: "Available", price: 15000 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomNo: "",
    type: "",
    status: "Available",
    price: "",
  });

  const handleChange = (e) => {
    setNewRoom({ ...newRoom, [e.target.name]: e.target.value });
  };

  const addRoom = () => {
    if (newRoom.roomNo && newRoom.type && newRoom.status && newRoom.price) {
      setRooms([...rooms, { id: rooms.length + 1, ...newRoom }]);
      setNewRoom({ roomNo: "", type: "", status: "Available", price: "" });
      setShowForm(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((r) => r.status === "Available").length;
  const occupiedRooms = totalRooms - availableRooms;

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Room Availability</h1>
          <p className="text-gray-400">
            Track available and occupied hospital rooms.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow"
        >
          + Add Room
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Rooms</h2>
          <p className="text-3xl font-bold mt-2">{totalRooms}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Available</h2>
          <p className="text-3xl font-bold text-green-400 mt-2">
            {availableRooms}
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Occupied</h2>
          <p className="text-3xl font-bold text-red-400 mt-2">
            {occupiedRooms}
          </p>
        </div>
      </div>

      {/* Room Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Room Records</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Room No</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price (Rs.)</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{room.roomNo}</td>
                <td className="p-4">{room.type}</td>
                <td
                  className={`p-4 font-bold ${
                    room.status === "Available"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {room.status}
                </td>
                <td className="p-4">Rs. {room.price}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Room Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-zinc-900 p-6 rounded-lg w-[500px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Room</h2>

            <div className="space-y-3">
              <input
                type="text"
                name="roomNo"
                placeholder="Room Number"
                value={newRoom.roomNo}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="type"
                placeholder="Room Type (Single, Double, ICU, etc.)"
                value={newRoom.type}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <select
                name="status"
                value={newRoom.status}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              >
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
              </select>
              <input
                type="number"
                name="price"
                placeholder="Room Price"
                value={newRoom.price}
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
                onClick={addRoom}
                className="px-4 py-2 bg-green-500 rounded"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Available;
