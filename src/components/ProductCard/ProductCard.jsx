import "./ProductCard.css";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../redux/cartSlice";

import { useNavigate } from "react-router-dom";

function ProductCard({ products }) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const allProducts = useSelector(
    (state) => state.products.products
  );

  const displayProducts =
    products || allProducts.slice(0, 10);

  return (

    <div className="product-container">

      {displayProducts.map((product) => (

        <div
          className="product-card"
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
        >

          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <p>
            Brand : {product.brand}
          </p>

          <p>
            Category : {product.category}
          </p>

          <p>
            ⭐ {product.rating}
          </p>

          <h2>
            ₹ {product.price}
          </h2>

  <button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  }}
>
  Buy Now
</button>

        </div>

      ))}

    </div>

  );

}

export default ProductCard;