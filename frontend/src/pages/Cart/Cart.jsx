import { useNavigate } from "react-router-dom";

import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/cartSlice";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Cart() {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  // Get cart products from Redux
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  // Calculate total
  const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.totalPrice || item.price),
    0
  );


  return (

    <>

      <Navbar />


      <div className="cart-container">

        {/* Page Heading */}

        <h1 className="cart-heading">
          🛒 My Shopping Cart
        </h1>


        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>Your Cart is Empty</h2>

            <p>
              Add some products to your cart to continue shopping.
            </p>

            <button
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="cart-layout">


            {/* ================= LEFT SIDE ================= */}

            <div className="cart-products">


              {/* Delivery */}

              <div className="delivery-message">

                🚚 Delivery by{" "}
                <strong>
                  Saturday, 22 August
                </strong>

              </div>


              {/* Products */}

              {cartItems.map((item) => (

                <div
                  className="cart-card"
                  key={item.id}
                >


                  {/* Product Image */}

                  <div className="cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  {/* Product Details */}

                  <div className="cart-product-details">

                    <h2>
                      {item.name}
                    </h2>


                    <p className="cart-brand">
                      {item.brand}
                    </p>


                    <h2 className="cart-price">
                      ₹ {item.price}
                    </h2>


                    {item.selectedOption && (

                      <p className="cart-option">

                        {item.selectedOption.value}

                      </p>

                    )}


                    <div className="cart-quantity">

                      Quantity:

                      <span>
                        {item.quantity || 1}
                      </span>

                    </div>


                    <h3 className="item-total">

                      Total : ₹{" "}
                      {item.totalPrice || item.price}

                    </h3>


                    {/* Remove */}

                    <button
                      className="remove-btn"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      🗑 Remove
                    </button>

                  </div>


                </div>

              ))}

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="order-summary">


              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Items ({cartItems.length})
                </span>

                <strong>
                  ₹ {total}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <strong className="free">
                  FREE
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Discount
                </span>

                <strong className="discount">
                  ₹ 0
                </strong>

              </div>


              <hr />


              <div className="grand-total">

                <span>
                  Grand Total
                </span>

                <strong>
                  ₹ {total}
                </strong>

              </div>


              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/payment")
                }
              >
                Proceed to Pay
              </button>


              {/* Secure Payment */}

              <div className="secure-box">

                <h3>
                  🔒 Safe & Secure Payments
                </h3>

                <p>
                  100% Secure Payments powered by
                  Razorpay / Stripe.
                </p>

              </div>


              {/* Delivery Information */}

              <div className="secure-box">

                <h3>
                  🚚 Delivery Information
                </h3>

                <p>
                  Free delivery on your order.
                  Track your order after payment.
                </p>

              </div>


            </div>


          </div>

        )}

      </div>


      <Footer />

    </>

  );

}


export default Cart;