import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../common/Img";
import styled from "styled-components";
import Text from "../common/Text";
import { MdGrade } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { Price } from "./RoomList";

const Focus = (props) => {
  const { info } = props;
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid>
      <ImgArea>
        <BsHeart />
        <ImgWrap>
          <Slider {...settings}>
            <Img width="100%" height="12rem" src={info.image1} />
            <Img width="100%" height="12rem" src={info.image2} />
            <Img width="100%" height="12rem" src={info.image3} />
            <Img width="100%" height="12rem" src={info.image4} />
            <Img width="100%" height="12rem" src={info.image5} />
          </Slider>
        </ImgWrap>
      </ImgArea>
      <Contents>
        <Content>
          <MdGrade />
          <Text size="14px" margin="0 3px 0 0">
            {info.rating}
            <span>({info.comment_Cnt})</span>
          </Text>
        </Content>
        <Content>
          <Text size="16px">{info.placeName}</Text>
        </Content>
        <Content>
          <Text margin="0 0 12px 0" size="16px">
            {info.subtitle}
          </Text>
        </Content>
        <Content>
          <Price className="discount" discount={info.oldprice}>
            {info.newprice}
            <em> / 박</em>
          </Price>
        </Content>
      </Contents>
    </Grid>
  );
};

Focus.defaultProps = {};
const ImgWrap = styled.div`
  .slick-list {
    border-radius: 16px 16px 0 0;
    overflow: hidden;
  }

  .slick-prev {
    left: 15px !important;
    z-index: 1;
  }

  .slick-next {
    right: 15px !important;
  }

  .slick-initialized .slick-slide {
    & > div {
      display: flex;
    }
  }

  .slick-dots {
    bottom: 10px !important;
    li button {
      &:before {
        color: #fff;
      }
    }
  }
`;
const Grid = styled.div`
  width: 300px;
  height: 280px;
  position: absolute;
  bottom: ${(props) => (props.type === "price" ? "-5px" : "20px")};
  left: -125px;
  transform: translate(calc(-50% + 142.386px), calc(100% + 30.72px));
  z-index: 2;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
`;

const Content = styled.div`
  line-height: 18px;
  align-items: center;
  display: flex;
  margin-bottom: 5px;

  p {
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      color: #b2b5be;
      margin-left: 10px;
      font-size: 14px;
    }
  }

  svg {
    color: #ff385c;
    font-size: 16px;
    margin-right: 2px;
  }
`;
const ImgArea = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 22px;
    color: #ffffff;
  }
`;

export default Focus;
