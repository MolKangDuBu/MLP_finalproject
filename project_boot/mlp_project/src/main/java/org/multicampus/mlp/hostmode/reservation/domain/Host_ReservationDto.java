package org.multicampus.mlp.hostmode.reservation.domain;

import org.multicampus.mlp.common.BaseDto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter 
@NoArgsConstructor(access=AccessLevel.PUBLIC)
public class Host_ReservationDto extends BaseDto{
	private String booking_id="";
	private String booking_price="";
	private String booking_status="";
	private String booking_people="";
	private String booking_complete="";
	private String booking_cancel="";
	private String booking_create="";
	private String booking_update="";
	private String user_id="";
	private String house_id="";
	private String house_name="";
	private String user_name="";
	private String images_thumbnail="";
	private String user_email= "";
	
	public Host_ReservationDto(String booking_id, String booking_price, String booking_status, String booking_people,
			String booking_complete, String booking_cancel, String booking_create, String booking_update,
			String user_id, String house_id, String house_name, String user_name, String images_thumbnail) {
		super();
		this.booking_id = booking_id;
		this.booking_price = booking_price;
		this.booking_status = booking_status;
		this.booking_people = booking_people;
		this.booking_complete = booking_complete;
		this.booking_cancel = booking_cancel;
		this.booking_create = booking_create;
		this.booking_update = booking_update;
		this.user_id = user_id;
		this.house_id = house_id;
		this.house_name = house_name;
		this.user_name = user_name;
		this.images_thumbnail = images_thumbnail;

	}
	
}










