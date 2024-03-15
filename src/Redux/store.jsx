import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Features/authSlice';

const store = configureStore({
    reducer: {
        authenTication: authSlice,
    }
})

export default store;