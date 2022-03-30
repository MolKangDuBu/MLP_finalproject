import React from 'react';
import Slider from 'rc-slider';
import styled, { css } from 'styled-components';
import { NewInput } from '../Global/Input';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const RangeSlider = ({
  priceArray,
  averagePrice,
  isDisabled,
  isModal,
  min,
  max,
  left,
  right,
  start,
  end,
  range,
  onHandler,
  onSetRange,
  onChangeMinPrice,
  onChangeMaxPrice,
}) => {
  return (
    <>
      <StLargeSpan>
        {averagePrice !== 0 &&
          `평균 1박 요금은 ₩${averagePrice.toLocaleString()}입니다`}
      </StLargeSpan>
      <StRangeWrapper>
        <Range
          min={12000}
          max={1000000}
          allowCross={false}
          value={range.value}
          defaultValue={[12000, 1000000]}
          onChange={onHandler}
        />
        <StGraph>
          {priceArray.map((price, i) => {
            const isSmaller = right > end - (priceArray.length - i) * 7;
            const isBigger = left < start + i * 7;
            return (
              <StStick
                key={i}
                height={price}
                inRange={isDisabled || (isSmaller && isBigger)}
              />
            );
          })}
        </StGraph>
      </StRangeWrapper>
      <StInputWrapper>
        <PriceInput
          type="number"
          title="최저 요금"
          isModal={isModal}
          value={min}
          short
          pay="₩"
          onChange={e => onChangeMinPrice(e, 'priceMin')}
          onBlur={onSetRange}
        />
        <span>―</span>
        <PriceInput
          type="number"
          title="최고 요금"
          isModal={isModal}
          value={max}
          short
          pay="₩"
          onChange={e => onChangeMaxPrice(e, 'priceMax')}
          onBlur={onSetRange}
        />
      </StInputWrapper>
    </>
  );
};

const spanStyle = css`
  line-height: 2rem;
  margin-right: 3rem;
  word-break: keep-all;
  display: block;
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle}
`;

const PriceInput = styled(NewInput)`
  width: ${({ isModal }) => isModal && '250px'};
`;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > * {
    margin: 0 1rem;
  }

  & > span {
    margin: 0;
  }
`;

const StRangeWrapper = styled.div`
  height: 10rem;
  margin: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;

  .rc-slider {
    position: relative;
    height: 10px;
    width: 95%;
    margin: 0 auto;
    border-radius: 3px;
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.color.shadow};
    height: 2px;
    border-radius: 3px;
  }
  .rc-slider-track {
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.color.gray};
  }
  .rc-slider-handle {
    position: absolute;
    width: 27px;
    height: 27px;
    margin-top: -13.5px;
    cursor: grab;
    border-radius: 50%;
    border: solid 1px ${({ theme }) => theme.color.gray};
    background-color: #fff;
    touch-action: pan-x;
    z-index: 15;
    &:focus {
      outline: none;
    }
    &:after {
      content: '|||';
      position: absolute;
      font-size: 1.3rem;
      padding: 2.5px 6px;
      color: ${({ theme }) => theme.color.gray};
    }
  }
  .rc-slider-tooltip {
    display: none;
  }
`;

const StGraph = styled.ul`
  display: flex;
  align-items: flex-end;
  width: 95%;
  margin: 0 auto;
  position: relative;
`;

const StStick = styled.li`
  width: 5%;
  z-index: -1;
  height: ${({ height }) => `${height * 3}px`};
  margin: 0 1px -1px;
  border-radius: 1px;
  background: ${({ theme, inRange }) =>
    inRange ? `${theme.color.gray}` : `${theme.color.shadow}`};
`;

export default RangeSlider;
