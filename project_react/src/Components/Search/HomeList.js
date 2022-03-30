import React from 'react';
import styled, { css } from 'styled-components';

const HomeList = ({ children, mapState, dataTotal }) => {
  return (
    <StWrapper mapState={mapState}>
      {dataTotal ? (
        children
      ) : (
        <NoResultBox>
          <NoResultTitle>검색 결과 없음</NoResultTitle>
          <NoResultDetail>
            더 많은 검색 결과를 보려면 날짜를 변경하여 검색해보세요
          </NoResultDetail>
        </NoResultBox>
      )}
    </StWrapper>
  );
};

const fullSizeStyle = css`
  ${({ mapState }) =>
    !mapState &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin: 0 -1rem;
      padding-top: 1rem;

      &:after {
        content: '';
        flex: auto;
      }
    `}
`;

const StWrapper = styled.ul`
  ${fullSizeStyle}
  & *:nth-child(1) {
    border: none;
  }
`;

const NoResultBox = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const NoResultTitle = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

const NoResultDetail = styled.span`
  display: block;
  font-size: 1.6rem;
  padding: 1rem 0 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.shadow};
`;

export default React.memo(HomeList);
