import React from 'react';
import Button from './Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';

const PlusButton = ({ ...rest }) => {
  return (
    <StCounterButton btnType="circle" fontSize="1.7rem" {...rest}>
      <FiPlus strokeWidth="3px" />
    </StCounterButton>
  );
};

const MinusButton = ({ ...rest }) => {
  return (
    <StCounterButton btnType="circle" fontSize="1.7rem" {...rest}>
      <FiMinus strokeWidth="3px" />
    </StCounterButton>
  );
};

const StCounterButton = styled(Button)`
  color: ${({ theme }) => theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.gray};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.shadow};
    border: 1px solid ${({ theme }) => theme.color.shadow};
  }
`;

export { PlusButton, MinusButton };
