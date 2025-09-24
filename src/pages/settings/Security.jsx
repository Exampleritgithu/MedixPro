import React from "react";

const Security = () => {
  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🔒 Security Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Change Password */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Change Password</h2>
          <p className="text-gray-400 mb-4">
            Update your password regularly to keep your account secure.
          </p>
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500">
            Update Password
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">
            Two-Factor Authentication (2FA)
          </h2>
          <p className="text-gray-400 mb-4">
            Add an extra layer of protection by enabling 2FA.
          </p>
          <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500">
            Enable 2FA
          </button>
        </div>

        {/* Login Activity */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Login Activity</h2>
          <p className="text-gray-400 mb-4">
            Review your recent logins and logout suspicious sessions.
          </p>
          <button className="px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-500">
            View Activity
          </button>
        </div>

        {/* Account Recovery */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Account Recovery</h2>
          <p className="text-gray-400 mb-4">
            Set up recovery options to regain access if you lose your password.
          </p>
          <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500">
            Setup Recovery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
