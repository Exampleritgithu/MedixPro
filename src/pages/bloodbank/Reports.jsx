import { Users, Heart, Calendar, FileText } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Reports = () => {
  // Reuse data from Donors
  const stats = [
    {
      title: "Total Donors",
      value: "8,240",
      icon: <Users className="text-blue-400" />,
    },
    {
      title: "Blood Donations",
      value: "2,150",
      icon: <Heart className="text-red-400" />,
    },
    {
      title: "Upcoming Camps",
      value: "15",
      icon: <Calendar className="text-yellow-400" />,
    },
  ];

  const donationTrends = [
    { month: "Jan", donations: 300 },
    { month: "Feb", donations: 450 },
    { month: "Mar", donations: 400 },
    { month: "Apr", donations: 520 },
    { month: "May", donations: 610 },
    { month: "Jun", donations: 720 },
  ];

  const bloodGroupData = [
    { name: "A+", value: 2400, color: "#ef4444" },
    { name: "A-", value: 1200, color: "#f97316" },
    { name: "B+", value: 2200, color: "#3b82f6" },
    { name: "B-", value: 1000, color: "#6366f1" },
    { name: "O+", value: 2800, color: "#22c55e" },
    { name: "O-", value: 800, color: "#14b8a6" },
    { name: "AB+", value: 600, color: "#eab308" },
    { name: "AB-", value: 300, color: "#a855f7" },
  ];

  return (
    <div className="p-6 bg-black min-h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white mt-6">Reports</h1>
        <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
          <FileText size={20} /> Export Report
        </button>
      </div>
      <p className="text-gray-300 text-lg pt-2">
        Detailed blood donation reports, summaries, and insights.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-black border-2 border-gray-600 rounded-2xl p-6 shadow-lg flex items-center gap-4"
          >
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <h2 className="text-white text-lg font-semibold">
                {stat.title}
              </h2>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Donations Over Time */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-white">Monthly Donations</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={donationTrends}>
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="donations" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Group Usage */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-white">
            Blood Group Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={bloodGroupData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {bloodGroupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabular Report */}
      <div className="mt-8 bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-white">Detailed Report</h2>
        <p className="text-gray-400 text-sm mb-4">
          Monthly blood donation summary.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-700 text-white">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border-b border-gray-700">Month</th>
                <th className="p-3 border-b border-gray-700">Donations</th>
              </tr>
            </thead>
            <tbody>
              {donationTrends.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-800 transition-colors"
                >
                  <td className="p-3 border-b border-gray-700">{row.month}</td>
                  <td className="p-3 border-b border-gray-700">
                    {row.donations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
