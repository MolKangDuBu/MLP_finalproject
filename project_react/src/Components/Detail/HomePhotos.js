import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from '../Global/Button';

const renderImgs = home => {
  if (!home)
    return (
      <>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </>
    );
  return home.images.map((img, i) => (
    <img key={i} src={img} alt={`숙소사진 ${i + 1}`} />
  ));
};

const HomePhotos = ({ isLoading, home }) => {
  return (
    <StImgsWrapper isLoading={isLoading}>
      {renderImgs(home)}
      {!isLoading && <StViewerButton transition>사진 모두 보기</StViewerButton>}
    </StImgsWrapper>
  );
};

const skeleton = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.3;
  }
`;

const StImgsWrapper = styled.div`
  position: relative;
  height: calc(60vh - 64px);
  max-height: 507px;
  border-radius: 1.2rem;
  overflow: hidden;

  & img,
  & div {
    float: left;
    width: calc(25% - 5px);
    height: calc(50% - 4px);
    margin-left: 8px;
    margin-bottom: 8px;
    object-fit: cover;

    @media screen and (max-height: 449px) {
      & {
        height: 100%;
      }
    }
  }

  & img:nth-of-type(1),
  & div:nth-of-type(1) {
    width: calc(50% - 6px);
    height: 100%;
    margin: 0;
  }

  & img {
    transition: 0.25s;
    transition-timing-function: ease-in-out;

    :hover {
      filter: brightness(83%);
    }
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      & div {
        background-color: currentColor;
        animation-name: ${skeleton};
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
      }
    `}
`;

const StViewerButton = styled(Button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 8px 14px;
`;

export default HomePhotos;
