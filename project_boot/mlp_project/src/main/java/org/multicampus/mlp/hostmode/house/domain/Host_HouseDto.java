package org.multicampus.mlp.hostmode.house.domain;



import org.multicampus.mlp.common.BaseDto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter 
@NoArgsConstructor(access=AccessLevel.PUBLIC)
public class Host_HouseDto extends BaseDto{
	private String house_id="";
	private String house_name="";
	private String house_contents="";
	private String house_guest="";
	private String house_bed="";
	private String house_bedroom="";
	private String house_bathroom="";
	private String house_address1="";
	private String house_address2="";
	private String house_pay="";
	private String house_active="";
	private String house_create="";
	private String house_update="";
	private String user_id="";
	private String images_thumbnail="";
	
	public Host_HouseDto(String house_id, String house_name, String house_contents, String house_guest,
			String house_bed, String house_bedroom, String house_bathroom, String house_address1, String house_address2,
			String house_pay, String house_active, String house_create, String house_update, String user_id,
			String images_thumbnail) {
		super();
		this.house_id = house_id;
		this.house_name = house_name;
		this.house_contents = house_contents;
		this.house_guest = house_guest;
		this.house_bed = house_bed;
		this.house_bedroom = house_bedroom;
		this.house_bathroom = house_bathroom;
		this.house_address1 = house_address1;
		this.house_address2 = house_address2;
		this.house_pay = house_pay;
		this.house_active = house_active;
		this.house_create = house_create;
		this.house_update = house_update;
		this.user_id = user_id;
		this.images_thumbnail = images_thumbnail;
	}
	
	
}










