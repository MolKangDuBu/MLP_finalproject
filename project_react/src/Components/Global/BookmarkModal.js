import React from 'react';
import Modal from './Modal';
import ModalFooter from './ModalFooter';
import Button from './Button';
import { NewInput } from './Input';
import styled from 'styled-components';

const BookmarkListModal = React.memo(
  ({
    modalState,
    closeBmListModal,
    openBmNewModal,
    bookmarkLists,
    onClickBookmark,
  }) => {
    return (
      <Modal
        modalState={modalState}
        setModalState={closeBmListModal}
        width="520px"
        height="90vh"
        title="목록에 저장하기"
        header
      >
        <StList>
          {bookmarkLists &&
            bookmarkLists.map(
              ({ bookmarkListId, bookmarkListTitle, bookmarks }) => (
                <StBookmark
                  key={bookmarkListId}
                  onClick={() => onClickBookmark(bookmarkListId)}
                >
                  <StImage src={bookmarks[0] && bookmarks[0].images} />
                  <StContentWrapper>
                    <StTitle>{bookmarkListTitle}</StTitle>
                    <StCount>
                      {bookmarks
                        ? `숙소 ${bookmarks.length}개`
                        : '저장된 항목 없음'}
                    </StCount>
                  </StContentWrapper>
                </StBookmark>
              ),
            )}
        </StList>
        <ModalFooter>
          <Button
            btnType="underlined"
            width="100%"
            fontWeight="500"
            onClick={openBmNewModal}
          >
            목록 만들기
          </Button>
        </ModalFooter>
      </Modal>
    );
  },
);

const NewBookmarkModal = React.memo(
  ({ value, onChange, onClickNewList, closeBmNewModal, modalState }) => {
    return (
      <Modal
        modalState={modalState}
        setModalState={closeBmNewModal}
        width="520px"
        height="305px"
        title="목록 이름 작성하기"
        header
      >
        <StContentWrapper padding>
          <NewInput title="이름" animation value={value} onChange={onChange} />
          <StSpan>최대 50자</StSpan>
        </StContentWrapper>
        <ModalFooter>
          <Button
            btnType="color"
            color="black"
            hover="background: #000"
            width="100%"
            onClick={() => onClickNewList(value)}
          >
            새로 만들기
          </Button>
        </ModalFooter>
      </Modal>
    );
  },
);

const StList = styled.ul`
  padding: 2rem;
  height: calc(90vh - 128px);
  overflow-y: scroll;
`;

const StBookmark = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
    border-radius: 8px;
  }
`;

const StImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  margin-right: 2rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.shadow};
`;

const StTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const StCount = styled.span`
  font-size: 1.4rem;
`;

const StSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
  margin-top: 1rem;
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${({ padding }) => padding && '4rem 2rem'};
`;

export { BookmarkListModal, NewBookmarkModal };
