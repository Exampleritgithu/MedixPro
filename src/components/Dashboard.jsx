import { useState } from "react";
import { DollarSign, Calendar, Users, UserPlus, Download } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
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

  // Analytics Data
  const patientData = [
    { age: "0-17", male: 120, female: 140 },
    { age: "18-24", male: 150, female: 160 },
    { age: "25-34", male: 210, female: 280 },
    { age: "35-44", male: 180, female: 220 },
    { age: "45-54", male: 160, female: 180 },
    { age: "55-64", male: 140, female: 150 },
    { age: "65+", male: 120, female: 140 },
  ];

  const appointmentData = [
    { name: "Check-up", value: 35, color: "#4f46e5" },
    { name: "Follow-up", value: 20, color: "#f59e0b" },
    { name: "Procedure", value: 10, color: "#ef4444" },
    { name: "Emergency", value: 5, color: "#8b5cf6" },
    { name: "Other", value: 5, color: "#ec4899" },
  ];

  const revenueData = [
    { department: "Orthopedics", revenue: 12000 },
    { department: "Neurology", revenue: 9000 },
    { department: "Oncology", revenue: 6500 },
  ];

  const staffData = [
    { name: "Dr. Sarah Chen", role: "Cardiologist", patients: 42, rating: 4.9 },
    { name: "Dr. Michael Rodriguez", role: "Neurologist", patients: 38, rating: 4.8 },
  ];

  return (
    <div className="p-6 bg-black min-h-screen overflow-y-auto scrollbar-hide">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-bold text-white mt-6">Dashboard</h1>
      <p className="text-white text-lg pt-2">
        Welcome back, Dr. Johnson! Here's what's happening today.
      </p>

      {/* Calendar + Export */}
      <div className="flex gap-4 mt-4 items-center">
        <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-48">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-gray-800 text-white w-full"
            dateFormat="MMM dd, yyyy"
          />
        </div>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
          <Download size={18} />
          <span className="text-white">Export</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-black border-2 border-gray-600 rounded-2xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <div className="text-4xl">{stat.icon}</div>
              <h2 className="text-2xl text-white font-bold pt-2">{stat.title}</h2>
              <p className="text-lg text-green-400 pt-2">{stat.change}</p>
              <p className="text-3xl font-bold text-white pt-4">{stat.value}</p>
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
              activeTab === tab ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Overview Tab */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Overview Section */}
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Overview</h2>
            <p className="text-gray-400 mb-4">Patient visits and revenue for the current period.</p>
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
          <div className="bg-black border-2 border-gray-600 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-white">Recent Appointments</h2>
            <p className="text-gray-400 mb-4">You have 12 appointments today.</p>
            <div className="space-y-4">
              {appointments.map((appt, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-900 p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <img src={appt.img} alt={appt.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="text-white font-semibold">{appt.name}</h3>
                      <p className="text-gray-400">{appt.type}</p>
                      <p className="text-gray-500 text-sm">Today · {appt.time}</p>
                    </div>
                  </div>
                  <span className={`${appt.color} text-white px-3 py-1 rounded-lg text-sm`}>{appt.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "Analytics" && (
        <div className="mt-8 space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Patient Demographics */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Patient Demographics</h2>
              <p className="text-gray-400 text-sm mb-2">Age and gender distribution</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={patientData}>
                  <XAxis dataKey="age" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="male" fill="#3b82f6" />
                  <Bar dataKey="female" fill="#ec4899" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Appointment Types */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Appointment Types</h2>
              <p className="text-gray-400 text-sm mb-2">Distribution by service category</p>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={appointmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                    {appointmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Sources */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Revenue Sources</h2>
              <p className="text-gray-400 text-sm mb-2">Breakdown by department</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart layout="vertical" data={revenueData}>
                  <XAxis type="number" stroke="#9ca3af" />
                  <YAxis type="category" dataKey="department" stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Patient Satisfaction */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Patient Satisfaction</h2>
              <p className="text-gray-400 text-sm mb-4">Based on feedback surveys</p>
              <div className="mb-2">
                <span>Overall Experience</span>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-1">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: "87%" }}></div>
                </div>
                <span className="text-sm ml-2">87%</span>
              </div>
              <div className="mb-2">
                <span>Wait Time</span>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-1">
                  <div className="bg-yellow-500 h-4 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-sm ml-2">75%</span>
              </div>
            </div>

            {/* Staff Performance */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Staff Performance</h2>
              <p className="text-gray-400 text-sm mb-4">Top performing staff members</p>
              <ul>
                {staffData.map((staff, index) => (
                  <li key={index} className="mb-4 border-b border-gray-700 pb-2">
                    <p className="font-semibold">{staff.name}</p>
                    <p className="text-gray-400 text-sm">{staff.role}</p>
                    <p className="text-sm">
                      {staff.patients} patients | Rating: {staff.rating}/5
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Other Tabs */}
      {activeTab !== "Overview" && activeTab !== "Analytics" && (
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-bold">{activeTab}</h2>
          <p className="text-gray-400 mt-2">Content for {activeTab} will go here.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
