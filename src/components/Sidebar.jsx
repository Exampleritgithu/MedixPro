import {
  LayoutDashboard,
  User,
  Users,
  Calendar,
  FileText,
  Ambulance,
  Pill,
  Droplet,
} from "lucide-react";

const Sidebar = ({ open }) => {
  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-black h-screen p-4 transition-all duration-300`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        <span className="bg-blue-500 p-2 rounded">M</span>
        {open && "MedixPro"}
      </h1>

      {/* Menu */}
      <ul className="space-y-4">
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <LayoutDashboard /> {open && "Dashboard"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <User /> {open && "Doctors"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Users /> {open && "Patients"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Calendar /> {open && "Appointments"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FileText /> {open && "Prescriptions"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Ambulance /> {open && "Ambulance"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Pill /> {open && "Pharmacy"}
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Droplet /> {open && "Blood Bank"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
