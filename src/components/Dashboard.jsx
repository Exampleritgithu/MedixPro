import {
  DollarSign,
  Calendar,
  Users,
  UserPlus,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: <DollarSign className="text-green-400" />,
    },
    {
      title: "Appointments",
      value: "+2,350",
      change: "+10.1% from last month",
      icon: <Calendar className="text-blue-400" />,
    },
    {
      title: "Patients",
      value: "+12,234",
      change: "+19% from last month",
      icon: <Users className="text-yellow-400" />,
    },
    {
      title: "Staff",
      value: "+573",
      change: "+4 new this month",
      icon: <UserPlus className="text-purple-400" />,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-400">Welcome back, Dr. Johnson! Here's what's happening today.</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex items-center justify-between"
          >
            <div>
              <h2 className="text-sm text-gray-400">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-green-400">{stat.change}</p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-bold">Overview</h2>
        <p className="text-gray-400">Patient visits and revenue for the current period.</p>
      </div>
    </div>
  );
};

export default Dashboard;
