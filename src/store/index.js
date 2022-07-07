import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { cashReducer } from "./cashReducer";
import { customReducer } from "./customReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunk
      }
    })
});
