import { createSlice } from '@reduxjs/toolkit'
import {
	logOut,
	login,
    register,
    refreshUser,
} from './operations'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: null,
        isLoggedIn: false,
        isRefreshing: false,
	},
	extraReducers: (builder) => {
        builder
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
            })
			.addCase(logOut.fulfilled, (state) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = null
				state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
        })
	},
})

export const authReducer = authSlice.reducer