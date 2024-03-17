import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemes: (state, { payload }) => {
      if (payload === true) {
        state.value = "dark";
      } else {
        state.value = "light"
      }
    },
  },
});

export const { setThemes } = themeSlice.actions;
export default themeSlice.reducer;
