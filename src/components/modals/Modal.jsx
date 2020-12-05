import React, { useEffect } from "react";
import { Portal } from "react-portal";

import {
  ModalContainerTag,
  ModalInnerContainer,
  CloseButtonContainer,
  CloseButtonImage,
} from "./styles/modal_styles";
import {
  useDisableScroll,
  closeModalFromClick,
} from "../modals/helpers/modal_helpers";
import { useDispatch, useSelector } from "react-redux";
import { blurBackground } from "../../redux/actions/app_actions";

const Modal = (props) => {
  const closeIcon = useSelector(
    ({ assetState: { BLACK_X_ICON } }) => BLACK_X_ICON
  );
  const dispatch = useDispatch();

  useDisableScroll();

  useEffect(() => {
    dispatch(blurBackground(true));
    return () => {
      dispatch(blurBackground(false));
    };
  }, []);

  return (
    <Portal>
      <ModalContainerTag
        className={props.outsideClickIgnoreClass}
        onClick={(e) => closeModalFromClick(e, props.closeModal)}
      >
        <ModalInnerContainer large={props.large} medium={props.medium}>
          {props.showCloseButton && (
            <CloseButtonContainer onClick={props.closeModal}>
              <CloseButtonImage src={closeIcon} />
            </CloseButtonContainer>
          )}
          {props.children}
        </ModalInnerContainer>
      </ModalContainerTag>
    </Portal>
  );
};

export default Modal;
