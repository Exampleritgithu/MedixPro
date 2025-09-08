import { Bell, Sun, Moon, Calendar as CalendarIcon, Download } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow">
      {/* Left side: Title */}
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Right side: Controls */}
      <div className="flex items-center gap-4">
        {/* Date Picker */}
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
          <CalendarIcon size={18} />
          <span>Sep 08, 2025 - Sep 08, 2025</span>
        </button>

        {/* Export Button */}
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
          <Download size={18} />
          <span>Export</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-700 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full font-bold">
          SJ
        </div>
      </div>
    </header>
  );
};

export default Header;
