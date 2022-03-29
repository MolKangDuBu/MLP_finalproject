import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../svg/mapMarker.svg";
import { MdHome } from "react-icons/md";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const DetailMarker = () => {
  return (
    <RedMarker>
      <div className="wrap">
        <LightTooltip
          placement="top"
          arrow
          title="정확한 위치는 예약 완료후에 표시됩니다."
        >
          <div className="svg_wrap">
            <LogoSvg className="logo" />
            <MdHome className="home" />
          </div>
        </LightTooltip>
      </div>
    </RedMarker>
  );
};

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "20px",
    fontSize: "14px",
    fontWeight: "400",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "#fff",
  },
}));
const RedMarker = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: #e31c5f;

  &:before {
    content: "";
    position: absolute;
    width: 250%;
    height: 250%;
    background: rgba(227, 28, 95, 0.2);
    border-radius: 100%;
  }

  .wrap {
    position: absolute;
    width: 120%;
    height: 120%;
  }

  .svg_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 150ms ease-out 0s;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 22px;
    height: 22px;
    color: #fff;
    transform: translate(-50%, -50%);
    transition: opacity 150ms linear 0s,
      transform 150ms cubic-bezier(0, 0, 0.1, 1) 0s;
  }

  svg.logo {
    opacity: 0;
  }

  .wrap:hover {
    .svg_wrap {
      transform: rotateY(180deg);
    }

    svg {
      transform: translate(-50%, -50%);
    }

    svg.logo {
      opacity: 1;
    }

    svg.home {
      opacity: 0;
    }
  }
`;
export default DetailMarker;
