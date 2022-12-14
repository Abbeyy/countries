import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
