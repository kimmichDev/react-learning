import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user: null,
    token: null
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.access_token;
            Cookies.set("user", JSON.stringify(payload.user));
            Cookies.set("token", payload.access_token);
        }
    }
})
export const { addUser } = authSlice.actions;
export default authSlice.reducer