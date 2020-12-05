import React from "react";
import { InputBox } from "../../containers/container";
import CheckMark from "../../../assets/settings_check.svg";
import styled from "styled-components";
import anime from "animejs";

const ProfileUpdatedNotice = styled.div`
  font-size: 1.4rem;
`;

const ProfileUpdatedCheckMark = styled.img`
  width: 2rem;
  margin-right: 0.8rem;
`;

const ProfileUpdatedContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateSuccessful = (props) => {
  const animationRef = React.createRef();

  const handleImageLoaded = () => {
    const nodeHeight = animationRef.current.offsetHeight;
    anime({
      targets: animationRef.current,
      easing: "easeOutCubic",
      translateY: [
        { value: -nodeHeight, duration: 0, delay: 0 },
        { value: 0, duration: 1000, delay: 400 },
      ],
    });
  };

  return (
    <InputBox belowSiblings ref={animationRef} borderTop>
      <ProfileUpdatedContainer>
        <ProfileUpdatedCheckMark
          onLoad={handleImageLoaded}
          src={CheckMark}
          alt={"Update successful"}
        />
        <ProfileUpdatedNotice>{props.message}</ProfileUpdatedNotice>
      </ProfileUpdatedContainer>
    </InputBox>
  );
};

export default UpdateSuccessful;
