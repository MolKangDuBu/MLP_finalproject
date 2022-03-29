import React from "react";
import styled from "styled-components";
const MainBottom = () => {
  return (
    <ImageWrap>
      <div className="image">
        <div></div>
      </div>
      <div className="text">
        <h2>
          호스팅에 관해 <br />
          궁금하신 점이 <br />
          있나요?
        </h2>
        <button>슈퍼호스트에게 물어보세요</button>
      </div>
    </ImageWrap>
  );
};
const ImageWrap = styled.div`
  position: relative;
  width: calc(min(1760px, 100%) - 160px);
  margin: 0 auto;
  margin-bottom: 48px;
  letter-spacing: -2.98px;
  /* z-index: -1; */
  border-radius: 12px;
  overflow: hidden;

  .image {
    padding-bottom: calc(800 / 1600 * 100%);
    height: 0;

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: url("https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=1440")
        no-repeat center/cover;
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 80px;
  }

  h2 {
    flex: auto;
    color: #fff;
    font-size: 95px;
    line-height: 105px;
  }

  button {
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 8px;
    background-color: #fff;
  }
`;
export default MainBottom;
