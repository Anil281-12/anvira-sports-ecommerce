
import "./Payment.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useLocation } from "react-router-dom";

import { addOrder } from "../../redux/orderSlice";
import { clearCart } from "../../redux/cartSlice";

import { saveOrder } from "../../Services/orderService";

function Payment() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // Product from Buy Now
  const buyNowProduct = location.state?.buyNowProduct;

  // Decide products
  const products = buyNowProduct
    ? [buyNowProduct]
    : cartItems;

  const total = products.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
  });

  useEffect(() => {

    const savedAddress = JSON.parse(
      localStorage.getItem("deliveryAddress")
    );

    if (savedAddress) {
      setAddress(savedAddress);
    }

  }, []);

  const handleChange = (e) => {

    setAddress({

      ...address,

      [e.target.name]: e.target.value,

    });

  };

  const handleSaveAddress = () => {

    if (
      !address.name ||
      !address.mobile ||
      !address.pincode ||
      !address.state ||
      !address.city ||
      !address.address
    ) {

      alert("Please fill all address fields.");

      return;

    }

    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(address)
    );

    alert("Address Saved Successfully.");

  };

   const handlePlaceOrder = async () => {

  if (products.length === 0) {

    alert("No Product Selected.");

    return;

  }

  if (
    !address.name ||
    !address.mobile ||
    !address.pincode ||
    !address.state ||
    !address.city ||
    !address.address
  ) {

    alert("Please fill your delivery address.");

    return;

  }

  // Get Logged In User
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  // Create Order Object
  const order = {

    id: Date.now(),

    userName: loggedInUser.name,

    userEmail: loggedInUser.email,

    items: products,

    address,

    paymentMethod,

    orderDate: new Date().toLocaleDateString(),

    status: "Ordered",

    total,

  };

  try {

    // Save Order in db.json
    await saveOrder(order);

    // Update Redux
    dispatch(addOrder(order));

    // Clear Cart
    if (!buyNowProduct) {

      dispatch(clearCart());

    }

    alert("🎉 Order Placed Successfully!");

    navigate("/order-success");

  } catch (error) {

    console.error(error);

    alert("Failed to Place Order");

  }

};

  return (
    <>
  <Navbar />

  <div className="payment-page">

    <h1 className="checkout-title">
      Checkout
    </h1>

    <div className="payment-container">

      {/* Left Side */}

      <div className="address-section">

        <h2 className="product-heading">
          Product Details
        </h2>

        {products.map((item) => (

          <div
            key={item.id}
            className="checkout-product"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="checkout-info">

              <h3>{item.name}</h3>

              <p>
                <strong>Brand:</strong>{" "}
                {item.brand || "ANVIRA SPORTS"}
              </p>

              <p>
                <strong>Category:</strong>{" "}
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

                {item.quantity}

              </p>

              <p>

                <strong>
                  Rating:
                </strong>{" "}

                ⭐ {item.rating}
                {" "}
                ({item.reviews} Reviews)

              </p>

              <h2 className="checkout-price">

                ₹{item.price * item.quantity}

              </h2>

            </div>

          </div>

        ))}

        <h2>

          Delivery Address

        </h2>

        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          type="text"
          name="mobile"
          value={address.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
        />

        <input
          type="text"
          name="pincode"
          value={address.pincode}
          onChange={handleChange}
          placeholder="Pincode"
        />

        <div className="row">

          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            placeholder="State"
          />

          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            placeholder="City"
          />

        </div>

        <textarea
          name="address"
          value={address.address}
          onChange={handleChange}
          placeholder="Enter Full Address"
        ></textarea>

        <button
          className="save-btn"
          onClick={handleSaveAddress}
        >
          Save Address
        </button>

      </div>

      {/* Right Side */}

      <div className="summary-section">

              <h2>Price Details</h2>

        <div className="summary-row">
          <span>Total Items</span>
          <span>{products.length}</span>
        </div>

        <div className="summary-row">
          <span>Product Total</span>
          <span>₹ {total}</span>
        </div>

        <div className="summary-row">
          <span>Delivery Charges</span>
          <span style={{ color: "green" }}>
            FREE
          </span>
        </div>

        <div className="summary-row">
          <span>GST</span>
          <span>₹ 0</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Grand Total</span>
          <span>₹ {total}</span>
        </div>

        <h2 className="payment-heading">
          Payment Method
        </h2>

        <label className="payment-option">

          <input
            type="radio"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          Cash On Delivery

        </label>

        <label className="payment-option">

          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          UPI

        </label>

        <label className="payment-option">

          <input
            type="radio"
            value="Card"
            checked={paymentMethod === "Card"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />

          Credit / Debit Card

        </label>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

    </div>

  </div>

  <Footer />

</>

  );

}

export default Payment;
      