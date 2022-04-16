package org.multicampus.mlp.hostmode.house.repository;

import java.util.List;

import org.multicampus.mlp.hostmode.house.domain.Host_HouseDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



@Repository("host_houseDao")
public class Host_HouseDaoImpl implements Host_HouseDao{

	@Autowired
	SqlSessionTemplate sm;
	
	@Override
	public List<Host_HouseDto> getHost_houseList(Host_HouseDto dto) {
		return sm.selectList("Host_houseList", dto);
	}

	@Override
	public int getHost_houseTotalCnt(Host_HouseDto dto) {
		return sm.selectOne("getHost_houseTotal", dto);
	}

	@Override
	public Host_HouseDto getHost_houseView(long id) {
		return sm.selectOne("getHost_houseView",  id);
	}

}
