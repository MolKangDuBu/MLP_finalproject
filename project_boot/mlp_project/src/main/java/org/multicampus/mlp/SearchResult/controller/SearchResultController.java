package org.multicampus.mlp.SearchResult.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.json.simple.JSONObject;
import org.multicampus.mlp.SearchResult.domain.BookingDto;
import org.multicampus.mlp.SearchResult.domain.SearchResultDto;
import org.multicampus.mlp.SearchResult.service.SearchResultService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*") //http:127.0.0.1 혹占쏙옙 localhost
@RestController
public class SearchResultController {
	@Value("${fileUploadPath}") //src/main/resources/application.properies 占쏙옙 占쏙옙占쏙옙 占싻억옙占�
	String fileUploadPath;
	
	@Value("${domain}")
	String domain;
	
	@Resource(name="searchresultService")
	SearchResultService Service;
	
	@RequestMapping("/search") 
	public HashMap<String, Object> SearchResult(SearchResultDto dto,@RequestBody Map<String, Object> params) {
		System.out.println(params);
		System.out.println();
		System.out.println("aaaaaaaaaaaaaa");
		JSONObject json = new JSONObject(params);
		JSONObject data = new JSONObject((Map) json.get("params"));
		dto.setHouse_bedroom(Integer.parseInt(String.valueOf(data.get("room"))) );
		dto.setHouse_address1((String) data.get("address"));
		dto.setHouse_guest(Integer.parseInt(String.valueOf(data.get("guest"))));
		

		HashMap<String, Object>map = new HashMap<String, Object>();
		
		map.put("list",Service.getList(dto));
		map.put("totalCnt", Service.getTotalCnt(dto));
		
		System.out.println(Service.getList(dto));
		return map;
	}
	
	
	@RequestMapping("/search/image/{id}")
	public HashMap<String, Object> SearchImage(@PathVariable("id")int id){
		HashMap<String, Object>map = new HashMap<String, Object>();
		System.out.println("image : "+id);
		map.put("list", Service.getImage(id));
		System.out.println(Service.getImage(id));
		
		return map;
	}
	
	
	@RequestMapping("/search/facility/{id}")
	public HashMap<String, Object> SearchFacility(@PathVariable("id")int id){
		HashMap<String, Object>map = new HashMap<String, Object>();
		System.out.println("facility : "+id);
		map.put("list", Service.getFacility(id));
		
		return map;
	}
	
	
	@RequestMapping("/search/view/{id}")
	public HashMap<String, Object> getview(@PathVariable("id")int id) {
		HashMap<String, Object>map = new HashMap<String, Object>();
		System.out.println(id);
		map.put("list", Service.getView(id));
		return map;
	}
	
	@RequestMapping("/search/booking")
	public HashMap<String, Object> booking (@RequestBody Map<String, Object>params){
		HashMap<String, Object>map = new HashMap<String, Object>();
		JSONObject json = new JSONObject(params);
		JSONObject data = new JSONObject((Map) json.get("params"));
		
		
		String start = (String)data.get("start");
		String arr_start[] = start.split("[.]");
		
		String last = (String)data.get("last");
		String arr_last[]= last.split("[.]");
		
		
		
		
		BookingDto s_dto = new BookingDto();
		BookingDto l_dto = new BookingDto();
		System.out.println("id "+data.get("user"));
		System.out.println("guest "+data.get("guest"));
		s_dto.setUser_id(Integer.parseInt(String.valueOf( data.get("user"))));
		l_dto.setUser_id(Integer.parseInt(String.valueOf( data.get("user"))));
		
		s_dto.setBooking_people(Integer.parseInt(String.valueOf( data.get("guest"))));
		l_dto.setBooking_people(Integer.parseInt(String.valueOf( data.get("guest"))));
		
		
		s_dto.setBooking_price((int) data.get("pay"));
		l_dto.setBooking_price((int) data.get("pay"));
		
		s_dto.setHouse_id((String)data.get("house_id"));
		l_dto.setHouse_id((String)data.get("house_id"));
		
		System.out.println((String)data.get("house_id"));
		
		s_dto.setYear(arr_start[0]);
		s_dto.setMonth(arr_start[1]);
		s_dto.setDay(arr_start[2]);
		
		l_dto.setYear(arr_last[0]);
		l_dto.setMonth(arr_last[1]);
		l_dto.setDay(arr_last[2]);
		
		
		Service.booking(s_dto);
		s_dto.setBooking_id(Service.maxid());
		l_dto.setBooking_id(Service.maxid());
		
		Service.schedule(s_dto);
		Service.schedule(l_dto);
		
		map.put("result", "success");
		
		return map;
	}
	
	@RequestMapping("/signup/{email}")
	public HashMap<String, Object> getID(@PathVariable("email")String email) {
		HashMap<String, Object>map = new HashMap<String, Object>();
		System.out.println(email);
		System.out.println(Service.getID(email));
		if(Service.getID(email)!=null) {
			map.put("result",Service.getID(email));
		}else {
			Service.insertID(email);
			map.put("result",Service.getID(email));
		}
		
		
		return map;
	}
}
