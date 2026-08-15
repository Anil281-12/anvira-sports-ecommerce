import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes/AppRoutes";

import { getAllProducts } from "./Services/productService";
import { setProducts } from "./redux/productSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    const data = await getAllProducts();

    dispatch(setProducts(data));

  };

  return <AppRoutes />;

}

export default App;