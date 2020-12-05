import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axios";
import nestedProperty from "nested-property";
import { useHistory } from "react-router-dom";
import onClickOutside from "react-onclickoutside";

import { getAuthHeaderWithData } from "../../services/auth_header_services";
import { editPostId } from "../../redux/actions/create_post_actions";
import { Option, OptionsContainer } from "../options/option_styles";
import ConfirmAlert from "../modals/ConfirmAlert";
import ReportModal from "../modals/ReportModal";
import Modal from "../modals/Modal";

const PostOptions = ({
  post,
  postSection,
  outsideClickIgnoreClass,
  reportedEntityType,
  hideOptions,
  postDeleted,
}) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const userId = useSelector(({ userState: { userId } }) => userId);
  const dispatch = useDispatch();

  const history = useHistory();

  PostOptions.handleClickOutside = () => {
    hideOptions();
  };

  const handleDelete = async () => {
    const {
      data: { success },
    } = await axios.delete(
      `/posts/${post.id}`,
      getAuthHeaderWithData({ postId: post.id })
    );
    if (!success) {
      // console.log(success);
      // throw new Error();
    } else {
      postDeleted();
    }

    if (postSection === "home") {
      history.push("/");
    }
  };

  const showEditComponent = () => {
    dispatch(editPostId(post.id));
    history.push(`/posts/edit/${post.id}`);
  };

  const postBelongsToUser = () => {
    if (post.belongsToUser.id == userId) {
      return true;
    } else {
      return false;
    }
  };

  const closeModal = () => {
    setShowDeleteConfirmModal(false);
    setShowReportModal(false);
    hideOptions();
  };

  return (
    <OptionsContainer>
      {!postBelongsToUser() && (
        <Option onClick={() => setShowReportModal(true)}>Report</Option>
      )}

      {postBelongsToUser() && (
        <div>
          <Option onClick={showEditComponent}>Edit Post</Option>
          <Option
            onClick={() => {
              handleDelete(post);
            }}
          >
            Delete Post
          </Option>
        </div>
      )}

      {showDeleteConfirmModal && (
        <Modal closeModal={closeModal}>
          {/* <ConfirmAlert
            text="Are you sure you want to delete your post?"
            buttonText="Delete"
            closeAlert={closeModal}
            action={handleDelete}
            heading="Delete Post"
          /> */}
        </Modal>
      )}

      {showReportModal && (
        <Modal
          closeModal={closeModal}
          outsideClickIgnoreClass={outsideClickIgnoreClass}
        >
          <ReportModal
            reportedEntityId={post.id}
            closeModal={closeModal}
            reportedEntityType="post"
          />
        </Modal>
      )}
    </OptionsContainer>
  );
};

PostOptions.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => PostOptions.handleClickOutside,
};

export default onClickOutside(PostOptions, clickOutsideConfig);
