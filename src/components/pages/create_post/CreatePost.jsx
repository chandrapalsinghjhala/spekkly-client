import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../../axios";
import { StandardContainer, ContentSection } from "../../containers/container";
import CreatePostNavItems from "./CreatePostNavItems";
import ViewBoxHeading from "../../headings/ViewBoxHeading";
import CreatePostInput from "../create_post/CreatePostInput";
import { SideNavContainer } from "../../containers/container";
import { formType } from "../../../redux/actions/create_post_actions";
import VerifyEmailNotice from "../../notices/VerifyEmailNotice";
import Media from "react-media";
import { tabLandUp } from "../../media/media_helpers";
import CreatePostButtons from "./CreatePostButtons";
import Measure from "react-measure";

const CreatePost = (props) => {
  const [createPostType, setCreatePostType] = useState("");
  const [headingHeight, setHeadingHeight] = useState({});
  const [postID, setPostID] = useState("");
  useEffect(() => {
    setCreatePostType(props.formTypeProp);
    if (props.params) {
      setPostID(props.params.match.params.id);
    }
  }, []);

  return (
    <div>
      <StandardContainer>
        {props.emailVerified && (
          <SideNavContainer>
            <Media query={tabLandUp}>
              {(matches) => matches && <CreatePostNavItems />}
            </Media>

            <ContentSection>
              <div>
                <Measure
                  bounds
                  onResize={(contentRect) => {
                    setHeadingHeight(contentRect.bounds.height);
                  }}
                >
                  {({ measureRef }) => (
                    <div ref={measureRef}>
                      <ViewBoxHeading heading={props.title} />
                    </div>
                  )}
                </Measure>

                <CreatePostInput
                  createPostType={props.formTypeProp}
                  headingHeight={headingHeight}
                  postID={postID}
                />
              </div>
            </ContentSection>
          </SideNavContainer>
        )}
      </StandardContainer>

      {!props.emailVerified && (
        <VerifyEmailNotice text="Please verify your email to create a new post." />
      )}
    </div>
  );
};

const mapStateToProps = ({ userState }) => ({
  emailVerified: userState.emailVerified,
});

export default connect(mapStateToProps, { formType })(CreatePost);
