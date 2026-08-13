import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Gym() {

  const products = useSelector(
    (state) => state.products.products
  );

  const gymProducts = products.filter(
    (product) => product.category === "Gym"
  );

  return (
    <>
      <Navbar />

      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Gym Equipment
      </h1>

      <ProductCard products={gymProducts} />

      <Footer />
    </>
  );
}

export default Gym;