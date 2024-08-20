interface CommonState {
  value: number;
}
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_CIPHERS } from "tls";

interface CommonState {
  value: number;
}

const initialState: CommonState = {
  value: 0,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("REDUCER");
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = commonSlice.actions;

export default commonSlice.reducer;
