import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {

    addOrder: (state, action) => {
      state.orderItems.push(action.payload);
    },

    clearOrders: (state) => {
      state.orderItems = [];
    },

  },
});

export const {
  addOrder,
  clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;