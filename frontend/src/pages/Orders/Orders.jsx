import "../Orders/Orders.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useState, useEffect } from "react";

import { getAllOrders } from "../../Services/orderService";


function Orders({ insideProfile = false }) {

  const [orderItems, setOrderItems] = useState([]);


  // ==========================================
  // FORMAT ORDER DATE
  // 8/15/2026
  // ↓
  // Saturday, 15 August 2026
  // ==========================================

  const formatOrderDate = (date) => {

    if (!date) {
      return "";
    }

    const parts = date.split("/");

    if (parts.length !== 3) {
      return date;
    }

    const month = Number(parts[0]);
    const day = Number(parts[1]);
    const year = Number(parts[2]);

    const orderDate = new Date(
      year,
      month - 1,
      day
    );

    return orderDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  };


  // ==========================================
  // EXPECTED DELIVERY
  // ORDER DATE + 7 DAYS
  // ==========================================

  const getExpectedDelivery = (date) => {

    if (!date) {
      return "";
    }

    const parts = date.split("/");

    if (parts.length !== 3) {
      return "";
    }

    const month = Number(parts[0]);
    const day = Number(parts[1]);
    const year = Number(parts[2]);

    const deliveryDate = new Date(
      year,
      month - 1,
      day
    );

    deliveryDate.setDate(
      deliveryDate.getDate() + 7
    );

    return deliveryDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  };


  // ==========================================
  // LOAD ORDERS
  // ==========================================

  useEffect(() => {

    loadOrders();

  }, []);


  const loadOrders = async () => {

    try {

      const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
      );

      if (!loggedInUser) {
        return;
      }

      const data = await getAllOrders();


      const myOrders = data.filter(
        (order) =>
          order.userEmail === loggedInUser.email
      );


      // Latest order first

      myOrders.reverse();

      setOrderItems(myOrders);

    } catch (error) {

      console.error(
        "Error loading orders:",
        error
      );

    }

  };


  return (
    <>


      {/* Navbar only when Orders is opened directly */}

      {!insideProfile && <Navbar />}


      <div className="my-orders-page">


        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="my-orders-heading">

          <h1>
            📦 My Orders
          </h1>

          <p>
            View and manage your recent orders
          </p>

        </div>


        {/* ======================================
            EMPTY ORDERS
        ====================================== */}

        {orderItems.length === 0 ? (

          <div className="my-orders-empty">

            <div className="my-orders-empty-icon">
              📦
            </div>

            <h2>
              No Orders Yet
            </h2>

            <p>
              Your placed orders will appear here.
            </p>

          </div>

        ) : (


          /* ====================================
             ORDERS
          ==================================== */

          orderItems.map((order, index) => (

            <div
              key={order.id}
              className="my-order-card"
            >


              {/* ==================================
                  ORDER INFORMATION HEADER
              ================================== */}

              <div className="my-order-header">


                {/* ORDER NUMBER */}

                <div className="my-order-number">

                  <span>
                    Order
                  </span>

                  <strong>
                    #{orderItems.length - index}
                  </strong>

                </div>


                {/* ORDER DATE */}

                <div className="my-order-info">

                  <span>
                    Order Date
                  </span>

                  <strong>
                    {formatOrderDate(
                      order.orderDate
                    )}
                  </strong>

                </div>


                {/* EXPECTED DELIVERY */}

                <div className="my-order-info">

                  <span>
                    Expected Delivery
                  </span>

                  <strong className="my-order-delivery">

                    {getExpectedDelivery(
                      order.orderDate
                    )}

                  </strong>

                </div>


                {/* PAYMENT */}

                <div className="my-order-info">

                  <span>
                    Payment
                  </span>

                  <strong>
                    {order.paymentMethod}
                  </strong>

                </div>


                {/* TOTAL */}

                <div className="my-order-total">

                  ₹{order.total}

                </div>


              </div>


              {/* ==================================
                  STATUS
              ================================== */}

              <div className="my-order-status-row">

                <span className="my-order-status-title">
                  Status:
                </span>


                <span className="my-order-status">

                  <span className="my-order-status-icon">
                    ✓
                  </span>

                  {order.status || "Ordered"}

                </span>

              </div>


              {/* ==================================
                  ORDERED PRODUCTS
              ================================== */}

              <div className="my-order-products">


                {order.items.map((item) => (

                  <div
                    key={item.id}
                    className="my-order-product"
                  >


                    {/* PRODUCT IMAGE */}

                    <div className="my-order-image-box">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="my-order-image"
                      />

                    </div>


                    {/* PRODUCT DETAILS */}

                    <div className="my-order-product-details">


                      <h2>
                        {item.name}
                      </h2>


                      <p>

                        <strong>
                          Brand:
                        </strong>{" "}

                        {item.brand}

                      </p>


                      <p>

                        <strong>
                          Category:
                        </strong>{" "}

                        {item.category}

                      </p>


                      {item.selectedOption && (

                        <p>

                          <strong>
                            {item.optionLabel}:
                          </strong>{" "}

                          {item.selectedOption.value}

                        </p>

                      )}


                      <p>

                        <strong>
                          Quantity:
                        </strong>{" "}

                        {item.quantity || 1}

                      </p>


                    </div>


                    {/* PRODUCT PRICE */}

                    <div className="my-order-product-price">

                      ₹
                      {item.price *
                        (item.quantity || 1)}

                    </div>


                  </div>

                ))}


              </div>


              {/* ==================================
                  ORDER FOOTER
              ================================== */}

              <div className="my-order-footer">


                <div className="my-order-confirmed">

                  <span>
                    ✓
                  </span>

                  Order confirmed

                </div>


                <button
                  className="my-order-track-btn"
                >
                  Track Order
                </button>


              </div>


            </div>

          ))

        )}

      </div>


      {/* Footer only when Orders is opened directly */}

      {!insideProfile && <Footer />}

    </>
  );

}


export default Orders;