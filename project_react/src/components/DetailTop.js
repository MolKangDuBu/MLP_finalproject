import React from "react";
import styled from "styled-components";
import { Text } from "../common";

const DetailTop = (props) => {
  return (
    <React.Fragment>
      <DetailWrap>
        <Text bold size="26px" padding="24px 0 0 0">
          {props.placeName}
        </Text>
        <Subtitle>
          <i className="star"></i>
          <Text>{props.rating}</Text>·
          <Text margin="0px 3px" deco>
            후기 {props.list.length}개
          </Text>
          ·
          <Text margin="0px 3px" deco color="#696969">
            {props.placeAddress}
          </Text>
        </Subtitle>
        <ImageWrap>
          <div>
            <div className="img_wrap">
              <Image1>
                <img src={props.image1}></img>
              </Image1>
              <Image2>
                <img src={props.image2}></img>
                <img src={props.image3}></img>
              </Image2>
              <Image3>
                <img src={props.image4}></img>
                <img src={props.image5}></img>
              </Image3>
            </div>
          </div>
        </ImageWrap>
      </DetailWrap>
    </React.Fragment>
  );
};

const DetailWrap = styled.div`
  margin: 0 auto;
`;

const Subtitle = styled.div`
  display: flex;
  padding: 16px;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  align-items: center;

  .star {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("/img/star.png") no-repeat center / cover;
    margin-right: 6px;
  }
`;

const ImageWrap = styled.div`
  > div {
    position: relative;
    height: 0;
    padding-bottom: 50%;
  }

  .img_wrap {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

const Image1 = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

const Image2 = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin: 0px 10px;
  gap: 10px;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Image3 = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  gap: 10px;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default DetailTop;
