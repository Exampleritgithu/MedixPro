import { useState } from "react";
import { Users, AlertTriangle, CheckCircle, Clock } from "lucide-react";
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

const Requests = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Stats
  const stats = [
    {
      title: "Total Requests",
      value: "1,280",
      icon: <Users className="text-blue-400" />,
    },
    {
      title: "Pending Requests",
      value: "320",
      icon: <Clock className="text-yellow-400" />,
    },
    {
      title: "Fulfilled Requests",
      value: "900",
      icon: <CheckCircle className="text-green-400" />,
    },
    {
      title: "Urgent Cases",
      value: "60",
      icon: <AlertTriangle className="text-red-400" />,
    },
  ];

  // Chart Data
  const requestTrends = [
    { month: "Jan", requests: 200 },
    { month: "Feb", requests: 180 },
    { month: "Mar", requests: 240 },
    { month: "Apr", requests: 300 },
    { month: "May", requests: 220 },
    { month: "Jun", requests: 140 },
  ];

  const urgencyData = [
    { name: "Normal", value: 800, color: "#3b82f6" },
    { name: "High", value: 420, color: "#f59e0b" },
    { name: "Critical", value: 60, color: "#ef4444" },
  ];

  // Recent Requests
  const recentRequests = [
    {
      name: "John Doe",
      blood: "O+",
      status: "Pending",
      urgency: "High",
      requested: "2 hrs ago",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Emma Watson",
      blood: "B-",
      status: "Fulfilled",
      urgency: "Normal",
      requested: "1 day ago",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Michael Lee",
      blood: "A+",
      status: "Pending",
      urgency: "Critical",
      requested: "30 mins ago",
      img: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const tabs = ["Overview", "Analytics", "Records"];

  return (
    <div className="p-6 bg-black min-h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mt-6">Requests</h1>
      <p className="text-white text-lg pt-2">
        Manage and monitor blood requests efficiently.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
          {/* Requests Trends */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Request Trends</h2>
            <p className="text-gray-400 mb-4">Monthly requests overview</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={requestTrends}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="requests" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Requests */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Recent Requests</h2>
            <p className="text-gray-400 mb-4">Latest blood requests</p>
            <div className="space-y-4">
              {recentRequests.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-800 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={req.img}
                      alt={req.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{req.name}</h3>
                      <p className="text-gray-400">Blood: {req.blood}</p>
                      <p className="text-sm text-gray-500">
                        Requested · {req.requested}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-semibold ${
                        req.status === "Fulfilled"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {req.status}
                    </p>
                    <p
                      className={`text-xs ${
                        req.urgency === "Critical"
                          ? "text-red-400"
                          : req.urgency === "High"
                          ? "text-orange-400"
                          : "text-blue-400"
                      }`}
                    >
                      {req.urgency}
                    </p>
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
          {/* Urgency Distribution */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">
              Urgency Distribution
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={urgencyData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {urgencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Requests by Month (Bar Chart) */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Requests by Month</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={requestTrends}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="requests" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Records Tab */}
      {activeTab === "Records" && (
        <div className="mt-8 bg-gray-900 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-bold">Request Records</h2>
          <p className="text-gray-400 mt-2">
            Historical request details will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Requests;
