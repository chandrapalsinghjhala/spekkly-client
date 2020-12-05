import axios from "../../../axios";
import { FORM_ERROR } from "final-form";
import { getAuthHeader } from "../../../services/auth_header_services";

export const handleSettingsSubmit = async (values, props, options = {}) => {
  try {
    const {
      data: { success, error },
    } = await axios.patch(options.url, values, getAuthHeader());
    if (success) {
      props.setEditCompleteText(options.editCompleteText);
      props.setEditActive(false);
      await props.getUpdatedUserData();
    } else {
      return { [FORM_ERROR]: error };
    }
  } catch (e) {
    return { [FORM_ERROR]: "Something went wrong" };
  }
};
