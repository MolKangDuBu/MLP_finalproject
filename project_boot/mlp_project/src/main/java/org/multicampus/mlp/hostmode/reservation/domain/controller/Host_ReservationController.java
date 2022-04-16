package org.multicampus.mlp.hostmode.reservation.domain.controller;

import java.util.HashMap;

import javax.annotation.Resource;

import org.multicampus.mlp.hostmode.reservation.domain.Host_ReservationDto;
import org.multicampus.mlp.hostmode.reservation.service.Host_ReservationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//http://localhost:9090/help/guideList
@CrossOrigin("*")
@RequestMapping("/host/reservation")
@RestController 
public class Host_ReservationController {

	@Resource(name="host_reservationService") 
	Host_ReservationService reservationService;
	
	@GetMapping(value="/list")
	HashMap<String, Object> guideList(Host_ReservationDto dto){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("list", reservationService.getHost_reservationList(dto));
		map.put("totalCnt", "10");
		return map;
	}

	@RequestMapping("/view/{id}")
	Host_ReservationDto getView(@PathVariable("id")long id)
	{		
		return	reservationService.getHost_reservationView(id);
	}
}
