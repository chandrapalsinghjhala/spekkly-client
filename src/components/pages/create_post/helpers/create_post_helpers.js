import axios from "../../../../axios";
import { getAuthHeader } from "../../../../services/auth_header_services";
import { FORM_ERROR } from "final-form";

export const handleSubmit = async (values, props, history) => {
  try {
    let response;

    if (props.createPostType === "create") {
      response = await axios.post("/posts/create", values, getAuthHeader());
    } else {
      values.belongsToUser = values.belongsToUser.id;

      response = await axios.patch(
        `/posts/${props.postID}`,
        values,
        getAuthHeader()
      );
    }
    const { data } = response;

    if (data.success) {
      history.push("/");
    } else {
      throw new Error();
    }
  } catch (e) {
    return { [FORM_ERROR]: "Login Failed" };
  }
};

export const getInitialValues = () => {
  if (process.env.NODE_ENV === "development") {
    return {
      title: "Test Title",
      description: "This is a test description. This is a test description.",
      space: {
        min: "400",
        max: "500",
      },
      cost: {
        min: "400",
        max: "500",
      },
      location: "This is a test",
      type: "Office",
      transit: ["Subway"],
    };
  } else {
    return {};
  }
};
