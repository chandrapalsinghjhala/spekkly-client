import { CLEAR_FILTERS } from "../constants/home_action_types";

export const clearFiltersDispatch = (clearFilters) => ({
  type: CLEAR_FILTERS,
  clearFilters,
});
