import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSignInStart: () => {},
    emailSignInStart: () => {},
    emailSignUpStart: () => {},
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpSuccess: () => {},
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutStart: () => {},
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signInSuccess,
  signInFailed,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  emailSignUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
} = userSlice.actions;
export default userSlice.reducer;
