import React, { useReducer, useEffect, useState } from 'react';
import Carousel from '../../Components/Global/Carousel';
import { throttle } from 'lodash';

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'SLIDE_NEXT':
      return {
        ...state,
        nextIndex:
          state.nextIndex + 1 < state.imageCount ? state.nextIndex + 1 : 0,
        prevIndex: state.currentIndex,
        currentIndex: state.nextIndex,
        renderArray: [state.currentIndex, state.nextIndex],
        direction: 'right',
        isSliding: true,
      };
    case 'SLIDE_PREV':
      return {
        ...state,
        nextIndex: state.currentIndex,
        prevIndex:
          state.prevIndex - 1 >= 0 ? state.prevIndex - 1 : state.imageCount - 1,
        currentIndex: state.prevIndex,
        renderArray: [state.prevIndex, state.currentIndex],
        direction: 'left',
        isSliding: true,
      };
    case 'END_SLIDE':
      return {
        ...state,
        renderArray: [state.currentIndex],
        isSliding: false,
      };
    case 'SET_WIDTH':
      return {
        ...state,
        width: action.width,
      };
    case 'GET_MARKER':
      return { ...state, marker: action.marker };
    default:
      return state;
  }
};

const getMarkerIndex = (imageCount, currentIndex) => {
  if (imageCount <= 5) return currentIndex;
  if (currentIndex >= 2 && currentIndex < imageCount - 2) return 2;
  if (currentIndex >= imageCount - 2) return 5 - (imageCount - currentIndex);
  return currentIndex;
};

const CarouselContainer = ({
  size,
  theme,
  homeId,
  mapState,
  blockLink,
  isHovered,
  responsive,
  imageArray,
  imageCount,
  isSuperhost,
  getWidth,
  ...rest
}) => {
  const carouselInit = {
    imageCount,
    isSliding: false,
    nextIndex: imageCount > 1 ? 1 : null,
    prevIndex: imageCount > 1 ? imageCount - 1 : null,
    currentIndex: 0,
    renderArray: [0],
    direction: '',
    width: 0,
    marker: 0,
  };

  const [carouselState, dispatch] = useReducer(carouselReducer, carouselInit);
  const [didMount, setDidMount] = useState(false);

  const {
    isSliding,
    direction,
    renderArray,
    width,
    marker,
    currentIndex,
  } = carouselState;

  const onSlideNext = () => dispatch({ type: 'SLIDE_NEXT' });
  const onSlidePrev = () => dispatch({ type: 'SLIDE_PREV' });
  const setWidth = () =>
    dispatch({ type: 'SET_WIDTH', width: !size && getWidth() });
  window.addEventListener('resize', throttle(setWidth, 300));

  useEffect(() => {
    setDidMount(true);
    setWidth();
    dispatch({
      type: 'GET_MARKER',
      marker: getMarkerIndex(imageCount, currentIndex),
    });
    setTimeout(() => isSliding && dispatch({ type: 'END_SLIDE' }), 300);
    return () => {
      setDidMount(false);
      window.removeEventListener('resize', setWidth);
    };
  }, [isSliding, currentIndex, width, mapState]);

  if (!didMount) return null;
  return (
    <Carousel
      size={size}
      theme={theme}
      homeId={homeId}
      blockLink={blockLink}
      marker={marker}
      responsive={responsive}
      direction={direction}
      isSliding={isSliding}
      renderArray={renderArray}
      homeWidth={width - 20}
      imageArray={imageArray}
      imageCount={imageCount}
      isSuperhost={isSuperhost}
      isHovered={isHovered}
      onSlideNext={onSlideNext}
      onSlidePrev={onSlidePrev}
      setWidth={setWidth}
      {...rest}
    />
  );
};

export default React.memo(CarouselContainer);
