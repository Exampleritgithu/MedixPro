import {
  LayoutDashboard,
  User,
  Users,
  Calendar,
  Pill,
  Droplet,
  Shield,
  Settings,
  BarChart3,
  MessageSquare,
  Star,
  Bed,
  FileStack,
  Users2,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  
  {
    key: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    subMenu: [
      { label: "Admin Dashboard", to: "/dashboard/admindashboard" },
      { label: "Doctor Dashboard", to: "/dashboard/analytics" },
      { label: "Patient Dashboard", to: "/dashboard/activity" },
    ],
  },
  {
    key: "doctors",
    label: "Doctors",
    icon: User,
    subMenu: [
      { label: "All Doctors", to: "/doctors/all" },
      { label: "Specialists", to: "/doctors/specialists" },
      { label: "Schedules", to: "/doctors/schedules" },
    ],
  },
  {
    key: "patients",
    label: "Patients",
    icon: Users,
    subMenu: [
      { label: "All Patients", to: "/patients/all" },
      { label: "Admissions", to: "/patients/admissions" },
      { label: "History", to: "/patients/history" },
    ],
  },
  {
    key: "appointments",
    label: "Appointments",
    icon: Calendar,
    subMenu: [
      { label: "Upcoming", to: "/appointments/upcoming" },
      { label: "Past", to: "/appointments/past" },
      { label: "Requests", to: "/appointments/requests" },
    ],
  },
  {
    key: "pharmacy",
    label: "Pharmacy",
    icon: Pill,
    subMenu: [
      { label: "Stock", to: "/pharmacy/stock" },
      { label: "Orders", to: "/pharmacy/orders" },
      { label: "Suppliers", to: "/pharmacy/suppliers" },
    ],
  },
  {
    key: "bloodbank",
    label: "Blood Bank",
    icon: Droplet,
    subMenu: [
      { label: "Donors", to: "/bloodbank/donors" },
      { label: "Requests", to: "/bloodbank/requests" },
      { label: "Reports", to: "/bloodbank/reports" },
    ],
  },
  {
    key: "staff",
    label: "Staff",
    icon: Users2,
    subMenu: [
      { label: "Doctors", to: "/staff/doctors" },
      { label: "Nurses", to: "/staff/nurses" },
      { label: "Admin Staff", to: "/staff/admin" },
    ],
  },
  {
    key: "records",
    label: "Records",
    icon: FileStack,
    subMenu: [
      { label: "Patient Records", to: "/records/patients" },
      { label: "Billing", to: "/records/billing" },
    ],
  },
  {
    key: "rooms",
    label: "Rooms",
    icon: Bed,
    subMenu: [
      { label: "Available", to: "/rooms/available" },
      { label: "Occupied", to: "/rooms/occupied" },
    ],
  },
  {
    key: "reviews",
    label: "Reviews",
    icon: Star,
    subMenu: [
      { label: "Patient Reviews", to: "/reviews/patient" },
      { label: "Doctor Reviews", to: "/reviews/doctor" },
    ],
  },
  {
    key: "feedback",
    label: "Feedback",
    icon: MessageSquare,
    subMenu: [
      { label: "Patient Feedback", to: "/feedback/patients" },
      { label: "Staff Feedback", to: "/feedback/staff" },
    ],
  },
  {
    key: "reports",
    label: "Reports",
    icon: BarChart3,
    subMenu: [
      { label: "Daily", to: "/reports/daily" },
      { label: "Monthly", to: "/reports/monthly" },
      { label: "Annual", to: "/reports/annual" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: Settings,
    subMenu: [
      { label: "Profile", to: "/settings/profile" },
      { label: "Security", to: "/settings/security" },
    ],
  },
  {
    key: "auth",
    label: "Auth",
    icon: Shield,
    subMenu: [
      { label: "Login", to: "/auth/login" },
      { label: "Register", to: "/auth/register" },
      { label: "Forgot Password", to: "/auth/forgot-password" },
    ],
  },
];

const Sidebar = ({ open }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`${
        open ? "w-72" : "w-24"
      } bg-black h-screen p-4 transition-all duration-300 overflow-y-auto scrollbar-hide`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        <span className="p-2 rounded">
          <img src="Logo.png" alt="Logo" className="w-12 h-10" />
        </span>
        {open && "MedixPro"}
      </h1>

      {/* Menu */}
      <ul className="space-y-8 text-xl">
        {menuItems.map(({ key, label, icon: Icon, subMenu }) => (
          <li key={key}>
            <div
              className="flex items-center justify-between text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer"
              onClick={() => toggleMenu(key)}
            >
              <span className="flex items-center gap-2">
                <Icon /> {open && label}
              </span>
              {open && (
                <ChevronDown
                  className={`${
                    openMenu === key ? "rotate-180" : ""
                  } transition`}
                />
              )}
            </div>
            {openMenu === key && open && (
              <ul className="ml-8 space-y-2 text-gray-300 text-base">
                {subMenu.map(({ label: subLabel, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="hover:bg-gray-800 rounded-lg p-2 block"
                    >
                      {subLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
