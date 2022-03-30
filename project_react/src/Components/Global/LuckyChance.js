import React from 'react';
import styled from 'styled-components';

const LuckyChance = ({ lastName, margin, padding, ...rest }) => {
  return (
    <StWrapper margin={margin} padding={padding} {...rest}>
      <img
        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-diamond.296a9c25.gif"
        alt="lucky"
      />
      <div>
        <strong>흔치 않은 기회 입니다.</strong>
        <span>{`${lastName}`}님의 숙소는 보통 예약이 가득 차 있습니다.</span>
      </div>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '14px 12px'};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 4px;
  font-size: 14px;

  img {
    width: 40px;
    margin: 0 16px;
  }

  strong {
    margin-right: 8px;
    font-weight: 700;
  }
`;

export default LuckyChance;
