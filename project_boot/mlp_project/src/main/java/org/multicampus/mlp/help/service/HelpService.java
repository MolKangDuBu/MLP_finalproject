package org.multicampus.mlp.help.service;

import java.util.List;

import org.multicampus.mlp.help.domain.HelpDto;



public interface HelpService {
	List<HelpDto> getGuideList();
	HelpDto getGuideView(int id);
	void insert(HelpDto dto);
	void updateHit(int id);
	List<HelpDto> getHighLightList(HelpDto dto);
}
