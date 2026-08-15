import "./ProductCard.css";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function ProductCard({ products }) {

  const navigate = useNavigate();

  const allProducts = useSelector(
    (state) => state.products.products
  );

  // const displayProducts =
  //   products || allProducts.slice(0, 10);

  const displayProducts = products || [
  ...allProducts.filter(p => p.category === "Gym").slice(0, 1),
  ...allProducts.filter(p => p.category === "Men").slice(0, 1),
  ...allProducts.filter(p => p.category === "Women").slice(0, 1),
  ...allProducts.filter(p => p.category === "Kids").slice(0, 1),
  ...allProducts.filter(p => p.category === "Indoor").slice(0, 1),
  ...allProducts.filter(p => p.category === "Outdoor").slice(0, 1),
  ...allProducts.filter(p => p.category === "Women").slice(2, 4),
  ...allProducts.filter(p => p.category === "Outdoor").slice(2, 4),
  ...allProducts.filter(p => p.category === "Indoor").slice(7),
  ...allProducts.filter(p => p.category === "Gym").slice(3),
];

  return (
    <section className="products-section">

      <div className="products-heading">

        <h2>Featured Products</h2>

        <p>
          Explore our latest sports and fitness essentials
        </p>

      </div>


      <div className="product-container">

        {displayProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
            onClick={() =>
              navigate(`/product/${product.id}`)
            }
          >

            {/* Product Image */}

            <div className="product-image-box">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>


            {/* Product Information */}

            <div className="product-info">

              <h3>
                {product.name}
              </h3>


              <p className="product-brand">
                {product.brand}
              </p>


              <div className="product-rating">

                ⭐ {product.rating}

              </div>


              <div className="product-bottom">

                <span className="product-price">
                  ₹{product.price}
                </span>


                <button
                  onClick={(e) => {

                    e.stopPropagation();

                    navigate(
                      `/product/${product.id}`
                    );

                  }}
                >
                  View Product
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductCard;