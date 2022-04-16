package org.multicampus.mlp.help.domain;

import org.multicampus.mlp.common.BaseDto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter 
@NoArgsConstructor(access=AccessLevel.PUBLIC)
public class HelpDto extends BaseDto{
	private String center_id="";
	private String center_image="";
	private String center_title="";
	private String center_contents="";
	private String center_create="";
	private String hit="";
	private String image_name="";
	private String center_category="1";
	
	public HelpDto(String center_id, String center_image, String center_title, String center_contents, 
			String image_name, String center_category) {
		super();
		this.center_id = center_id;
		this.center_image = center_image;
		this.center_title = center_title;
		this.center_contents = center_contents;
		this.image_name=image_name;
		this.center_category=center_category;
	}

}










