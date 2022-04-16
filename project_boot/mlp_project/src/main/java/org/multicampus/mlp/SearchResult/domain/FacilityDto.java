package org.multicampus.mlp.SearchResult.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class FacilityDto {

	private int facility_id =0;
	private String facility_name = "";
	private String facility_contents = "";
	
	
	@Builder
	public FacilityDto(int facility_id, String facility_name, String facility_contents) {
		super();
		this.facility_id = facility_id;
		this.facility_name = facility_name;
		this.facility_contents = facility_contents;
	}
	
	
	
}
