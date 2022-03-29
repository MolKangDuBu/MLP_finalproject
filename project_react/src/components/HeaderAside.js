import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const HeaderAside = (props) => {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      {pathname === "/" && (
        <Aside>
          <a href="#">
            에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
          </a>
        </Aside>
      )}
    </React.Fragment>
  );
};
const Aside = styled.aside`
  background-color: #000;
  display: block;
  width: 100%;
  padding: 16px 0;
  font-size: 14px;
  text-decoration: underline solid 1px;
  text-align: center;
  color: #fff;
`;
export default HeaderAside;
