import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Kids() {

  const products = useSelector(
    (state) => state.products.products
  );

  const kidsProducts = products.filter(
    (product) => product.category === "Kids"
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
        Kids Collection
      </h1>

      <ProductCard products={kidsProducts} />

      <Footer />
    </>
  );
}

export default Kids;