import React, { useEffect, useRef } from 'react';
import { RefundPopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';

const RefundPopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { refund } = filterApplied;
  const isDisabled = !refund;
  const popupRef = useRef();
  const dispatch = useDispatch();

  const onClose = () => dispatch(closePopup('refund', !isDisabled));
  const onReset = () => dispatch(resetFilter('refund'));
  const onUnsave = () => dispatch(unsaveFilter('refund'));

  const onClosePopup = ({ target }) => {
    if (
      !popupState.refund ||
      popupRef.current.contains(target) ||
      target.nodeName === 'svg' ||
      target.nodeName === 'path'
    )
      return;
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
      <RefundPopup
        popupState={popupState.refund}
        isDisabled={isDisabled}
        onSave={onClose}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(RefundPopupContainer);
