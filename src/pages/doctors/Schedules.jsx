import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedules = () => {
  const [view, setView] = useState("daily");
  const [date, setDate] = useState(new Date());

  const dailySchedule = [
    { time: "09:00 AM", doctor: "Dr. Sarah Johnson", specialty: "Cardiology" },
    { time: "10:30 AM", doctor: "Dr. Michael Chen", specialty: "Neurology" },
    { time: "01:00 PM", doctor: "Dr. Lisa Patel", specialty: "Pediatrics" },
  ];

  const weeklySchedule = [
    { day: "Monday", doctor: "Dr. Imran Farooq", specialty: "Orthopedics" },
    { day: "Wednesday", doctor: "Dr. Ayesha Malik", specialty: "Dermatology" },
    { day: "Friday", doctor: "Dr. Hina Shah", specialty: "Gynecology" },
  ];
  const monthlySchedule = [
    { date: "5th Sept", doctor: "Dr. Kamran Abbas", specialty: "Neurology" },
    { date: "12th Sept", doctor: "Dr. Sarah Johnson", specialty: "Cardiology" },
    { date: "20th Sept", doctor: "Dr. Lisa Patel", specialty: "Pediatrics" },
    { date: "28th Sept", doctor: "Dr. Ayesha Malik", specialty: "Dermatology" },
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Doctor Schedules</h1>
          <p className="text-gray-400">
            Manage and view daily, weekly, and monthly schedules.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("daily")}
          className={`px-4 py-2 rounded-lg ${
            view === "daily"
              ? "bg-white text-black font-semibold"
              : "bg-zinc-800"
          }`}
        >
          Daily
        </button>
        <button
          onClick={() => setView("weekly")}
          className={`px-4 py-2 rounded-lg ${
            view === "weekly"
              ? "bg-white text-black font-semibold"
              : "bg-zinc-800"
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => setView("monthly")}
          className={`px-4 py-2 rounded-lg ${
            view === "monthly"
              ? "bg-white text-black font-semibold"
              : "bg-zinc-800"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Layout: Calendar + Schedule List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Calendar */}
        <div className="bg-black rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Calendar</h2>
          <div className="bg-zinc-800 p-4 rounded-lg text-center">
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-lg w-full"
            />
            <p className="mt-4">
              <span className="font-semibold">Selected Date:</span>{" "}
              {date.toDateString()}
            </p>
          </div>
        </div>

        {/* Schedule List */}
        <div className="bg-zinc-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">
            {view.charAt(0).toUpperCase() + view.slice(1)} Schedule
          </h2>
          <ul className="space-y-4">
            {view === "daily" &&
              dailySchedule.map((s, i) => (
                <li
                  key={i}
                  className="bg-zinc-800 p-4 rounded-lg flex justify-between"
                >
                  <span>{s.time}</span>
                  <span>
                    {s.doctor} ({s.specialty})
                  </span>
                </li>
              ))}

            {view === "weekly" &&
              weeklySchedule.map((s, i) => (
                <li
                  key={i}
                  className="bg-zinc-900 p-4 rounded-lg flex justify-between"
                >
                  <span>{s.day}</span>
                  <span>
                    {s.doctor} ({s.specialty})
                  </span>
                </li>
              ))}

            {view === "monthly" &&
              monthlySchedule.map((s, i) => (
                <li
                  key={i}
                  className="bg-zinc-800 p-4 rounded-lg flex justify-between"
                >
                  <span>{s.date}</span>
                  <span>
                    {s.doctor} ({s.specialty})
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
