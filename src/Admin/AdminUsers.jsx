import "./Admin.css";

import { useEffect, useState } from "react";

import { getUsers } from "../services/userService";

function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    loadUsers();

  }, []);

  const loadUsers = async () => {

    const data = await getUsers();

    // setUsers(data);

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

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.mobile}</td>

              <td>{user.dob}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </>

  );

}

export default AdminUsers;