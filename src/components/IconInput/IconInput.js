import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--line-height": "16px",
    "--font-size": "0.875rem",
    "--padding-left": "24px",
  },
  large: {
    "--line-height": "21px",
    "--font-size": "1.125rem",
    "--padding-left": "32px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  const iconSize = size === "small" ? 16 : 24;
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size={iconSize}></Icon>
      </IconWrapper>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <Input
        id={label}
        type="text"
        placeholder={placeholder}
        style={{ width, ...styles }}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const IconWrapper = styled.div`
  position: absolute;
`;

const Input = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: var(--line-height);
  font-size: var(--font-size);
  padding-left: var(--padding-left);

  &:focus {
    outline: 2px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
