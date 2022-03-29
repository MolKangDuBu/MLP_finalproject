import React from "react";
import styled from "styled-components";

const Span = (props) => {
  const { className, fontsize, color, children, size } = props;

  const styles = {
    fontsize: fontsize,
    color: color,
    size: size,
  };

  return (
    <React.Fragment>
      <SignUpSpan className={className} {...styles}>
        {children}
      </SignUpSpan>
    </React.Fragment>
  );
};

Span.defaultProps = {
  children: null,
  className: "",
  size: "3px",
};

const SignUpSpan = styled.span`
  font-size: ${(props) => props.size};
  color: ${(props) => (props.className === "success" ? "green" : "red")};
`;

export default Span;
