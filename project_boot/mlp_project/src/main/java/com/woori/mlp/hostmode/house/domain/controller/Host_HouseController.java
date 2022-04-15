package com.woori.mlp.hostmode.house.domain.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woori.mlp.hostmode.house.domain.Host_HouseDto;
import com.woori.mlp.hostmode.house.service.Host_HouseService;

//http://localhost:9090/help/guideList
@CrossOrigin("*")
@RequestMapping("/host/house")
@RestController 
public class Host_HouseController {

	@Resource(name="host_houseService") 
	Host_HouseService houseService;
	
	@GetMapping(value="/list/{pg}")
	HashMap<String, Object> guideList(@PathVariable("pg")int pg, Host_HouseDto dto){
//		dto.setStart((pg-1)*dto.getPageSize());
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("list", houseService.getHost_houseList(dto));
		//map.put("totalCnt", houseService.getHost_houseTotalCnt(dto));
		map.put("totalCnt", "1000");
		return map;
	}
	
	@RequestMapping("/view/{id}")
	Host_HouseDto getView(@PathVariable("id")long id)
	{		
		return	houseService.getHost_houseView(id);
	}
}
