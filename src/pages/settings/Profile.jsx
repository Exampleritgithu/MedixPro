import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    email: "sarah.johnson@example.com",
    phone: "+92 300 1234567",
    department: "Cardiology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfile({ ...tempProfile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes
  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={isEditing ? tempProfile.image : profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
        </div>

        {isEditing ? (
          <div className="space-y-4 text-left">
            {/* Upload Image */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-300"
            />

            {/* Editable Fields */}
            <input
              type="text"
              name="name"
              value={tempProfile.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-white"
              placeholder="Name"
            />
            <input
              type="text"
              name="role"
              value={tempProfile.role}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-white"
              placeholder="Role"
            />
            <input
              type="email"
              name="email"
              value={tempProfile.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-white"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={tempProfile.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-white"
              placeholder="Phone"
            />
            <input
              type="text"
              name="department"
              value={tempProfile.department}
              onChange={handleChange}
              className="w-full p-2 rounded bg-zinc-800 text-white"
              placeholder="Department"
            />

            {/* Save / Cancel */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-400 text-lg mb-4">{profile.role}</p>

            <div className="space-y-3 text-left">
              <p>
                <span className="font-semibold text-gray-300">Email:</span>{" "}
                {profile.email}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Phone:</span>{" "}
                {profile.phone}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Department:</span>{" "}
                {profile.department}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
              >
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
