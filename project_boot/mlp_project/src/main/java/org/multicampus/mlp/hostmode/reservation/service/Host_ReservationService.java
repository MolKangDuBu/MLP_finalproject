package org.multicampus.mlp.hostmode.reservation.service;

import java.util.List;

import org.multicampus.mlp.hostmode.reservation.domain.Host_ReservationDto;

public interface Host_ReservationService {
	List<Host_ReservationDto> getHost_reservationList(Host_ReservationDto dto);
	Host_ReservationDto getHost_reservationView(long id);
	int getHost_reservationTotalCnt(Host_ReservationDto dto);
}
