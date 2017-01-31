package kr.or.com.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


@Controller
public class memberController {
 
	@Autowired
	private View jsonview;
	
	@Autowired
	private memberService memberservice;
	
 @RequestMapping("/checkId.do")
 public View checkId(String id, Model model){
	 
	 String msg="";
	 String result = memberservice.checkId(id);
	 if(result==null){
		 msg="사용할 수 있는 아이디입니다";
	 }else{
		 msg="이미 존재하는 아이디입니다";
	 }
	 model.addAttribute("msg", msg);
	 return jsonview;
 }
 
  @RequestMapping("/addMember.do")
  public View addMember(memberDTO dto, Model model){
	 
	  int result = memberservice.addmember(dto);
	  System.out.println("회원가입 결과 : "+result);
	  model.addAttribute("result", result);
	  return jsonview;
  }
	
}
