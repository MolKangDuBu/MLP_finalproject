import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LikeIt from "./LikeIt";

const RoomList = (props) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const placeMove = (placeId) => {
    navigate(`/detail/${placeId}`);
  };

  return (
    <React.Fragment>
      <RoomListsDiv className="room_list">
        <div className="header">
          <span>서울에 위치한 300개 이상의 숙소 </span>
          <div className="corona">
            <span>
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
            </span>
            <a>자세히 알아보기</a>
          </div>
        </div>
        <RoomListUl>
          {props.list.map((v, idx) => (
            <li key={idx}>
              <ImgSlide className="image">
                <Slider {...settings}>
                  <div className="img_wrap">
                    <img src={v.image1} />
                  </div>
                  <div className="img_wrap">
                    <img src={v.image2} />
                  </div>
                  <div className="img_wrap">
                    <img src={v.image3} />
                  </div>
                  <div className="img_wrap">
                    <img src={v.image4} />
                  </div>
                  <div className="img_wrap">
                    <img src={v.image5} />
                  </div>
                </Slider>
              </ImgSlide>
              <div
                className="content"
                onClick={() => {
                  placeMove(v.placeId);
                }}
              >
                <dl className="title">
                  <dt>
                    <span>{v.subtitle}</span>
                    <h3>{v.placeName}</h3>
                  </dt>
                  <dd className="like_it">
                    <LikeIt />
                  </dd>
                </dl>
                <i className="line"></i>
                <span>{v.subtitle1}</span>
                <div>
                  <span>
                    {v.Convenience1} ·{v.Convenience2} · {v.Convenience3} ·
                    {v.Convenience4}
                  </span>
                </div>
                {/* <button>4월 29일 ~ 5월 6일 |더 보기</button> */}
                <dl className="price_wrap">
                  <dt>
                    <i className="star"></i>
                    {v.rating}
                    <span>(후기 {v.comment_Cnt}개)</span>
                  </dt>
                  <dd>
                    <Price className="discount" discount={v.oldprice}>
                      {v.newprice}
                      <em> / 박</em>
                    </Price>
                    <span>총액 ₩ {v.oldprice}</span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </RoomListUl>
        <div className="pagination">
          <Pagination count={15} defaultPage={1} />
        </div>

        <div className="footer">
          전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이
          추가될 수 있습니다.
        </div>
      </RoomListsDiv>
    </React.Fragment>
  );
};

export const Price = styled.p`
  font-size: 18px;
  font-weight: 600;

  em {
    font-weight: 400;
  }

  &.discount {
    &:before {
      ${(props) =>
        props.discount ? `content:'₩ ${props.discount} ';` : "content:none;"};
      font-weight: 400;
      color: #717171;
      text-decoration: line-through;
    }
  }
`;

const ImgSlide = styled.div`
  width: 300px;

  .slick-list {
    border-radius: 10px;
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
    display: flex !important;
    justify-content: center;
    li {
      border: none !important;
    }

    li button {
      margin: 0;
      padding: 0;
      &:before {
        color: #fff;
      }
    }
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 68.6666%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const RoomListUl = styled.ul`
  border-top: solid 1px #ebebeb;
  margin-top: 12px;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li {
    display: flex;
    padding: 24px 0;
    border-bottom: solid 1px #ebebeb;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin-left: 16px;
  }

  .title {
    align-items: flex-start;
    dt {
      width: 90%;
    }
  }

  dl {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .price_wrap {
    margin-top: auto;
  }

  .like_it {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  .line {
    display: block;
    width: 32px;
    margin-top: 12px;
    margin-bottom: 10px;
    border-bottom: solid 1px #ebebeb;
  }

  .star {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("./img/star.png") no-repeat center / cover;
    margin-right: 6px;
  }

  dd {
    text-align: right;
  }

  span {
    color: #717171;
    font-size: 14px;
  }

  button {
    display: block;
    margin-top: 12px;
  }
`;

const RoomListsDiv = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
  padding: 0 24px;
  margin: 0 auto;
  color: #222222;

  .header {
    margin-top: 24px;
    font-size: 14px;

    .corona {
      margin-top: 24px;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .pagination {
    padding: 20px;
    ul {
      justify-content: center;
    }
  }

  .footer {
    display: block;
    text-align: center;
    line-height: 120px;
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export default RoomList;
