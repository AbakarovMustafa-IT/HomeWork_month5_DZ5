import { createSlice } from "@reduxjs/toolkit";

const calculSlice = createSlice({
  name: "calculSlice",
  initialState: {
    // input1: "",
    // input2: "",
    result: 0,
  },
  reducers: {
    // firstInput: (state, action) => {
    //   state.input1 = action.payload;
    // },
    // secondInput: (state, action) => {
    //   state.input2 = action.payload;
    // },
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