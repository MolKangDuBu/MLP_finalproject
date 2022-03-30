import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

const Wishlist = ({
  bookmarkListTitle,
  homeCount,
  bookmarkListId,
  bmImage1,
  bmImage2,
  bmImage3,
}) => {
  return (
    <WishlistCardWrapper>
      <Link to={`/wishlist/${bookmarkListId}`}>
        <WishlistImgWrapper>
          <WishlistFirstImg homeCount={homeCount} bmImage1={bmImage1} />
          <WishlistSubImgWrapper homeCount={homeCount}>
            {homeCount >= 2 && (
              <>
                <WishlistSecondImg homeCount={homeCount} bmImage2={bmImage2} />
                {homeCount >= 3 && <WishlistThirdImg bmImage3={bmImage3} />}
              </>
            )}
          </WishlistSubImgWrapper>
        </WishlistImgWrapper>
        <WishlistContent>
          <WishlistTitle>{bookmarkListTitle}</WishlistTitle>
          <WishlistHomeCount>
            {homeCount ? `숙소 ${homeCount}개` : '저장된 항목 없음'}
          </WishlistHomeCount>
        </WishlistContent>
      </Link>
    </WishlistCardWrapper>
  );
};

// ! Need to refactor
const WishlistCardWrapper = styled.li`
  &:nth-child(3n + 2),
  &:nth-child(3n + 1) {
    margin-right: 2%;
  }
  margin-bottom: 4rem;
  border-radius: 10px;
  width: 32%;
  @media ${({ theme }) => theme.size.medium} {
    &:nth-child(2n) {
      margin-right: 0rem;
    }
    &:nth-child(2n + 1) {
      margin-right: 4%;
    }
    width: 48%;
  }
  @media ${({ theme }) => theme.size.iPad} {
    margin-right: 0rem;
  }
  height: 31rem;
  box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.color.gray};
  &:hover {
    /* hover시 자연스러운 shadow증가를 위해 transition효과 필요 */
    box-shadow: 0rem 0rem 1.5rem ${({ theme }) => theme.color.gray};
  }
`;

const WishlistImgWrapper = styled.div`
  display: flex;
`;

const WishlistFirstImg = styled.div`
  /* homeCount === 0 이면 background gray */
  /* 이미지가 하나면 꽉차게  */
  /* 이미지가 2개이상이면 모자이크 */
  /* 0, 1, 2, 3개이상 */
  width: 100%;
  height: 20rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${({ homeCount }) =>
    !homeCount &&
    css`
      width: 100%;
      background-color: ${({ theme }) => theme.color.gray};
    `}
  ${({ homeCount, bmImage1 }) =>
    homeCount === 1 &&
    css`
      background: url(${bmImage1});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ${({ homeCount, bmImage1 }) =>
    homeCount === 2 &&
    css`
      width: 100%;
      height: 20rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 0rem;
      background: url(${bmImage1});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ${({ homeCount, bmImage1 }) =>
    homeCount >= 3 &&
    css`
      width: 100%;
      height: 20rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 0rem;
      background: url(${bmImage1});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
`;

const WishlistSubImgWrapper = styled.div`
  ${({ homeCount }) =>
    (homeCount === 0 || homeCount === 1) &&
    css`
      dispaly: none;
      margin-left: 0rem;
    `}
      
  ${({ homeCount }) =>
    homeCount === 2 &&
    css`
      dispaly: flex;
      flex-flow: column wrap;
      width: 98%;
      height: 20rem;
      margin-left: 0.5rem;
    `}
  ${({ homeCount }) =>
    homeCount >= 3 &&
    css`
      dispaly: flex;
      flex-flow: column wrap;
      width: 50%;
      height: 20rem;
      margin-left: 0.5rem;
    `}
`;

const WishlistSecondImg = styled.div`
  ${({ homeCount, bmImage2 }) =>
    homeCount === 2
      ? css`
          width: 100%;
          height: 20rem;
          border-top-right-radius: 10px;
          background: url(${bmImage2});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `
      : css`
          width: 100%;
          height: 9.75rem;
          margin-bottom: 0.5rem;
          border-top-right-radius: 10px;
          background: url(${bmImage2});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `}
`;

const WishlistThirdImg = styled.div`
  width: 100%;
  height: 9.75rem;
  background: ${({ bmImage3 }) => bmImage3 && css`url(${bmImage3})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const WishlistContent = styled.div`
  padding: 0rem 2rem;
`;

const WishlistTitle = styled.div`
  padding: 2.5rem 0rem 0rem;
  width: 95%;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 2.5rem;
  ${ellipsis('36rem')};
`;

const WishlistHomeCount = styled.div`
  font-size: 1.8rem;
  padding: 1rem 0rem;
`;

export default Wishlist;
