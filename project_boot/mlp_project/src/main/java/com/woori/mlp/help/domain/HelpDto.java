package com.woori.mlp.help.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AccessLevel;

@Setter
@Getter 
@NoArgsConstructor(access=AccessLevel.PUBLIC)
public class HelpDto {
	private String center_id="";
	private String center_image="";
	private String center_title="";
	private String center_contents="";
	private String center_create="";
	private String hit="";
	
	public HelpDto(String center_id, String center_image, String center_title, String center_contents) {
		super();
		this.center_id = center_id;
		this.center_image = center_image;
		this.center_title = center_title;
		this.center_contents = center_contents;
		
	}

	
	
}










