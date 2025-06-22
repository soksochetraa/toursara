import { useState } from "react";
import soksochetra from "../../public/images/aboutus/soksochetra.jpg";

export default function EditUser({ user, onUpdate }) {
  const [editUser, setEditUser] = useState({ ...user });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSave = () => {
    setLoading(true);
    setSuccessMsg("");
    setTimeout(() => {
      onUpdate(editUser);
      setLoading(false);
      setSuccessMsg("Profile updated successfully!");
    }, 1500);
  };

  return (
    <section className="max-w-3xl mx-auto space-y-10">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>
        <div className="flex items-center gap-6 mb-4">
          <img
            src={soksochetra}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <label className="text-sm font-medium text-gray-600">
              Change Photo
            </label>
            <input type="file" className="mt-1 block w-full text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Full Name"
            className="border p-3 rounded-md w-full"
          />
          <input
            value={editUser.email}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
            placeholder="Email Address"
            className="border p-3 rounded-md w-full"
          />
          <input
            value={editUser.phone}
            onChange={(e) =>
              setEditUser({ ...editUser, phone: e.target.value })
            }
            placeholder="Phone Number"
            className="border p-3 rounded-md w-full"
          />
          <select
            value={editUser.address}
            onChange={(e) =>
              setEditUser({ ...editUser, address: e.target.value })
            }
            className="border p-3 rounded-md w-full"
          >
            <option value="">Select Province</option>
            {[
              "Phnom Penh",
              "Siem Reap",
              "Battambang",
              "Sihanoukville",
              "Kampot",
              "Kampong Cham",
              "Takeo",
              "Kandal",
              "Preah Vihear",
              "Ratanakiri",
            ].map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Save Profile
        </button>
        {loading && (
          <p className="mt-4 text-sm text-blue-600">Saving changes...</p>
        )}
        {successMsg && (
          <p className="mt-4 text-sm text-green-600">{successMsg}</p>
        )}
      </div>
    </section>
  );
}
