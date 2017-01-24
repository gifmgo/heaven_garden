/**
 * 
 */
	$(function(){
		$('#addMember').click(function(){
			$('#myModal').modal();
		});
		
		//아이디 중복검사버튼
		$('#checkIdBtn').click(function(){
			alert('중복검사');
			var id=$('#id').val();
		/*	$.ajax({
				url:"checkId.do",
				data:{
					id:id
				},
				success:function(data){
				
				}
			});*/
		});
		
		//회원가입 버튼 클릭시
		$('#addMemberBtn').click(function(){
			
		   if($('#id').val()==""){
				alert('아이디를 입력하세요');
				$('#id').focus();
				return false;
			}else if($('#pwd').val()==''){
				alert('비밀번호를 입력하세요');
				$('#pwd').focus();
				return false;
			}else if($('#name').val()==''){
				alert('이름를 입력하세요');
				$('#name').focus();
				return false;
			}else if($('#phone').val()==''){
				alert('연락처를 입력하세요');
				$('#phone').focus();
				return false;
			}else{
				return true;
			}
		});
	});
