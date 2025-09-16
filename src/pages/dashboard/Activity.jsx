import { useState } from "react";
import { Users, Activity, HeartPulse, Calendar } from "lucide-react";
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

const Patients = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = [
    {
      title: "Total Patients",
      value: "12,450",
      change: "+8.4% from last month",
      icon: <Users className="text-blue-400" />,
    },
    {
      title: "New Patients",
      value: "1,230",
      change: "+5.1% this month",
      icon: <Activity className="text-green-400" />,
    },
    {
      title: "Admitted",
      value: "432",
      change: "+2.4% this week",
      icon: <HeartPulse className="text-red-400" />,
    },
    {
      title: "Appointments",
      value: "3,210",
      change: "+12.1% this month",
      icon: <Calendar className="text-yellow-400" />,
    },
  ];

  // Charts Data
  const patientVisits = [
    { month: "Jan", visits: 120 },
    { month: "Feb", visits: 180 },
    { month: "Mar", visits: 140 },
    { month: "Apr", visits: 220 },
    { month: "May", visits: 200 },
    { month: "Jun", visits: 260 },
  ];

  const genderData = [
    { name: "Male", value: 6500, color: "#3b82f6" },
    { name: "Female", value: 5950, color: "#ec4899" },
  ];

  const conditionData = [
    { name: "Cardiology", patients: 1200 },
    { name: "Neurology", patients: 800 },
    { name: "Orthopedics", patients: 600 },
    { name: "Pediatrics", patients: 950 },
  ];

  const recentPatients = [
    {
      name: "John Smith",
      condition: "Diabetes",
      admitted: "2 days ago",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Emily Johnson",
      condition: "Asthma",
      admitted: "5 days ago",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Michael Lee",
      condition: "Fracture",
      admitted: "1 day ago",
      img: "https://i.pravatar.cc/150?img=6",
    },
  ];

  const tabs = ["Overview", "Analytics", "Records"];

  return (
    <div className="p-6 bg-black min-h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mt-6">Patients</h1>
      <p className="text-white text-lg pt-2">
        Manage patient statistics, demographics, and records.
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
          {/* Patient Visits Chart */}
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Patient Visits</h2>
            <p className="text-gray-400 mb-4">Monthly patient visits</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={patientVisits}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="visits" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Patients */}
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Recent Patients</h2>
            <p className="text-gray-400 mb-4">Latest admitted patients</p>
            <div className="space-y-4">
              {recentPatients.map((patient, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-900 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={patient.img}
                      alt={patient.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        {patient.name}
                      </h3>
                      <p className="text-gray-400">{patient.condition}</p>
                      <p className="text-gray-500 text-sm">
                        Admitted · {patient.admitted}
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
          {/* Gender Distribution */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Gender Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Common Conditions */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Common Conditions</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={conditionData}>
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis type="category" dataKey="name" stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="patients" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Records Tab */}
      {activeTab === "Records" && (
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-bold">Patient Records</h2>
          <p className="text-gray-400 mt-2">
            Patient medical history and records will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Patients;
