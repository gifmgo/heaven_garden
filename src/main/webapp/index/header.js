/**
 * 
 */
	$(function(){
		
		var checkId=0;
			
		$('#addMember').click(function(){
			$('#myModal').modal();
		});
		
		//아이디 중복검사버튼
		$('#checkIdBtn').click(function(){
			
			var id=$('#id').val();
			$.ajax({
				url:"checkId.do",
				data:{
					id:id
				},
				success:function(data){
					if(data.msg=='사용할 수 있는 아이디입니다'){
						checkId=1;
					}
				 alert(data.msg);
				 
				}
			});
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
			}else if(checkId==0){
				alert('아이디 중복검사를 해주세요');
				return false;
			}else{
				return true;
			}
		});
	});
