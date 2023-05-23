import { createSlice } from "@reduxjs/toolkit";

// equivalente ao AuthContext, da implementação de contextos pelo React
const authSlice = createSlice({
    name: "auth",
    initialState: {
        userID: null,
        loggedIn: false,
    },
    reducers: {
        login: (state) => {
            state.userID = 100;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.userID = null;
            state.loggedIn = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export const { authReducer } = authSlice.reducer;