"use client";
import { useEffect, useState } from "react";
import CreateUserButton from "../CreateUserButton"; // adjust path if needed
import DeleteUser from "../DeleteUser";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<Record<number, boolean>>({});
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [deletedUser, setDeletedUser] = useState<User | null>(null);
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState(10);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // D:\Web and Mobile Application\Ahmad5\🐍Python\Fastapi with sql>
      // D:\Web and Mobile Application\Ahmad5\🐍Python\FastApi + Postgresql\Fastapi with sql>
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      console.log("=======================", data);
      setUsers(data);
      setError(null); // optional: reset error if needed
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSoftDelete = (user: User) => {
    setUsers((prev) => prev.filter((u) => u.id !== user.id));
    setDeletedUser(user);
    setCountdown(10); // reset countdown

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval);
      DeleteUser({ userId: user.id, onDeleteSuccess: fetchUsers });
      setDeletedUser(null);
    }, 10000);

    setUndoTimeout(timeout);
  };

  const handleUndo = () => {
    if (undoTimeout) clearTimeout(undoTimeout);
    setDeletedUser(null);
    setCountdown(0);
    // Make sure to add logic to clear countdownInterval if needed (declare it in outer scope if required)
    // Restore the user to the list
    setUsers(prev => [deletedUser!, ...prev]);
  };
  

  const togglePassword = (userId: number) => {
    setShowPassword((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const handleCreateUser = async (newUser: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Failed to create user");
      }
      const updatedUsers = await res.json(); // your backend returns the updated user list
      setUsers(updatedUsers);
    } catch (error) {
      throw error; // bubble up to CreateUserButton to alert
    }
  };

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const openPopup = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  const closePopup = () => {
    setEditingUser(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const BACKEND_URL = "http://localhost:8000"; // or your actual API base URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      const response = await fetch(`${BACKEND_URL}/users/${editingUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to update user");
      }

      const updatedUser = await response.json();
      console.log("User updated:", updatedUser);

      fetchUsers();
      closePopup();
    } catch (error: any) {
      alert(`Update failed: ${error.message}`);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-blue-600 text-lg font-semibold">Loading users...</p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 flex items-center justify-center">
        <p className="text-center text-red-600 text-lg font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 relative">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📋 User Directory
      </h1>
      {/* Your CreateUserButton here */}
      <CreateUserButton onCreate={handleCreateUser} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 transition hover:shadow-2xl hover:scale-[1.01]"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-purple-700">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <input
                type={showPassword[user.id] ? "text" : "password"}
                value={user.password}
                readOnly
                className="px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 text-sm w-full sm:max-w-xs"
              />
              <button
                onClick={() => togglePassword(user.id)}
                className="mt-2 sm:mt-0 px-4 py-2 text-sm font-medium rounded-md bg-purple-500 text-white hover:bg-purple-600 transition cursor-pointer"
              >
                {showPassword[user.id] ? "Hide" : "Show"}
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => openPopup(user)}
                className="px-4 py-2 cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Update
              </button>

              <button
                onClick={() => handleSoftDelete(user)}
                className="px-4 py-2 cursor-pointer rounded-md bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Popup rendered OUTSIDE user cards - full screen overlay */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-opacity duration-300">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in-up scale-95 sm:scale-100 sm:animate-scale-in"
          >
            <h2 className="text-2xl sm:text-3xl mb-6 font-bold text-center text-purple-700">
              ✏️ Update User Info
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg transition cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                onClick={closePopup}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg text-lg transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {deletedUser && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center gap-4">
          <button
            onClick={handleUndo}
            className="px-4 py-2 cursor-pointer rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            Undo ({countdown})
          </button>
        </div>
      )}
    </div>
  );
}
