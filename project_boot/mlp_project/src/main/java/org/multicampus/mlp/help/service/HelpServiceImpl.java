package org.multicampus.mlp.help.service;

import java.util.List;

import org.multicampus.mlp.help.domain.HelpDto;
import org.multicampus.mlp.help.repository.HelpDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service("helpService")
public class HelpServiceImpl implements HelpService{

	@Autowired 
	HelpDao dao;
	
	@Override
	public List<HelpDto> getGuideList() {
		
		return dao.getGuideList();
	}

	@Override
	public HelpDto getGuideView(int id) {
		
		dao.updateHit(id); //보기할때 조회수가 증가해야 한다 
		return dao.getGuideView(id);
	}

	@Override
	public void insert(HelpDto dto) {
		dao.insert(dto);
	}

	@Override
	public void updateHit(int id) {
		
	}

	@Override
	public List<HelpDto> getHighLightList(HelpDto dto) {
		// TODO Auto-generated method stub
		return dao.getHighLightList(dto);
	}

}







