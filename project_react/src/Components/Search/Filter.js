/* eslint-disable react/display-name */
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import { MinusButton, PlusButton } from '../Global/CounterButton';
import Checkbox from '../Global/Checkbox';
import { GrFormDown } from 'react-icons/gr';
import RangeSliderContainer from '../../Containers/Search/RangeSliderContainer';
import RefundContainer from '../../Containers/Search/RefundContainer';
import RoomTypeContainer from '../../Containers/Search/RoomTypeContainer';

export const BookingFilter = ({ onToggle, filter }) => {
  return (
    <StFilterWrapper direction="row">
      <StContentWrapper direction="column">
        <StLargeSpan>즉시 예약</StLargeSpan>
        <StSmallSpan>
          호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소
        </StSmallSpan>
      </StContentWrapper>
      <Toggle
        handleClick={() => onToggle('instantBooking', !filter.instantBooking)}
        checked={filter.instantBooking}
      />
    </StFilterWrapper>
  );
};

export const SuperhostFilters = ({ onToggle, filter }) => {
  return (
    <StFilterWrapper>
      <StTitle>편의시설 더 보기</StTitle>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StContentWrapper direction="column">
          <StLargeSpan>슈퍼호스트</StLargeSpan>
          <StSmallSpan>슈퍼호스트의 숙소에 머물러보세요</StSmallSpan>
          <StLink>더 알아보기</StLink>
        </StContentWrapper>
        <Toggle
          checked={filter.superhost}
          handleClick={() => onToggle('superhost', !filter.superhost)}
        />
      </StContentWrapper>
      <StLargeSpan>장애인 편의시설</StLargeSpan>
      <StSmallSpan>
        원활한 이동에 필요한 조건을 갖춘 숙소를 찾아보세요
      </StSmallSpan>
      <StLink>숙소에 갖춰진 편의시설을 선택하세요.</StLink>
    </StFilterWrapper>
  );
};

const Counter = ({ onCounter, filter, name }) => {
  return (
    <StContentWrapper align="center" width="10rem">
      <MinusButton
        onClick={() => onCounter(name, filter - 1)}
        disabled={filter <= 0}
      />
      <StLargeSpan>{filter}</StLargeSpan>
      <PlusButton
        onClick={() => onCounter(name, filter + 1)}
        disabled={filter >= 15}
      />
    </StContentWrapper>
  );
};

export const CounterFilter = ({ onCounter, filter }) => {
  return (
    <StFilterWrapper>
      <StTitle>침실과 침대</StTitle>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StLargeSpan>침대 수</StLargeSpan>
        <Counter
          onCounter={onCounter}
          filter={filter.bedCount}
          name="bedCount"
        />
      </StContentWrapper>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StLargeSpan>침실 수</StLargeSpan>
        <Counter
          onCounter={onCounter}
          filter={filter.bedroomCount}
          name="bedroomCount"
        />
      </StContentWrapper>
      <StContentWrapper align="center">
        <StLargeSpan>욕실 수</StLargeSpan>
        <Counter
          onCounter={onCounter}
          filter={filter.bathroomCount}
          name="bathroomCount"
        />
      </StContentWrapper>
    </StFilterWrapper>
  );
};

export const CheckboxFilter = React.memo(
  ({ title, listName, list, filter, onCheck, seemore, onSeemore }) => {
    return (
      <StFilterWrapper>
        <StTitle>{title}</StTitle>
        <StCheckboxList seemore={seemore}>
          {list.map((name, i) => {
            const checked = filter.includes(name);
            return (
              <StCheckbox
                key={i}
                value
                animation={i > 3}
                seemore={seemore}
                checked={checked}
                onCheck={() => onCheck(listName, name, checked)}
              >
                <StLargeSpan>{name}</StLargeSpan>
              </StCheckbox>
            );
          })}
        </StCheckboxList>
        {list.length > 4 && (
          <Button
            btnType="underlined"
            width="fit-content"
            padding="1rem 0 0"
            hover="background: none"
            onClick={onSeemore}
          >
            편의시설 모두 보기
            <ArrowIcon seemore={seemore} />
          </Button>
        )}
      </StFilterWrapper>
    );
  },
);

export const PriceFilter = ({ range, setRange }) => {
  return (
    <StFilterWrapper>
      <StTitle>가격 범위</StTitle>
      <RangeSliderContainer isModal range={range} setRange={setRange} />
    </StFilterWrapper>
  );
};

export const RefundFilter = () => {
  return (
    <StFilterWrapper>
      <StTitle>유연한 환불 정책</StTitle>
      <RefundContainer isModal />
    </StFilterWrapper>
  );
};

export const RoomTypeFilter = () => {
  return (
    <StFilterWrapper>
      <StTitle>숙소 유형</StTitle>
      <RoomTypeContainer isModal />
    </StFilterWrapper>
  );
};

export const StFilterWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: 4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.shadow};
`;

const StTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction || 'row'};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width && '10rem'};
`;

const spanStyle = css`
  display: block;
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle};
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle};
`;

const StLink = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  margin-top: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const StCheckboxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  height: ${({ seemore }) => (seemore ? 'fit-content' : '85px')};
`;

const seeMoreAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }
  to {
    opacity: 1;
  }
`;

const applyAnimation = direction => css`
  animation-name: ${seeMoreAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-direction: ${!direction && 'reverse'};
`;

const StCheckbox = styled(Checkbox)`
  width: 27rem;
  margin: 0 4rem 1rem 0;
  ${({ animation, seemore }) =>
    animation && seemore === true && applyAnimation(seemore)};
`;

const ArrowIcon = styled(GrFormDown)`
  margin: -0.2rem 0 0 0.5rem;
  transition: 0.5s ease-out;
  transform: ${({ seemore }) => (seemore ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
