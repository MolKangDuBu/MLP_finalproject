import React, { Children } from "react";
import styled from "styled-components";

const Img = (props) => {
  const { width, height, bradius, others, src, _onClick, children } = props;
  const styles = { width, height, bradius, others, src };
  return (
    <>
      <ImgBox {...styles} onClick={_onClick}>
        {children}
      </ImgBox>
    </>
  );
};

Img.defaultProps = {
  width: "15rem",
  height: "15rem",
  bradius: "0px",
  src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20140805_256%2Fdbsytofwar_1407207331407znrVs_JPEG%2FIMG_7290.JPG&type=sc960_832",
  others: "",
  children: null,
  _onClick: () => {},
};

const ImgBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.bradius};
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${(props) => props.others};
`;

export default Img;
