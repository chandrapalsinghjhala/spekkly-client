import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import removeItems from "remove-array-items";
import axios from "../../../../axios";

import { BlockButtonContainer } from "./blocked_user_styles";
import {
  BlockedUsersContainer,
  LoadingError,
  BlockedUserImage,
  BlockedUserContainer,
  BlockedUserName,
  ItemsContainer,
} from "./blocked_user_styles";
import Loading from "../../../loading/Loading";
import { getAuthHeader } from "../../../../services/auth_header_services";
import FilledButton from "../../../buttons/FilledButton";
import { userDataDispatch } from "../../../../redux/actions/user_actions";
import LoadingButtonSpinner from "../../../loading/LoadingButtonSpinner";

const BlockedUsersDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [removeLoadingIndex, setRemoveLoadingIndex] = useState(-1);
  const [unblockLoadingIndices, setUnblockLoadingIndices] = useState([]);

  const unblockUser = async (blockedUserId, index) => {
    try {
      setUnblockLoadingIndices([...unblockLoadingIndices, index]);
      const payload = {
        blockedUserId,
        blockUser: false,
      };

      const {
        data: { success },
      } = await axios.patch("/users/blocked_users", payload, getAuthHeader());

      if (success) {
        const index = blockedUsers.findIndex(
          (element) => element.id === blockedUserId
        );
        removeItems(blockedUsers, index, 1);

        if (blockedUsers.length === 0) {
          props.userData(
            Object.assign({}, props.userDataProp, { blockedUsers: null })
          );
          props.setBlockedUserListVisible(false);
        } else {
          setBlockedUsers([...blockedUsers]);
        }
      } else {
        throw new Error();
      }
    } catch (e) {
      props.setUnblockUserError(
        "Something went wrong. Please try again later."
      );
    } finally {
      setRemoveLoadingIndex(index);
    }
  };

  useEffect(() => {
    if (removeLoadingIndex !== -1) {
      const indexToRemove = unblockLoadingIndices.findIndex(
        (element) => element === removeLoadingIndex
      );
      removeItems(unblockLoadingIndices, indexToRemove, 1);
      setUnblockLoadingIndices([...unblockLoadingIndices]);
      setRemoveLoadingIndex(-1);
    }
  }, [removeLoadingIndex]);

  useEffect(() => {
    fetchBlockedUsers();
  }, []);

  const fetchBlockedUsers = async () => {
    try {
      const {
        data: { success, blockedUsers },
      } = await axios.get("/users/blocked_users", getAuthHeader());
      if (success) {
        setBlockedUsers(blockedUsers);
      } else {
        throw new Error();
      }
    } catch (e) {
      setLoadingError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlockedUsersContainer loading={loading ? 1 : 0}>
      <Loading loading={loading} solidBackground />

      {loadingError && (
        <LoadingError>Blocked users could not be loaded</LoadingError>
      )}

      {!loadingError && (
        <ItemsContainer>
          {blockedUsers.map((user, index) => (
            <BlockedUserContainer key={user.id}>
              <BlockedUserImage
                src={user.profileImage}
                alt="Blocked user's profile image"
              />
              <BlockedUserName>{user.name}</BlockedUserName>
              <BlockButtonContainer>
                <FilledButton
                  buttonText="Unblock"
                  warning
                  leftSideLoading
                  loading={unblockLoadingIndices.includes(index)}
                  disabled={unblockLoadingIndices.includes(index)}
                  onClick={() => unblockUser(user.id, index)}
                  small
                />
              </BlockButtonContainer>
            </BlockedUserContainer>
          ))}
        </ItemsContainer>
      )}
    </BlockedUsersContainer>
  );
};

const mapStateToProps = ({ userState }) => ({
  blockedUsers: userState.blockedUsers,
  userDataProp: userState.userData,
});

const mapDispatchToProps = () => ({
  userDataDispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(BlockedUsersDetails);
