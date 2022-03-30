import React from 'react';
import styled from 'styled-components';

const MsgDetailTitleBox = ({ hostname, addr, ci, co }) => {
  return (
    <MsgDetailTitleBoxWrapper>
      <MsgDetailTitleBoxSection>
        <DitTitleBoxLocation>{addr}</DitTitleBoxLocation>
        {' · '}
        <MsgDetailTitleBoxReservedDate>
          {ci} - {co}
        </MsgDetailTitleBoxReservedDate>
        <MsgDetailTitleBoxTitle>{hostname}님의 숙소</MsgDetailTitleBoxTitle>
      </MsgDetailTitleBoxSection>
    </MsgDetailTitleBoxWrapper>
  );
};

const MsgDetailTitleBoxWrapper = styled.div`
  padding: 4.5rem 2.5rem 4rem;
`;

const MsgDetailTitleBoxSection = styled.section`
  font-size: 1.2rem;
  font-weight: light;
`;

const DitTitleBoxLocation = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const MsgDetailTitleBoxReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const MsgDetailTitleBoxTitle = styled.h3`
  margin-top: 2rem;
  font-size: 3.1rem;
  font-weight: 600;
`;

export default MsgDetailTitleBox;
