import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Patients = () => {
  const [feedbacks] = useState([
    {
      id: 1,
      patient: "Ali Khan",
      doctor: "Dr. Sarah Johnson",
      rating: 5,
      comment: "Very satisfied with the treatment.",
      date: "2025-09-05",
    },
    {
      id: 2,
      patient: "Fatima Malik",
      doctor: "Dr. Ahmed Raza",
      rating: 4,
      comment: "Good care but long waiting time.",
      date: "2025-09-10",
    },
    {
      id: 3,
      patient: "Sara Ahmed",
      doctor: "Dr. Ayesha Siddiqui",
      rating: 5,
      comment: "Excellent experience, highly recommended!",
      date: "2025-09-12",
    },
    {
      id: 4,
      patient: "John Doe",
      doctor: "Dr. Michael Smith",
      rating: 3,
      comment: "Treatment was fine but consultation was short.",
      date: "2025-09-14",
    },
  ]);

  // Average Rating
  const avgRating =
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length;

  // Star-wise distribution
  const starCounts = [1, 2, 3, 4, 5].map((star) => ({
    star,
    count: feedbacks.filter((f) => f.rating === star).length,
  }));

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Patient Feedback</h1>
          <p className="text-gray-400">
            See what patients are saying about their experiences.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Feedback</h2>
          <p className="text-3xl font-bold mt-2">{feedbacks.length}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Average Rating</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {avgRating.toFixed(1)} ⭐
          </p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-zinc-900 p-6 rounded-lg mb-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Rating Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={starCounts} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="star"
              tickFormatter={(val) => `${val} ⭐`}
              stroke="#aaa"
            />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="count" fill="#22c55e" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Feedback Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Patient Reviews</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Patient</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Comment</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{fb.patient}</td>
                <td className="p-4">{fb.doctor}</td>
                <td className="p-4 text-yellow-400 font-bold">{fb.rating} ⭐</td>
                <td className="p-4 italic text-gray-300">"{fb.comment}"</td>
                <td className="p-4">{fb.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
