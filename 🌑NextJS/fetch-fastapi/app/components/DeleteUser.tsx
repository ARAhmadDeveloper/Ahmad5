"use client";
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface DeleteUserProps {
  userId: number;
  onDeleteSuccess: () => void;
}

export default function DeleteUser({
  userId,
  onDeleteSuccess,
}: DeleteUserProps) {
  const [deletedUser, setDeletedUser] = useState<User | null>(null);
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDelete = async () => {
    // Store the user being deleted
    setDeletedUser({ id: userId, name: "", email: "", password: "" });

    // Start countdown to actually delete
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:8000/users/${userId}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.detail || "Failed to delete user");
        }

        onDeleteSuccess();
        setDeletedUser(null);
      } catch (err) {
        console.error("Delete error:", err);
        alert("Error deleting user.");
      }
    }, 10000); // 10 seconds

    setUndoTimeout(timeout);
  };

  const handleUndo = () => {
    if (undoTimeout) {
      clearTimeout(undoTimeout);
      setUndoTimeout(null);
      setDeletedUser(null);
    }
  };

  return (
    <div className="flex gap-2">
      {deletedUser ? (
        <>
          <button
            onClick={handleUndo}
            className="flex-1 bg-green-600 hover:bg-green-700 cursor-pointer text-white text-sm font-semibold py-2 rounded-md transition"
          >
            Undo Delete
          </button>
          <span className="text-sm text-gray-600 self-center">
            Deleting in 10s...
          </span>
        </>
      ) : (
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 hover:bg-red-700 cursor-pointer text-white text-sm font-semibold py-2 rounded-md transition"
        >
          Delete
        </button>
      )}
    </div>
  );
}
