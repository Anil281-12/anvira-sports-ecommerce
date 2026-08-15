import { createSlice } from "@reduxjs/toolkit";

// Get the currently logged-in user's email
const getCurrentUserEmail = () => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return loggedInUser?.email || null;
};


// Get saved carts for all users
const getSavedCarts = () => {
  return JSON.parse(
    localStorage.getItem("cartByUser")
  ) || {};
};


// Get current user's cart
const getInitialCart = () => {

  const email = getCurrentUserEmail();

  if (!email) {
    return [];
  }

  const savedCarts = getSavedCarts();

  return savedCarts[email] || [];
};


const initialState = {
  cartItems: getInitialCart(),
};


const saveCartForCurrentUser = (cartItems) => {

  const email = getCurrentUserEmail();

  // If nobody is logged in, don't save
  if (!email) {
    return;
  }

  const savedCarts = getSavedCarts();

  savedCarts[email] = cartItems;

  localStorage.setItem(
    "cartByUser",
    JSON.stringify(savedCarts)
  );
};


const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      state.cartItems.push(action.payload);

      saveCartForCurrentUser(state.cartItems);
    },


    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );

      saveCartForCurrentUser(state.cartItems);
    },


    clearCart: (state) => {

      state.cartItems = [];

      saveCartForCurrentUser(state.cartItems);
    },

  },

});


export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;


export default cartSlice.reducer;