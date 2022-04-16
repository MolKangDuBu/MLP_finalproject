package org.multicampus.mlp.SearchResult.service;

import java.util.List;

import javax.annotation.Resource;

import org.multicampus.mlp.SearchResult.domain.BookingDto;
import org.multicampus.mlp.SearchResult.domain.FacilityDto;
import org.multicampus.mlp.SearchResult.domain.SearchResultDto;
import org.multicampus.mlp.SearchResult.repository.SearchResultDao;
import org.springframework.stereotype.Service;

@Service("searchresultService")
public class SearchResultServiceImpl implements SearchResultService{

	@Resource(name = "searchresultDao")
	SearchResultDao dao;

	@Override
	public List<SearchResultDto> getList(SearchResultDto dto) {
		// TODO Auto-generated method stub
		return dao.getList(dto);
	}

	@Override
	public int getTotalCnt(SearchResultDto dto) {
		// TODO Auto-generated method stub
		return dao.getTotalCnt(dto);
	}

	@Override
	public SearchResultDto getView(int id) {
		// TODO Auto-generated method stub
		return dao.getView(id);
	}

	@Override
	public void booking(BookingDto dto) {
		// TODO Auto-generated method stub
		dao.booking(dto);
	}

	@Override
	public int maxid() {
		// TODO Auto-generated method stub
		return dao.maxid();
	}

	@Override
	public List<String> getImage(int id) {
		// TODO Auto-generated method stub
		return dao.getImage(id);
	}

	@Override
	public List<FacilityDto> getFacility(int id) {
		// TODO Auto-generated method stub
		return dao.getFacility(id);
	}

	@Override
	public void schedule(BookingDto dto) {
		// TODO Auto-generated method stub
		dao.schedule(dto);
	}

	@Override
	public String getID(String email) {
		// TODO Auto-generated method stub
		return dao.getID(email);
	}

	@Override
	public void insertID(String email) {
		// TODO Auto-generated method stub
		dao.insertID(email);
	}
}
