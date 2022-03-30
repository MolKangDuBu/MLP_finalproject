import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { MdClear } from 'react-icons/md';

const MsgDetailSectionHeader = ({ onCloseSection }) => {
  return (
    <MsgDetailSectionHeaderWrapper>
      <MsgDetailSectionHeaderTitle>세부 내용</MsgDetailSectionHeaderTitle>
      <Button
        btnType="circle"
        border="none"
        hover={{ backgroundColor: theme.color.lightGray }}
        style={{ width: '3.5rem', height: '3.5rem' }}
        onClick={onCloseSection}
      >
        <StMsgDetailHeaderClearIcon />
      </Button>
    </MsgDetailSectionHeaderWrapper>
  );
};

const MsgDetailSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const MsgDetailSectionHeaderTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StMsgDetailHeaderClearIcon = styled(MdClear)`
  font-size: 2.5rem;
`;

export default MsgDetailSectionHeader;
