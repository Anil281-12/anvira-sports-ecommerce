import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { addToCart } from "../../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlistSlice";

import "./productDetails.css";
function ProductDetails() {
  const { id } = useParams();  // useParams is a React Router Hook used to read dynamic values from the URL. In my project, when the user clicks a product card, I navigate to /product/:id. The useParams() hook extracts the id from the URL, and then I use that id to find the corresponding product from the Redux Store and display its details

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products); // in redux all products are stored football, cricket bat, gym products , using useselector to read the data .

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const product = products.find((item) => item.id == id); // products contains all products read from the Redux Store.find() searches the array and returns the product whose id matches the id from the URL.

  const navigate = useNavigate();

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // Selected Option State  ex - if i click the bat iin this 3 optons are there shorter , middle, longer 
  // ex - shoe size - 7,8,9,10
  const [selectedOption, setSelectedOption] = useState(
    product?.options ? product.options[0] : null
  );

  // Stop if product is not loaded
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // Final Price
  const finalPrice = selectedOption
    ? product.price + selectedOption.extraPrice
    : product.price;

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
        selectedOption,
        price: finalPrice,
        totalPrice: finalPrice * quantity,
      })
    );

    alert("Product Added To Cart");
  };

  return (
    <>
      <Navbar />

      <div className="product-details">

        <div className="left">

  <div className="image-card">

    <img
      src={product.image}
      alt={product.name}
    />

  </div>

</div>

<div className="right">

  {/* Wishlist */}

  <div className="product-title">

    <h1>{product.name}</h1>

    <button
      className="wishlist-icon"
      onClick={handleWishlist}
    >
      {isWishlisted ? (
        <FaHeart color="red" />
      ) : (
        <FaRegHeart color="gray" />
      )}
    </button>

  </div>

  {/* Brand */}

  <p>
    <strong>Brand:</strong> {product.brand}
  </p>

  {/* Category */}

  <p>
    <strong>Category:</strong> {product.category}
  </p>

  {/* Rating */}

  <p className="review-text">
    ⭐ {product.rating} ({product.reviews} Reviews)
  </p>

  {/* Price */}

  <h2 className="product-price">
    ₹{finalPrice}
  </h2>

  {/* Description */}

  <p className="product-description">
    {product.description}
  </p>

  {/* Product Options */}

  {product.optionLabel && (
    <>
      <h3 className="section-title">
        Select {product.optionLabel}
      </h3>

      <div className="options-container">

        {product.options?.map((option, index) => (

          <button
            key={index}
            className={
              selectedOption?.value === option.value
                ? "option-btn active-option"
                : "option-btn"
            }
            onClick={() => setSelectedOption(option)}
          >
            {option.value}

            {option.extraPrice > 0 &&
              ` (+₹${option.extraPrice})`}
          </button>

        ))}

      </div>
    </>
  )}

  {/* Quantity */}

  <h3 className="section-title">
    Quantity
  </h3>

  <div className="quantity-box">

    <button
      onClick={() =>
        quantity > 1 &&
        setQuantity(quantity - 1)
      }
    >
      -
    </button>

    <span>{quantity}</span>

    <button
      onClick={() =>
        setQuantity(quantity + 1)
      }
    >
      +
    </button>

  </div>

  {/* Buttons */}

  <div className="cart-buy">

    <button
      className="add-cart"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>

    <button
      className="buy-now"
      onClick={() =>
        navigate("/payment", {
          state: {
            buyNowProduct: {
              ...product,
              quantity,
              selectedOption,
              price: finalPrice,
            },
          },
        })
      }
    >
      Buy Now
    </button>

  </div>

</div>

</div>

<Footer />

</>
);
}

export default ProductDetails;