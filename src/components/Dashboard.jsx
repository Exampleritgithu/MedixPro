import { useState } from "react";
import { DollarSign, Calendar, Users, UserPlus, Download } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: <DollarSign className="text-green-400" /> },
    { title: "Appointments", value: "+2,350", change: "+10.1% from last month", icon: <Calendar className="text-blue-400" /> },
    { title: "Patients", value: "+12,234", change: "+19% from last month", icon: <Users className="text-yellow-400" /> },
    { title: "Staff", value: "+573", change: "+4 new this month", icon: <UserPlus className="text-purple-400" /> },
  ];

  const chartData = [
    { month: "Jan", visits: 40, revenue: 5 },
    { month: "Feb", visits: 80, revenue: 8 },
    { month: "Mar", visits: 60, revenue: 6 },
    { month: "Apr", visits: 30, revenue: 4 },
    { month: "May", visits: 70, revenue: 7 },
    { month: "Jun", visits: 120, revenue: 9 },
    { month: "Jul", visits: 110, revenue: 9 },
    { month: "Aug", visits: 25, revenue: 3 },
    { month: "Sep", visits: 100, revenue: 8 },
    { month: "Oct", visits: 50, revenue: 6 },
    { month: "Nov", visits: 75, revenue: 7 },
    { month: "Dec", visits: 40, revenue: 4 },
  ];

  const appointments = [
    { name: "John Smith", type: "Check-up", time: "10:00 AM", status: "Confirmed", color: "bg-blue-600", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Emily Davis", type: "Consultation", time: "11:30 AM", status: "In Progress", color: "bg-yellow-500", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Robert Wilson", type: "Follow-up", time: "09:15 AM", status: "Completed", color: "bg-green-600", img: "https://i.pravatar.cc/150?img=3" },
  ];

  const tabs = ["Overview", "Analytics", "Reports", "Notifications"];

  return (
    <div className="p-4 sm:p-6 bg-black min-h-screen overflow-y-auto">
      {/* Dashboard Header */}
      <h1 className="text-2xl sm:text-4xl font-bold text-white mt-4">Dashboard</h1>
      <p className="text-gray-300 text-base sm:text-lg pt-2">
        Welcome back, Dr. Johnson! Here's what's happening today.
      </p>

      {/* Calendar + Export */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-stretch sm:items-center">
        <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-full sm:w-48">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-gray-800 text-white w-full"
            dateFormat="MMM dd, yyyy"
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-full sm:w-auto">
          <Download size={18} />
          <span className="text-white">Export</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-black border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-3xl sm:text-4xl">{stat.icon}</div>
              <h2 className="text-lg sm:text-2xl text-white font-bold pt-2">{stat.title}</h2>
              <p className="text-sm sm:text-lg text-green-400 pt-2">{stat.change}</p>
              <p className="text-xl sm:text-3xl font-bold text-white pt-4">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide bg-gray-900 p-2 rounded-lg mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
              activeTab === tab ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Chart */}
          <div className="bg-black border border-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-white">Overview</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">Patient visits and revenue for the current period.</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="visits" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Appointments */}
          <div className="bg-black border border-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-white">Recent Appointments</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">You have 12 appointments today.</p>
            <div className="space-y-4">
              {appointments.map((appt, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-900 p-4 rounded-xl gap-2">
                  <div className="flex items-center gap-3">
                    <img src={appt.img} alt={appt.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{appt.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{appt.type}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">Today · {appt.time}</p>
                    </div>
                  </div>
                  <span className={`${appt.color} text-white px-3 py-1 rounded-lg text-xs sm:text-sm text-center`}>
                    {appt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
