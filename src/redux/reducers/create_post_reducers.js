import {
  CREATE_POST_ACTIVE_NAV,
  CURRENT_PAGE_IS_VALID,
  LOADING,
  FORM_TYPE,
  EDIT_POST_ID,
} from "../constants/create_post_action_types";

const initialCreatePostState = {
  activeNavIndex: 0,
  loading: false,
};

const createPostState = (state = initialCreatePostState, action) => {
  if (action.type === CREATE_POST_ACTIVE_NAV) {
    return Object.assign({}, state, {
      activeNavIndex: action.activeNavIndex,
    });
  } else if (action.type === CURRENT_PAGE_IS_VALID) {
    return Object.assign({}, state, {
      currentPageIsValid: action.currentPageIsValid,
    });
  } else if (action.type === LOADING) {
    return Object.assign({}, state, {
      loading: action.loading,
    });
  } else if (action.type === FORM_TYPE) {
    return Object.assign({}, state, {
      formType: action.formType,
    });
  } else if (action.type === EDIT_POST_ID) {
    return Object.assign({}, state, {
      editPostId: action.editPostId,
    });
  }
  return state;
};

export default createPostState;
