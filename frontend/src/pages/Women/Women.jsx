import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Women() {

  const products = useSelector(
    (state) => state.products.products
  );

  const womenProducts = products.filter(      // Filter all products and keep only the products
  (product) => product.category === "Women"  // whose category is "Women"
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
        Women's Collection
      </h1>
  
      <ProductCard products={womenProducts} />  
    
      <Footer />
    </>
  );
}

export default Women;