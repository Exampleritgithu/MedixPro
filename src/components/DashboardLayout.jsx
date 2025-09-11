import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-black m-0 p-0">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto text-white">
          <h2 className="text-2xl font-bold">Welcome to MedixPro Dashboard</h2>
          <p className="mt-4">Here’s your content...</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
