import axios from "axios";

const BASE_URL = "http://localhost:3001/products";

// Get All Products
export const getAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add Product
export const addProduct = async (product) => {
  const response = await axios.post(BASE_URL, product);
  return response.data;
};

// Update Product
export const updateProduct = async (id, product) => {
  const response = await axios.put(
    `${BASE_URL}/${id}`,
    product
  );
  return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};