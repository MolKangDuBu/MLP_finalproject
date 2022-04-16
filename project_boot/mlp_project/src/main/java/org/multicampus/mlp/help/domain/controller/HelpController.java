package org.multicampus.mlp.help.domain.controller;

import java.io.IOException;
import java.util.HashMap;

import org.multicampus.mlp.common.FileUploadUtil;
import org.multicampus.mlp.help.domain.HelpDto;
import org.multicampus.mlp.help.service.HelpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


//http://localhost:9090/help/guideList
@CrossOrigin("*")
@RequestMapping("/help")
@RestController 
public class HelpController {
	
	@Value("${fileUploadPath}")  //src/main/resources/application.properies 의 값을 읽어온다 
	String fileUploadPath;
	
	@Value("${domain}")
	String domain;

	@Autowired 
	HelpService service;
	
	@GetMapping(value="/guideList")
	HashMap<String, Object> guideList(HelpDto dto){
		
		System.out.println("****"+ dto.getKeyword());
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("guideList", service.getGuideList());
		map.put("highLightList", service.getHighLightList(dto));
			
		return map;
	}
	
	@GetMapping(value="/view/{id}")
	HelpDto guideView(@PathVariable("id")int id)
	{
		return service.getGuideView(id);
	}
	
	//디비에 데이터 저장하기 - JSON 형태로 받아온다 
	//파일을 전송해야 하는 경우가 있고  -  form 태그에 enctype="multipart/form-data"
	//FormData 라는 객체를 통해서 정보를 보내고 
	//서버에서는 MultipartFile 객체를 사용해서 파일 수신을 한다 
	//postman body - form-data  파일전송시 사용한다. 
	
	//jsp대신에 react가 처리 react 가 보낸값을 디비에 넣기만 하면된다.
	//MultipartFile file_image (키값)
	@PostMapping(value="/save")   // /help/save
	HashMap<String, String> save( MultipartFile file_image, HelpDto dto)
	{
		String uploadDir = fileUploadPath+ "/image";
		HashMap<String, String> map =new HashMap<String, String>();
		String filename="";
		
		try {
			filename= FileUploadUtil.upload(uploadDir, file_image);
		
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		dto.setCenter_image(domain +"/"+ uploadDir + "/"+ filename);
		dto.setImage_name(filename);
		
		service.insert(dto);
		
		map.put("result", "success");
		return map;
	}
	
	
	//파일 전송을 할필요가 없을 경우에 - 그냥 JSON 
	// {title:"제목", contents:"내용"}   이렇게 해서 보내면 된다. 
	//postman 에서는 body 태그에 x-www-form-urlencoded  를 선택해서 키와 값을 보낸다 
	
	
}








