package kr.or.com.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Product {

	@Autowired
	private ProductService service;
	
	
	@RequestMapping("/productWrite.do")
	public String ProductWrite(String name){
		String page = "";
		page = service.chooseFunc(name);
		System.out.println("page !! "+page);		
		return page;
	}
	
	

	
}
