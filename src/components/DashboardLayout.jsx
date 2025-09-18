import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // closed by default on mobile

  return (
    <div className="flex h-screen w-screen bg-black m-0 p-0 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-900 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:relative lg:translate-x-0`}
      >
        <Sidebar open={sidebarOpen} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 bg-black overflow-y-auto text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Welcome to MedixPro Dashboard</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base">Here’s your content...</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
