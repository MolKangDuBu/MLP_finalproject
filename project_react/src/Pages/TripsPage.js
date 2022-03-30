import React from 'react';
import TripsHeaderContainer from '../Containers/Trips/TripsHeaderContainer';
import Footer from '../Components/Main/Footer';
import TripsMainContainer from '../Containers/Trips/TripsMainContainer';

const TripsPage = () => {
  return (
    <>
      <TripsHeaderContainer />
      <TripsMainContainer />
      <Footer />
    </>
  );
};

export default TripsPage;
