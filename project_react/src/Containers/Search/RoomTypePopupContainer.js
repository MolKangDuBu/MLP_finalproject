import React, { useEffect, useRef } from 'react';
import { RoomTypePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';

const RoomTypePopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { roomTypeHouse, roomTypePrivate, roomTypeShared } = filterApplied;
  const isDisabled = !roomTypeHouse && !roomTypePrivate && !roomTypeShared;
  const dispatch = useDispatch();
  const popupRef = useRef();

  const onReset = () => dispatch(resetFilter('roomType'));
  const onClose = () => dispatch(closePopup('roomType', !isDisabled));
  const onUnsave = () => dispatch(unsaveFilter('roomType'));

  const onClosePopup = ({ target }) => {
    if (!popupState.roomType || popupRef.current.contains(target)) return;
    onUnsave();
  };

  useEffect(() => {
    document.addEventListener('click', onClosePopup);
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [onClosePopup]);

  return (
    <div ref={popupRef}>
      <RoomTypePopup
        popupState={popupState.roomType}
        isDisabled={isDisabled}
        onSave={onClose}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(RoomTypePopupContainer);
