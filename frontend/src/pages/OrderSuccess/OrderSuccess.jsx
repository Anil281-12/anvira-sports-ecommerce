import "./OrderSuccess.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

function OrderSuccess() {

  return (

    <>
      <Navbar />

      <div className="success-page">

        <div className="success-card">

          <div className="success-icon">
            🎉
          </div>

          <h1>Order Placed Successfully!</h1>

          <h3 className="success-text">
            Thank You for Shopping with
            <span> ANVIRA SPORTS</span>
          </h3>

          <p className="success-message">
            Your order has been placed successfully.
          </p>

          <p className="delivery-message">
            🚚 Estimated Delivery:
            <strong> 3 - 5 Business Days</strong>
          </p>

          <p className="email-message">
            A confirmation has been saved with your order details.
          </p>

          <div className="success-buttons">

            <Link to="/">
              <button className="continue-btn">
                🛍 Continue Shopping
              </button>
            </Link>

            <Link to="/profile/orders">
              <button className="orders-btn">
                📦 View My Orders
              </button>
            </Link>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );

}

export default OrderSuccess;