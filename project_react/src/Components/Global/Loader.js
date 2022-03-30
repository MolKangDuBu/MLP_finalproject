import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 2.5rem 0 0;
  }
`;

const StLoader = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation-name: ${loading};
    animation-duration: 1.4s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  & {
    color: #ffffff;
    font-size: 10px;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }
`;

const Loader = ({ ...rest }) => {
  return <StLoader {...rest}></StLoader>;
};

export default Loader;
