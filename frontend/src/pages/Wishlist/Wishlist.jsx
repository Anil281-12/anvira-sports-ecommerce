import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  removeFromWishlist,
} from "../../redux/wishlistSlice";

import { addToCart } from "../../redux/cartSlice";

import {
  FaHeart,
  FaDumbbell,
} from "react-icons/fa";

import "./Wishlist.css";


function Wishlist({ insideProfile = false }) {

  const dispatch = useDispatch();


  // Get wishlist products from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );


  // Move product from Wishlist to Cart
  const moveToCart = (product) => {

    dispatch(addToCart(product));

    dispatch(removeFromWishlist(product.id));

    alert("Moved To Cart");

  };


  return (

    <>

      {/* Show Navbar only when Wishlist is a normal page */}

      {!insideProfile && <Navbar />}


      <div className="wishlist-container">


        {/* ================= WISHLIST TITLE ================= */}

        <h1 className="wishlist-title">
          My Wishlist ❤️
        </h1>


        {

          wishlistItems.length === 0 ? (

            /* ================= EMPTY WISHLIST ================= */

            <div className="empty-wishlist">


              {/* Sports Wishlist Icon */}

              <div className="empty-wishlist-icon">

                <div className="sports-icon-circle">

                  <FaHeart className="wishlist-heart" />

                </div>


                <FaDumbbell className="dumbbell-icon" />

              </div>


              {/* Empty Message */}

              <h2>
                Your Wishlist is Empty
              </h2>


              <p>
                Save your favourite sports products here.
              </p>


              {/* Continue Shopping */}

              <button
                className="start-shopping-btn"
                onClick={() =>
                  window.location.href = "/"
                }
              >
                Start Shopping
              </button>


            </div>


          ) : (


            /* ================= WISHLIST PRODUCTS ================= */

            <div className="wishlist-products">

              {wishlistItems.map((product) => (

                <div
                  className="wishlist-card"
                  key={product.id}
                >


                  {/* Product Image */}

                  <img
                    src={product.image}
                    alt={product.name}
                  />


                  {/* Product Name */}

                  <h3>
                    {product.name}
                  </h3>


                  {/* Brand */}

                  <p>
                    <strong>
                      Brand :
                    </strong>{" "}
                    {product.brand}
                  </p>


                  {/* Rating */}

                  <p>
                    ⭐ {product.rating} (
                    {product.reviews} Reviews)
                  </p>


                  {/* Price */}

                  <h2>
                    ₹ {product.price}
                  </h2>


                  {/* Move To Cart */}

                  <button
                    onClick={() =>
                      moveToCart(product)
                    }
                  >
                    🛒 Move To Cart
                  </button>


                  {/* Remove From Wishlist */}

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromWishlist(product.id)
                      )
                    }
                  >
                    🗑 Remove
                  </button>


                </div>

              ))}

            </div>

          )

        }


      </div>


      {/* Show Footer only when Wishlist is a normal page */}

      {!insideProfile && <Footer />}


    </>

  );

}


export default Wishlist;