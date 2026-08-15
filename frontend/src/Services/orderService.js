import axios from "axios";

const BASE_URL = "https://anvira-sports-ecommerce.onrender.com/orders";

// Save Order
export const saveOrder = async (order) => {
  const response = await axios.post(BASE_URL, order);
  return response.data;
};

// Get All Orders
export const getAllOrders = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Delete Order (optional for later)
export const deleteOrder = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};