package org.multicampus.mlp.SearchResult.repository;

import java.util.ArrayList;
import java.util.List;

import org.multicampus.mlp.SearchResult.domain.BookingDto;
import org.multicampus.mlp.SearchResult.domain.FacilityDto;
import org.multicampus.mlp.SearchResult.domain.SearchResultDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("searchresultDao")
public class SearchResultDaoImpl implements SearchResultDao{

	
	List<SearchResultDto> list = new ArrayList<SearchResultDto>();
	
	@Autowired
	SqlSessionTemplate sm;

	@Override
	public List<SearchResultDto> getList(SearchResultDto dto) {
		// TODO Auto-generated method stub
		return sm.selectList("Search_list", dto);
	}

	@Override
	public int getTotalCnt(SearchResultDto dto) {
		// TODO Auto-generated method stub
		return sm.selectOne("Search_getTotal", dto);
	}

	@Override
	public SearchResultDto getView(int id) {
		// TODO Auto-generated method stub
		return sm.selectOne("Search_view", id);
	}
	
	public void booking(BookingDto dto) {
		sm.insert("Booking", dto);

	}

	
	@Override
	public int maxid() {
		// TODO Auto-generated method stub
		return sm.selectOne("checkmax_id");
	}

	@Override
	public List<String> getImage(int id) {
		// TODO Auto-generated method stub
		return sm.selectList("Search_image", id);
	}

	@Override
	public List<FacilityDto> getFacility(int id) {
		// TODO Auto-generated method stub
		return sm.selectList("Search_facility", id);
	}

	@Override
	public void schedule(BookingDto dto) {
		// TODO Auto-generated method stub
		sm.insert("Schedule", dto);
	}

	@Override
	public String getID(String email) {
		// TODO Auto-generated method stub
		return sm.selectOne("get_id", email);
	}

	@Override
	public void insertID(String email) {
		// TODO Auto-generated method stub
		sm.insert("insert_email", email);
	}
	
}
