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

const Doctor = () => {
  const [reviews] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 5,
      comment: "Very professional and caring. Explained everything clearly.",
      patient: "Ali Khan",
      date: "2025-09-05",
    },
    {
      id: 2,
      doctor: "Dr. Ahmed Raza",
      specialty: "Orthopedic",
      rating: 4,
      comment: "Good experience, but waiting time was a bit long.",
      patient: "Fatima Malik",
      date: "2025-09-10",
    },
    {
      id: 3,
      doctor: "Dr. Ayesha Siddiqui",
      specialty: "Dermatologist",
      rating: 5,
      comment: "Excellent diagnosis and treatment. Highly recommended!",
      patient: "Sara Ahmed",
      date: "2025-09-12",
    },
    {
      id: 4,
      doctor: "Dr. Michael Smith",
      specialty: "Neurologist",
      rating: 3,
      comment: "Knowledgeable but the consultation was too short.",
      patient: "John Doe",
      date: "2025-09-14",
    },
  ]);

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  // Prepare star-wise data
  const starCounts = [1, 2, 3, 4, 5].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Doctor Reviews</h1>
          <p className="text-gray-400">
            See feedback and comments from patients about doctors.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Reviews</h2>
          <p className="text-3xl font-bold mt-2">{reviews.length}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Average Rating</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {averageRating.toFixed(1)} ⭐
          </p>
        </div>
      </div>

      {/* Star-wise Graph */}
      <div className="bg-zinc-900 p-6 rounded-lg mb-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Star Wise Rating</h2>
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
            <Bar dataKey="count" fill="#facc15" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Reviews Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Patient Feedback</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Doctor</th>
              <th className="p-4">Specialty</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Comment</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev) => (
              <tr key={rev.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{rev.doctor}</td>
                <td className="p-4">{rev.specialty}</td>
                <td className="p-4 text-yellow-400 font-bold">{rev.rating} ⭐</td>
                <td className="p-4 italic text-gray-300">"{rev.comment}"</td>
                <td className="p-4">{rev.patient}</td>
                <td className="p-4">{rev.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
