import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function Cart() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

 

  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {
        cartItems.length === 0 ? (

          <h2>Your Cart is Empty</h2>

        ) : (

          cartItems.map((item) => (

            <div className="cart-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>{item.name}</h3>

                <p>{item.brand}</p>

                <h2>₹ {item.price}</h2>

              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>

            </div>

          ))

        )
      }

      <h2>Total : ₹ {total}</h2>

         <button
          className="checkout-btn"
          onClick={() => navigate("/payment")}
        >
         Proceed To Checkout
        </button>

    </div>

  );

}

export default Cart;