import "./Admin.css";

import { useEffect, useState } from "react";

import { getAllOrders } from "../Services/orderService";

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    const data = await getAllOrders();

    setOrders(data);

  };

  return (

    <>

      <h1 className="dashboard-title">

        🛒 Orders

      </h1>

      <table className="admin-table">

        <thead>

          <tr>

            <th>Order ID</th>

            <th>Customer</th>

            <th>Date</th>

            <th>Payment</th>

            <th>Status</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td>{order.id}</td>

              <td>{order.address?.name}</td>

              <td>{order.orderDate}</td>

              <td>{order.paymentMethod}</td>

              <td>{order.status}</td>

              <td>₹ {order.total}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </>

  );

}

export default AdminOrders;