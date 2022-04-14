package com.example.demo.house;

import com.example.demo.common.BaseDto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor(access=AccessLevel.PUBLIC)
public class HouseDto extends BaseDto{
	
	private String HOUSE_ID ="";
	private String HOUSE_NAME="";
	private String HOUSE_CONTENTS="";
	private String HOUSE_GUEST="";
	private String HOUSE_BED="";
	private String HOUSE_BATHROOM="";
	private String HOUSE_BEDROOM="";
	private String HOUSE_ADDRESS1="";
	private String HOUSE_ADDRESS2="";
	private String HOUSE_PAY="";
	private String HOUSE_ACTIVE="Y";
	private String HOUSE_CREATE="";
	private String HOUSE_UPDATE="";
	
	
@Builder
public HouseDto(String HOUSE_ID, String HOUSE_NAME, String HOUSE_CONTENTS, String HOUSE_GUEST
		,String HOUSE_BED,String HOUSE_BEDROOM,String HOUSE_BATHROOM
		,String HOUSE_ADDRESS1,String HOUSE_ADDRESS2,String HOUSE_PAY, String HOUSE_ACTIVE,
		String HOUSE_CREATE,String HOUSE_UPDATE) {
	super();
	this.HOUSE_ID = HOUSE_ID;
	this.HOUSE_NAME = HOUSE_NAME;
	this.HOUSE_CONTENTS = HOUSE_CONTENTS;
	this.HOUSE_GUEST = HOUSE_GUEST;
	this.HOUSE_BED = HOUSE_BED;
	this.HOUSE_BEDROOM = HOUSE_BEDROOM;
	this.HOUSE_BATHROOM = HOUSE_BATHROOM;
	this.HOUSE_ADDRESS1 = HOUSE_ADDRESS1;
	this.HOUSE_PAY = HOUSE_PAY;
	this.HOUSE_ACTIVE = HOUSE_ACTIVE;
	this.HOUSE_CREATE = HOUSE_CREATE;
	this.HOUSE_UPDATE = HOUSE_UPDATE;
		
	}
	
}

