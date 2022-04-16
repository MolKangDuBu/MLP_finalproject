package org.multicampus.mlp.house;

import java.util.List;

public interface HouseDao {
	List<HouseDto> getList(HouseDto dto);
	void insert(HouseDto dto);
	void image_insert(HouseImageDto dto);

}
