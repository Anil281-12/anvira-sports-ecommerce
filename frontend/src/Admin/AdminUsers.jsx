import "./Admin.css";

import { useEffect, useState } from "react";

import { getUsers } from "../Services/userService";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      console.error("Failed to load users:", error);
      setUsers([]);
    }
  };

  return (
    <>
      <h1 className="dashboard-title">
        👥 Registered Users
      </h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.dob}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No registered users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default AdminUsers;