import { Bell, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = ({ open, setOpen }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const profileRef = useRef();
  const notifRef = useRef();

  const notifications = [
    { id: 1, text: "Ali Khan booked an appointment.", time: "2m ago" },
    { id: 2, text: "Sara Ahmed canceled her checkup.", time: "10m ago" },
    { id: 3, text: "John Doe completed consultation.", time: "1h ago" },
  ];

  // Apply dark/light mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        notifRef.current &&
        !notifRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const btnStyle =
    "p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300";

  return (
    <header className="flex items-center justify-between border-2 border-gray-400 bg-black dark:bg-gray-100 text-white dark:text-black px-6 py-5 shadow">
      {/* Left side: Menu */}
      <button
        onClick={() => setOpen(!open)}
        className={`${btnStyle} rounded-lg`}
      >
        <Menu size={22} />
      </button>

      {/* Right side: Controls */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className={btnStyle}>
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className={`${btnStyle} relative`}
          >
            <Bell size={22} />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs bg-red-500 text-white rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg z-50">
              <div className="px-4 py-2 font-bold border-b border-gray-200 dark:border-gray-700">
                Notifications
              </div>
              <ul>
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <p className="text-sm">{n.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {n.time}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 text-center text-blue-600 dark:text-blue-400 text-sm hover:underline cursor-pointer border-t border-gray-200 dark:border-gray-700">
                View All
              </div>
            </div>
          )}
        </div>

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
              {["Profile", "Settings", "Logout"].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
