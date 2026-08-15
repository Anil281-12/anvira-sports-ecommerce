import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Indoor() {

  const products = useSelector(
    (state) => state.products.products
  );

  const indoorProducts = products.filter(
    (product) => product.category === "Indoor"
  );

  return (
    <>
      <Navbar />

      <h1
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        Indoor Sports
      </h1>

      <ProductCard products={indoorProducts} />

      <Footer />
    </>
  );
}

export default Indoor;