import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart: (state) => {
      state.showMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false;
    },
    addToCart: (state, action) => {
      const newItems = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === newItems.id);
      if (index >= 0) {
        state.cartItem[index].quantity += newItems.quantity;
      } else {
        state.cartItem.push(newItems);
      }
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const idNeedToRemove = action.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;
export default reducer;
