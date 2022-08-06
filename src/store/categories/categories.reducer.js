import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

// import { CATEGORIES_ACTION_TYPES } from "./categories.types";
// import { createReducer } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   categoriesMap: {},
// };

// export const categoriesReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder.addCase(
//     CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
//     (state, action) => {
//       state.categoriesMap = action.payload;
//     }
//   );
// });
