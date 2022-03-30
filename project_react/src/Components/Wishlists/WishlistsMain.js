import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
import WishlistContainer from '../../Containers/Wishlists/WishlistContainer';
import WishlistsPopup from './WishlistsPopup';

const WishlistsMain = ({
  title,
  bookmarkLists,
  onChangeTitleInput,
  onCreateBookMarkList,
  openPopup,
  onClickPopup,
}) => {
  return (
    <WishlistsMainWrapper>
      <WishlistsMainInner>
        <WishlistsTitleWrapper>
          <WishlistsTitle>저장 목록</WishlistsTitle>
          <PopupWrapper>
            <Button
              padding="1.2rem 2rem"
              transition="1rem"
              onClick={onClickPopup}
              openPopup={openPopup}
            >
              목록 만들기
            </Button>
            <WishlistsPopup
              title={title}
              onChangeTitleInput={onChangeTitleInput}
              onCreateBookMarkList={onCreateBookMarkList}
              openPopup={openPopup}
              onClickPopup={onClickPopup}
            />
          </PopupWrapper>
        </WishlistsTitleWrapper>
        <WishlistsItems>
          {bookmarkLists &&
            bookmarkLists.map((bmList, i) => (
              <WishlistContainer key={i} bmList={bmList} />
            ))}
        </WishlistsItems>
      </WishlistsMainInner>
    </WishlistsMainWrapper>
  );
};

const WishlistsMainWrapper = styled.div`
  padding-top: 8rem;
`;

const WishlistsMainInner = styled.div`
  margin-top: 4rem;
  padding: 0rem 12rem;

  @media ${({ theme }) => theme.size.medium} {
    padding: 0rem 7.5rem;
  }

  @media ${({ theme }) => theme.size.iPad} {
    padding: 0rem 3rem;
  }

  height: fit-content;
  min-height: calc(100vh - 12rem);
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const WishlistsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WishlistsTitle = styled.h2`
  font-size: 3.4rem;
  font-weight: bold;
`;

const PopupWrapper = styled.div`
  position: relative;
`;

const WishlistsItems = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-top: 3rem;
`;

export default WishlistsMain;
