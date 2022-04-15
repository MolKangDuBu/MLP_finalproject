package com.woori.mlp.help.repository;

import java.util.List;

import com.woori.mlp.help.domain.HelpDto;

public interface HelpDao {
	List<HelpDto> getGuideList();
}
