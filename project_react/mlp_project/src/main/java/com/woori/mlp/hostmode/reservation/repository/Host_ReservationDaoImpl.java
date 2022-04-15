package com.woori.mlp.hostmode.reservation.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.woori.mlp.hostmode.reservation.domain.Host_ReservationDto;

@Repository("host_reservationDao")
public class Host_ReservationDaoImpl implements Host_ReservationDao{

	@Autowired
	SqlSessionTemplate sm;
	
	@Override
	public List<Host_ReservationDto> getHost_reservationList(Host_ReservationDto dto) {
		return sm.selectList("Host_reservationList", dto);
	}

	@Override
	public int getHost_reservationTotalCnt(Host_ReservationDto dto) {
		return sm.selectOne("getHost_reservationTotal", dto);
	}

	@Override
	public Host_ReservationDto getHost_reservationView(long id) {
		return sm.selectOne("getHost_reservationView",  id);
	}

}
