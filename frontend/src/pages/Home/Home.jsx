import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

import { getAllProducts } from "../../Services/productService";
import { setProducts } from "../../redux/productSlice";

import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
    dispatch(setProducts(data));
  };

  return (
    <>
      <Navbar />
      <Hero />
      <ProductCard />
      <Footer />
    </>
  );
}

export default Home;