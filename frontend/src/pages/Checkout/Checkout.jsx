// import "./Checkout.css";

// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";

// import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { addOrder } from "../../redux/orderSlice";
// import { clearCart } from "../../redux/cartSlice";

// function Checkout() {

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price,
//     0
//   );

//     const handlePlaceOrder = () => {

//   if (cartItems.length === 0) {
//     alert("Your Cart is Empty");
//     return;
//   }

//   dispatch(addOrder(cartItems));

//   dispatch(clearCart());

//   alert("🎉 Order Placed Successfully");

//   navigate("/orders");
// };

//   return (
//     <>
//       <Navbar />

//       <div className="checkout-container">

//         <h1>Checkout</h1>

//         <div className="checkout-box">

//           <div className="billing-details">

//             <h2>Billing Details</h2>

//             <input
//               type="text"
//               placeholder="Full Name"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//             />

//             <input
//               type="text"
//               placeholder="Mobile Number"
//             />

//             <textarea
//               placeholder="Delivery Address"
//             ></textarea>

//             <select>

//               <option>
//                 Select Payment Method
//               </option>

//               <option>
//                 Cash On Delivery
//               </option>

//               <option>
//                 UPI
//               </option>

//               <option>
//                 Credit / Debit Card
//               </option>

//             </select>

//           </div>

//           <div className="order-summary">

//             <h2>Order Summary</h2>

//             {cartItems.map((item) => (

//               <div
//                 key={item.id}
//                 className="summary-item"
//               >

//                 <span>{item.name}</span>

//                 <span>₹ {item.price}</span>

//               </div>

//             ))}

//             <hr />

//             <h3>Total : ₹ {total}</h3>

//               <button className="place-order-btn"
//                  onClick={handlePlaceOrder}>
//                   Place Order
//               </button>

//           </div>

//         </div>

//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Checkout;