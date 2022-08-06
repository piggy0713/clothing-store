import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

// export const userReducer = createReducer(USER_INITIAL_STATE, (builder) => {
//   builder.addCase(USER_ACTION_TYPES.SET_CURRENT_USER, (state, action) => {
//     state.currentUser = action.payload;
//   });
// });
