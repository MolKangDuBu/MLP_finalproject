import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperWrap>
      <h2></h2>
      <ul>
        <li className="first">
          <div>
            <h3>여행 중 만나는 이색적인 즐길 거리</h3>
            <button>체험</button>
          </div>
        </li>
        <li className="second">
          <div>
            <h3>집에서 만나는 다양한 즐길 거리</h3>
            <button>온라인 체험</button>
          </div>
        </li>
      </ul>
    </ExperWrap>
  );
};
const ExperWrap = styled.div`
  color: #222;

  ul {
    display: grid;
    grid-template-columns: 1fr 50%;
  }

  li {
    background: url("https://a0.muscache.com/im/pictures/0fa7e0a7-c3c2-410a-b5c0-567cfca193cb.jpg?im_w=720")
      no-repeat center / cover;

    &:before {
      content: "";
      display: block;
      width: 100%;
      padding-bottom: 130%;
    }
  }

  li.second {
    border-radius: 12px;
    background-image: url("https://a0.muscache.com/im/pictures/3290306e-8e26-4c77-a96a-777e554c5222.jpg?im_w=720");
    &:before {
    }
  }

  div {
    padding: 24px;
  }

  h3 {
    color: #fff;
    font-size: 34px;
  }

  button {
    border-radius: 8px;
    background-color: #fff;
  }
`;
export default Experience;
