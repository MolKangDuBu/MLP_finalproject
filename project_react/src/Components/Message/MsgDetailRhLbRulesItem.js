import React from 'react';
import styled from 'styled-components';

const MsgDetailRhLbRulesItem = ({ rule }) => {
  return <StRuleItem>{rule.name}</StRuleItem>;
};

const StRuleItem = styled.div`
  padding: 0.5rem 0rem;
`;

export default MsgDetailRhLbRulesItem;
