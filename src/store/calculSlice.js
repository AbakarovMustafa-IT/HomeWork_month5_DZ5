import { createSlice } from "@reduxjs/toolkit";

const calculSlice = createSlice({
  name: "calculSlice",
  initialState: {
    result: 0,
  },
  reducers: {
    PlusNumbers: (state, action) => {
      state.result = Number(action.payload.input1) + Number(action.payload.input2);
    },
    subtractNumbers: (state, action) => {
      state.result = Number(action.payload.input1) - Number(action.payload.input2);
    },
    multiplyNumbers: (state, action) => {
      state.result = Number(action.payload.input1) * Number(action.payload.input2);
    },
    divideNumbers: (state, action) => {
      state.result = Number(action.payload.input1) / Number(action.payload.input2);
    },
    cleanResult: (state, action) => {
      state.result = ""
    }
  },
});

export const { firstInput, secondInput, PlusNumbers, subtractNumbers, multiplyNumbers, divideNumbers, cleanResult } =
  calculSlice.actions;

export default calculSlice.reducer