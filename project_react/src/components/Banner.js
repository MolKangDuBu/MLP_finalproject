import React from "react";
import styled from "styled-components";
import { Text, Button } from "../common";

const Banner = (props) => {
  return (
    <React.Fragment>
      <BannerWrap>
        <BackWrap>
          <ImageWrap>
            <div className="bigimage">
              <Text size="48px" bold color="#ffffff" center>
                에어비앤비가 <br /> 여행지를 찾아드릴게요!
              </Text>
              <Button
                margin="40px 0px 90px 160px"
                width="35%"
                color="222222"
                borderRadiuss="40px"
              >
                <BannerSpn>유연한 검색</BannerSpn>
              </Button>
            </div>
          </ImageWrap>
        </BackWrap>
      </BannerWrap>
    </React.Fragment>
  );
};

export default Banner;

const BannerWrap = styled.div`
  background-color: #000;
`;

const BannerSpn = styled.span`
  background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

const BackWrap = styled.div`
  height: 105vh;
  max-width: calc(min(1760px, 100%) - 160px);
  margin: 0 auto;
  padding: 0 0 80px;
`;

const ImageWrap = styled.div`
  display: flex;
  border-radius: 30px;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 100%;
  max-width: 1600px;
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: center;

  p {
    line-height: 54px;
    text-align: center;
  }
`;
