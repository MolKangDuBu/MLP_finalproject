import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishlistsMain from '../../Components/Wishlists/WishlistsMain';
import {
  createBookmarkList,
  fetchBookmarkLists,
} from '../../Modules/wishlists';

const WishlistsMainContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.wishlists);
  const dispatch = useDispatch();

  // ! hook
  const [openPopup, setOpenPopup] = useState(false);
  const [title, setTitle] = useState('');

  // ! event
  const onClickPopup = () => setOpenPopup(!openPopup);

  const onChangeTitleInput = e => setTitle(e.target.value);

  const onCreateBookMarkList = () => {
    if (!title) return;
    dispatch(
      createBookmarkList({
        bookmarkListTitle: title,
        bookmarkListId: '',
        bookmarkHomeId: '',
        bookmarkImage: '',
      }),
    );
    setTitle('');
    setOpenPopup(!openPopup);
  };

  // ! fetch bookmarkLists data
  useEffect(() => {
    dispatch(fetchBookmarkLists());
  }, [dispatch]);

  if (loading) return <div>로딩중... </div>;
  if (error) return <div>에러발생... </div>;
  if (!data) return null;

  return (
    <WishlistsMain
      bookmarkLists={data && data.bookmarkLists}
      title={title}
      onChangeTitleInput={onChangeTitleInput}
      onCreateBookMarkList={onCreateBookMarkList}
      openPopup={openPopup}
      onClickPopup={onClickPopup}
    />
  );
};

export default WishlistsMainContainer;
