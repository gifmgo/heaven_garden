package kr.or.com.member;

public interface memberDAO {
 
	public String checkId(String id);
	
	public int addMember(memberDTO dto);
}
