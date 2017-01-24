package kr.or.com.flower;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FlowerController {

	
	//꽃 부분 리스트 뿌려주는거
	@RequestMapping("/flower.do")
	public String flowerList(){
		System.out.println("컨트롤러 호출");
		return "flower.FlowerList";
	}
	
	//꽃 제품 상세보기
	@RequestMapping("/flowerDetail.do")
	public String flowerDetail(String seq){
		System.out.println("넘어온 시퀀스 번호 : "+seq);
		return "flower.FlowerDetail";
	}
	
}
