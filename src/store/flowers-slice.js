import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
  name: "flowers",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addFlower(state, action) {
      if (action.payload?.count >= 1) {
        const flower = state.items.find(
          (flower) => flower.id === action.payload.id
        );
        flower.count++;
      } else {
        action.payload.count = 1;
        state.items.unshift(action.payload);
      }
    },
    removeFlower(state, action) {},
  },
});

export const flowersActions = flowersSlice.actions;

export const flowersReducers = flowersSlice.reducer;
