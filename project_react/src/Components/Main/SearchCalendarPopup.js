import React, { forwardRef, useEffect, useState } from 'react';
import { throttle } from 'lodash';
import styled, { css } from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import CalendarContainer from '../../Containers/Global/CalendarContainer';

const StSearchCalendarPopupWrapper = styled.div`
  position: relative;
  left: -20px;
`;

const StSearchCalendarPopup = styled(Popup)`
  top: 46px;
  left: 0;
  transform: translate(-50%, 0);
  border-radius: 20px;
  padding: 20px;
`;

const SearchCalendarPopup = forwardRef(
  (
    { type, changeType, searchData, changeFocus, setCheckIn, setCheckOut },
    ref,
  ) => {
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 950);
    const handleResize = () => {
      if (window.innerWidth <= 950) setIsResponsive(() => true);
      else if (window.innerWidth > 950) setIsResponsive(() => false);
    };

    useEffect(() => {
      window.addEventListener('resize', throttle(handleResize, 250));
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [handleResize, isResponsive]);

    const { checkIn, checkOut } = searchData;
    return (
      <StSearchCalendarPopupWrapper ref={ref}>
        <StSearchCalendarPopup
          popupState={type === 'checkIn' || type === 'checkOut'}
        >
          <CalendarContainer
            responsiveScreen={isResponsive}
            setCheckinData={setCheckIn}
            setCheckoutData={setCheckOut}
            checkin={checkIn}
            checkout={checkOut}
          ></CalendarContainer>
        </StSearchCalendarPopup>
      </StSearchCalendarPopupWrapper>
    );
  },
);

export default React.memo(SearchCalendarPopup);
