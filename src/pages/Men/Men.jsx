import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Men() {

  const products = useSelector(
    (state) => state.products.products
  );

  const menProducts = products.filter(
    (product) => product.category === "Men"
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
        Men's Collection
      </h1>

      <ProductCard products={menProducts} />

      <Footer />
    </>
  );
}

export default Men;