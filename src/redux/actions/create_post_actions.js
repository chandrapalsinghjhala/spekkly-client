import {
  CREATE_POST_ACTIVE_NAV,
  CURRENT_PAGE_IS_VALID,
  LOADING,
  FORM_TYPE,
  EDIT_POST_ID,
} from "../constants/create_post_action_types";

export const activeNavIndex = (activeNavIndex) => ({
  type: CREATE_POST_ACTIVE_NAV,
  activeNavIndex,
});

export const currentPageIsValid = (currentPageIsValid) => ({
  type: CURRENT_PAGE_IS_VALID,
  currentPageIsValid,
});

export const loading = (loading) => ({
  type: LOADING,
  loading,
});

export const formType = (formType) => ({
  type: FORM_TYPE,
  formType,
});

export const editPostId = (editPostId) => ({
  type: EDIT_POST_ID,
  editPostId,
});
