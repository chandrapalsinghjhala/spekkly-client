import { CLEAR_FILTERS } from "../constants/home_action_types";

const initialHomeState = {
  clearFilters: 0,
};

const clearFilters = (state = initialHomeState, action) => {
  if (action.type === CLEAR_FILTERS) {
    return { ...state, clearFilters: action.clearFilters };
  }

  return state;
};

export default clearFilters;
