import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import baseApi from "./Features/NotesAPI/baseApi";
import themeSlice from "./Theme/themeSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authenTication: authSlice,
    theme: themeSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
