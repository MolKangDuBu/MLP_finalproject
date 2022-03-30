import React from 'react';
import styled from 'styled-components';
import { NextButton, PrevButton } from '../Global/SlideButton';

const SearchPagination = ({
  dataTotal,
  dateDiff,
  page,
  pageArray,
  onNavPage,
}) => {
  if (!dataTotal) return null;
  return (
    <StWrapper>
      <StNumberWrapper>
        {page > 1 && <PrevButton onClick={() => onNavPage(page - 1)} />}
        {pageArray.map(i => (
          <StNumber
            key={i}
            active={page === i}
            onClick={e => onNavPage(+e.target.firstChild.data)}
          >
            {i}
          </StNumber>
        ))}
        {page !== pageArray.length && pageArray.length > 1 && (
          <NextButton onClick={() => onNavPage(page + 1)} />
        )}
      </StNumberWrapper>
      <StBlackSpan>
        숙소 {dataTotal}개 중 {(page - 1) * 20 + 1} –{' '}
        {(page - 1) * 20 + 20 > dataTotal ? dataTotal : (page - 1) * 20 + 20}
      </StBlackSpan>
      <StGraySpan>
        {dateDiff
          ? '추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.'
          : '전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.'}
      </StGraySpan>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  text-align: center;
  margin: 7rem 0 0;
`;

const StNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  & > * {
    margin: 0 0.7rem;
  }
`;

const StNumber = styled.div`
  background: ${({ theme, active }) => active && theme.color.black};
  color: ${({ theme, active }) => active && theme.color.white};
  width: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StBlackSpan = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 4rem;
`;

const StGraySpan = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray};
`;

export default SearchPagination;
