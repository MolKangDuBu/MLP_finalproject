import React from "react";
import styled from "styled-components";
const ReservCard = () => {
  return <ReservBoxS></ReservBoxS>;
};

const ReservBoxS = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 500px;
  margin-top: 48px;
  background: url("/img/reserveBox.png") no-repeat center/contain;
  border-radius: 10px;
  border: solid 1px #ebebeb;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;
export default ReservCard;
