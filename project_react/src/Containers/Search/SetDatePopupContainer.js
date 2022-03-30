import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetDatePopup } from '../../Components/Search/FilterPopup';
import { setDateHeader, closePopup } from '../../Modules/search';

const SetDatePopupContainer = () => {
  const { popupState } = useSelector(state => state.search);
  const popupRef = useRef();
  const dispatch = useDispatch();

  const onClosePopup = ({ target }) => {
    if (!popupState.price || popupRef.current.contains(target)) return;
    dispatch(closePopup('price'));
  };

  const onSetDate = () => dispatch(setDateHeader());

  useEffect(() => {
    document.addEventListener('click', onClosePopup);
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [onClosePopup]);

  return (
    <div ref={popupRef}>
      <SetDatePopup popupState={popupState.price} onSetDate={onSetDate} />
    </div>
  );
};

export default React.memo(SetDatePopupContainer);
