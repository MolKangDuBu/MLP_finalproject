import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, height, width, br, padding, position } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
    br: br,
    padding: padding,
    position: position,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} />;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 36,
  position: "",
};

const AspectOutter = styled.div`
  width: ${(props) => props.width};
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.br};
  position: ${(props) => props.position};
  /* z-index: -1; */
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
