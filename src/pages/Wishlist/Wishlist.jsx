import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  removeFromWishlist,
} from "../../redux/wishlistSlice";

import { addToCart } from "../../redux/cartSlice";

import "./Wishlist.css";

// function Wishlist() {

   function Wishlist({ insideProfile = false }) {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const moveToCart = (product) => {

    dispatch(addToCart(product));

    dispatch(removeFromWishlist(product.id));

    alert("Moved To Cart");

  };

  return (
    <>
      {/* <Navbar /> */}

       {!insideProfile && <Navbar />}

      <div className="wishlist-container">

        <h1>My Wishlist ❤️</h1>

        {
          wishlistItems.length === 0 ? (

            <h2>Your Wishlist is Empty</h2>

          ) : (

            <div className="wishlist-products">

              {wishlistItems.map((product) => (

                <div
                  className="wishlist-card"
                  key={product.id}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>
                      <strong>Brand :</strong> {product.brand}
                  </p>

                  <p>
                    ⭐ {product.rating} ({product.reviews} Reviews)
                  </p>

                   <h2>₹ {product.price}</h2>

                  <button
                    onClick={() => moveToCart(product)}
                  >
                    Move To Cart
                  </button>

                  <button
                    onClick={() =>
                      dispatch(removeFromWishlist(product.id))
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )

        }

      </div>

      {/* <Footer /> */}

      {!insideProfile && <Footer />}

    </>
  );
}

export default Wishlist;