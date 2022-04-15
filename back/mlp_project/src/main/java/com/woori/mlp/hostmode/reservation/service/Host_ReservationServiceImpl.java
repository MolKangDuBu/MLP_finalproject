package com.woori.mlp.hostmode.reservation.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.woori.mlp.hostmode.reservation.domain.Host_ReservationDto;
import com.woori.mlp.hostmode.reservation.repository.Host_ReservationDao;

@Service("host_reservationService")
public class Host_ReservationServiceImpl implements Host_ReservationService{

	@Resource(name="host_reservationDao")
	Host_ReservationDao dao;
	
	@Override
	public List<Host_ReservationDto> getHost_reservationList(Host_ReservationDto dto) {
		
		return dao.getHost_reservationList(dto);
	}

	@Override
	public Host_ReservationDto getHost_reservationView(long id) {
		return dao.getHost_reservationView(id);
	}

	@Override
	public int getHost_reservationTotalCnt(Host_ReservationDto dto) {
		return dao.getHost_reservationTotalCnt(dto);
	}

}
