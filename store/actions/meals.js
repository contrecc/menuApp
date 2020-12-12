export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const FILTER_SETTINGS = "FILTER_SETTINGS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: FILTER_SETTINGS, filters: filterSettings };
};
