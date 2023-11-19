import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./features/budget/budgetSlice";


export const store = configureStore({
  reducer: {
    budgetKey: budgetSlice,
  },
});