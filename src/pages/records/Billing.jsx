import React, { useState } from "react";

const Billing = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      patient: "Ali Khan",
      service: "General Checkup",
      amount: 2000,
      status: "Paid",
      date: "2025-09-01",
    },
    {
      id: 2,
      patient: "Sara Ahmed",
      service: "X-Ray",
      amount: 5000,
      status: "Pending",
      date: "2025-09-05",
    },
    {
      id: 3,
      patient: "John Doe",
      service: "Blood Test",
      amount: 1500,
      status: "Paid",
      date: "2025-09-10",
    },
    {
      id: 4,
      patient: "Fatima Malik",
      service: "MRI Scan",
      amount: 12000,
      status: "Pending",
      date: "2025-09-12",
    },
    {
      id: 5,
      patient: "Hamza Rafiq",
      service: "Dental Cleaning",
      amount: 3000,
      status: "Paid",
      date: "2025-09-14",
    },
    {
      id: 6,
      patient: "Ayesha Siddiqui",
      service: "Eye Checkup",
      amount: 2500,
      status: "Pending",
      date: "2025-09-15",
    },
    {
      id: 7,
      patient: "Michael Smith",
      service: "Physiotherapy",
      amount: 4000,
      status: "Paid",
      date: "2025-09-17",
    },
  ]);

  // same logic as before ...
  const [showForm, setShowForm] = useState(false);
  const [newBill, setNewBill] = useState({
    patient: "",
    service: "",
    amount: "",
    status: "Pending",
    date: "",
  });

  const handleChange = (e) => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value });
  };

  const addBill = () => {
    if (
      newBill.patient &&
      newBill.service &&
      newBill.amount &&
      newBill.status &&
      newBill.date
    ) {
      setBills([...bills, { id: bills.length + 1, ...newBill }]);
      setNewBill({
        patient: "",
        service: "",
        amount: "",
        status: "Pending",
        date: "",
      });
      setShowForm(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const totalAmount = bills.reduce((sum, b) => sum + parseInt(b.amount), 0);
  const paidAmount = bills
    .filter((b) => b.status === "Paid")
    .reduce((sum, b) => sum + parseInt(b.amount), 0);
  const pendingAmount = totalAmount - paidAmount;

  return (
    <div className="p-6 bg-black text-white min-h-screen text-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Billing</h1>
          <p className="text-gray-400">
            Manage patient billing, invoices, and payment records.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black font-semibold px-5 py-3 rounded-lg shadow"
        >
          + Add Bill
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Total Billing</h2>
          <p className="text-3xl font-bold mt-2">Rs. {totalAmount}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Paid</h2>
          <p className="text-3xl font-bold text-green-400 mt-2">
            Rs. {paidAmount}
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg text-center shadow">
          <h2 className="text-lg text-gray-400">Pending</h2>
          <p className="text-3xl font-bold text-red-400 mt-2">
            Rs. {pendingAmount}
          </p>
        </div>
      </div>

      {/* Billing Table */}
      <div className="bg-zinc-900 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Patient Billing Records</h2>
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="p-4">Patient</th>
              <th className="p-4">Service</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id} className="border-b border-gray-700">
                <td className="p-4 font-semibold">{bill.patient}</td>
                <td className="p-4">{bill.service}</td>
                <td className="p-4">Rs. {bill.amount}</td>
                <td
                  className={`p-4 font-bold ${
                    bill.status === "Paid" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {bill.status}
                </td>
                <td className="p-4">{bill.date}</td>
                <td className="p-4">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Bill Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-zinc-900 p-6 rounded-lg w-[500px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Bill</h2>

            <div className="space-y-3">
              <input
                type="text"
                name="patient"
                placeholder="Patient Name"
                value={newBill.patient}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="text"
                name="service"
                placeholder="Service Provided"
                value={newBill.service}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={newBill.amount}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
              <select
                name="status"
                value={newBill.status}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
              <input
                type="date"
                name="date"
                value={newBill.date}
                onChange={handleChange}
                className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Cancel
              </button>
              <button
                onClick={addBill}
                className="px-4 py-2 bg-green-500 rounded"
              >
                Add Bill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
