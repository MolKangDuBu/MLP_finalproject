package org.multicampus.mlp.hostmode.house.service;

import java.util.List;

import org.multicampus.mlp.hostmode.house.domain.Host_HouseDto;

public interface Host_HouseService {
	List<Host_HouseDto> getHost_houseList(Host_HouseDto dto);
	Host_HouseDto getHost_houseView(long id);
	int getHost_houseTotalCnt(Host_HouseDto dto);
}
