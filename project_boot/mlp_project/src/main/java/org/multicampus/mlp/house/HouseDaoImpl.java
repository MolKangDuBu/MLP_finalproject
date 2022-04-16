package org.multicampus.mlp.house;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("houseDao")
public class HouseDaoImpl implements HouseDao{
	
	List<HouseDto> list = new ArrayList<HouseDto>();
	
	
	
		@Autowired
		SqlSessionTemplate sm;
		
		@Override
		public List<HouseDto> getList(HouseDto dto) {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public void insert(HouseDto dto) {
			sm.insert("House_insert", dto);
		}
		

		@Override
		public void image_insert(HouseImageDto dto) {
			sm.insert("House_image_insert", dto);
			
		}

}
