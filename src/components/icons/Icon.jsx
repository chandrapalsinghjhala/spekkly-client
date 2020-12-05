import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { IconContainer } from "./icon_styles";
import Measure from "react-measure";

const Icon = (props) => {
  const [svgIconHeight, setSvgIconHeight] = useState(0);
  const [svgContainerHeight, setSvgContainerHeight] = useState(0);

  useEffect(() => {
    if (svgIconHeight > 0 && svgContainerHeight === 0) {
      setSvgContainerHeight(svgIconHeight);
    }
  }, [svgIconHeight]);

  return (
    <Measure
      bounds
      onResize={({ bounds: { height } }) => setSvgIconHeight(height)}
    >
      {({ measureRef }) => (
        <IconContainer ref={measureRef} svgContainerHeight={svgContainerHeight}>
          <ReactSVG
            src={props.src}
            beforeInjection={(svg) => {
              props.svgClasses.forEach((svgClass) =>
                svg.classList.add(svgClass)
              );
            }}
          />
        </IconContainer>
      )}
    </Measure>
  );
};

export default Icon;
