import React from "react";
import styled from "styled-components";
import { TextGridContainer, TextGridLabel } from "../../text/text";
import nestedProperty from "nested-property";

const TransitContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const CreatePostSummary = ({ values }) => {
  return (
    <TextGridContainer>
      <div>
        <TextGridLabel>Title</TextGridLabel>
        <div>{values.title}</div>
      </div>
      <div>
        <TextGridLabel>Description</TextGridLabel>
        <div>{values.description}</div>
      </div>
      <div>
        <TextGridLabel>Space</TextGridLabel>
        <div>
          {nestedProperty.get(values, "space.min")} sqft to{" "}
          {nestedProperty.get(values, "space.max")} sqft
        </div>
      </div>
      <div>
        <TextGridLabel>Cost</TextGridLabel>
        <div>
          ${nestedProperty.get(values, "cost.min")} per month to $
          {nestedProperty.get(values, "cost.max")} per month
        </div>
      </div>
      <div>
        <TextGridLabel>Location</TextGridLabel>
        <div>{values.location}</div>
      </div>
      <div>
        <TextGridLabel>Type</TextGridLabel>
        <div>{values.type}</div>
      </div>
      <div>
        <TextGridLabel>Transit Options</TextGridLabel>
        <TransitContainer>
          {values.transit &&
            values.transit.map((transitItem, index) => (
              <div key={index}>{transitItem}</div>
            ))}
        </TransitContainer>
      </div>
    </TextGridContainer>
  );
};

export default CreatePostSummary;
