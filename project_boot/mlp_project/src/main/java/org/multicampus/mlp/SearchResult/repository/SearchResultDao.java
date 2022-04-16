package org.multicampus.mlp.SearchResult.repository;

import java.util.List;

import org.multicampus.mlp.SearchResult.domain.BookingDto;
import org.multicampus.mlp.SearchResult.domain.FacilityDto;
import org.multicampus.mlp.SearchResult.domain.SearchResultDto;

public interface SearchResultDao {
	List<SearchResultDto> getList(SearchResultDto dto);
	int getTotalCnt(SearchResultDto dto);
	SearchResultDto getView(int id);
	
	public void booking(BookingDto dto);
	public void schedule(BookingDto dto);
	public int maxid();
	public List<String> getImage(int id);
	public List<FacilityDto>getFacility(int id);
	
	public String getID(String email);
	public void insertID(String email);
	
}
