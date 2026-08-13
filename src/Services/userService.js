import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

// Register User
export const registerUser = async (user) => {
  try {
    const response = await axios.post(BASE_URL, user);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);
  }
};

// Get All Users
export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    return [];
  }
};