import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const initialState = {
  name: "",
  email: "",
  error: "",
  isPending: true,
  isError: false,
};
export const cteateUser = createAsyncThunk(
  "authSlice/createUser",
  async ({ email, password, name }) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    if (user.user.email) {
      fetch(`${import.meta.env.VITE_url}/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
    }
    return {
      name: user.user.displayName,
      email: user.user.email,
    };
  }
);

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      name: user.user.displayName,
      email: user.user.email,
    };
  }
);
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    setToggle: (state, { payload }) => {
      state.isPending = payload.isPending;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cteateUser.pending, (state) => {
        state.email = "";
        state.name = "";
        state.isPending = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(cteateUser.fulfilled, (state, { payload }) => {
        state.email = payload.name;
        state.name = payload.email;
        state.isPending = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(cteateUser.rejected, (state, action) => {
        state.isPending = false;
        state.isError = true;
        state.email = "";
        state.name = "";
        state.error = action.error.message;
      });
  },
});
export const { setUser, setToggle } = authSlice.actions;
export default authSlice.reducer;
