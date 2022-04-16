package org.multicampus.mlp.SearchResult.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class SearchResultDto {
	private String house_id = "";
	private String house_name = "";
	private String house_contents="";
	private int house_guest = 0;
	private int house_bed  =0;
	private int house_bedroom = 0;
	private int house_bathroom = 0;
	private String house_address1 = "";
	private String house_address2 = "";
	private int house_pay  =0;
	private String user_id = "";
	private String images_thumbnail = "";
	
	@Builder
	public SearchResultDto(String house_id, String house_name, String house_contents, int house_guest, int house_bed,
			int house_bathroom, String house_address1, String house_address2, int house_pay, String user_id, int house_bedroom) {
		super();
		this.house_id = house_id;
		this.house_name = house_name;
		this.house_contents = house_contents;
		this.house_guest = house_guest;
		this.house_bed = house_bed;
		this.house_bathroom = house_bathroom;
		this.house_address1 = house_address1;
		this.house_address2 = house_address2;
		this.house_pay = house_pay;
		this.user_id = user_id;
		this.house_bedroom = house_bedroom;
	}
	
	

}
