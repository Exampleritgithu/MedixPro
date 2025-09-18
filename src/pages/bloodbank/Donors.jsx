import { useState } from "react";
import { Users, Activity, Heart, Calendar } from "lucide-react";
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

const Donors = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Stats
  const stats = [
    {
      title: "Total Donors",
      value: "8,240",
      change: "+6.2% from last month",
      icon: <Users className="text-blue-400" />,
    },
    {
      title: "New Donors",
      value: "620",
      change: "+4.5% this month",
      icon: <Activity className="text-green-400" />,
    },
    {
      title: "Blood Donations",
      value: "2,150",
      change: "+9.8% this week",
      icon: <Heart className="text-red-400" />,
    },
    {
      title: "Upcoming Camps",
      value: "15",
      change: "Scheduled this month",
      icon: <Calendar className="text-yellow-400" />,
    },
  ];

  // Charts Data
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

  const donationFrequency = [
    { name: "Regular Donors", donors: 3500 },
    { name: "Occasional Donors", donors: 2800 },
    { name: "First-Time Donors", donors: 1940 },
  ];

  // Recent Donors
  const recentDonors = [
    {
      name: "Alice Brown",
      blood: "A+",
      donated: "2 days ago",
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "David Wilson",
      blood: "O-",
      donated: "5 days ago",
      img: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Sophia Martinez",
      blood: "B+",
      donated: "1 week ago",
      img: "https://i.pravatar.cc/150?img=16",
    },
  ];

  const tabs = ["Overview", "Analytics", "Records"];

  return (
    <div className="p-6 bg-black min-h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mt-6">Donors</h1>
      <p className="text-white text-lg pt-2">
        Manage blood donor statistics, demographics, and records.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-black border-2 border-gray-600 rounded-2xl p-6 shadow-lg flex items-center justify-between"
          >
            <div>
              <div className="text-4xl">{stat.icon}</div>
              <h2 className="text-2xl text-white font-bold pt-2">
                {stat.title}
              </h2>
              <p className="text-lg text-green-400 pt-2">{stat.change}</p>
              <p className="text-3xl font-bold text-white pt-4">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-900 p-2 rounded-lg w-fit mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Donation Trends Chart */}
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Donation Trends</h2>
            <p className="text-gray-400 mb-4">Monthly blood donations</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={donationTrends}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="donations" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Donors */}
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Recent Donors</h2>
            <p className="text-gray-400 mb-4">Latest blood donations</p>
            <div className="space-y-4">
              {recentDonors.map((donor, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-900 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={donor.img}
                      alt={donor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{donor.name}</h3>
                      <p className="text-gray-400">Blood Group: {donor.blood}</p>
                      <p className="text-gray-500 text-sm">
                        Donated · {donor.donated}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "Analytics" && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blood Group Distribution */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
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

          {/* Donation Frequency */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">
              Donation Frequency
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={donationFrequency}>
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis type="category" dataKey="name" stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="donors" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Records Tab */}
      {activeTab === "Records" && (
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-bold">Donor Records</h2>
          <p className="text-gray-400 mt-2">
            Donor details and blood donation history will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Donors;
