package com.woori.mlp.help.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.woori.mlp.help.domain.HelpDto;

@Repository("helpDao")
public class HelpDaoImpl implements HelpDao{

	@Autowired
	SqlSessionTemplate sm;
	
	@Override
	public List<HelpDto> getGuideList() {
		return sm.selectList("Help_startGuideList", null);
	}

}
