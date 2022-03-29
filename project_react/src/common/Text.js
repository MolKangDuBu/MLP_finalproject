import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    _onClick,
    is_flex,
    width,
    center,
    padding,
    deco,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    _onClick: { _onClick },
    is_flex: is_flex,
    width: width,
    center: center,
    padding: padding,
    deco: deco,
  };

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  _onClick: () => {},
  is_flex: false,
  deco: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  width: ${(props) => props.width};
  ${(props) => (props.right ? `justify-content: flex-end;` : "")}
  ${(props) => (props.is_flex ? `display: flex; align-items: center; ` : "")}
  ${(props) => (props.deco ? `text-decoration: underline;` : "")}
`;

export default Text;
