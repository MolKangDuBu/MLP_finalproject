import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/mouseEvents';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const HomeCardContainer = ({ home, type }) => {
  const { id } = useSelector(state => state.user.data);
  const { dateDiff } = useSelector(state => state.searchForm);
  const { mapState } = useSelector(state => state.search);
  const { hoveredHome } = useSelector(state => state.mouseEvents);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onBlurHome = () => dispatch(blurHome());
  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));

  return (
    <HomeCard
      home={home}
      type={type}
      isHovered={isHovered}
      dateDiff={dateDiff}
      mapState={mapState}
      onClickHeart={() => toggleBookmark(id, home, dispatch)}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default React.memo(HomeCardContainer);
