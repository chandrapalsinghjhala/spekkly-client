import axios from "../axios";
import io from "socket.io-client";
import { getAuthHeader } from "./auth_header_services";
import store from "../redux/store/store";
import {
  newMessagesDispatch,
  recipientOnlineChangesDispatch,
} from "../redux/actions/message_actions";
import { userDataDispatch } from "../redux/actions/user_actions";
import { REACT_APP_BACKEND_URL } from "../backend";

const initSocket = async () => {
  const socket = io.connect(REACT_APP_BACKEND_URL);

  socket.on("connect", async () => {
    axios.post("/users/socket", { socketId: socket.id }, getAuthHeader());
  });

  socket.on("recipientOnlineChanges", (data) => {
    store.dispatch(
      recipientOnlineChangesDispatch([
        ...store.getState().messageState.recipientOnlineChanges,
        data,
      ])
    );
  });

  socket.on("disconnect", async () => {
    axios.delete("/users/socket", getAuthHeader());
  });

  socket.on("newMessage", (message) => {
    store.dispatch(
      newMessagesDispatch([
        ...store.getState().messageState.newMessages,
        message,
      ])
    );

    if (message.authoredUserId !== store.getState().userState.userId) {
      store.dispatch(
        userDataDispatch({
          ...store.getState().userState,
          hasUnreadMessages: true,
        })
      );
    }
  });

  return socket;
};

export default initSocket;
