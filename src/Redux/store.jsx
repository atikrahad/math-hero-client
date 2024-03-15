import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import baseApi from "./Features/NotesAPI/baseApi";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authenTication: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
