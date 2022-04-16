package org.multicampus.mlp.SearchResult.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;
@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class BookingDto {
	private int booking_id=0;
	private int  booking_price = 0;
	private char booking_status;
	private int booking_people = 0;
	private char booking_complete;
	private char booking_cancel;
	private int user_id =0;
	private String house_id = "";
	
	private String year ="";
	private String month = "";
	private String day ="";

	
	
	
	@Builder
	public BookingDto(int booking_price, char booking_status, int booking_people, char booking_complete,
			char booking_cancel, int user_id, String house_id, int booking_id) {
		super();
		this.booking_price = booking_price;
		this.booking_status = booking_status;
		this.booking_people = booking_people;
		this.booking_complete = booking_complete;
		this.booking_cancel = booking_cancel;
		this.user_id = user_id;
		this.house_id = house_id;
		this.booking_id =booking_id;
		

	}
	
	
	
	
}
