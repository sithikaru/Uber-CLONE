import { configureStore } from '@reduxjs/toolkit'
import navReducer from "./slices/navSlice.js"

export default configureStore({
  reducer: {
    nav:navReducer,
  },
});