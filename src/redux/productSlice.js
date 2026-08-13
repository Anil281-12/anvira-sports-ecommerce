/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;*/

/* =====================================================================================*/

// Imports createSlice from Redux Toolkit to create a Redux slice
import { createSlice } from "@reduxjs/toolkit";

// Initial state of the products slice
// Initially, no products are available in the Redux Store
const initialState = {
  products: [],
};

// Creates a Redux slice for managing product-related state
const productSlice = createSlice({

  // Name of the Redux slice
  // It becomes part of the Redux Store as state.products
  name: "products",

  // Sets the default state of this slice
  initialState,

  // Reducers contain functions that update the Redux state
  reducers: {

    // Stores all products received from the backend into the Redux Store
    setProducts: (state, action) => {

      // action.payload contains the product data fetched from the backend
      // Updates the products array in the Redux Store
      state.products = action.payload;
    },
  },
});

// Exports the action creator so components can dispatch it
// Example: dispatch(setProducts(data))
export const { setProducts } = productSlice.actions;

// Exports the reducer so it can be added to the Redux Store
export default productSlice.reducer;