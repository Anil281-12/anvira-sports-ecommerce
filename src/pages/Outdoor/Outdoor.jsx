import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Outdoor() {

  const products = useSelector(
    (state) => state.products.products
  );

  const outdoorProducts = products.filter(
    (product) => product.category === "Outdoor"
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
        Outdoor Sports
      </h1>

      <ProductCard products={outdoorProducts} />

      <Footer />
    </>
  );
}

export default Outdoor;