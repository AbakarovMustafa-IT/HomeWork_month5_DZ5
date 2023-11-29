import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import usersReducer from './usersSlice'
import calculSlice from './calculSlice'

export const store = configureStore({
  reducer: {
    titleReducer,
    usersReducer,
    calculSlice
  }
})