package org.multicampus.mlp.house;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("houseService")
public class HouseServiceImpl implements HouseService{
	
	@Resource(name="houseDao")
	HouseDao dao;
	
	@Override
	public List<HouseDto> getList(HouseDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void insert(HouseDto dto) {
		dao.insert(dto);
	}
	

	@Override
	public void image_insert(HouseImageDto dto) {
		dao.image_insert(dto);
		
	}
}
