import React, { useState, useCallback, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchForm from '../../Components/Main/SearchForm';
import { setSearchData } from '../../Modules/searchForm';
import { getLocationAutoComplete } from '../../Api/searchFormApi';

const SearchFormContainer = ({ isSearchBtnClicked }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.searchForm);
  const [locationResult, setLocationResult] = useState([]);
  const [type, setType] = useState(null);
  const latestType = useRef(type);

  latestType.current = type;

  const {
    location,
    checkIn,
    checkOut,
    dateDiff,
    flexibleDate,
    guests,
  } = searchData;

  const searchFormRef = useRef();
  const locationWrapperRef = useRef();
  const checkInWrapperRef = useRef();
  const checkOutWrapperRef = useRef();
  const guestsWrapperRef = useRef();

  const locationListRef = useRef();
  const calendarPopupRef = useRef();
  const checkOutPopupRef = useRef();
  const guestsPopupRef = useRef();

  const locationResetBtnRef = useRef();
  const checkInResetBtnRef = useRef();
  const checkOutResetBtnRef = useRef();
  const guestsResetBtnRef = useRef();

  const refObj = {
    searchFormRef,
    locationWrapperRef,
    checkInWrapperRef,
    checkOutWrapperRef,
    guestsWrapperRef,
    locationListRef,
    calendarPopupRef,
    checkOutPopupRef,
    guestsPopupRef,
    locationResetBtnRef,
    checkInResetBtnRef,
    checkOutResetBtnRef,
    guestsResetBtnRef,
  };

  const changeType = newType => {
    setType(newType);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let newCheckIn = checkIn;
    let newCheckOut = checkOut;
    if (checkIn && !checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date();
      checkOutDate.setDate(checkInDate.getDate() + 1);
      const year = checkOutDate.getFullYear();
      const month = `0${checkOutDate.getMonth() + 1}`.slice(-2);
      const date = `0${checkOutDate.getDate()}`.slice(-2);
      const payload = `${year}.${month}.${date}`;
      newCheckOut = payload;
      changeSearchData('checkOut', payload);
    } else if (!checkIn && checkOut) {
      const checkOutDate = new Date(checkIn);
      const checkInDate = new Date();
      checkInDate.setDate(checkOutDate.getDate() - 1);
      const year = checkOutDate.getFullYear();
      const month = `0${checkOutDate.getMonth() + 1}`.slice(-2);
      const date = `0${checkOutDate.getDate()}`.slice(-2);
      const payload = `${year}.${month}.${date}`;
      newCheckIn = payload;
      changeSearchData('checkIn', payload);
    }
    const { adult, child, infant } = guests;
    const guestCount = +adult + +child + +infant;
    const url = `/search?location=${location}&checkIn=${newCheckIn}&checkOut=${newCheckOut}&dateDiff=${dateDiff}&flexibleDate=${flexibleDate}&guests=${guestCount}&adult=${adult}&child=${child}&infant=${infant}`;
    history.push(url);
    window.scrollTo({ top: 0 });
  };

  const changeSearchData = (name, value) => {
    const data = { name, value };
    dispatch(setSearchData(data));
  };

  const debounceGetAutoCompleteResult = useCallback(
    debounce(async value => {
      const result = await getLocationAutoComplete(value);
      setLocationResult(result || []);
    }, 300),
    [],
  );

  const changeAutoComplete = value => {
    if (!value) {
      changeSearchData('location', '');
      setLocationResult([]);
      return;
    } else {
      changeSearchData('location', value);
      debounceGetAutoCompleteResult(value);
      setType('location');
    }
  };

  const setCheckIn = date => {
    changeSearchData('checkIn', date);
    changeType('checkOut');
  };

  const setCheckOut = date => {
    changeSearchData('checkOut', date);
    changeType('guests');
  };

  const increaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult' || !adult) adult++;
    if (guestType === 'child') {
      child++;
    } else if (guestType === 'infant') {
      infant++;
    }
    const value = { adult, child, infant };
    changeSearchData('guests', value);
  };

  const decreaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult') adult--;
    else if (guestType === 'child') child--;
    else if (guestType === 'infant') infant--;
    const value = { adult, child, infant };
    changeSearchData('guests', value);
  };

  const changeFocus = () => {
    if (latestType.current === 'checkIn') checkInWrapperRef.current.focus();
    else if (latestType.current === 'checkOut')
      checkOutWrapperRef.current.focus();
    else if (latestType.current === 'guests') guestsWrapperRef.current.focus();
  };

  const handlePopup = useCallback(
    ({ target }) => {
      if (locationListRef.current && locationListRef.current.contains(target)) {
        changeType('checkIn');
      } else if (locationWrapperRef.current.contains(target)) {
        changeType('location');
      } else if (
        checkInWrapperRef.current.contains(target) &&
        !calendarPopupRef.current.contains(target)
      ) {
        changeType('checkIn');
      } else if (
        checkOutWrapperRef.current.contains(target) &&
        !calendarPopupRef.current.contains(target)
      ) {
        changeType('checkOut');
      } else if (guestsWrapperRef.current.contains(target)) {
        changeType('guests');
      } else if (type === 'checkOut' && latestType.current === 'guests') {
        changeType('guests');
      } else if (
        latestType.current &&
        !searchFormRef.current.contains(target) &&
        !calendarPopupRef.current.contains(target)
      ) {
        changeType(null);
      }
    },
    [latestType.current],
  );
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup]);

  useEffect(() => {
    if (type) changeFocus();
  });

  return (
    <SearchForm
      isSearchBtnClicked={isSearchBtnClicked}
      type={type}
      refObj={refObj}
      changeType={changeType}
      searchData={searchData}
      changeSearchData={changeSearchData}
      changeAutoComplete={changeAutoComplete}
      locationResult={locationResult}
      handleSubmit={handleSubmit}
      setCheckIn={setCheckIn}
      setCheckOut={setCheckOut}
      increaseGuestCount={increaseGuestCount}
      decreaseGuestCount={decreaseGuestCount}
    ></SearchForm>
  );
};

export default React.memo(SearchFormContainer);
