/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--inner-height": "8px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
    "--inner-height": "12px",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
    "--inner-height": "16px",
  },
};

const ProgressBar = ({ value = 0, size }) => {
  const styles = SIZES[size];
  const progressBarWidth = 370;
  const largeSizeLeftRightPadding = 8;
  styles["--inner-width"] =
    size === "large"
      ? `${(progressBarWidth - largeSizeLeftRightPadding) * (value / 100)}px`
      : `${progressBarWidth * (value / 100)}px`;

  if (value < 99.5) {
    styles["--inner-border-radius"] = `4px 0px 0px 4px`;
  } else {
    styles["--inner-border-radius"] = `4px 4px 4px 4px`;
  }

  return (
    <OutterBar style={styles}>
      <InnerBar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={styles}
      >
        <VisuallyHidden>{value}</VisuallyHidden>
      </InnerBar>
    </OutterBar>
  );
};

const OutterBar = styled.div`
  width: 370px;
  height: var(--height);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const InnerBar = styled.div`
  max-width: 370px;
  width: var(--inner-width);
  height: var(--inner-height);
  background: ${COLORS.primary};
  border-radius: var(--inner-border-radius);
`;

export default ProgressBar;
