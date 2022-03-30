import React from 'react';
import Wishlist from '../../Components/Wishlists/Wishlist';

const WishlistContainer = ({ bmList }) => {
  const { bookmarkListTitle, bookmarkListId, bookmarks } = bmList;
  const homeCount = bookmarks && bookmarks.length;

  // ? 이게 최선인가...
  const bmImage1 = bookmarks && bookmarks[0] && bookmarks[0].images;
  const bmImage2 = bookmarks && bookmarks[1] && bookmarks[1].images;
  const bmImage3 = bookmarks && bookmarks[2] && bookmarks[2].images;

  return (
    <Wishlist
      bookmarkListTitle={bookmarkListTitle}
      homeCount={homeCount}
      bookmarkListId={bookmarkListId}
      bmImage1={bmImage1}
      bmImage2={bmImage2}
      bmImage3={bmImage3}
    />
  );
};

export default WishlistContainer;
