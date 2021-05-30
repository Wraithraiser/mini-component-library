import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectIcon id="chevron-down" />
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>{displayedValue}</Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  line-height: 19px;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 16px;
`;

export default Select;
