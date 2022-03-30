import React from 'react';
import styled, { css } from 'styled-components';
import { Marker, OverlayView } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { AiFillHome } from 'react-icons/ai';
import Button from '../Global/Button';
import { Heart } from '../Global/Heart';
import HomePopupContainer from '../../Containers/Search/HomePopupContainer';

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MapMarker = ({
  theme,
  store,
  isOpen,
  isHovered,
  marker,
  dateDiff,
  clickMarker,
}) => {
  const { location, price, isBookmarked } = marker;
  return (
    <Marker
      position={{ lat: +location.lat, lng: +location.lng }}
      icon={{
        scale: 0,
        path: '',
      }}
    >
      <OverlayView
        key={Math.random()}
        position={{ lat: +location.lat, lng: +location.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        {dateDiff ? (
          <PriceMarker
            btnType="oval"
            isOpen={isOpen}
            isHovered={isHovered}
            theme={theme}
            onClick={clickMarker}
          >
            <span>
              ₩<Strong> {price.toLocaleString()} </Strong>
            </span>
            {isBookmarked && (
              <Heart
                size="smaller"
                bgColor={isOpen || isHovered ? 'white' : 'main'}
                stroke={isOpen || isHovered ? 'black' : 'white'}
                theme={theme}
              />
            )}
          </PriceMarker>
        ) : (
          <HomeMarker
            btnType="circle"
            isOpen={isOpen}
            isHovered={isHovered}
            theme={theme}
            onClick={clickMarker}
          >
            <AiFillHome />
            {isBookmarked && (
              <MiniHeart
                size="smaller"
                bgColor={isOpen || isHovered ? 'white' : 'main'}
                stroke={isOpen || isHovered ? 'black' : 'white'}
                theme={theme}
              />
            )}
          </HomeMarker>
        )}
      </OverlayView>
      {isOpen && (
        <InfoBox
          className="InfoBox"
          options={{ closeBoxURL: '', enableEventPropagation: true }}
        >
          <HomePopupContainer
            home={marker}
            store={store}
            dateDiff={dateDiff}
            theme={theme}
          />
        </InfoBox>
      )}
    </Marker>
  );
};

const buttonStyle = css`
  box-shadow: 0 0 2px ${({ theme }) => theme.color.gray};
  border: none;
  transform: scale(1);
  transition: 0.3s;
  &:hover {
    border: none;
    transition: 0.3s;
    transform: scale(1.1);
    z-index: 20;
  }
`;

const focusStyle = css`
  ${({ isOpen, isHovered, theme }) =>
    isOpen || isHovered
      ? css`
          background: ${theme.color.black};
          color: ${theme.color.white};
          transition: 0.3s;
          transform: scale(1.1);
          z-index: 20;
        `
      : css`
          background: ${theme.color.white};
          color: ${theme.color.black};
        `}
`;

const HomeMarker = styled(Button)`
  ${buttonStyle};
  ${focusStyle};
  overflow: visible;
  position: relative;
`;

const PriceMarker = styled(Button)`
  ${buttonStyle};
  ${focusStyle};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

const Strong = styled.strong`
  padding: 0 3px;
`;

const MiniHeart = styled(Heart)`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
`;

export default React.memo(MapMarker);
