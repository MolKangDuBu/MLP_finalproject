import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Aside from '../../Components/Reservation/Aside';

const AsideContainer = () => {
  const {
    title,
    subTitle,
    price,
    images,
    reviewCount,
    dateDiff,
    checkin,
    checkout,
    adult,
    child,
  } = useSelector(
    state => ({
      title: state.home.homeState.home.title,
      subTitle: state.home.homeState.home.subTitle,
      price: state.home.homeState.home.price,
      images: state.home.homeState.home.images,
      reviewCount: state.home.homeState.home.host.reviewCount,
      dateDiff: state.reservation.dateDiff,
      checkin: state.reservation.checkin,
      checkout: state.reservation.checkout,
      adult: state.reservation.guests.adult,
      child: state.reservation.guests.child,
    }),
    shallowEqual,
  );

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const checkinString = checkinDate.toLocaleDateString('ko-KR', options);
  const checkoutString = checkoutDate.toLocaleDateString('ko-KR', options);

  const image = images[0];

  const regExp = /\d/g;
  const removedCommaPrice = Number(price.match(regExp).join(''));

  const pricePerPerson = removedCommaPrice * (adult + child);

  const pricePerPersonToString = pricePerPerson.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const multipliedPrice = (pricePerPerson * dateDiff).toLocaleString(
    undefined,
    {
      maximumFractionDigits: 0,
    },
  );

  const percentage = (((pricePerPerson * dateDiff) / 100) * 12).toLocaleString(
    undefined,
    {
      maximumFractionDigits: 0,
    },
  );

  const filteredPercentage = Number(percentage.match(regExp).join(''));

  const totalPrice = (
    pricePerPerson * dateDiff +
    filteredPercentage
  ).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <Aside
      title={title}
      subTitle={subTitle}
      price={pricePerPersonToString}
      multipliedPrice={multipliedPrice}
      percentage={percentage}
      totalPrice={totalPrice}
      image={image}
      reviewCount={reviewCount}
      dateDiff={dateDiff}
      checkinString={checkinString}
      checkoutString={checkoutString}
      countGuest={adult + child}
    />
  );
};

export default AsideContainer;
