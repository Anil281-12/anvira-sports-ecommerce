import "../Orders/Orders.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useState, useEffect } from "react";

import { getAllOrders } from "../../Services/orderService";

function Orders({ insideProfile = false }) {

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (!loggedInUser) return;

    const data = await getAllOrders();

    const myOrders = data.filter(
      (order) => order.userEmail === loggedInUser.email
    );

    myOrders.reverse();

    setOrderItems(myOrders);

  };

  return (
    <>

      {!insideProfile && <Navbar />}

      <div className="orders-container">

        <h1>📦 My Orders</h1>

        {orderItems.length === 0 ? (

          <div className="empty-orders">

            <h2>No Orders Yet 😔</h2>

            <p>Your placed orders will appear here.</p>

          </div>

        ) : (

          orderItems.map((order) => (

            <div
              key={order.id}
              className="order-box"
            >

              <h2>Order ID : {order.id}</h2>

              <p>
                <strong>Order Date :</strong>{" "}
                {order.orderDate}
              </p>

              <p>
                <strong>Payment :</strong>{" "}
                {order.paymentMethod}
              </p>

              <p>
                <strong>Status :</strong>{" "}
                <span className="status">
                  ✅ {order.status}
                </span>
              </p>

              <h3>Delivery Address</h3>

              <p>{order.address.name}</p>

              <p>{order.address.mobile}</p>

              <p>{order.address.address}</p>

              <p>
                {order.address.city},{" "}
                {order.address.state}
              </p>

              <p>{order.address.pincode}</p>

              <hr />

              {order.items.map((item) => (

                <div
                  key={item.id}
                  className="order-card"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="order-details">

                    <h2>{item.name}</h2>

                    <p>
                      <strong>Brand :</strong>{" "}
                      {item.brand}
                    </p>

                    <p>
                      <strong>Category :</strong>{" "}
                      {item.category}
                    </p>

                    {item.selectedOption && (

                      <p>
                        <strong>
                          {item.optionLabel} :
                        </strong>{" "}
                        {item.selectedOption.value}
                      </p>

                    )}

                    <p>
                      <strong>Quantity :</strong>{" "}
                      {item.quantity || 1}
                    </p>

                    <p className="price">
                      ₹ {item.price * (item.quantity || 1)}
                    </p>

                  </div>

                </div>

              ))}

              <hr />

              <div className="order-footer">

                <h2>
                  Grand Total : ₹ {order.total}
                </h2>

                <button className="track-btn">
                  Track Order
                </button>

              </div>

            </div>

          ))

        )}

      </div>

      {!insideProfile && <Footer />}

    </>
  );

}

export default Orders;