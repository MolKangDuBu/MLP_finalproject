import React from "react";
import styled from "styled-components";
import Focus from "./Focus";
import { MdHome } from "react-icons/md";

const Marker = (props) => {
  const { isShow, info } = props;
  const [visible, setVisible] = React.useState(isShow);
  const [isSelected, setIsSelected] = React.useState(false);

  const toggleIsSelected = () => {
    setIsSelected(isSelected ? false : true);
  };

  const toggleFocus = () => {
    const toggleVisible = visible ? false : true;
    setVisible(toggleVisible);
  };

  const handleClick = () => {
    toggleIsSelected();
    toggleFocus();
  };

  return (
    <React.Fragment>
      <MarkerArea>
        <HMarker onClick={handleClick} isSelected={isSelected}>
          <MdHome />
        </HMarker>
        {visible ? <Focus info={info} /> : null}
      </MarkerArea>
    </React.Fragment>
  );
};

Marker.defaultProps = {
  text: "₩80,347",
  isShow: false,
};

const MarkerArea = styled.div`
  position: relative;
`;

const HMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isFocus || props.isSelected ? "rgb(34, 34, 34)" : "#fff"};
  color: ${(props) =>
    props.isFocus || props.isSelected ? "#fff" : "rgb(34, 34, 34)"};
  transform: ${(props) =>
    props.isFocus || props.isSelected ? "scale(1.3)" : ""};
  svg {
    font-size: 24px;
  }
  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
    transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  }
`;

export default Marker;
