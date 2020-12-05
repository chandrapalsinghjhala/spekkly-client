import axios from "../../../../axios";
import { getAuthHeader } from "../../../../services/auth_header_services";

export const startNewConversation = async (
  recipientUserId,
  history,
  setCreateNewConversationLoading
) => {
  try {
    setCreateNewConversationLoading(true);
    const { data } = await axios.post(
      "/conversations",
      { recipientUserId },
      getAuthHeader()
    );
    if (data.success) {
      history.push("/messages");
    }
  } catch (e) {
    //todo
    // handle error
  } finally {
    setCreateNewConversationLoading(false);
  }
};
