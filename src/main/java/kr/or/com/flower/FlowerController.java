package kr.or.com.flower;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FlowerController {

	@RequestMapping("/flower.do")
	public String flowerList(){
		System.out.println("컨트롤러 호출");
		return "flower.FlowerList";
	}
	
}
