package org.multicampus.mlp.help.repository;

import java.util.List;

import org.multicampus.mlp.help.domain.HelpDto;



public interface HelpDao {
	List<HelpDto> getGuideList();
	HelpDto getGuideView(int id);
	void insert(HelpDto dto); //데이터 등록
	
	void updateHit(int id); // 조회수 증가 
	List<HelpDto> getHighLightList(HelpDto dto);
	
}
