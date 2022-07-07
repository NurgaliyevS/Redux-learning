import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customReducer } from "./customReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
