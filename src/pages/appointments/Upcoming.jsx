import React from "react";

const Upcoming = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Appointment</h2>
        
        <div className="border rounded-lg p-4 bg-gray-50 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Dr. Sarah Johnson</h3>
          <p className="text-gray-600">Specialist: Cardiologist</p>
          <p className="text-gray-600">Date: 20th September 2025</p>
          <p className="text-gray-600">Time: 3:00 PM - 4:00 PM</p>
        </div>

        <div className="flex justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Reschedule
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
