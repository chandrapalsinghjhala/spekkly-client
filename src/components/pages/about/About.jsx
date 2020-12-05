import React from "react";
import {
  StandardContainer,
  TextContainerInner,
} from "../../containers/container";
import { CenteredHeading } from "../../text/text";
import { StandardImage } from "../../images/images";
import { AboutMainImage, AboutParagraph, AboutHeading } from "./about_styles";

class About extends React.Component {
  render() {
    return (
      <StandardContainer text>
        <TextContainerInner>
          <AboutHeading smallBottomMargin>Why Spekkly Exists</AboutHeading>
          <AboutParagraph>
            Quora’s mission is to share and grow the world’s knowledge. A vast
            amount of the knowledge that would be valuable to many people is
            currently only available to a few — either locked in people’s heads,
            or only accessible to select groups. We want to connect the people
            who have knowledge to the people who need it, to bring together
            people with different perspectives so they can understand each other
            better, and to empower everyone to share their knowledge for the
            benefit of the rest of the world.
          </AboutParagraph>
          <AboutMainImage>
            <StandardImage src="https://storage.cloud.google.com/spekkly_public/about_main_image.jpg?authuser=4" />
          </AboutMainImage>

          <AboutHeading>Who Created Spekkly</AboutHeading>
          <AboutParagraph>
            The heart of Quora is questions — questions that affect the world,
            questions that explain recent world events, questions that guide
            important life decisions, and questions that provide insights into
            why other people think differently. Quora is a place where you can
            ask questions you care about and get answers that are amazing.
          </AboutParagraph>

          <AboutMainImage lastImage>
            <StandardImage src="https://storage.cloud.google.com/spekkly_public/about_main_image.jpg?authuser=4" />
          </AboutMainImage>
        </TextContainerInner>
      </StandardContainer>
    );
  }
}

export default About;
