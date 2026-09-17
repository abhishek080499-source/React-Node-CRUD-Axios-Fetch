import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // FETCH USERS
  // =========================
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log("Get Users Error:", error);
    }
  };

  // =========================
  // CREATE / UPDATE
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check empty fields
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all fields");
      return;
    }

    try {
      let response;

      // =========================
      // UPDATE USER
      // =========================
      if (editId) {
        response = await fetch(
          `http://localhost:5000/users/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      }

      // =========================
      // CREATE USER
      // =========================
      else {
        response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      // Check server response
      if (!response.ok) {
        const errorData = await response.json();

        console.log("Server Error:", errorData);

        alert(errorData.message || "Something went wrong");

        return;
      }

      const data = await response.json();

      console.log(editId ? "Updated:" : "Created:", data);

      // Refresh users
      await getUsers();

      // Clear form
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });

      // Exit edit mode
      setEditId(null);

      alert(editId ? "User updated successfully" : "User created successfully");
    } catch (error) {
      console.log("Submit Error:", error);
    }
  };

  // =========================
  // EDIT USER
  // =========================
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });

    setEditId(user._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // CANCEL UPDATE
  // =========================
  const handleCancel = () => {
    setEditId(null);

    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };

  // =========================
  // DELETE USER
  // =========================
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        console.log("Delete Error:", errorData);

        alert(errorData.message || "Delete failed");

        return;
      }

      const data = await response.json();

      console.log("Deleted:", data);

      await getUsers();
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // =========================
  // GET USERS WHEN PAGE LOADS
  // =========================
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-16 min-h-screen bg-gray-100 px-4 py-8">

        {/* Heading */}
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Home Page With Fetch
        </h1>

        {/* =========================
            FORM
        ========================= */}
        <div className="mx-auto w-full max-w-md rounded-lg hover:bg-gray-500 bg-white p-5 shadow-lg md:p-8">

          <form onSubmit={handleSubmit}>

            <h2 className="mb-6 text-center text-xl font-semibold text-yellow-500">
              {editId ? "Update User" : "Details Page"}
            </h2>

            {/* Name */}
            <label className="mb-4 block w-full">
              <span className="mb-1 block text-gray-700">
                Name
              </span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="w-full rounded border px-3 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Email */}
            <label className="mb-4 block w-full">
              <span className="mb-1 block text-gray-700">
                Email
              </span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full rounded border px-3 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Mobile */}
            <label className="mb-4 block w-full">
              <span className="mb-1 block text-gray-700">
                Mobile Number
              </span>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full rounded border px-3 py-2 text-black outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">

              <button
                type="submit"
                className="rounded bg-black px-5 py-2 text-white hover:bg-gray-800"
              >
                {editId ? "Update" : "Submit"}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded bg-gray-400 px-5 py-2 text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
              )}

            </div>
          </form>
        </div>

        {/* =========================
            USERS
        ========================= */}
        {users.length > 0 && (
          <div className="mx-auto mt-10 max-w-6xl">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Users
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {users.map((user) => (
                <div
                  key={user._id}
                  className="rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Name */}
                  <h3 className="mb-4 text-xl font-bold text-gray-800">
                    {user.name}
                  </h3>

                  {/* Email */}
                  <p className="mb-2 break-all text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Email:
                    </span>{" "}
                    {user.email}
                  </p>

                  {/* Mobile */}
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Mobile:
                    </span>{" "}
                    {user.mobile}
                  </p>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">

                    <button
                      onClick={() => handleEdit(user)}
                      className="flex-1 rounded bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(user._id)}
                      className="flex-1 rounded bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default HomePage;