import React, { useState } from 'react';
import HomePopup from '../../Components/Search/HomePopup';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const HomePopupContainer = ({ home, dateDiff, theme, store }) => {
  const { id } = store.getState().user.data;
  const dispatch = store.dispatch;
  const [isHovered, setIsHovered] = useState(false);
  const onHoverHome = () => setIsHovered(true);
  const onBlurHome = () => setIsHovered(false);

  return (
    <HomePopup
      home={home}
      store={store}
      dateDiff={dateDiff}
      isHovered={isHovered}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      onClickHeart={() => toggleBookmark(id, home, dispatch)}
      theme={theme}
    />
  );
};

export default React.memo(HomePopupContainer);
