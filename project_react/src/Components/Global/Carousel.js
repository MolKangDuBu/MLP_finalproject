import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { PrevButton, NextButton } from './SlideButton';

// size(str) or responsive(bool) 필수: superLarge, large, medium, small
const Carousel = ({
  size,
  theme,
  homeId,
  blockLink,
  responsive,
  homeWidth,
  isHovered,
  marker,
  direction,
  isSliding,
  imageCount,
  imageArray,
  renderArray,
  isSuperhost,
  onSlideNext,
  onSlidePrev,
  setWidth,
  ...rest
}) => {
  useEffect(() => setWidth(), []);
  return (
    <StWrapper
      size={size}
      homeWidth={homeWidth}
      blockLink={blockLink}
      theme={theme}
      {...rest}
    >
      {imageCount > 1 ? (
        <>
          <StPrevBtn
            styleType="transparent"
            onClick={onSlidePrev}
            isHovered={isHovered}
            theme={theme}
          />
          <StNextBtn
            styleType="transparent"
            onClick={onSlideNext}
            isHovered={isHovered}
            theme={theme}
          />
        </>
      ) : null}
      <StLink
        rel="noopener noreferrer"
        target={!blockLink && '_self'}
        href={!blockLink && `http://localhost:3000/detail/${homeId}`}
      >
        {isSuperhost && <StBadge theme={theme}>슈퍼호스트</StBadge>}
        <StImageList
          size={size}
          direction={direction}
          isSliding={isSliding}
          homeWidth={homeWidth}
        >
          {renderArray.map((index, i) => (
            <StImageWrapper
              key={i}
              theme={theme}
              size={size}
              homeWidth={homeWidth}
              imageCount={imageCount}
              responsive={responsive}
            >
              <StImage src={imageArray[index]} />
            </StImageWrapper>
          ))}
        </StImageList>
        <StCircleWrapper>
          {imageArray.map((_, index) => {
            return index < 5 ? (
              <StCircle
                key={index}
                theme={theme}
                color={index === marker ? 'white' : 'shadow'}
              />
            ) : null;
          })}
        </StCircleWrapper>
      </StLink>
    </StWrapper>
  );
};

const sizes = {
  superLarge: {
    width: '327',
    height: '184',
  },
  large: {
    width: '300',
    height: '200',
  },
  medium: {
    width: '270',
    height: '180',
  },
  small: {
    width: '148',
    height: '105',
  },
};

const slideNext = (homeWidth, size) => keyframes`
0% {
  transform: translate3d(0,0,0);
}
100% {
  transform: ${`translate3d(-${size ? sizes[size].width : homeWidth}px, 0, 0)`};
}
`;

const slidePrev = (homeWidth, size) => keyframes`
0% {
  transform: ${`translate3d(${
    size ? sizes[size].width : homeWidth * -1
  }px, 0, 0)`};
}
100% {
  transform: translate3d(0,0,0);
}
`;

const fixedSizes = size => css`
  min-width: ${`${sizes[size].width}px`};
  width: ${`${sizes[size].width}px`};
  height: ${`${sizes[size].height}px`};
`;

const responsiveSize = css`
  width: 100%;
  height: 0;
  padding-bottom: 75%;
`;

const StWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  background: ${({ theme }) => theme.color.gray};
  ${({ size }) => (size ? fixedSizes(size) : responsiveSize)};
`;

const StLink = styled.a`
  text-decoration: none;
`;

const StBadge = styled.div`
  background: ${({ theme }) => theme.color.lightGray};
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 0.2rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  top: 1rem;
  left: 1rem;
  z-index: 3;
`;

const StCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StCircle = styled.div`
  background: ${({ color, theme }) => theme.color[color]};
  margin: 1rem 0.3rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`;

const StImageList = styled.ul`
  display: flex;
  position: absolute;
  right: ${({ direction }) => direction === 'left' && 0};
  left: ${({ direction }) => direction === 'right' && 0};
  ${({ direction, isSliding, homeWidth, size }) => {
    if (direction === 'right' && isSliding)
      return css`
        animation: ${slideNext(homeWidth, size)} 0.3s forwards;
      `;
    if (direction === 'left' && isSliding)
      return css`
        animation: ${slidePrev(homeWidth, size)} 0.3s forwards;
        animation-direction: ${size && 'reverse'};
      `;
  }}
`;

const StImageWrapper = styled.li`
  min-width: 100%;
  height: ${({ homeWidth }) => homeWidth && `${homeWidth * 0.75}px`};
  width: ${({ homeWidth }) => homeWidth && `${homeWidth}px`};
  ${({ size }) => size && fixedSizes(size)};
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: ${({ blockLink }) => blockLink && 'initial'};
`;

const StPrevBtn = styled(PrevButton)`
  position: absolute;
  top: calc(50% - 16px);
  left: 1rem;
  z-index: 5;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: 0.3s;
`;

const StNextBtn = styled(NextButton)`
  position: absolute;
  top: calc(50% - 16px);
  right: 1rem;
  z-index: 5;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: 0.3s;
`;

export default React.memo(Carousel);
