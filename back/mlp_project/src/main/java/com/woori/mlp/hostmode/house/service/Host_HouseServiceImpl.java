package com.woori.mlp.hostmode.house.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.woori.mlp.hostmode.house.domain.Host_HouseDto;
import com.woori.mlp.hostmode.house.repository.Host_HouseDao;

@Service("host_houseService")
public class Host_HouseServiceImpl implements Host_HouseService{

	@Resource(name="host_houseDao")
	Host_HouseDao dao;
	
	@Override
	public List<Host_HouseDto> getHost_houseList(Host_HouseDto dto) {
		
		return dao.getHost_houseList(dto);
	}

	@Override
	public Host_HouseDto getHost_houseView(long id) {
		return dao.getHost_houseView(id);
	}

	@Override
	public int getHost_houseTotalCnt(Host_HouseDto dto) {
		return dao.getHost_houseTotalCnt(dto);
	}

}
