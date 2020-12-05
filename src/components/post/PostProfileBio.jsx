import React from "react";
import Truncate from "react-truncate";
import { BioContainer, ReadMoreText } from "./styles/side_profile_styles";

const PostProfileBio = ({ profile, setShowPostProfileInfoModal }) => {
  return (
    <BioContainer>
      {profile.bio && (
        <Truncate
          lines={3}
          ellipsis={
            <span>
              ... <br />
              <ReadMoreText onClick={() => setShowPostProfileInfoModal(true)}>
                {" "}
                Read More
              </ReadMoreText>{" "}
            </span>
          }
        >
          {profile.bio}
        </Truncate>
      )}

      {!profile.bio && (
        <div>
          Do you have a property that {profile.name} would be interested in?
        </div>
      )}
    </BioContainer>
  );
};

export default PostProfileBio;
