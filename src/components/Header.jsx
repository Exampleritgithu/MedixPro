import { Bell, Sun, Moon, Download, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = ({ open, setOpen }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();

  // Apply dark/light mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center border-2 border-gray-400 justify-between bg-black dark:bg-gray-900 text-white dark:text-black px-6 py-5 shadow">
      {/* Left side: Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Right side: Controls */}
      <div className="flex items-center gap-4">
       
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300"
        >
          {darkMode ? <Sun size={28} /> : <Moon size={28} />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 relative">
          <Bell size={28} className={darkMode ? "text-white" : "text-black"} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-10 h-10 flex items-center justify-center bg-gray-700 dark:bg-gray-300 rounded-full font-bold text-white dark:text-black cursor-pointer"
          >
            SJ
          </div>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Settings
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
