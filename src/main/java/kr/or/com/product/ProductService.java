package kr.or.com.product;

import org.springframework.stereotype.Service;

@Service
public class ProductService {

	
	//상품 글쓰기 할때 판별하는 것 
	public String chooseFunc(String name){
		String result = "";
		switch (name) {
		case "flower":
			result = "flower.FlowerWrite";
			break;

		default:
			break;
		}
		return result;
	}
	
}
