import { createSelector } from "@reduxjs/toolkit";

const selectCategories = (state) => state.categories.categories;

export const selectCategoriesMap = createSelector(
  selectCategories,
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
