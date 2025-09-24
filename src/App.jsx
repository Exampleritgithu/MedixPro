import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

// Lazy load pages
const DashboardOverview = lazy(() =>
  import("./pages/dashboard/AdminDashboard")
);
const DashboardAnalytics = lazy(() => import("./pages/dashboard/Analytics"));
const DashboardActivity = lazy(() => import("./pages/dashboard/Activity"));

const AllDoctors = lazy(() => import("./pages/doctors/All"));
const Specialists = lazy(() => import("./pages/doctors/Specialists"));
const DoctorSchedules = lazy(() => import("./pages/doctors/Schedules"));

const AllPatients = lazy(() => import("./pages/patients/All"));
const PatientAdmissions = lazy(() => import("./pages/patients/Admissions"));
const PatientHistory = lazy(() => import("./pages/patients/History"));

const UpcomingAppointments = lazy(() =>
  import("./pages/appointments/Upcoming")
);
const PastAppointments = lazy(() => import("./pages/appointments/Past"));
const RequestAppointments = lazy(() => import("./pages/appointments/Requests"));

const PharmacyStock = lazy(() => import("./pages/pharmacy/Stock"));
const PharmacyOrders = lazy(() => import("./pages/pharmacy/Orders"));
const PharmacySuppliers = lazy(() => import("./pages/pharmacy/Suppliers"));
import BloodDonors from "./pages/bloodbank/Donors";
import BloodRequests from "./pages/bloodbank/Requests";
import BloodReports from "./pages/bloodbank/Reports";
import StaffDoctors from "./pages/staff/Doctors";
import StaffNurses from "./pages/staff/Nurses";
import StaffAdmin from "./pages/staff/Admin";
import PatientRecords from "./pages/records/Patients";
import BillingRecords from "./pages/records/Billing";
import AvailableRooms from "./pages/rooms/Available";
import OccupiedRooms from "./pages/rooms/Occupied";
import PatientReviews from "./pages/reviews/Patient";
import DoctorReviews from "./pages/reviews/Doctor";
import PatientFeedback from "./pages/feedback/Patients";
import StaffFeedback from "./pages/feedback/Staff";
import DailyReports from "./pages/reports/Daily";
import MonthlyReports from "./pages/reports/Monthly";
import AnnualReports from "./pages/reports/Annual";
import ProfileSettings from "./pages/settings/Profile";
import SecuritySettings from "./pages/settings/Security";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-black">
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
                <Route
                  path="/dashboard/adminDashboard"
                  element={<DashboardOverview />}
                />
                <Route
                  path="/dashboard/analytics"
                  element={<DashboardAnalytics />}
                />
                <Route
                  path="/dashboard/activity"
                  element={<DashboardActivity />}
                />
                {/* Doctors */}
                <Route path="/doctors/all" element={<AllDoctors />} />
                <Route path="/doctors/specialists" element={<Specialists />} />
                <Route
                  path="/doctors/schedules"
                  element={<DoctorSchedules />}
                />
                {/* Patients */}
                <Route path="/patients/all" element={<AllPatients />} />
                <Route
                  path="/patients/admissions"
                  element={<PatientAdmissions />}
                />
                <Route path="/patients/history" element={<PatientHistory />} />
                {/* Appointments */}
                <Route
                  path="/appointments/upcoming"
                  element={<UpcomingAppointments />}
                />
                <Route
                  path="/appointments/past"
                  element={<PastAppointments />}
                />
                <Route
                  path="/appointments/requests"
                  element={<RequestAppointments />}
                />
                {/* Pharmacy */}
                <Route path="/pharmacy/stock" element={<PharmacyStock />} />
                <Route path="/pharmacy/orders" element={<PharmacyOrders />} />
                <Route
                  path="/pharmacy/suppliers"
                  element={<PharmacySuppliers />}
                />
                {/* Blood Bank */}
                <Route path="/bloodbank/donors" element={<BloodDonors />} />
                <Route path="/bloodbank/requests" element={<BloodRequests />} />
                <Route path="/bloodbank/reports" element={<BloodReports />} />
                {/* Staff */}
                <Route path="/staff/doctors" element={<StaffDoctors />} />
                <Route path="/staff/nurses" element={<StaffNurses />} />
                <Route path="/staff/admin" element={<StaffAdmin />} />
                {/* Records */}
                <Route
                  path="/records/patients"
                  element={<PatientRecords />}
                />{" "}
                <Route path="/records/billing" element={<BillingRecords />} />
                {/* Rooms */}
                <Route
                  path="/rooms/available"
                  element={<AvailableRooms />}
                />{" "}
                <Route path="/rooms/occupied" element={<OccupiedRooms />} />
                {/* Reviews */}
                <Route path="/reviews/patient" element={<PatientReviews />} />
                <Route path="/reviews/doctor" element={<DoctorReviews />} />
                {/* Feedback */}
                <Route
                  path="/feedback/patients"
                  element={<PatientFeedback />}
                />
                <Route path="/feedback/staff" element={<StaffFeedback />} />
                {/* Reports */}
                <Route path="/reports/daily" element={<DailyReports />} />
                <Route path="/reports/monthly" element={<MonthlyReports />} />
                <Route path="/reports/annual" element={<AnnualReports />} />
                <Route path="/settings/profile" element={<ProfileSettings />} />
                <Route
                  path="/settings/security"
                  element={<SecuritySettings />}
                />
                {/* Auth */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route
                  path="/auth/forgot-password"
                  element={<ForgotPassword />}
                />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
