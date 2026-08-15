import "./Admin.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getUsers } from "../Services/userService";
import { getAllOrders } from "../Services/orderService";

function AdminDashboard() {

  const products = useSelector(
    (state) => state.products.products
  );

  const [users, setUsers] = useState([]);

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    loadUsers();

    loadOrders();

  }, []);



//

  const loadUsers = async () => {

    const data = await getUsers();

    setUsers(data);

  };

  const loadOrders = async () => {

    const data = await getAllOrders();

    setOrders(data);

  };

  const revenue = orders.reduce(

    (total, order) => total + Number(order.total),

    0

  );

  return (

    <>

      <h1 className="dashboard-title">

        📊 Admin Dashboard

      </h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h3>Total Products</h3>

          <h1>{products.length}</h1>

        </div>

        <div className="dashboard-card">

          <h3>Total Orders</h3>

          <h1>{orders.length}</h1>

        </div>

        <div className="dashboard-card">

          <h3>Registered Users</h3>

          <h1>{users.length}</h1>

        </div>

        <div className="dashboard-card">

          <h3>Total Revenue</h3>

          <h1>₹ {revenue}</h1>

        </div>

      </div>

    </>

  );

}

export default AdminDashboard;