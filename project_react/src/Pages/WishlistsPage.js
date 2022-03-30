import React from 'react';
import WishlistsHeaderContainer from '../Containers/Trips/TripsHeaderContainer';
import WishlistsMainContainer from '../Containers/Wishlists/WishlistsMainContainer';
import Footer from '../Components/Main/Footer';
// import * as api from '../Api/bookmarkApi';

const WishlistsPage = () => {
  // React.useEffect(async () => {
  //   try {
  //     const data1 = await api.fetchBookmarkData();
  //     const data2 = await api.fetchBookmarkListsData();
  //     console.log(data1);
  //     console.log(data2);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

  return (
    <>
      <WishlistsHeaderContainer />
      <WishlistsMainContainer />
      <Footer />
    </>
  );
};

export default WishlistsPage;
