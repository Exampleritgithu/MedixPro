import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

// Lazy load pages
const DashboardOverview = lazy(() => import("./pages/dashboard/AdminDashboard"));
const DashboardAnalytics = lazy(() => import("./pages/dashboard/Analytics"));
const DashboardActivity = lazy(() => import("./pages/dashboard/Activity"));

const AllDoctors = lazy(() => import("./pages/doctors/All"));
const Specialists = lazy(() => import("./pages/doctors/Specialists"));
const DoctorSchedules = lazy(() => import("./pages/doctors/Schedules"));

const AllPatients = lazy(() => import("./pages/patients/All"));
const PatientAdmissions = lazy(() => import("./pages/patients/Admissions"));
const PatientHistory = lazy(() => import("./pages/patients/History"));

const UpcomingAppointments = lazy(() => import("./pages/appointments/Upcoming"));
const PastAppointments = lazy(() => import("./pages/appointments/Past"));
const RequestAppointments = lazy(() => import("./pages/appointments/Requests"));

const PharmacyStock = lazy(() => import("./pages/pharmacy/Stock"));
const PharmacyOrders = lazy(() => import("./pages/pharmacy/Orders"));
const PharmacySuppliers = lazy(() => import("./pages/pharmacy/Suppliers"));

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar open={open} setOpen={setOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header open={open} setOpen={setOpen} />

          {/* Page Routes */}
          <div className="flex-1 overflow-y-auto p-6">
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />

                {/* Dashboard */}
                <Route path="/dashboard/adminDashboard" element={<DashboardOverview />} />
                <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
                <Route path="/dashboard/activity" element={<DashboardActivity />} />

                {/* Doctors */}
                <Route path="/doctors/all" element={<AllDoctors />} />
                <Route path="/doctors/specialists" element={<Specialists />} />
                <Route path="/doctors/schedules" element={<DoctorSchedules />} />

                {/* Patients */}
                <Route path="/patients/all" element={<AllPatients />} />
                <Route path="/patients/admissions" element={<PatientAdmissions />} />
                <Route path="/patients/history" element={<PatientHistory />} />

                {/* Appointments */}
                <Route path="/appointments/upcoming" element={<UpcomingAppointments />} />
                <Route path="/appointments/past" element={<PastAppointments />} />
                <Route path="/appointments/requests" element={<RequestAppointments />} />

                {/* Pharmacy */}
                <Route path="/pharmacy/stock" element={<PharmacyStock />} />
                <Route path="/pharmacy/orders" element={<PharmacyOrders />} />
                <Route path="/pharmacy/suppliers" element={<PharmacySuppliers />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
