import React from "react";
import styled from "styled-components";

const PaddingBox = (props) => {
  const { is_flex, width, padding, margin, children, bg } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
  };
  return (
    <React.Fragment>
      <PaddingWrap {...styles}>{children}</PaddingWrap>
    </React.Fragment>
  );
};

PaddingBox.defaultProps = {
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  chilren: null,
  bg: false,
};

const PaddingWrap = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
`;

export default PaddingBox;
