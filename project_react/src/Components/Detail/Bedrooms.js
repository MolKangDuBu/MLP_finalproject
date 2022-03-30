import React from 'react';
import styled from 'styled-components';
import Division from './Division';

const Bedrooms = ({ home }) => {
  const { bedrooms } = home;
  return (
    !!bedrooms.length && (
      <Division title="침대/침구 유형">
        <StBedroomWrapper>
          {bedrooms.map((bedroom, i) => (
            <StBedroom key={i}>
              {bedroom.icons.map((icon, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={icon} />
                </svg>
              ))}
              <strong>{bedroom.room}</strong>
              <span>{bedroom.size}</span>
            </StBedroom>
          ))}
        </StBedroomWrapper>
      </Division>
    )
  );
};

const StBedroomWrapper = styled.div`
  display: flex;
  margin: 0 -0.4rem;
  flex-wrap: wrap;
`;

const StBedroom = styled.div`
  width: 32.1%;
  padding: 2.4rem;
  margin: 0 0.4rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 12px;
  fill: currentcolor;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 16px;
    margin-right: 8px;
    fill: currentcolor;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  span {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default Bedrooms;
