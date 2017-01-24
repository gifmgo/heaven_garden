package kr.or.com.member;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class memberService {

	@Autowired
	private SqlSession session;
	
	//아이디 중복확인
	public String checkId(String id){
		String result = "";
		try{
			
			memberDAO dao = session.getMapper(memberDAO.class);
			result = dao.checkId(id);
			System.out.println("result : "+result);
		}catch (Exception e) {
			e.toString();
		}
		return result;
	}
	
	//회원가입
	public int addmember(memberDTO dto){
		int result=0;
		try{
			memberDAO dao = session.getMapper(memberDAO.class);
			result =dao.addMember(dto);
		}catch (Exception e) {
			e.getMessage();
		}
		
		return result;
	}
}
