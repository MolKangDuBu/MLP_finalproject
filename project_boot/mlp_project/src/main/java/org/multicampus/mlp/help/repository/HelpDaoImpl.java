package org.multicampus.mlp.help.repository;

import java.util.List;

import org.multicampus.mlp.help.domain.HelpDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



@Repository("helpDao")
public class HelpDaoImpl implements HelpDao{

	@Autowired
	SqlSessionTemplate sm;
	
	@Override
	public List<HelpDto> getGuideList() {
		return sm.selectList("Help_startGuideList", null);
	}

	@Override
	public HelpDto getGuideView(int id) {
		
		return sm.selectOne("Help_getGuide", id);
	}

	@Override
	public void insert(HelpDto dto) {
		sm.insert("Help_insert", dto);
		
	}

	@Override
	public void updateHit(int id) {
		sm.update("Help_updateHit", id);
	}

	@Override
	public List<HelpDto> getHighLightList(HelpDto dto) {
		// TODO Auto-generated method stub
		return sm.selectList("Help_HighlightList", dto);
	}

}





