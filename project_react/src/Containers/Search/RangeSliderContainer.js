import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';
import RangeSlider from '../../Components/Search/RangeSlider';

const RangeSliderContainer = ({ range, setRange, isModal }) => {
  const { filterApplied } = useSelector(state => state.search);
  const { priceMin: min, priceMax: max } = filterApplied;
  const { priceArray, averagePrice } = useSelector(state => state.search.data);
  const isDisabled = min === 12000 && max === 1000000;
  const regExp = /^\d{0,7}$/;

  const dispatch = useDispatch();
  const onSetRange = () => setRange({ value: [min, max] });
  const onHandler = e => {
    setRange({ value: e });
    const name = e[0] === min ? 'priceMax' : 'priceMin';
    const value = e[0] === min ? e[1] : e[0];
    dispatch(setFilter(name, value));
    console.log(name, value);
  };

  const onChangeMinPrice = (e, name) => {
    if (!regExp.test(+e.target.value)) return;
    dispatch(setFilter(name, +e.target.value));
  };
  const onChangeMaxPrice = (e, name) => {
    if (!regExp.test(+e.target.value)) return;
    dispatch(setFilter(name, +e.target.value));
  };

  const track = document.querySelector('.rc-slider-track');
  const rangeBar = document.querySelector('.rc-slider');
  const trackPos = track && track.getBoundingClientRect();
  const rangePos = rangeBar && rangeBar.getBoundingClientRect();

  return (
    <RangeSlider
      isModal={isModal}
      isDisabled={isDisabled}
      priceArray={priceArray}
      averagePrice={averagePrice}
      min={min}
      max={max}
      left={trackPos && trackPos.left}
      right={trackPos && trackPos.right}
      start={rangePos && rangePos.left}
      end={rangePos && rangePos.right}
      range={range}
      onHandler={onHandler}
      onSetRange={onSetRange}
      onChangeMinPrice={onChangeMinPrice}
      onChangeMaxPrice={onChangeMaxPrice}
    />
  );
};

export default React.memo(RangeSliderContainer);
