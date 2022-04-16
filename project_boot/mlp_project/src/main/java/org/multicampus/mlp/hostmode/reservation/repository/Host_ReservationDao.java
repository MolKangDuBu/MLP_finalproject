package org.multicampus.mlp.hostmode.reservation.repository;

import java.util.List;

import org.multicampus.mlp.hostmode.reservation.domain.Host_ReservationDto;

public interface Host_ReservationDao {
	List<Host_ReservationDto> getHost_reservationList(Host_ReservationDto dto);
	int getHost_reservationTotalCnt(Host_ReservationDto dto);
	Host_ReservationDto getHost_reservationView(long id);
}
