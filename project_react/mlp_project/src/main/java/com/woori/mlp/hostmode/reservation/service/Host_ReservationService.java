package com.woori.mlp.hostmode.reservation.service;

import java.util.List;

import com.woori.mlp.hostmode.reservation.domain.Host_ReservationDto;

public interface Host_ReservationService {
	List<Host_ReservationDto> getHost_reservationList(Host_ReservationDto dto);
	Host_ReservationDto getHost_reservationView(long id);
	int getHost_reservationTotalCnt(Host_ReservationDto dto);
}
