import React, { useState } from "react";

const Admin = () => {
  const [staff] = useState([
    {
      id: 1,
      name: "Ali Raza",
      designation: "Hospital Administrator",
      email: "ali.raza@hospital.com",
      phone: "0300-1234567",
      department: "Administration",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sara Khan",
      designation: "HR Manager",
      email: "sara.khan@hospital.com",
      phone: "0301-9876543",
      department: "Human Resources",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Usman Ahmed",
      designation: "Finance Officer",
      email: "usman.ahmed@hospital.com",
      phone: "0321-9988776",
      department: "Finance",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 4,
      name: "Ayesha Malik",
      designation: "Reception Manager",
      email: "ayesha.malik@hospital.com",
      phone: "0333-2244668",
      department: "Front Desk",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 5,
      name: "Hassan Ali",
      designation: "IT Administrator",
      email: "hassan.ali@hospital.com",
      phone: "0345-6677889",
      department: "IT",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 6,
      name: "Nida Farooq",
      designation: "Operations Manager",
      email: "nida.farooq@hospital.com",
      phone: "0312-5544332",
      department: "Operations",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 7,
      name: "Bilal Sheikh",
      designation: "Procurement Officer",
      email: "bilal.sheikh@hospital.com",
      phone: "0307-1112233",
      department: "Supplies",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 8,
      name: "Zara Iqbal",
      designation: "Public Relations Officer",
      email: "zara.iqbal@hospital.com",
      phone: "0341-4455667",
      department: "PR",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      id: 9,
      name: "Imran Khan",
      designation: "Legal Advisor",
      email: "imran.khan@hospital.com",
      phone: "0322-8899774",
      department: "Legal",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      id: 10,
      name: "Sadia Nawaz",
      designation: "Quality Control Manager",
      email: "sadia.nawaz@hospital.com",
      phone: "0332-7766554",
      department: "Quality Assurance",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]);

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Admin Staff</h1>
          <p className="text-gray-400">
            Manage hospital administrative staff and their roles.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow">
          + Add Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Staff List</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Department</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.id} className="border-b border-gray-700">
                <td className="p-4">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-4 font-semibold">{s.name}</td>
                <td className="p-4">{s.designation}</td>
                <td className="p-4">{s.email}</td>
                <td className="p-4">{s.phone}</td>
                <td className="p-4">{s.department}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
