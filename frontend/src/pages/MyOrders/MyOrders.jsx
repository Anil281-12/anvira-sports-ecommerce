import "../Orders/Orders.css";

import { useState, useEffect } from "react";

import { getAllOrders } from "../../Services/orderService";


function MyOrders() {

  const [orderItems, setOrderItems] = useState([]);


  // ==========================================
  // FORMAT DATE
  // 8/15/2026 → 15 August 2026
  // ==========================================

  const formatDate = (date) => {

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

    const formattedDate = new Date(
      year,
      month - 1,
      day
    );

    return formattedDate.toLocaleDateString(
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

    <div className="my-orders-page">


      {/* =====================================
          PAGE TITLE
      ===================================== */}

      <div className="my-orders-heading">

        <h1>
          My Orders
        </h1>

        <p>
          View and manage your recent orders
        </p>

      </div>


      {/* =====================================
          NO ORDERS
      ===================================== */}

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

        orderItems.map((order, index) => (

          <div
            className="my-order-card"
            key={order.id}
          >


            {/* =================================
                ORDER HEADER
            ================================= */}

            <div className="my-order-header">


              <div className="my-order-number">

                <span>
                  Order
                </span>

                <strong>
                  #{orderItems.length - index}
                </strong>

              </div>


              <div className="my-order-info">

                <span>
                  Order Date
                </span>

                <strong>
                  {formatDate(order.orderDate)}
                </strong>

              </div>


              <div className="my-order-info">

                <span>
                  Expected Delivery
                </span>

                <strong className="delivery-date">

                  {getExpectedDelivery(
                    order.orderDate
                  )}

                </strong>

              </div>


              <div className="my-order-info">

                <span>
                  Payment
                </span>

                <strong>
                  {order.paymentMethod}
                </strong>

              </div>


              <div className="my-order-total">

                ₹{order.total}

              </div>

            </div>


            {/* =================================
                STATUS
            ================================= */}

            <div className="my-order-status-row">

              <span className="my-order-status-label">
                Status:
              </span>

              <span className="my-order-status">

                <span className="status-circle">✓</span>

                  {order.status || "Ordered"}

              </span>

            </div>


            {/* =================================
                PRODUCTS
            ================================= */}

            <div className="my-order-products">


              {order.items.map((item) => (

                <div
                  className="my-order-product"
                  key={item.id}
                >


                  {/* PRODUCT IMAGE */}

                  <div className="my-order-product-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  {/* PRODUCT INFORMATION */}

                  <div className="my-order-product-info">


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


            {/* =================================
                ORDER FOOTER
            ================================= */}

            <div className="my-order-footer">

              <div className="order-confirmed">

                <span>
                  ✓
                </span>

                Order confirmed

              </div>


              <button
                className="my-order-track-button"
              >
                Track Order
              </button>

            </div>


          </div>

        ))

      )}

    </div>

  );

}


export default MyOrders;