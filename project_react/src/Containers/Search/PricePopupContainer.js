import React, { useEffect, useRef, useState } from 'react';
import { PricePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';

const PricePopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { priceMin: min, priceMax: max } = filterApplied;
  const [range, setRange] = useState({ value: [min, max] });
  const isDisabled = min === 12000 && max === 1000000;
  const popupRef = useRef();
  const dispatch = useDispatch();

  const onClose = () => dispatch(closePopup('price', !isDisabled));
  const onReset = () => dispatch(resetFilter('price'));
  const onUnsave = () => dispatch(unsaveFilter('price'));

  const onClosePopup = ({ target }) => {
    if (!popupState.price || popupRef.current.contains(target)) return;
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
      <PricePopup
        popupState={popupState.price}
        isDisabled={isDisabled}
        range={range}
        setRange={setRange}
        onSave={onClose}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(PricePopupContainer);
