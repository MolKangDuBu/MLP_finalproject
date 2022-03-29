import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listAction } from "../redux/modules/list";
import styled from "styled-components";
import RoomList from "../components/RoomList";
import Map from "../components/Map";

function Seoul() {
  const dispatch = useDispatch();
  const room_list = useSelector((state) => state.list);
  const comment_data = useSelector((state) => state.comment);

  React.useEffect(() => {
    dispatch(listAction.getListDB(1));
  }, []);
  return (
    <React.Fragment>
      <BtnPlace>
        <HeaderBtn>
          요금
          <img src="./img/airb2b1.png" alt="" />
        </HeaderBtn>
        <HeaderBtn style={{ width: "8.3em" }}>숙소 유형</HeaderBtn>
        <p style={{ fontSize: "18px", color: "#DDDDDD", marginRigh: "10px" }}>
          ㅣ
        </p>
        <HeaderBtn style={{ width: "10em" }}>취소 수수료 없음</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>수변에 인접</HeaderBtn>
        <HeaderBtn style={{ width: "4.7em" }}>주방</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>무선 인터넷</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>선풍기</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>에어컨</HeaderBtn>
        <HeaderBtn style={{ width: "9em" }}>무료 주차 공간</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>셀프 체크인</HeaderBtn>
        <HeaderBtn style={{ width: "9em" }}>업무 전용 공간</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>건조기</HeaderBtn>
        <HeaderBtn>
          <img
            style={{ width: "15px", height: "15px" }}
            src="./img/airb2b2.png"
            alt=""
          />
          필터
        </HeaderBtn>
      </BtnPlace>
      <MapWrap>
        <RoomList {...room_list} />
        <Map {...room_list} />
      </MapWrap>
    </React.Fragment>
  );
}

const MapWrap = styled.div`
  display: flex;

  .room_list {
    flex: 1.5;
  }

  .map {
    flex: 2;
  }
`;

const BtnPlace = styled.div`
  position: sticky;
  display: flex;
  top: 80px;
  width: 100vw;
  height: 68px;
  padding: 0 24px;
  margin: auto;
  align-items: center;
  background-color: #fff;
  z-index: 10;
`;

const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin-right: 10px;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 16px;
  width: 6em;
  height: 2.8em;

  img {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 4px;
  }
`;
// const ButnToBt = styled.img`
//   width: 15px;
//   height: 15px;
// `;

export default Seoul;
