/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';
import {
  BookingFilter,
  CounterFilter,
  SuperhostFilters,
  CheckboxFilter,
  PriceFilter,
  RoomTypeFilter,
  RefundFilter,
} from './Filter';

const FilterModal = ({
  popupState,
  dataTotal,
  viewState,
  filterCondition,
  filter,
  seemore,
  range,
  setRange,
  onSeemore,
  onClose,
  onSave,
  onCheck,
  onReset,
  onToggle,
  onCounter,
}) => {
  const {
    superhost,
    amenityList,
    facilityList,
    hostLangList,
  } = filterCondition;

  return (
    <StModal
      modalState={popupState}
      setModalState={() => onClose('modal')}
      header
      title="필터 추가하기"
    >
      <StFilterList>
        {viewState === 'map' && dataTotal !== 0 && <RefundFilter />}
        {viewState === 'map' && dataTotal !== 0 && <RoomTypeFilter />}
        {viewState === 'map' && (
          <PriceFilter range={range} setRange={setRange} />
        )}
        <BookingFilter filter={filter} onToggle={onToggle} />
        <CounterFilter filter={filter} onCounter={onCounter} />
        {superhost && <SuperhostFilters filter={filter} onToggle={onToggle} />}
        {amenityList && (
          <CheckboxFilter
            title="편의 시설"
            listName="amenityList"
            list={amenityList}
            filter={filter.amenityList}
            onCheck={onCheck}
            seemore={seemore.amenity}
            onSeemore={() => onSeemore('amenity')}
          />
        )}
        {facilityList && (
          <CheckboxFilter
            title="시설"
            listName="facilityList"
            list={facilityList}
            filter={filter.facilityList}
            onCheck={onCheck}
            seemore={seemore.facility}
            onSeemore={() => onSeemore('facility')}
          />
        )}
        {hostLangList && (
          <CheckboxFilter
            title="호스트 언어"
            listName="hostLangList"
            list={hostLangList}
            filter={filter.hostLangList}
            onCheck={onCheck}
            seemore={seemore.hostLang}
            onSeemore={() => onSeemore('hostLang')}
          />
        )}
      </StFilterList>
      <StFooter align="space-between">
        <Button btnType="underlined" hover="background: none" onClick={onReset}>
          전체 삭제
        </Button>
        <Button
          btnType="color"
          color="black"
          hover="background: #000"
          padding="1.5rem 2rem"
          transition
          onClick={onSave}
        >
          숙소 결과 보기
        </Button>
      </StFooter>
    </StModal>
  );
};

const StModal = styled(Modal)`
  width: 720px;
  height: 92vh;
`;

const StFilterList = styled.ul`
  padding: 3rem 5rem 0;
  display: flex;
  flex-direction: column;
  max-height: calc(92vh - 144px);
  overflow: auto;

  & li:nth-last-child(1) {
    border: none;
  }
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 2rem 1.5rem 0.5rem;
`;

export default FilterModal;
