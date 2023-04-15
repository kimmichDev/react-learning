import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { value: false },
    reducers: {
        login: (state, { type, payload }) => {
            state.value = payload;
        },
        logout: (state, { type, payload }) => {
            state.value = payload
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;