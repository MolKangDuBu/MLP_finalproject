import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import Tooltip from '../Global/Tooltip';
import { FaBox } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const MsgSectionHeader = ({
  activeMsg,
  media,
  msgDetailSectionState,
  onClickShowList,
  onClickToggleDetail,
  onClickArchive,
  hostname,
  state,
}) => {
  return (
    <MsgSectionHeaderWrapper>
      <MsgSectionHeaderTitle>
        {activeMsg && media === 'medium' && msgDetailSectionState && (
          <Button
            btnType="circle"
            border="none"
            hover={{ backgroundColor: theme.color.lightGray }}
            fontSize="3rem"
            style={{ width: '4rem', height: '4rem', marginRight: '3rem' }}
            onClick={onClickShowList}
          >
            <MdKeyboardArrowLeft />
          </Button>
        )}
        {hostname}
      </MsgSectionHeaderTitle>
      <MsgSectionHeaderButtonWrapper>
        {activeMsg && state !== 'unread' && (
          <StStroageButton
            btnType="circle"
            border="none"
            hover={{ backgroundColor: theme.color.lightGray }}
            onClick={onClickArchive}
          >
            <StMsgSectionHeaderStorageIcon />
            <Tooltip state={state} />
          </StStroageButton>
        )}
        {msgDetailSectionState ? (
          activeMsg && (
            <Button
              btnType="oval"
              border={`2px solid ${theme.color.black}`}
              hover="none"
              fontSize="1.2rem"
              style={{
                backgroundColor: `${theme.color.lightGray}`,
                fontWeight: '600',
              }}
              onClick={onClickToggleDetail}
            >
              세부 정보 숨기기
            </Button>
          )
        ) : (
          <Button
            btnType="oval"
            border={`1px solid ${theme.color.gray}`}
            hover={{ border: `1px solid ${theme.color.black}` }}
            fontSize="1.2rem"
            style={{ fontWeight: '400' }}
            onClick={onClickToggleDetail}
          >
            세부 정보 보기
          </Button>
        )}
      </MsgSectionHeaderButtonWrapper>
    </MsgSectionHeaderWrapper>
  );
};

const MsgSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const MsgSectionHeaderTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const MsgSectionHeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & > Button + Button {
    margin-left: 1rem;
  }
`;

const StStroageButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  &:hover > div {
    display: flex;
  }
`;

const StMsgSectionHeaderStorageIcon = styled(FaBox)`
  font-size: 1.45rem;
`;

export default MsgSectionHeader;
