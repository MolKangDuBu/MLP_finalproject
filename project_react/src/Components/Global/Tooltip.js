import React from 'react';
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';

const Tooltip = ({ state }) => {
  return (
    <>
      <StTooltip>
        {state === 'all' && '숨기기'}
        {state === 'hide' && '숨김 취소'}
        <StClearIcon />
      </StTooltip>
    </>
  );
};

const StTooltip = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 14.7rem;
  width: 10rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.color.black};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.3rem;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    left: 50%;
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.color.black};
  }
`;

const StClearIcon = styled(MdClear)`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;
export default Tooltip;
