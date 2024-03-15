import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: '',
    email: '',
    isPending: true,
    isError: false
}
const cteateUser = createAsyncThunk("authSlice/createUser", async()=>{
  const user = await 
})
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {}
});

export default authSlice;
