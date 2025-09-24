import React, { useState } from "react";

const Occupied = () => {
  const [occupiedRooms, setOccupiedRooms] = useState([
    { id: 1, roomNo: "102", patient: "Ali Khan", type: "Double", price: 5000, date: "2025-09-05" },
    { id: 2, roomNo: "104", patient: "Sara Ahmed", type: "Single", price: 3000, date: "2025-09-10" },
    { id: 3, roomNo: "106", patient: "John Doe", type: "ICU", price: 10000, date: "2025-09-14" },
  ]);

  const totalOccupied = occupiedRooms.length;
  const totalIncome = occupiedRooms.reduce((sum, r) => sum + r.price, 0);

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Occupied Rooms</h1>
          <p className="text-gray-400">
            View details of patients currently occupying rooms.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Occupied Rooms</h2>
          <p className="text-3xl font-bold text-red-400 mt-2">{totalOccupied}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Income</h2>
          <p className="text-3xl font-bold text-green-400 mt-2">Rs. {totalIncome}</p>
        </div>
      </div>

      {/* Occupied Rooms Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Occupied Room Records</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Room No</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Type</th>
              <th className="p-4">Price (Rs.)</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {occupiedRooms.map((room) => (
              <tr key={room.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{room.roomNo}</td>
                <td className="p-4">{room.patient}</td>
                <td className="p-4">{room.type}</td>
                <td className="p-4">Rs. {room.price}</td>
                <td className="p-4">{room.date}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Occupied;
