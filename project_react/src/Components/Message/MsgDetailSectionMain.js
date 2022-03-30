import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import MsgDetailTitleBoxContainer from '../../Containers/Message/MsgDetailTitleBoxContainer';
import MsgDetailReservedHomeBoxContainer from '../../Containers/Message/MsgDetailReservedHomeBoxContainer';
import MsgDetailSubInfoBoxContainer from '../../Containers/Message/MsgDetailSubInfoBoxContainer';
import MsgDetailAddressBoxContainer from '../../Containers/Message/MsgDetailAddressBoxContainer';
import MsgDetailReservedHomeLinkBoxContainer from '../../Containers/Message/MsgDetailReservedHomeLinkBoxContainer';
import MsgDetailHostInfoPageLinkBoxContainer from '../../Containers/Message/MsgDetailHostInfoPageLinkBoxContainer';
import MsgDetailRefundBoxContainer from '../../Containers/Message/MsgDetailRefundBoxContainer';
import MsgDetailAirbnbSupportTeamBoxContainer from '../../Containers/Message/MsgDetailAirbnbSupportTeamBoxContainer';

const MsgDetailSectionMain = ({ activeMsg, isCanceled }) => {
  return (
    <MsgDetailSectionMainWrapper>
      {activeMsg && (
        <MsgDetailSectionMainInner>
          {isCanceled ? (
            <>
              <MsgDetailTitleBoxContainer />
              <MsgDetailReservedHomeBoxContainer />
              <MsgDetailSubInfoBoxContainer />
              <MsgDetailAirbnbSupportTeamBoxContainer />
            </>
          ) : (
            <>
              <MsgDetailTitleBoxContainer />
              <MsgDetailReservedHomeBoxContainer />
              <MsgDetailSubInfoBoxContainer />
              <MsgDetailAddressBoxContainer />
              <MsgDetailReservedHomeLinkBoxContainer />
              <MsgDetailHostInfoPageLinkBoxContainer />
              <MsgDetailRefundBoxContainer />
              <MsgDetailAirbnbSupportTeamBoxContainer />
            </>
          )}
        </MsgDetailSectionMainInner>
      )}
    </MsgDetailSectionMainWrapper>
  );
};

const MsgDetailSectionMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-left: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  overflow: scroll;
`;

const MsgDetailSectionMainInner = styled.div`
  & > div + div {
    border-top: 5px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
    border-bottom: 3px solid
      ${({ theme }) => darken(0.1, theme.color.lightGray)};
  }
  & > :last-child {
    border: none;
    padding-bottom: 7rem;
  }
`;

export default MsgDetailSectionMain;
